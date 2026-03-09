"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ArticleForm } from "@/components/admin/article-form";

interface ArticleData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage: string;
  publishedAt: string;
  published: boolean;
}

export default function EditArticlePage() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/articles/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setArticle({
          ...data,
          publishedAt: data.publishedAt
            ? new Date(data.publishedAt).toISOString().slice(0, 10)
            : new Date().toISOString().slice(0, 10),
        });
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-sm text-[var(--muted-foreground)]">Chargement...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-sm text-red-500">Article non trouvé.</p>
      </div>
    );
  }

  return <ArticleForm initial={article} />;
}
