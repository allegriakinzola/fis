import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const publishedOnly = searchParams.get("published") === "true";

  const articles = await db.article.findMany({
    where: publishedOnly ? { published: true } : undefined,
    orderBy: { publishedAt: "desc" },
  });

  return NextResponse.json(articles);
}

export async function POST(request: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const body = await request.json();
  const { title, excerpt, content, category, coverImage, published, publishedAt } = body;

  if (!title || !excerpt || !content) {
    return NextResponse.json(
      { error: "Titre, extrait et contenu requis" },
      { status: 400 }
    );
  }

  const slug = slugify(title) + "-" + Date.now().toString(36);

  const article = await db.article.create({
    data: {
      title,
      slug,
      excerpt,
      content,
      category: category || "Actualité",
      coverImage: coverImage || null,
      published: published ?? false,
      publishedAt: publishedAt ? new Date(publishedAt) : new Date(),
    },
  });

  return NextResponse.json(article, { status: 201 });
}
