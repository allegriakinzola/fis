"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Eye, ArrowLeft, ImageIcon, Calendar } from "lucide-react";
import Link from "next/link";

interface ArticleData {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage: string;
  publishedAt: string;
  published: boolean;
}

const categories = [
  "Actualité",
  "Institutionnel",
  "Recrutement",
  "Partenariats",
  "Stratégie",
  "Investissement",
  "Communiqué",
];

export function ArticleForm({ initial }: { initial?: ArticleData }) {
  const router = useRouter();
  const isEdit = !!initial?.id;

  const [form, setForm] = useState<ArticleData>({
    title: initial?.title ?? "",
    excerpt: initial?.excerpt ?? "",
    content: initial?.content ?? "",
    category: initial?.category ?? "Actualité",
    coverImage: initial?.coverImage ?? "",
    publishedAt: initial?.publishedAt ?? new Date().toISOString().slice(0, 10),
    published: initial?.published ?? false,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function update(field: keyof ArticleData, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);

    const url = isEdit ? `/api/articles/${initial!.id}` : "/api/articles";
    const method = isEdit ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Erreur lors de la sauvegarde");
      setSaving(false);
      return;
    }

    router.push("/admin/articles");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/articles"
            className="rounded-md p-2 text-[var(--muted-foreground)] hover:bg-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[var(--navy)]">
              {isEdit ? "Modifier l'article" : "Nouvel article"}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => update("published", !form.published)}
            className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm font-medium ${
              form.published
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-[var(--border)] bg-white text-[var(--muted-foreground)]"
            }`}
          >
            <Eye className="h-4 w-4" />
            {form.published ? "Publié" : "Brouillon"}
          </button>
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-md bg-[var(--navy)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--navy-light)] disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            {saving ? "Sauvegarde..." : "Sauvegarder"}
          </button>
        </div>
      </div>

      {error && (
        <div className="mt-4 rounded-md bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Main content */}
        <div className="space-y-5 lg:col-span-2">
          <div className="rounded-lg border border-[var(--border)] bg-white p-5">
            <label className="mb-1.5 block text-sm font-medium text-[var(--navy)]">
              Titre
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              placeholder="Titre de l'article"
              required
              className="w-full rounded-md border border-[var(--border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)]"
            />
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-white p-5">
            <label className="mb-1.5 block text-sm font-medium text-[var(--navy)]">
              Extrait
            </label>
            <textarea
              value={form.excerpt}
              onChange={(e) => update("excerpt", e.target.value)}
              placeholder="Résumé court de l'article (affiché dans la liste)"
              required
              rows={3}
              className="w-full resize-none rounded-md border border-[var(--border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)]"
            />
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-white p-5">
            <label className="mb-1.5 block text-sm font-medium text-[var(--navy)]">
              Contenu
            </label>
            <textarea
              value={form.content}
              onChange={(e) => update("content", e.target.value)}
              placeholder="Contenu complet de l'article..."
              required
              rows={16}
              className="w-full resize-y rounded-md border border-[var(--border)] px-4 py-2.5 text-sm leading-relaxed outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)]"
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="rounded-lg border border-[var(--border)] bg-white p-5">
            <label className="mb-1.5 block text-sm font-medium text-[var(--navy)]">
              Catégorie
            </label>
            <select
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
              className="w-full rounded-md border border-[var(--border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)]"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-white p-5">
            <label className="mb-1.5 block text-sm font-medium text-[var(--navy)]">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> Date de publication</span>
            </label>
            <input
              type="date"
              value={form.publishedAt}
              onChange={(e) => update("publishedAt", e.target.value)}
              className="mt-1.5 w-full rounded-md border border-[var(--border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)]"
            />
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-white p-5">
            <label className="mb-1.5 block text-sm font-medium text-[var(--navy)]">
              <span className="flex items-center gap-1.5"><ImageIcon className="h-4 w-4" /> Image de couverture (URL)</span>
            </label>
            <input
              type="text"
              value={form.coverImage}
              onChange={(e) => update("coverImage", e.target.value)}
              placeholder="https://..."
              className="mt-1.5 w-full rounded-md border border-[var(--border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)]"
            />
            {form.coverImage && (
              <div className="mt-3 overflow-hidden rounded-md border border-[var(--border)]">
                <img
                  src={form.coverImage}
                  alt="Aperçu"
                  className="h-40 w-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
