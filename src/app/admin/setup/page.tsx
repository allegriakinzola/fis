"use client";

import { useState } from "react";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { UserPlus } from "lucide-react";

export default function AdminSetupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signUp.email({
      name,
      email,
      password,
    });

    if (result.error) {
      setError(result.error.message || "Erreur lors de la création du compte");
      setLoading(false);
    } else {
      setSuccess(true);
      setTimeout(() => router.push("/admin"), 1500);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--secondary)] px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--navy)] text-sm font-bold text-[var(--gold)]">
            FIS
          </div>
          <h1 className="mt-4 text-2xl font-bold text-[var(--navy)]">
            Configuration initiale
          </h1>
          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
            Créez le premier compte administrateur du FIS-RDC
          </p>
        </div>

        {success ? (
          <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
            <p className="font-medium text-green-700">
              Compte créé avec succès !
            </p>
            <p className="mt-1 text-sm text-green-600">
              Redirection vers l&apos;administration...
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-[var(--border)] bg-white p-6 shadow-sm"
          >
            {error && (
              <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-[var(--navy)]"
                >
                  Nom complet
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Administrateur FIS-RDC"
                  required
                  className="w-full rounded-md border border-[var(--border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-[var(--navy)]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@fisrdc.gouv.cd"
                  required
                  className="w-full rounded-md border border-[var(--border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)]"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-sm font-medium text-[var(--navy)]"
                >
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 caractères"
                  required
                  minLength={8}
                  className="w-full rounded-md border border-[var(--border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--navy-light)] disabled:opacity-50"
            >
              <UserPlus className="h-4 w-4" />
              {loading ? "Création..." : "Créer le compte administrateur"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
