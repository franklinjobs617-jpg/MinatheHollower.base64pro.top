import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ExternalLink,
  Gamepad2,
  Map,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import {
  getGuideImage,
  getRelatedGuides,
  Guide,
  GuideTable as GuideTableType,
  GameMedia,
  sources,
} from "@/lib/site";

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link className="duo-button" href={href}>
      {children}
      <ArrowRight aria-hidden="true" size={18} strokeWidth={3} />
    </Link>
  );
}

export function SecondaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      className="inline-flex items-center gap-8 rounded-xl border-2 border-cloud-gray px-16 py-12 text-caption font-bold uppercase tracking-caption text-plasma-blue transition hover:border-plasma-blue"
      href={href}
    >
      {children}
    </Link>
  );
}

export function MinaMascot() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]" aria-hidden="true">
      <div className="absolute inset-32 rounded-[40%] bg-parchment" />
      <div className="absolute left-[18%] top-[12%] h-[72%] w-[64%] rounded-[46%] border-2 border-crypt-ink bg-bone-white" />
      <div className="absolute left-[28%] top-[6%] h-[18%] w-[18%] rounded-full border-2 border-crypt-ink bg-blood-rose" />
      <div className="absolute right-[24%] top-[8%] h-[16%] w-[16%] rounded-full border-2 border-crypt-ink bg-candle-gold" />
      <div className="absolute left-[30%] top-[30%] h-[9%] w-[9%] rounded-full bg-crypt-ink" />
      <div className="absolute right-[34%] top-[30%] h-[9%] w-[9%] rounded-full bg-crypt-ink" />
      <div className="absolute left-[43%] top-[41%] h-[8%] w-[14%] rounded-full bg-blood-rose" />
      <div className="absolute bottom-[18%] left-[24%] h-[16%] w-[52%] rounded-[999px] border-2 border-crypt-ink bg-hollow-green" />
      <div className="absolute bottom-[9%] right-[12%] h-[30%] w-[18%] rounded-xl border-2 border-crypt-ink bg-candle-gold">
        <div className="mx-auto mt-12 h-[45%] w-[55%] rounded-full bg-bone-white" />
      </div>
      <div className="absolute bottom-[8%] left-[10%] h-[16%] w-[26%] rounded-xl border-2 border-crypt-ink bg-grape-soda" />
      <div className="absolute bottom-[2%] left-[18%] h-[8%] w-[64%] rounded-full bg-cloud-gray" />
    </div>
  );
}

