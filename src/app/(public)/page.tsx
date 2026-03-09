import Link from "next/link";
import { db } from "@/lib/db";
import {
  Banknote,
  Building2,
  ShieldCheck,
  Handshake,
  Scale,
  Globe,
  Briefcase,
  Leaf,
  FileText,
  Users,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const missions = [
  {
    icon: Banknote,
    title: "Financements innovants",
    description:
      "Mobiliser et structurer des financements innovants pour accélérer la mise en œuvre de la stratégie nationale de développement.",
  },
  {
    icon: Building2,
    title: "Actifs stratégiques",
    description:
      "Investir dans les infrastructures, l'immobilier, l'énergie, les technologies émergentes, l'agriculture et l'industrie.",
  },
  {
    icon: ShieldCheck,
    title: "Gouvernance transparente",
    description:
      "Assurer une gouvernance rigoureuse en matière de gestion des fonds publics, de normes ESG et de responsabilité financière.",
  },
  {
    icon: Handshake,
    title: "Co-investissements",
    description:
      "Promouvoir les co-investissements aux côtés des partenaires institutionnels et privés, nationaux et internationaux.",
  },
  {
    icon: Scale,
    title: "Gestion fiduciaire",
    description:
      "Assurer la gestion fiduciaire de projets d'investissement public confiés par le Gouvernement.",
  },
  {
    icon: Globe,
    title: "Standards internationaux",
    description:
      "Intégrer les standards internationaux en matière de gestion des fonds d'investissement et les normes ESG.",
  },
  {
    icon: Briefcase,
    title: "Valorisation des actifs",
    description:
      "Définir, gérer, valoriser et rentabiliser les actifs publics spécifiques dans des projets à forte valeur ajoutée.",
  },
  {
    icon: Leaf,
    title: "Développement durable",
    description:
      "Stimuler le développement économique durable en adéquation avec le Programme d'Investissement Public (PIP).",
  },
];

const stats = [
  { value: "26", label: "Provinces ciblées" },
  { value: "2025", label: "Année de création" },
  { value: "8", label: "Missions stratégiques" },
  { value: "ESG", label: "Normes appliquées" },
];

export const dynamic = "force-dynamic";

export default async function Home() {
  const actualites = await db.article.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
    take: 3,
  });
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-[var(--navy)]">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[var(--gold)]" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[var(--green-rdc)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-4 py-1.5 text-xs font-medium text-[var(--gold)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
              République Démocratique du Congo
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Fonds d&apos;Investissement{" "}
              <span className="text-[var(--gold)]">Stratégique</span>
              <span className="block text-2xl font-medium text-white/60 mt-2 sm:text-3xl">de la République Démocratique du Congo</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Établissement public dédié à la mobilisation et la structuration
              des financements pour accélérer la mise en œuvre de la stratégie
              nationale de développement, l&apos;inclusion territoriale et la
              diversification de l&apos;économie congolaise.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/missions"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--navy)] transition-colors hover:bg-[var(--gold)]/90"
              >
                Découvrir nos missions
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/a-propos"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>

        {/* Gold bottom accent */}
        <div className="h-1 bg-[var(--gold)]" />
      </section>

      {/* ===== STATS ===== */}
      <section className="border-b border-[var(--border)] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[var(--border)] sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-8 text-center sm:px-6">
              <p className="text-3xl font-bold text-[var(--navy)]">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== MISSIONS ===== */}
      <section className="bg-[var(--secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--green-rdc)]">
              Nos missions
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[var(--navy)] sm:text-4xl">
              Un catalyseur pour l&apos;économie nationale
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--muted-foreground)]">
              Le FIS-RDC est chargé de générer des effets d&apos;entraînement
              réels dans les secteurs clés de l&apos;économie nationale, en
              facilitant l&apos;accès aux financements et en participant à des
              initiatives stratégiques en faveur de la croissance.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {missions.map((mission) => (
              <div
                key={mission.title}
                className="group rounded-lg border border-[var(--border)] bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--navy)]/5 text-[var(--navy)] transition-colors group-hover:bg-[var(--navy)] group-hover:text-white">
                  <mission.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--navy)]">
                  {mission.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {mission.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MOT DU PRÉSIDENT ===== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">
                Message officiel
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[var(--navy)]">
                Mot du Directeur Général
              </h2>
              <blockquote className="mt-6 border-l-4 border-[var(--gold)] pl-6">
                <p className="text-lg italic leading-relaxed text-[var(--foreground)]/80">
                  &laquo; Le FIS-RDC incarne la volonté du Gouvernement
                  d&apos;accélérer la mise en œuvre de la stratégie nationale de
                  développement, en mobilisant et structurant des financements
                  innovants pour investir dans les actifs stratégiques du pays,
                  au bénéfice de l&apos;ensemble de la population congolaise.
                  &raquo;
                </p>
              </blockquote>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                Créé par Décret n°25/031 du 02 octobre 2025 de Son Excellence
                Madame la Première Ministre, le FIS-RDC est un levier financier
                pour le développement du pays.
              </p>
              <div className="mt-6">
                <p className="font-semibold text-[var(--navy)]">
                  Directeur Général du FIS-RDC
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  Fonds d&apos;Investissement Stratégique de la RDC
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative flex h-72 w-full max-w-md items-center justify-center rounded-lg bg-gradient-to-br from-[var(--navy)] to-[var(--navy-light)] text-white lg:h-80">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-[var(--gold)] text-2xl font-bold text-[var(--gold)]">
                    FIS-RDC
                  </div>
                  <p className="mt-4 text-sm text-white/60">
                    Photo officielle
                  </p>
                </div>
                {/* Corner accents */}
                <div className="absolute left-0 top-0 h-16 w-1 bg-[var(--gold)]" />
                <div className="absolute left-0 top-0 h-1 w-16 bg-[var(--gold)]" />
                <div className="absolute bottom-0 right-0 h-16 w-1 bg-[var(--gold)]" />
                <div className="absolute bottom-0 right-0 h-1 w-16 bg-[var(--gold)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACTUALITÉS ===== */}
      <section className="bg-[var(--secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--green-rdc)]">
                Actualités
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[var(--navy)]">
                Dernières nouvelles
              </h2>
            </div>
            <Link
              href="/actualites"
              className="hidden items-center gap-1.5 text-sm font-medium text-[var(--navy)] hover:text-[var(--navy-light)] sm:inline-flex"
            >
              Voir toutes les actualités
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {actualites.map((article) => (
              <Link
                key={article.id}
                href={`/actualites/${article.slug}`}
                className="group overflow-hidden rounded-lg border border-[var(--border)] bg-white transition-shadow hover:shadow-lg"
              >
                {article.coverImage ? (
                  <div className="h-44 w-full overflow-hidden">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex h-44 items-center justify-center bg-gradient-to-br from-[var(--navy)]/5 to-[var(--navy)]/10">
                    <FileText className="h-10 w-10 text-[var(--navy)]/30" />
                  </div>
                )}
                <div className="p-5">
                  <time className="text-xs font-medium text-[var(--gold)]">
                    {article.publishedAt.toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h3 className="mt-2 line-clamp-2 text-base font-semibold leading-snug text-[var(--navy)] group-hover:text-[var(--navy-light)]">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--navy)]">
                    Lire la suite
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/actualites"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--navy)]"
            >
              Voir toutes les actualités
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[var(--navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Besoin d&apos;informations ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Notre équipe est disponible pour répondre à toutes vos questions
            concernant les missions et les services du FIS-RDC.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--navy)] transition-colors hover:bg-[var(--gold)]/90"
            >
              <Users className="h-4 w-4" />
              Contactez-nous
            </Link>
            <Link
              href="/ressources"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <FileText className="h-4 w-4" />
              Consulter les ressources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
