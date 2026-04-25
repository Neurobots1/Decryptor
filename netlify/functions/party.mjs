import { getStore } from "@netlify/blobs";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });

function makeCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from(crypto.getRandomValues(new Uint8Array(6)))
    .map((b) => chars[b % chars.length])
    .join("");
}

const mergeEntries = (existing = [], incoming = [], deleted = new Set()) => {
  const map = new Map(existing.filter(e => !deleted.has(e.timestamp)).map(e => [e.timestamp, e]));
  for (const e of incoming) {
    if (e && e.timestamp && !deleted.has(e.timestamp) && !map.has(e.timestamp)) {
      map.set(e.timestamp, e);
    }
  }
  return Array.from(map.values());
};

export default async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });

  const store = getStore({ name: "parties", consistency: "strong" });
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  try {
    // POST — create party
    if (req.method === "POST") {
      const body = await req.json();
      const newCode = makeCode();
      const party = {
        members: [body.memberId].filter(Boolean),
        matches: body.matches || [],
        pits: body.pits || [],
        deleted: [], // tombstone timestamps — entries here never come back
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      await store.setJSON(newCode, party);
      return json({ code: newCode, ...party }, 201);
    }

    if (!code) return json({ error: "Missing ?code=" }, 400);

    // GET — poll
    if (req.method === "GET") {
      const data = await store.get(code, { type: "json" });
      if (!data) return json({ error: "Party not found" }, 404);
      return json(data);
    }

    // PATCH — push new entries (any member)
    if (req.method === "PATCH") {
      const existing = await store.get(code, { type: "json" });
      if (!existing) return json({ error: "Party not found" }, 404);
      const body = await req.json();
      const deleted = new Set(existing.deleted || []);
      const members = existing.members || [];
      if (body.memberId && !members.includes(body.memberId)) members.push(body.memberId);
      const updated = {
        ...existing,
        matches: mergeEntries(existing.matches, body.matches || [], deleted),
        pits: mergeEntries(existing.pits, body.pits || [], deleted),
        members,
        updatedAt: Date.now(),
      };
      await store.setJSON(code, updated);
      return json(updated);
    }

    // DELETE — delete specific entry by timestamp (any member)
    if (req.method === "DELETE") {
      const existing = await store.get(code, { type: "json" });
      if (!existing) return json({ error: "Party not found" }, 404);
      const body = await req.json();
      const { timestamp } = body; // timestamp of entry to delete
      if (!timestamp) return json({ error: "Missing timestamp" }, 400);
      const deleted = [...new Set([...(existing.deleted || []), timestamp])];
      const updated = {
        ...existing,
        matches: (existing.matches || []).filter(e => e.timestamp !== timestamp),
        pits: (existing.pits || []).filter(e => e.timestamp !== timestamp),
        deleted,
        updatedAt: Date.now(),
      };
      await store.setJSON(code, updated);
      return json(updated);
    }

  } catch (err) {
    return json({ error: err.message }, 500);
  }
};

export const config = { path: "/party" };
