import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata = {
  title: "Blog - THERCAL ENERGIES | Conseils en Calorifugeage et Isolation",
  description: "Découvrez nos articles sur le calorifugeage, l'isolation thermique et les économies d'énergie. Conseils d'experts et actualités du secteur.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
    </>
  );
}

function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50/30 to-blue-100/20 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-br from-blue-400/10 via-cyan-400/5 to-transparent" />
        <div className="absolute right-0 bottom-0 h-full w-1/2 bg-gradient-to-tl from-blue-400/10 via-purple-400/5 to-transparent" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl animate-fade-in-up">
            Blog & Actualités
          </h1>
          <p className="text-lg text-gray-600 sm:text-xl animate-fade-in-up stagger-1">
            Découvrez nos conseils d'experts en <span className="font-semibold text-blue-600">calorifugeage</span> et <span className="font-semibold text-cyan-600">isolation thermique</span>.
            Restez informé des dernières actualités et bonnes pratiques.
          </p>
        </div>
      </div>
    </section>
  );
}

function BlogGrid() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={post.slug} {...post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface BlogCardProps {
  readonly title: string;
  readonly excerpt: string;
  readonly slug: string;
  readonly category: string;
  readonly image: string;
  readonly index: number;
}

function BlogCard({ title, excerpt, slug, category, image, index }: BlogCardProps) {
  const categoryColors: Record<string, string> = {
    "Calorifugeage": "bg-blue-100 text-blue-700 hover:bg-blue-200",
    "Isolation": "bg-cyan-100 text-cyan-700 hover:bg-cyan-200",
    "Économies": "bg-green-100 text-green-700 hover:bg-green-200",
    "Réglementation": "bg-purple-100 text-purple-700 hover:bg-purple-200",
  };

  return (
    <Card
      className="group overflow-hidden smooth-transition hover:shadow-2xl hover:-translate-y-2 bg-white/90 backdrop-blur border border-blue-50 shadow-lg animate-fade-in-up"
      style={{ animationDelay: `${(index % 6) * 60}ms` }}
    >
      <div className="relative h-48 overflow-hidden rounded-t-3xl">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="h-full w-full object-cover smooth-transition group-hover:scale-110 saturate-125 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />
        <div className="absolute top-4 left-4">
          <Badge className={`${categoryColors[category]} smooth-transition`}>
            <Tag className="mr-1 h-3 w-3" />
            {category}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="space-y-3">
        <CardTitle className="text-xl font-bold smooth-transition group-hover:text-blue-600">
          {title}
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {excerpt}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Button
          variant="link"
          className="p-0 text-sm font-semibold smooth-transition group-hover:translate-x-2 group-hover:text-blue-600"
          asChild
        >
          <Link href={`/blog/${slug}`}>
            Lire l'article
            <ArrowRight className="ml-1 h-4 w-4 smooth-transition group-hover:translate-x-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

