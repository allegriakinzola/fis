import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact — FIS-RDC",
  description: "Contactez le Fonds d'Investissement Stratégique de la RDC.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--navy)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">
            FIS-RDC
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            Contactez-nous
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Notre équipe est disponible pour répondre à toutes vos questions
            concernant les missions et les services du FIS-RDC.
          </p>
        </div>
        <div className="mt-8 h-1 bg-[var(--gold)]" />
      </section>

      {/* Contact info + form */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[var(--navy)]">
                Nos coordonnées
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                Fonds d&apos;Investissement Stratégique de la République
                Démocratique du Congo, sous tutelle du Ministère des Finances.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--navy)]/5">
                    <MapPin className="h-5 w-5 text-[var(--navy)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--navy)]">
                      Adresse
                    </p>
                    <p className="mt-0.5 text-sm text-[var(--muted-foreground)]">
                      Kinshasa, République Démocratique du Congo
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--navy)]/5">
                    <Phone className="h-5 w-5 text-[var(--navy)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--navy)]">
                      Téléphone
                    </p>
                    <a
                      href="tel:+243000000000"
                      className="mt-0.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--navy)]"
                    >
                      +243 XXX XXX XXX
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--navy)]/5">
                    <Mail className="h-5 w-5 text-[var(--navy)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--navy)]">
                      Email
                    </p>
                    <a
                      href="mailto:contact@fisrdc.gouv.cd"
                      className="mt-0.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--navy)]"
                    >
                      contact@fisrdc.gouv.cd
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--navy)]/5">
                    <Clock className="h-5 w-5 text-[var(--navy)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--navy)]">
                      Horaires
                    </p>
                    <p className="mt-0.5 text-sm text-[var(--muted-foreground)]">
                      Lundi — Vendredi : 8h00 — 16h00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--secondary)] p-6 sm:p-8">
                <h2 className="text-xl font-bold text-[var(--navy)]">
                  Envoyez-nous un message
                </h2>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                  Remplissez le formulaire ci-dessous et nous vous répondrons
                  dans les plus brefs délais.
                </p>

                <form className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="nom"
                        className="mb-1.5 block text-sm font-medium text-[var(--navy)]"
                      >
                        Nom complet
                      </label>
                      <input
                        id="nom"
                        type="text"
                        placeholder="Votre nom"
                        className="w-full rounded-md border border-[var(--border)] bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-[var(--navy)]"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        className="w-full rounded-md border border-[var(--border)] bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="sujet"
                      className="mb-1.5 block text-sm font-medium text-[var(--navy)]"
                    >
                      Sujet
                    </label>
                    <input
                      id="sujet"
                      type="text"
                      placeholder="Objet de votre message"
                      className="w-full rounded-md border border-[var(--border)] bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-[var(--navy)]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Votre message..."
                      className="w-full resize-none rounded-md border border-[var(--border)] bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--navy)] focus:ring-1 focus:ring-[var(--navy)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-md bg-[var(--navy)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--navy-light)]"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
