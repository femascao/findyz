"use client";

import { useState } from "react";

export default function AdminInterestsPage() {
  const [token, setToken] = useState("");
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  async function load() {
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch("/api/admin/interests", {
        headers: { "x-admin-token": token },
      });
      const ct = res.headers.get("content-type") || "";
      if (!ct.includes("application/json")) {
        const text = await res.text();
        throw new Error(
          `HTTP ${res.status} ${res.statusText} — ${text.slice(0, 200)}`,
        );
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
      setRows(data);
    } catch (e) {
      setErr(e.message);
      setRows([]);
    } finally {
      setLoading(false);
    }
  }

  function toCSV() {
    const cols = ["createdAt", "email", "name", "phone", "interest", "message"];
    const header = cols.join(",");
    const body = rows
      .map((r) =>
        cols
          .map((c) => {
            const v = r[c] ?? "";
            const s = String(v).replaceAll('"', '""').replaceAll("\n", " ");
            return `"${s}"`;
          })
          .join(","),
      )
      .join("\n");
    const csv = header + "\n" + body;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "interesses.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Interesses (Admin)</h1>

      <div className="mb-4 flex items-center gap-2">
        <input
          type="password"
          placeholder="ADMIN_TOKEN"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="w-full max-w-sm rounded border p-2"
        />
        <button
          onClick={load}
          disabled={loading || !token}
          className="rounded bg-black px-4 py-2 text-white disabled:opacity-60"
        >
          {loading ? "Carregando..." : "Carregar"}
        </button>
        <button
          onClick={toCSV}
          disabled={!rows.length}
          className="rounded px-4 py-2 ring-1 ring-black/20 disabled:opacity-60"
        >
          Exportar CSV
        </button>
      </div>

      {err && <p className="mb-2 text-red-600">{err}</p>}

      <div className="overflow-auto rounded border">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-2 text-left">Data</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Nome</th>
              <th className="p-2 text-left">Telefone</th>
              <th className="p-2 text-left">Interesse</th>
              <th className="p-2 text-left">Mensagem</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="p-2">
                  {new Date(r.createdAt).toLocaleString("pt-PT")}
                </td>
                <td className="p-2">{r.email}</td>
                <td className="p-2">{r.name || "-"}</td>
                <td className="p-2">{r.phone || "-"}</td>
                <td className="p-2">{r.interest}</td>
                <td className="whitespace-pre-wrap p-2">{r.message || "-"}</td>
              </tr>
            ))}
            {!rows.length && !err && (
              <tr>
                <td className="p-3 italic text-gray-500" colSpan={6}>
                  Sem registos.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
