import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideLayout } from "@/components/guide-ui";
import { JsonLd } from "@/components/json-ld";
import { getGuide, getGuideUrl, getSiteUrl, guides, siteConfig } from "@/lib/site";

type GuidePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {
      title: "Guide not found | Hollow Guidebook",
    };
  }

  return {
    title: `${guide.title} | Hollow Guidebook`,
    description: guide.description,
    alternates: {
      canonical: getGuideUrl(guide.slug),
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: getGuideUrl(guide.slug),
      siteName: siteConfig.name,
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const guideUrl = getGuideUrl(guide.slug);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Hollow Guidebook",
        item: getSiteUrl(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: guide.title,
        item: guideUrl,
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.updatedAt,
    dateModified: guide.updatedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: guideUrl,
    about: {
      "@type": "VideoGame",
      name: siteConfig.gameName,
    },
  };

  return (
    <>
      <JsonLd data={[breadcrumb, article]} />
      <GuideLayout guide={guide} />
    </>
  );
}
