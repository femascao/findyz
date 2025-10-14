"use client";

import { useEffect, useState } from "react";
import { useUser, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function ProfilePage() {
  const { user, isLoaded } = useUser();
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    displayName: "",
    headline: "",
    bio: "",
    location: "",
    sectors: "",
    regions: "",
    sizeMin: "",
    sizeMax: "",
    public: true,
  });
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    if (!isLoaded) return;
    (async () => {
      try {
        const res = await fetch("/api/profile");
        if (res.ok) {
          const data = await res.json();
          if (data) {
            setForm({
              displayName: data.displayName || "",
              headline: data.headline || "",
              bio: data.bio || "",
              location: data.location || "",
              sectors: (data.sectors || []).join(", "),
              regions: (data.regions || []).join(", "),
              sizeMin: data.sizeMin ?? "",
              sizeMax: data.sizeMax ?? "",
              public: data.public ?? true,
            });
          }
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [isLoaded]);

  async function onSubmit(e) {
    e.preventDefault();
    setMsg(null);

    const payload = {
      ...form,
      sectors: form.sectors
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      regions: form.regions
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      sizeMin: form.sizeMin ? Number(form.sizeMin) : null,
      sizeMax: form.sizeMax ? Number(form.sizeMax) : null,
    };

    const res = await fetch("/api/profile", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) setMsg("Perfil guardado!");
    else setMsg("Erro ao guardar perfil.");
  }

  if (!isLoaded) return null;

  return (
    <div className="mx-auto max-w-3xl p-6">
      <SignedOut>
        <div className="rounded border p-6 text-center">
          <p>Precisa iniciar sessão para aceder ao perfil.</p>
          <div className="mt-3">
            <SignInButton mode="modal">
              <button className="rounded bg-[#3448C5] px-4 py-2 text-white">
                Entrar
              </button>
            </SignInButton>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <h1 className="mb-4 text-2xl font-bold">Meu Perfil</h1>

        {loading ? (
          <p>A carregar...</p>
        ) : (
          <form className="space-y-4" onSubmit={onSubmit}>
            <input
              className="w-full rounded border p-2"
              placeholder="Nome a exibir"
              value={form.displayName}
              onChange={(e) =>
                setForm({ ...form, displayName: e.target.value })
              }
            />
            <input
              className="w-full rounded border p-2"
              placeholder="Headline (ex.: Empreendedor SaaS em Lisboa)"
              value={form.headline}
              onChange={(e) => setForm({ ...form, headline: e.target.value })}
            />
            <textarea
              className="w-full rounded border p-2"
              rows={4}
              placeholder="Bio"
              value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
            />
            <input
              className="w-full rounded border p-2"
              placeholder="Localização (ex.: Lisboa)"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />

            <div className="grid gap-3 md:grid-cols-2">
              <input
                className="w-full rounded border p-2"
                placeholder="Setores (ex.: SaaS, Restaurantes)"
                value={form.sectors}
                onChange={(e) => setForm({ ...form, sectors: e.target.value })}
              />
              <input
                className="w-full rounded border p-2"
                placeholder="Regiões (ex.: Lisboa, Porto)"
                value={form.regions}
                onChange={(e) => setForm({ ...form, regions: e.target.value })}
              />
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <input
                type="number"
                className="w-full rounded border p-2"
                placeholder="Tamanho mínimo (receita €)"
                value={form.sizeMin}
                onChange={(e) => setForm({ ...form, sizeMin: e.target.value })}
              />
              <input
                type="number"
                className="w-full rounded border p-2"
                placeholder="Tamanho máximo (receita €)"
                value={form.sizeMax}
                onChange={(e) => setForm({ ...form, sizeMax: e.target.value })}
              />
            </div>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.public}
                onChange={(e) => setForm({ ...form, public: e.target.checked })}
              />
              Perfil público
            </label>

            <button className="rounded bg-[#3448C5] px-4 py-2 text-white">
              Guardar
            </button>

            {msg && <p className="text-sm">{msg}</p>}
          </form>
        )}
      </SignedIn>
    </div>
  );
}