export function OfficialMediaCard({
  media,
  className = "",
  imageClassName = "aspect-video w-full object-cover",
  priority = false,
}: {
  media: GameMedia;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-xl border-2 border-cloud-gray bg-snow-white ${className}`}
    >
      <Image
        alt={media.alt}
        className={imageClassName}
        height={1080}
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        src={media.src}
        width={1920}
      />
    </figure>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bone-white text-crypt-ink">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-cloud-gray bg-bone-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-page items-center justify-between gap-16 px-16 py-12 md:px-24">
        <Link className="flex items-center gap-10 font-feather text-heading-sm text-hollow-green" href="/">
          <span className="grid size-36 place-items-center rounded-xl border-2 border-crypt-ink bg-hollow-green text-snow-white shadow-[0_4px_0_#3f8f01]">
            H
          </span>
          Hollow Guidebook
        </Link>
        <div className="hidden items-center gap-12 md:flex">
          <Link className="nav-link" href="/beginner-guide">
            Beginner
          </Link>
          <Link className="nav-link" href="/trinkets">
            Trinkets
          </Link>
          <Link className="nav-link" href="/steam-deck-settings">
            Steam Deck
          </Link>
          <Link className="nav-link" href="/map">
            Map
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-cloud-gray bg-snow-white">
      <div className="mx-auto grid max-w-page gap-24 px-16 py-32 md:grid-cols-[1.4fr_1fr] md:px-24">
        <div>
          <p className="font-feather text-heading-sm text-hollow-green">Hollow Guidebook</p>
          <p className="mt-8 max-w-2xl text-body leading-body tracking-body text-grave-gray">
            Mina the Hollower guides for routes, weapons, trinkets,
            platforms, saves, and first-run decisions.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <SecondaryLink href="/release-date-platforms">Platforms</SecondaryLink>
          <SecondaryLink href="/review-roundup">Reviews</SecondaryLink>
        </div>
      </div>
    </footer>
  );
}

export function GuideSections({ guide }: { guide: Guide }) {
  return (
    <div className="grid gap-24">
      {guide.sections.map((section, index) => (
        <section className="min-w-0 rounded-xl border-2 border-cloud-gray bg-snow-white p-24" key={section.heading}>
          <div className="grid min-w-0 items-stretch gap-20 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="min-w-0">
              <h2 className="font-feather text-heading text-hollow-green">{section.heading}</h2>
              {section.body?.map((paragraph) => (
                <p className="mt-16 break-words text-body leading-body tracking-body text-crypt-ink" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              {section.checklist && (
                <ul className="mt-16 grid gap-12">
                  {section.checklist.map((item) => (
                    <li className="flex min-w-0 gap-12 text-body leading-body tracking-body" key={item}>
                      <Sparkles className="mt-1 shrink-0 text-candle-gold" size={18} strokeWidth={3} />
                      <span className="min-w-0 break-words">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <OfficialMediaCard
              className="h-full min-h-[260px]"
              imageClassName="h-full min-h-[260px] w-full object-cover"
              media={getGuideImage(guide.slug, index + 1)}
            />
          </div>
          {section.table && <GuideTable table={section.table} />}
        </section>
      ))}
    </div>
  );
}

export function GuideAtGlance({ guide }: { guide: Guide }) {
  const firstSection = guide.sections[0];
  const firstChecklist = firstSection?.checklist?.slice(0, 3) ?? [];
  const firstRows = firstSection?.table?.rows.slice(0, 3) ?? [];

  return (
    <section className="min-w-0 rounded-xl border-2 border-cloud-gray bg-snow-white p-24">
      <h2 className="font-feather text-heading text-hollow-green">At a glance</h2>
      <div className="mt-16 grid min-w-0 gap-16 lg:grid-cols-3">
        <div className="min-w-0 rounded-xl border-2 border-cloud-gray bg-parchment p-16">
          <p className="text-caption font-bold uppercase tracking-caption text-grave-gray">
            Best for
          </p>
          <p className="mt-8 break-words text-body leading-body tracking-body text-crypt-ink">
            {guide.searchIntent}
          </p>
        </div>
        <div className="min-w-0 rounded-xl border-2 border-cloud-gray bg-parchment p-16">
          <p className="text-caption font-bold uppercase tracking-caption text-grave-gray">
            Start with
          </p>
          <p className="mt-8 break-words text-body leading-body tracking-body text-crypt-ink">
            {firstChecklist[0] ?? firstRows[0]?.[0] ?? "Read the quick answer, then use the table below."}
          </p>
        </div>
        <div className="min-w-0 rounded-xl border-2 border-cloud-gray bg-parchment p-16">
          <p className="text-caption font-bold uppercase tracking-caption text-grave-gray">
            Next step
          </p>
          <p className="mt-8 break-words text-body leading-body tracking-body text-crypt-ink">
            {firstChecklist[1] ?? firstRows[1]?.[1] ?? "Open a related guide when the next decision appears in-game."}
          </p>
        </div>
      </div>
    </section>
  );
}

function GuideTable({ table }: { table: GuideTableType }) {
  return (
    <>
      <div className="mt-18 grid gap-12 md:hidden">
        {table.rows.map((row) => (
          <div className="rounded-xl border-2 border-cloud-gray bg-parchment p-16" key={row.join("-")}>
            {row.map((cell, index) => (
              <div className="mt-10 first:mt-0" key={`${cell}-${index}`}>
                <p className="text-caption font-bold uppercase tracking-caption text-grave-gray">
                  {table.columns[index]}
                </p>
                <p className="mt-4 break-words text-body leading-body tracking-body text-crypt-ink">
                  {cell}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-18 hidden overflow-hidden rounded-xl border-2 border-cloud-gray md:block">
      <table className="min-w-[720px] w-full border-collapse bg-snow-white text-left">
        <caption className="sr-only">{table.caption}</caption>
        <thead className="bg-parchment">
          <tr>
            {table.columns.map((column) => (
              <th
                className="border-b-2 border-cloud-gray px-16 py-12 text-caption font-bold uppercase tracking-caption text-crypt-ink"
                key={column}
                scope="col"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr className="border-b border-cloud-gray last:border-b-0" key={row.join("-")}>
              {row.map((cell, index) => (
                <td
                  className="px-16 py-14 text-body leading-body tracking-body text-crypt-ink"
                  key={`${cell}-${index}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export function Sources({ guide }: { guide: Guide }) {
  const sourceKeys = Array.from(new Set(guide.sources));

  return (
    <section className="rounded-xl border-2 border-cloud-gray bg-snow-white p-24">
      <h2 className="text-heading-sm font-bold tracking-heading-sm">Further reading</h2>
      <ul className="mt-16 flex flex-wrap gap-12">
        {sourceKeys.map((key) => {
          const source = sources[key];
          return (
            <li key={key}>
              <a
                className="inline-flex items-center gap-8 rounded-xl border-2 border-cloud-gray px-16 py-12 text-caption font-bold uppercase tracking-caption text-plasma-blue transition hover:border-plasma-blue"
                href={source.url}
                rel="noreferrer"
                target="_blank"
              >
                {source.label}
                <ExternalLink size={16} strokeWidth={3} />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function RelatedGuides({ guide }: { guide: Guide }) {
  const related = getRelatedGuides(guide);

  return (
    <section className="rounded-xl border-2 border-cloud-gray bg-snow-white p-24">
      <h2 className="text-heading-sm font-bold tracking-heading-sm">Related Guides</h2>
      <div className="mt-16 grid gap-12 sm:grid-cols-2">
        {related.map((item) => (
          <Link
            className="rounded-xl border-2 border-cloud-gray bg-bone-white p-16 transition hover:border-plasma-blue"
            href={`/${item.slug}`}
            key={item.slug}
          >
            <span className="text-caption font-bold uppercase tracking-caption text-plasma-blue">
              {item.eyebrow}
            </span>
            <span className="mt-6 block text-body font-bold tracking-body">{item.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function FaqBlock() {
  return null;
}

export function GuideHero({ guide }: { guide: Guide }) {
  const heroMedia = getGuideImage(guide.slug, 0);

  return (
    <section className="mx-auto max-w-page px-16 py-32 md:px-24 md:py-40">
      <OfficialMediaCard
        media={heroMedia}
        imageClassName="h-[220px] w-full object-cover sm:h-[300px] md:h-[360px]"
        priority
      />
      <div className="mt-24 max-w-3xl">
        <p className="text-caption font-bold uppercase tracking-caption text-grave-gray">
          {guide.eyebrow}
        </p>
        <h1 className="font-feather text-heading-lg leading-heading-lg tracking-heading-lg text-hollow-green md:text-display md:leading-display md:tracking-display">
          {guide.title}
        </h1>
        <p className="mt-16 max-w-2xl text-heading-sm leading-[1.35] tracking-heading-sm text-crypt-ink">
          {guide.description}
        </p>
        <div className="mt-18 rounded-xl border-2 border-hollow-green bg-duo-green-light p-16">
          <h2 className="text-caption font-bold uppercase tracking-caption text-crypt-ink">
            Quick Answer
          </h2>
          <p className="mt-8 text-body leading-body tracking-body text-crypt-ink">
            {guide.quickAnswer}
          </p>
        </div>
      </div>
    </section>
  );
}

export function GuideLayout({ guide }: { guide: Guide }) {
  return (
    <PageShell>
      <main>
        <GuideHero guide={guide} />
        <div className="mx-auto grid max-w-page gap-24 px-16 pb-64 md:px-24">
          <GuideAtGlance guide={guide} />
          <GuideSections guide={guide} />
          <Sources guide={guide} />
          <RelatedGuides guide={guide} />
        </div>
      </main>
    </PageShell>
  );
}

export function IconBadge({ type }: { type: "map" | "gamepad" | "alert" }) {
  const iconClass = "text-snow-white";
  const Icon = type === "map" ? Map : type === "gamepad" ? Gamepad2 : ShieldAlert;

  return (
    <span className="grid size-48 place-items-center rounded-xl border-2 border-crypt-ink bg-hollow-green shadow-[0_4px_0_#3f8f01]">
      <Icon className={iconClass} size={24} strokeWidth={3} />
    </span>
  );
}
