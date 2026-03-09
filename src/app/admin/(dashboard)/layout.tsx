"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import { useEffect } from "react";
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  LogOut,
  ArrowLeft,
} from "lucide-react";

const navItems = [
  { href: "/admin", label: "Tableau de bord", icon: LayoutDashboard },
  { href: "/admin/articles", label: "Articles", icon: FileText },
  { href: "/admin/articles/new", label: "Nouvel article", icon: PlusCircle },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/admin/login");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-[var(--muted-foreground)]">Chargement...</p>
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-[var(--border)] bg-white">
        <div className="flex h-16 items-center gap-3 border-b border-[var(--border)] px-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--navy)] text-[10px] font-bold text-[var(--gold)]">
            FIS
          </div>
          <div>
            <p className="text-sm font-bold text-[var(--navy)]">FIS-RDC</p>
            <p className="text-[10px] text-[var(--muted-foreground)]">
              Administration
            </p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 p-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[var(--navy)] text-white"
                    : "text-[var(--foreground)] hover:bg-[var(--secondary)]"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-[var(--border)] p-3 space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--secondary)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au site
          </Link>
          <button
            onClick={async () => {
              await signOut();
              router.push("/admin/login");
            }}
            className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4" />
            Déconnexion
          </button>
        </div>

        <div className="border-t border-[var(--border)] p-4">
          <p className="truncate text-xs text-[var(--muted-foreground)]">
            {session.user.email}
          </p>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-64 flex-1 bg-[var(--secondary)] p-8">
        {children}
      </main>
    </div>
  );
}
