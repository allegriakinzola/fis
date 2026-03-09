"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/missions", label: "Missions" },
  { href: "/actualites", label: "Actualités" },
  { href: "/ressources", label: "Ressources" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-[var(--navy)] text-white/80 text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6">
          <div className="hidden items-center gap-5 sm:flex">
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3 w-3" />
              +243 XXX XXX XXX
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-3 w-3" />
              contact@fisrdc.gouv.cd
            </span>
          </div>
          <div className="flex items-center gap-1.5 sm:ml-auto">
            <MapPin className="h-3 w-3" />
            <span>Kinshasa, RDC</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="border-b border-[var(--border)] bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--navy)] text-xs font-bold text-[var(--gold)]">
              FIS
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="text-lg font-bold leading-tight text-[var(--navy)]">
                FIS-RDC
              </span>
              <span className="text-[11px] leading-tight text-[var(--muted-foreground)]">
                Fonds d&apos;Investissement Stratégique
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--secondary)] hover:text-[var(--navy)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <Link
            href="/contact"
            className="hidden rounded-md bg-[var(--gold)] px-5 py-2.5 text-sm font-semibold text-[var(--navy)] transition-colors hover:bg-[var(--gold)]/90 lg:inline-flex"
          >
            Nous contacter
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-[var(--navy)] lg:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-[var(--border)] bg-white px-4 pb-4 lg:hidden">
            <ul className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--secondary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 block rounded-md bg-[var(--gold)] px-5 py-2.5 text-center text-sm font-semibold text-[var(--navy)]"
            >
              Nous contacter
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
