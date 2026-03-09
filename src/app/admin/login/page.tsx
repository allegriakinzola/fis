"use client";

import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn.email({
      email,
      password,
    });

    if (result.error) {
      setError(result.error.message || "Identifiants invalides");
      setLoading(false);
    } else {
      router.push("/admin");
      router.refresh();
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
            Administration FIS-RDC
          </h1>
          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
            Connectez-vous pour accéder au panneau d&apos;administration
          </p>
        </div>

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
                placeholder="••••••••"
                required
                className="w-full rounded-md border border-[var(--border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--navy-light)] disabled:opacity-50"
          >
            <Lock className="h-4 w-4" />
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}
