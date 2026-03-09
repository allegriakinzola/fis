"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PlusCircle, Pencil, Trash2, Eye, EyeOff } from "lucide-react";

interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  published: boolean;
  createdAt: string;
}

export default function ArticlesListPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadArticles() {
    const res = await fetch("/api/articles");
    const data = await res.json();
    setArticles(data);
    setLoading(false);
  }

  useEffect(() => {
    loadArticles();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Supprimer cet article ?")) return;
    await fetch(`/api/articles/${id}`, { method: "DELETE" });
    setArticles((prev) => prev.filter((a) => a.id !== id));
  }

  async function togglePublish(article: Article) {
    const res = await fetch(`/api/articles/${article.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !article.published }),
    });
    if (res.ok) {
      setArticles((prev) =>
        prev.map((a) =>
          a.id === article.id ? { ...a, published: !a.published } : a
        )
      );
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--navy)]">Articles</h1>
          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
            Gérez les articles du blog FIS-RDC.
          </p>
        </div>
        <Link
          href="/admin/articles/new"
          className="inline-flex items-center gap-2 rounded-md bg-[var(--navy)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--navy-light)]"
        >
          <PlusCircle className="h-4 w-4" />
          Nouvel article
        </Link>
      </div>

      <div className="mt-8 rounded-lg border border-[var(--border)] bg-white">
        {loading ? (
          <div className="p-8 text-center text-sm text-[var(--muted-foreground)]">
            Chargement...
          </div>
        ) : articles.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-sm text-[var(--muted-foreground)]">
              Aucun article pour le moment.
            </p>
            <Link
              href="/admin/articles/new"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[var(--navy)]"
            >
              <PlusCircle className="h-4 w-4" />
              Créer le premier article
            </Link>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] text-left">
                <th className="px-4 py-3 font-medium text-[var(--muted-foreground)]">
                  Titre
                </th>
                <th className="px-4 py-3 font-medium text-[var(--muted-foreground)]">
                  Catégorie
                </th>
                <th className="px-4 py-3 font-medium text-[var(--muted-foreground)]">
                  Statut
                </th>
                <th className="px-4 py-3 font-medium text-[var(--muted-foreground)]">
                  Date
                </th>
                <th className="px-4 py-3 font-medium text-[var(--muted-foreground)]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr
                  key={article.id}
                  className="border-b border-[var(--border)] last:border-0"
                >
                  <td className="px-4 py-3 font-medium text-[var(--navy)]">
                    {article.title}
                  </td>
                  <td className="px-4 py-3 text-[var(--muted-foreground)]">
                    {article.category}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => togglePublish(article)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                        article.published
                          ? "bg-green-50 text-green-700"
                          : "bg-orange-50 text-orange-600"
                      }`}
                    >
                      {article.published ? (
                        <>
                          <Eye className="h-3 w-3" /> Publié
                        </>
                      ) : (
                        <>
                          <EyeOff className="h-3 w-3" /> Brouillon
                        </>
                      )}
                    </button>
                  </td>
                  <td className="px-4 py-3 text-[var(--muted-foreground)]">
                    {new Date(article.createdAt).toLocaleDateString("fr-FR")}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/admin/articles/${article.id}`}
                        className="rounded-md p-1.5 text-[var(--muted-foreground)] hover:bg-[var(--secondary)] hover:text-[var(--navy)]"
                      >
                        <Pencil className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(article.id)}
                        className="rounded-md p-1.5 text-[var(--muted-foreground)] hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
