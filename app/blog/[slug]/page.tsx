import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-posts";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface BlogArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogArticlePageProps): Metadata {
  const post = getBlogPost(params.slug);
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

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="bg-[radial-gradient(circle_at_top,#ffffff,#eaf4ff_55%,#ffffff)] pb-20">
      <div className="container mx-auto px-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-500 smooth-transition mt-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour au blog
        </Link>

        <header className="mt-6 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">{post.category}</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">{post.title}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{post.excerpt}</p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </header>

        <div className="mt-10 overflow-hidden rounded-3xl border border-blue-100 shadow-xl">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="h-[420px] w-full object-cover"
            priority
          />
        </div>

        <div className="mt-12 space-y-10 max-w-3xl mx-auto text-gray-700 leading-relaxed">
          {post.sections.map((section) => (
            <section key={section.heading} className="bg-white/90 rounded-2xl p-6 shadow-sm border border-blue-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{section.heading}</h2>
              <p>{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}

