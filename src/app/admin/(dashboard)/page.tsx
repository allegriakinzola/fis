"use client";

import { useEffect, useState } from "react";
import { FileText, Eye, EyeOff } from "lucide-react";

interface Stats {
  total: number;
  published: number;
  drafts: number;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats>({ total: 0, published: 0, drafts: 0 });

  useEffect(() => {
    fetch("/api/articles")
      .then((r) => r.json())
      .then((articles: { published: boolean }[]) => {
        const published = articles.filter((a) => a.published).length;
        setStats({
          total: articles.length,
          published,
          drafts: articles.length - published,
        });
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-[var(--navy)]">Tableau de bord</h1>
      <p className="mt-1 text-sm text-[var(--muted-foreground)]">
        Bienvenue dans l&apos;administration du FIS-RDC.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        <div className="rounded-lg border border-[var(--border)] bg-white p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--navy)]/5">
              <FileText className="h-5 w-5 text-[var(--navy)]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--navy)]">{stats.total}</p>
              <p className="text-xs text-[var(--muted-foreground)]">Total articles</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-white p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
              <Eye className="h-5 w-5 text-[var(--green-rdc)]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--green-rdc)]">{stats.published}</p>
              <p className="text-xs text-[var(--muted-foreground)]">Publiés</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-white p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50">
              <EyeOff className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-500">{stats.drafts}</p>
              <p className="text-xs text-[var(--muted-foreground)]">Brouillons</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
