import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { db } from "@/lib/db";

export const metadata = {
  title: "Actualités — FIS-RDC",
  description: "Dernières nouvelles et développements du FIS-RDC.",
};

export const dynamic = "force-dynamic";

export default async function ActualitesPage() {
  const articles = await db.article.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--navy)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">
            FIS-RDC
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            Actualités
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Restez informés des dernières nouvelles et développements du
            FIS-RDC.
          </p>
        </div>
        <div className="mt-8 h-1 bg-[var(--gold)]" />
      </section>

      {/* Articles */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {articles.length === 0 ? (
            <p className="text-center text-sm text-[var(--muted-foreground)]">
              Aucun article publié pour le moment.
            </p>
          ) : (
            <div className="space-y-8">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/actualites/${article.slug}`}
                  className="group block overflow-hidden rounded-lg border border-[var(--border)] transition-shadow hover:shadow-lg"
                >
                  {article.coverImage && (
                    <div className="h-52 w-full overflow-hidden">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <time className="text-sm font-medium text-[var(--gold)]">
                        {article.publishedAt.toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                      <span className="rounded-full bg-[var(--navy)]/5 px-3 py-0.5 text-xs font-medium text-[var(--navy)]">
                        {article.category}
                      </span>
                    </div>
                    <h2 className="mt-3 text-xl font-semibold text-[var(--navy)] group-hover:text-[var(--navy-light)]">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {article.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--navy)]">
                      Lire la suite
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
