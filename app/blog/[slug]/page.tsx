import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-posts";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thercal-energie.fr";

type BlogArticleParams = {
  slug: string;
};

interface BlogArticlePageProps {
  params: Promise<BlogArticleParams>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Article introuvable | THERCAL ENERGIES",
    };
  }

  return {
    title: `${post.title} | THERCAL ENERGIES`,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <article className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#fdfefe,#e9f3ff_55%,#fdfefe)] pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-10 h-80 w-80 rounded-full bg-cyan-200 opacity-30 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-blue-200 opacity-25 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <Breadcrumb />
        <ArticleHero post={post} />
        <main className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ArticleContent post={post} />
          <ArticleSidebar post={post} />
        </main>
        <RelatedArticles posts={relatedPosts} />
      </div>
    </article>
  );
}

function Breadcrumb() {
  return (
    <div className="flex items-center gap-6 pt-6 text-sm text-slate-500">
      <Link href="/" className="hover:text-blue-600 smooth-transition">
        Accueil
      </Link>
      <span className="text-slate-300">/</span>
      <Link href="/blog" className="hover:text-blue-600 smooth-transition">
        Blog
      </Link>
    </div>
  );
}

function ArticleHero({ post }: { readonly post: (typeof BLOG_POSTS)[number] }) {
  return (
    <header className="mt-6 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8 text-white shadow-2xl">
      <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-blue-200">
        <span className="rounded-full border border-white/20 px-3 py-1">{post.category}</span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-white/80">
          Publication éditoriale THERCAL
        </span>
      </div>
      <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">{post.title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-blue-100">{post.excerpt}</p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative smooth-transition hover:shadow-blue-500/40 hover:-translate-y-1">
        <Image
          src={post.image}
          alt={post.title}
          width={1280}
          height={720}
          className="h-[420px] w-full object-cover saturate-125 contrast-110 brightness-105 transition-transform duration-700 ease-out hover:scale-[1.02]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
          Reportage photo issu de nos interventions récentes
        </div>
      </div>
    </header>
  );
}

function ArticleContent({ post }: { readonly post: (typeof BLOG_POSTS)[number] }) {
  const keyPoints = post.sections.map((section) => section.heading);

  return (
    <section className="space-y-8 animate-fade-in-up">
      <KeyPoints points={keyPoints} />
      <div className="space-y-8 text-gray-700 leading-relaxed">
        {post.sections.map((section) => (
          <article
            key={section.heading}
            className="rounded-3xl border border-blue-100 bg-white/95 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 smooth-transition"
          >
            <h2 className="text-2xl font-bold text-gray-900">{section.heading}</h2>
            <p className="mt-4 text-base text-gray-700">{section.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function KeyPoints({ points }: { readonly points: readonly string[] }) {
  return (
    <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl smooth-transition hover:-translate-y-1 hover:shadow-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-500">Points clés</p>
      <ul className="mt-4 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
            <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
            <span className="font-semibold text-gray-900">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArticleSidebar({ post }: { readonly post: (typeof BLOG_POSTS)[number] }) {
  const articleUrl = `${SITE_URL}/blog/${post.slug}`;
  const shareLink = `mailto:?subject=${encodeURIComponent(
    `À lire : ${post.title}`
  )}&body=${encodeURIComponent(`Je te recommande cet article : ${articleUrl}`)}`;

  return (
    <aside className="space-y-6">
      <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl">
        <h3 className="text-lg font-semibold text-gray-900">Résumé express</h3>
        <p className="mt-3 text-sm text-gray-600">
          {post.excerpt} Nos experts vous accompagnent pour appliquer ces bonnes pratiques sur vos installations.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li className="flex gap-2">
            <span className="text-blue-500">•</span> Contenu validé par nos chefs de projets.
          </li>
          <li className="flex gap-2">
            <span className="text-blue-500">•</span> Mise à jour continue avec nos chantiers récents.
          </li>
          <li className="flex gap-2">
            <span className="text-blue-500">•</span> Conseils applicables à tout type d'installation.
          </li>
        </ul>
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-6 text-white shadow-2xl">
        <p className="text-xs uppercase tracking-[0.4em] text-white/70">Besoin d'aller plus loin ?</p>
        <h3 className="mt-3 text-2xl font-bold">Parlez à un expert THERCAL</h3>
        <p className="mt-3 text-white/80">
          Analyse de vos plans, dimensionnement du calorifugeage et devis sous 24h.
        </p>
        <Link
          href="/devis"
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 smooth-transition"
        >
          Demander un devis
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl">
        <h3 className="text-lg font-semibold text-gray-900">Partager l'article</h3>
        <p className="mt-2 text-sm text-gray-600">Diffusez ces bonnes pratiques à vos équipes.</p>
        <Link
          href={shareLink}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 smooth-transition"
        >
          <Share2 className="h-4 w-4" />
          Partager par email
        </Link>
        <p className="mt-3 text-xs text-gray-500 break-all">{articleUrl}</p>
      </div>
    </aside>
  );
}

function RelatedArticles({ posts }: { readonly posts: readonly (typeof BLOG_POSTS)[number][] }) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-500">À lire ensuite</p>
          <h3 className="mt-2 text-2xl font-bold text-gray-900">Articles recommandés</h3>
        </div>
        <Link href="/blog" className="text-sm font-semibold text-blue-600 hover:text-blue-500 smooth-transition">
          Voir tout
        </Link>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-3xl border border-blue-100 bg-white shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100/80 smooth-transition"
          >
            <div className="relative h-40 overflow-hidden rounded-t-3xl">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={220}
                className="h-full w-full object-cover transition-transform duration-600 group-hover:scale-110 saturate-125 contrast-110"
              />
            </div>
            <div className="space-y-2 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-500">{post.category}</p>
              <h4 className="text-base font-bold text-gray-900 line-clamp-2">{post.title}</h4>
              <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

