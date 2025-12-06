import Link from "next/link";

export default function BlogNotFound() {
  return (
    <section className="min-h-[70vh] bg-[radial-gradient(circle_at_top,_#f7fbff,_#e6f2ff,_#fdfdff)] flex items-center">
      <div className="container mx-auto px-4 text-center space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-500">Article indisponible</p>
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Oops, article introuvable</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          L’article que vous cherchez n’existe plus ou a été déplacé. Parcourez nos conseils d’isolation et de calorifugeage
          pour rester informé.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/blog"
            className="rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-blue-500 smooth-transition"
          >
            Voir tous les articles
          </Link>
          <Link
            href="/"
            className="rounded-full border border-blue-200 px-6 py-3 text-blue-600 font-semibold hover:bg-blue-50 smooth-transition"
          >
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </section>
  );
}

