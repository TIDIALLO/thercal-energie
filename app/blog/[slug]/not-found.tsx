import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-[radial-gradient(circle_at_top,_#fefefe,_#eef6ff_60%,_#fefefe)]">
      <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-500">404</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">Article introuvable</h1>
        <p className="mt-4 max-w-xl text-base text-slate-600">
          Le contenu que vous cherchez a peut-être été déplacé. Parcourez nos derniers articles ou revenez à
          l&apos;accueil.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 smooth-transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au blog
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 smooth-transition"
          >
            Accueil
          </Link>
        </div>
      </div>
    </section>
  );
}

