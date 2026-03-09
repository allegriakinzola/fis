import { FileText, Download, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Ressources — FIS-RDC",
  description: "Documents officiels et ressources du FIS-RDC.",
};

const documents = [
  {
    title: "Décret n°25/031 du 02 octobre 2025",
    description:
      "Décret portant création du Fonds d'Investissement Stratégique de la République Démocratique du Congo (FIS-RDC).",
    category: "Décret",
    date: "02 octobre 2025",
  },
  {
    title: "Arrêté Ministériel N°071/CAB/MIN/FINANCES/2025",
    description:
      "Arrêté relatif au processus de sélection du Directeur Général et du Directeur Général Adjoint du FIS-RDC.",
    category: "Arrêté",
    date: "23 octobre 2025",
  },
  {
    title: "Avis de recrutement — Directeur Général FIS-RDC",
    description:
      "Avis de recrutement du Directeur Général du Fonds d'Investissement Stratégique de la RDC.",
    category: "Recrutement",
    date: "23 octobre 2025",
  },
];

export default function RessourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--navy)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">
            FIS-RDC
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            Ressources
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Accédez aux documents officiels, décrets, arrêtés et publications du
            FIS-RDC.
          </p>
        </div>
        <div className="mt-8 h-1 bg-[var(--gold)]" />
      </section>

      {/* Documents */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--navy)]">
            Documents officiels
          </h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            Textes juridiques et publications relatifs au FIS-RDC.
          </p>

          <div className="mt-8 space-y-4">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="group flex items-start gap-4 rounded-lg border border-[var(--border)] p-5 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--navy)]/5">
                  <FileText className="h-6 w-6 text-[var(--navy)]" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[var(--gold)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--gold)]">
                      {doc.category}
                    </span>
                    <time className="text-xs text-[var(--muted-foreground)]">
                      {doc.date}
                    </time>
                  </div>
                  <h3 className="mt-1.5 font-semibold text-[var(--navy)]">
                    {doc.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                    {doc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
