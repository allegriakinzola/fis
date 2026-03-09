import { Building2, Target, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "À propos — FIS-RDC",
  description:
    "Découvrez le Fonds d'Investissement Stratégique de la République Démocratique du Congo, créé par Décret n°25/031 du 02 octobre 2025.",
};

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--navy)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">
            Présentation
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            À propos du FIS-RDC
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Fonds d&apos;Investissement Stratégique de la République
            Démocratique du Congo
          </p>
        </div>
        <div className="mt-8 h-1 bg-[var(--gold)]" />
      </section>

      {/* Contexte */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--green-rdc)]">
                Contexte
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[var(--navy)]">
                Création du FIS-RDC
              </h2>
              <div className="mt-6 space-y-4 text-[var(--foreground)]/80 leading-relaxed">
                <p>
                  Le Gouvernement de la République Démocratique du Congo s&apos;est
                  doté, par <strong>Décret n°25/031 du 02 octobre 2025</strong> de
                  Son Excellence Madame la Première Ministre, Cheffe du
                  Gouvernement, d&apos;un Établissement public dénommé{" "}
                  <strong>
                    Fonds d&apos;Investissement Stratégique de la République
                    Démocratique du Congo (FIS-RDC)
                  </strong>
                  .
                </p>
                <p>
                  Le FIS-RDC a pour missions principales la mobilisation et la
                  structuration des financements en vue d&apos;accélérer la mise en
                  œuvre de la stratégie nationale de développement de la RDC, son
                  inclusion territoriale, la diversification de son économie ainsi
                  que le renforcement de sa souveraineté nationale.
                </p>
                <p>
                  Le FIS-RDC est un nouveau catalyseur susceptible de générer des
                  effets d&apos;entraînement réels dans les secteurs clés de
                  l&apos;économie nationale.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md space-y-6">
                <div className="rounded-lg border border-[var(--border)] bg-[var(--secondary)] p-6">
                  <Building2 className="mb-3 h-8 w-8 text-[var(--navy)]" />
                  <h3 className="font-semibold text-[var(--navy)]">
                    Établissement public
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                    Créé par Décret n°25/031 du 02 octobre 2025 sous la tutelle
                    du Ministère des Finances.
                  </p>
                </div>
                <div className="rounded-lg border border-[var(--border)] bg-[var(--secondary)] p-6">
                  <Target className="mb-3 h-8 w-8 text-[var(--navy)]" />
                  <h3 className="font-semibold text-[var(--navy)]">
                    Objectif stratégique
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                    Accélérer la mise en œuvre de la stratégie nationale de
                    développement et la diversification de l&apos;économie.
                  </p>
                </div>
                <div className="rounded-lg border border-[var(--border)] bg-[var(--secondary)] p-6">
                  <Globe className="mb-3 h-8 w-8 text-[var(--navy)]" />
                  <h3 className="font-semibold text-[var(--navy)]">
                    Portée nationale &amp; internationale
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                    Partenariats avec des acteurs institutionnels et privés,
                    nationaux et internationaux.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gouvernance */}
      <section className="bg-[var(--secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">
              Gouvernance
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[var(--navy)]">
              Direction Générale
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--muted-foreground)]">
              Conformément à l&apos;Arrêté Ministériel N°071/CAB/MIN/FINANCES/2025
              du 23 octobre 2025, le Directeur Général assure la gestion courante
              du FIS-RDC et l&apos;exécution des décisions du Conseil
              d&apos;Administration.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="rounded-lg border border-[var(--border)] bg-white p-8">
              <h3 className="mb-4 text-lg font-semibold text-[var(--navy)]">
                Le Directeur Général est chargé de :
              </h3>
              <ul className="space-y-3 text-sm leading-relaxed text-[var(--foreground)]/80">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--gold)]" />
                  Élaborer et proposer au Conseil d&apos;Administration la
                  stratégie générale, les politiques d&apos;investissement et les
                  plans de développement du Fonds.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--gold)]" />
                  Définir les priorités d&apos;investissement en cohérence avec les
                  politiques publiques nationales, notamment le PIP.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--gold)]" />
                  Superviser la gestion des actifs, la trésorerie, les
                  portefeuilles d&apos;investissement et les partenariats
                  financiers.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--gold)]" />
                  Identifier, négocier et mobiliser les ressources auprès des
                  partenaires financiers nationaux et internationaux.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--gold)]" />
                  Mettre en place des mécanismes de cofinancement et de
                  Partenariat Public-Privé (PPP).
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--gold)]" />
                  Assurer la due diligence, l&apos;analyse financière et la
                  viabilité économique des projets.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--gold)]" />
                  Représenter le FIS-RDC dans les négociations d&apos;accords
                  d&apos;investissement, de joint-venture et d&apos;instruments de
                  placement.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--navy)]">
            Découvrez nos missions en détail
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[var(--muted-foreground)]">
            Le FIS-RDC intervient dans 8 domaines stratégiques pour le
            développement de la RDC.
          </p>
          <Link
            href="/missions"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--navy-light)]"
          >
            Voir nos missions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
