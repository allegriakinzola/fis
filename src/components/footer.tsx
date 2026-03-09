import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const quickLinks = [
  { href: "/a-propos", label: "À propos du FIS-RDC" },
  { href: "/missions", label: "Nos missions" },
  { href: "/actualites", label: "Actualités" },
  { href: "/ressources", label: "Ressources" },
  { href: "/contact", label: "Contact" },
];

const institutionalLinks = [
  { href: "https://presidence.cd", label: "Présidence de la République" },
  { href: "https://primature.gouv.cd", label: "Primature" },
  { href: "https://www.finances.gouv.cd", label: "Min. des Finances" },
  { href: "https://assemblee-nationale.cd", label: "Assemblée Nationale" },
  { href: "https://senat.cd", label: "Sénat" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      {/* Gold accent line */}
      <div className="h-1 bg-[var(--gold)]" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--gold)] text-[10px] font-bold text-[var(--gold)]">
                FIS
              </div>
              <div>
                <p className="font-bold leading-tight">FIS-RDC</p>
                <p className="text-xs leading-tight text-white/60">
                  Fonds d&apos;Investissement Stratégique
                </p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              Établissement public dédié à la mobilisation et la structuration
              des financements pour accélérer le développement de la RDC.
              Créé par Décret n°25/031 du 02 octobre 2025.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">
              Liens rapides
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-[var(--gold)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens institutionnels */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">
              Institutions
            </h3>
            <ul className="space-y-2.5">
              {institutionalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-[var(--gold)]"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                <span>Kinshasa, République Démocratique du Congo</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Phone className="h-4 w-4 shrink-0 text-[var(--gold)]" />
                <a href="tel:+243000000000" className="hover:text-white">
                  +243 XXX XXX XXX
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Mail className="h-4 w-4 shrink-0 text-[var(--gold)]" />
                <a href="mailto:contact@fisrdc.gouv.cd" className="hover:text-white">
                  contact@fisrdc.gouv.cd
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-white/50 sm:flex-row sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} FIS-RDC — Fonds d&apos;Investissement
            Stratégique de la République Démocratique du Congo. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-white/80">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white/80">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
