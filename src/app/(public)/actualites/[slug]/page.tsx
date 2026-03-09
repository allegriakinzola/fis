import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/db";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = await db.article.findUnique({
    where: { slug },
  });

  if (!article || !article.published) {
    notFound();
  }

  return (
    <>
      <section className="bg-[var(--navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/actualites"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux actualités
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <time className="text-sm font-medium text-[var(--gold)]">
              {article.publishedAt.toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span className="rounded-full bg-white/10 px-3 py-0.5 text-xs font-medium text-white/80">
              {article.category}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-white/70">{article.excerpt}</p>
        </div>
        <div className="mt-8 h-1 bg-[var(--gold)]" />
      </section>

      {article.coverImage && (
        <section className="bg-[var(--secondary)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <img
              src={article.coverImage}
              alt={article.title}
              className="-mt-8 w-full rounded-lg object-cover shadow-lg"
              style={{ maxHeight: "480px" }}
            />
          </div>
        </section>
      )}

      <section className="bg-white py-12 sm:py-16">
        <article className="prose prose-slate mx-auto max-w-3xl px-4 sm:px-6">
          {article.content.split("\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </article>
      </section>
    </>
  );
}
