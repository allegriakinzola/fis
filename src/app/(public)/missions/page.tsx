import {
  Banknote,
  Building2,
  ShieldCheck,
  Handshake,
  Scale,
  Globe,
  Briefcase,
  Leaf,
} from "lucide-react";

export const metadata = {
  title: "Missions — FIS-RDC",
  description:
    "Les 8 missions stratégiques du Fonds d'Investissement Stratégique de la RDC.",
};

const missions = [
  {
    icon: Banknote,
    title: "Mobiliser et structurer des financements innovants",
    description:
      "Mobiliser et structurer des financements innovants pour accélérer la mise en œuvre de la stratégie nationale de développement de la RDC, son inclusion territoriale, la diversification de son économie ainsi que le renforcement de sa souveraineté nationale.",
  },
  {
    icon: Building2,
    title: "Investir dans des actifs stratégiques",
    description:
      "Investir dans des actifs stratégiques, y compris les infrastructures, l'immobilier, l'énergie, les technologies émergentes, l'agriculture et l'industrie, afin de stimuler le développement économique durable, en adéquation avec le Programme d'Investissement Public (PIP).",
  },
  {
    icon: Briefcase,
    title: "Valoriser et rentabiliser les actifs publics",
    description:
      "Définir, gérer et valoriser, rentabiliser les actifs publics spécifiques, en facilitant leur intégration dans des projets d'investissement à forte valeur ajoutée.",
  },
  {
    icon: ShieldCheck,
    title: "Gouvernance transparente et rigoureuse",
    description:
      "Assurer une gouvernance transparente et rigoureuse en matière de gestion des fonds publics, de bonnes pratiques et de normes environnementales et sociales, en respectant les principes de responsabilité financière et de performance.",
  },
  {
    icon: Handshake,
    title: "Promouvoir les co-investissements",
    description:
      "Promouvoir les co-investissements avec ses propres ressources aux côtés des partenaires institutionnels et privés, tant nationaux qu'internationaux, pour accroître la capacité d'investissement et optimiser la rentabilité des actifs du fonds.",
  },
  {
    icon: Globe,
    title: "Levier financier pour le développement",
    description:
      "Servir de levier financier pour le développement du pays, en facilitant l'accès aux financements tant nationaux qu'internationaux et en participant à des initiatives stratégiques en faveur de la croissance et de la création d'emplois ainsi que du développement du secteur privé national.",
  },
  {
    icon: Scale,
    title: "Gestion fiduciaire des projets publics",
    description:
      "Assurer la gestion fiduciaire de certains projets d'investissement public lui confiés par le Gouvernement, financés sur ressources propres et/ou extérieures conformément à la réglementation spécifique applicable.",
  },
  {
    icon: Leaf,
    title: "Standards internationaux et normes ESG",
    description:
      "Veiller à l'intégration de standards internationaux en matière de gestion des fonds d'investissement en fonction des opportunités et des exigences économiques. Se conformer notamment aux normes environnementales, sociales et de gouvernance (ESG) dans sa stratégie d'investissement.",
  },
];

export default function MissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--navy)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">
            FIS-RDC
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            Nos missions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Le FIS-RDC est un nouveau catalyseur susceptible de générer des
            effets d&apos;entraînement réels dans les secteurs clés de
            l&apos;économie nationale.
          </p>
        </div>
        <div className="mt-8 h-1 bg-[var(--gold)]" />
      </section>

      {/* Missions grid */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {missions.map((mission, index) => (
              <div
                key={mission.title}
                className="group relative rounded-lg border border-[var(--border)] bg-white p-8 transition-shadow hover:shadow-lg"
              >
                {/* Number badge */}
                <span className="absolute right-6 top-6 text-4xl font-bold text-[var(--navy)]/5">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[var(--navy)]/5 text-[var(--navy)] transition-colors group-hover:bg-[var(--navy)] group-hover:text-white">
                  <mission.icon className="h-7 w-7" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-[var(--navy)]">
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

      {/* Secteurs */}
      <section className="bg-[var(--secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--green-rdc)]">
              Secteurs d&apos;intervention
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[var(--navy)]">
              Domaines stratégiques
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--muted-foreground)]">
              Le FIS-RDC investit dans les secteurs clés pour stimuler le
              développement économique durable de la RDC.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Infrastructures",
              "Immobilier",
              "Énergie",
              "Technologies émergentes",
              "Agriculture",
              "Industrie",
            ].map((secteur) => (
              <div
                key={secteur}
                className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-white px-5 py-4"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--gold)]" />
                <span className="font-medium text-[var(--navy)]">
                  {secteur}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cadre légal */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-lg border border-[var(--gold)]/30 bg-[var(--gold)]/5 p-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--navy)]">
              Cadre juridique
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--foreground)]/80">
              Le FIS-RDC a été créé par{" "}
              <strong>Décret n°25/031 du 02 octobre 2025</strong> de Son
              Excellence Madame la Première Ministre, Cheffe du Gouvernement. Sa
              gouvernance est régie par l&apos;
              <strong>
                Arrêté Ministériel N°071/CAB/MIN/FINANCES/2025 du 23 octobre 2025
              </strong>{" "}
              relatif au processus de sélection du Directeur Général et du
              Directeur Général Adjoint.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
