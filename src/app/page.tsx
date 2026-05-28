import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  Clock3,
  Gamepad2,
  Map,
  Monitor,
  ShieldAlert,
} from "lucide-react";
import {
  IconBadge,
  OfficialMediaCard,
  PageShell,
  PrimaryButton,
} from "@/components/guide-ui";
import {
  getSiteUrl,
  gameImages,
  guides,
  hubQuickAnswer,
  siteConfig,
} from "@/lib/site";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Mina the Hollower Guides | Weapons, Trinkets, Bosses",
  description:
    "Mina the Hollower guides for beginners, weapons, trinkets, bosses, platforms, save behavior, Steam Deck settings, and route notes.",
  alternates: {
    canonical: getSiteUrl(),
  },
  openGraph: {
    title: "Mina the Hollower Guides | Hollow Guidebook",
    description:
      "Mina the Hollower guides for beginners, weapons, trinkets, bosses, platforms, save behavior, Steam Deck settings, and route notes.",
    url: getSiteUrl(),
    siteName: siteConfig.name,
    type: "website",
  },
};

const startCards = [
  {
    title: "Start the first hour safely",
    text: "Learn the core controls, spend resources before risky routes, and avoid early habits that make bosses harder than they need to be.",
    href: "/beginner-guide",
    cta: "Open beginner guide",
    icon: <BookOpenCheck size={24} strokeWidth={3} />,
  },
  {
    title: "Pick a weapon by play style",
    text: "Use reach, recovery, and boss comfort as the early decision points instead of chasing a single permanent best weapon.",
    href: "/weapons",
    cta: "Compare weapons",
    icon: <Gamepad2 size={24} strokeWidth={3} />,
  },
  {
    title: "Check platform fit before buying",
    text: "Compare PC, Steam Deck, and console considerations before choosing where to play.",
    href: "/switch-vs-pc",
    cta: "Compare platforms",
    icon: <Monitor size={24} strokeWidth={3} />,
  },
];

const systems = [
  {
    system: "Weapons",
    playerQuestion: "Which starting style is safest?",
    answer: "Prioritize readable reach and recovery timing while learning rooms.",
    href: "/weapons",
  },
  {
    system: "Trinkets",
    playerQuestion: "Which build pieces are worth tracking?",
    answer: "Track effect, location, best use, and route value together.",
    href: "/trinkets",
  },
  {
    system: "Boss prep",
    playerQuestion: "What needs checking before entering a fight?",
    answer: "Confirm resources, safe setup, arena hazards, and the nearest return point.",
    href: "/bosses",
  },
  {
    system: "Saving",
    playerQuestion: "What progress is safe before a risky route?",
    answer: "Check return location, resources, upgrades, and inventory after each save.",
    href: "/save-system",
  },
  {
    system: "Map notes",
    playerQuestion: "How should route guidance be followed?",
    answer: "Use landmarks, risk notes, and return paths instead of area names alone.",
    href: "/map",
  },
];

export default function Home() {
  const siteUrl = getSiteUrl();
  const heroMedia = gameImages[14];

  return (
    <PageShell>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteConfig.name,
            url: siteUrl,
            description: siteConfig.description,
          },
          {
            "@context": "https://schema.org",
            "@type": "VideoGame",
            name: siteConfig.gameName,
            url: "https://www.yachtclubgames.com/games/mina-the-hollower/",
            publisher: {
              "@type": "Organization",
              name: "Yacht Club Games",
            },
            genre: ["Action-adventure", "Platformer"],
          },
        ]}
      />
      <main>
        <section className="relative min-h-[620px] overflow-hidden bg-crypt-ink">
          <Image
            alt={heroMedia.alt}
            className="absolute inset-0 h-full w-full object-cover object-[62%_50%]"
            fill
            priority
            sizes="100vw"
            src={heroMedia.src}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(27,16,18,0.94)_0%,rgba(31,18,21,0.82)_36%,rgba(31,18,21,0.32)_68%,rgba(31,18,21,0.12)_100%)]" />
          <div className="relative z-20 mx-auto flex min-h-[620px] max-w-page items-end px-16 pb-[104px] pt-40 md:px-24 md:pb-[112px] md:pt-48">
            <div className="max-w-3xl">
              <p className="mb-14 text-caption font-bold uppercase tracking-caption text-candle-gold">
                Mina the Hollower guide hub
              </p>
              <h1 className="font-feather text-heading-lg leading-heading-lg tracking-heading-lg text-snow-white md:text-display md:leading-display md:tracking-display">
                Mina the Hollower guides for a safer first run.
              </h1>
              <p className="mt-16 max-w-2xl text-heading-sm leading-[1.35] tracking-heading-sm text-snow-white/90">
                {hubQuickAnswer}
              </p>
              <div className="mt-24 flex flex-wrap gap-16">
                <PrimaryButton href="/beginner-guide">Start the first hour</PrimaryButton>
                <Link
                  className="inline-flex min-h-48 items-center justify-center rounded-xl border-2 border-snow-white/70 bg-snow-white px-24 py-14 text-caption font-bold uppercase tracking-caption text-plasma-blue transition hover:border-plasma-blue"
                  href="/trinkets"
                >
                  Open trinket guide
                </Link>
              </div>
            </div>
          </div>
          <HeroPlayfulEdge />
        </section>

        <section className="mx-auto max-w-page px-16 pb-80 pt-48 md:px-24">
          <SectionHeader
            eyebrow="Start here"
            title="Three useful paths before scrolling."
            text="Pick the current problem: starting the game, choosing gear, or deciding which platform to play on."
          />
          <div className="grid gap-16 md:grid-cols-3">
            {startCards.map((card) => (
              <ActionCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-page px-16 pb-80 md:px-24">
          <SectionHeader
            eyebrow="Guide library"
            title="Find the exact page for the problem."
            text="Each card leads to a focused page with a quick answer, practical decisions, gameplay images, and deeper player context."
          />
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide, index) => (
              <Link
                className="group rounded-xl border-2 border-cloud-gray bg-snow-white p-24 transition hover:border-plasma-blue"
                href={`/${guide.slug}`}
                key={guide.slug}
              >
                <OfficialMediaCard
                  className="-m-24 mb-16 rounded-b-none border-0 border-b-2"
                  imageClassName="h-[150px] w-full object-cover"
                  media={gameImages[index]}
                />
                <div className="mb-18 flex items-center justify-between gap-12">
                  <IconBadge type={index % 3 === 0 ? "gamepad" : index % 3 === 1 ? "map" : "alert"} />
                  <ArrowRight
                    className="text-plasma-blue transition group-hover:translate-x-1"
                    size={20}
                    strokeWidth={3}
                  />
                </div>
                <p className="text-caption font-bold uppercase tracking-caption text-grave-gray">
                  {guide.eyebrow}
                </p>
                <h3 className="mt-8 text-heading-sm font-bold tracking-heading-sm">
                  {guide.title}
                </h3>
                <p className="mt-10 text-body leading-body tracking-body text-grave-gray">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-page px-16 pb-80 md:px-24">
          <div className="grid gap-24 rounded-xl border-2 border-cloud-gray bg-snow-white p-24 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <OfficialMediaCard media={gameImages[11]} />
              <div className="mt-16 rounded-xl border-2 border-cloud-gray bg-parchment p-16">
                <p className="text-caption font-bold uppercase tracking-caption text-grave-gray">
                  Best use
                </p>
                <p className="mt-8 text-body leading-body tracking-body text-crypt-ink">
                  Use this table when the current blocker is clear, but the right guide page
                  has the answer.
                </p>
              </div>
            </div>
            <div>
              <SectionHeader
                eyebrow="Systems"
                title="What each guide helps decide."
                text="The site is organized around player tasks, not raw keywords. Use the table to jump from an in-game problem to the right guide."
              />
              <div className="md:hidden">
                <div className="grid gap-12">
                  {systems.map((item) => (
                    <Link
                      className="rounded-xl border-2 border-cloud-gray bg-parchment p-16 transition hover:border-plasma-blue"
                      href={item.href}
                      key={item.system}
                    >
                      <span className="text-caption font-bold uppercase tracking-caption text-plasma-blue">
                        {item.system}
                      </span>
                      <span className="mt-8 block text-body font-bold leading-body tracking-body text-crypt-ink">
                        {item.playerQuestion}
                      </span>
                      <span className="mt-6 block text-body leading-body tracking-body text-grave-gray">
                        {item.answer}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden overflow-hidden rounded-xl border-2 border-cloud-gray md:block">
                <table className="min-w-[720px] w-full border-collapse bg-snow-white text-left">
                  <caption className="sr-only">Mina the Hollower guide systems table</caption>
                  <thead className="bg-parchment">
                    <tr>
                      <th className="border-b-2 border-cloud-gray px-16 py-12 text-caption font-bold uppercase tracking-caption">
                        System
                      </th>
                      <th className="border-b-2 border-cloud-gray px-16 py-12 text-caption font-bold uppercase tracking-caption">
                        Player question
                      </th>
                      <th className="border-b-2 border-cloud-gray px-16 py-12 text-caption font-bold uppercase tracking-caption">
                        First answer
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {systems.map((item) => (
                      <tr className="border-b border-cloud-gray last:border-b-0" key={item.system}>
                        <td className="px-16 py-14 text-body font-bold tracking-body">
                          <Link className="text-plasma-blue hover:underline" href={item.href}>
                            {item.system}
                          </Link>
                        </td>
                        <td className="px-16 py-14 text-body leading-body tracking-body">
                          {item.playerQuestion}
                        </td>
                        <td className="px-16 py-14 text-body leading-body tracking-body text-grave-gray">
                          {item.answer}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-page px-16 pb-80 md:px-24">
          <SectionHeader
            eyebrow="Gallery"
            title="Gameplay images for quick context."
            text="Use these images to understand the game's combat rooms, map screens, dialogue scenes, and platforming spaces before opening a specific guide."
          />
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
            {gameImages.slice(15, 21).map((media) => (
              <OfficialMediaCard key={media.src} media={media} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-page px-16 pb-80 md:px-24">
          <div className="grid gap-16 md:grid-cols-3">
            <InfoTile
              icon={<Clock3 size={24} strokeWidth={3} />}
              title="For a 10-minute session"
              text="Open the beginner guide, read the first-hour checklist, then check the save-system page before taking a risky route."
            />
            <InfoTile
              icon={<ShieldAlert size={24} strokeWidth={3} />}
              title="When a route is stuck"
              text="Use boss prep and trinket notes together. One explains the fight habit; the other narrows the build problem causing repeated deaths."
            />
            <InfoTile
              icon={<Map size={24} strokeWidth={3} />}
              title="When mapping routes"
              text="Record landmarks, danger, and a return path. Area names alone are rarely enough for clean backtracking."
            />
          </div>
        </section>
      </main>
    </PageShell>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mb-24 max-w-3xl">
      <p className="text-caption font-bold uppercase tracking-caption text-grave-gray">{eyebrow}</p>
      <h2 className="mt-8 font-feather text-heading-lg leading-heading-lg tracking-heading-lg text-hollow-green">
        {title}
      </h2>
      <p className="mt-12 text-body leading-body tracking-body text-grave-gray">{text}</p>
    </div>
  );
}

function ActionCard({
  icon,
  title,
  text,
  href,
  cta,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      className="group rounded-xl border-2 border-cloud-gray bg-snow-white p-24 transition hover:border-plasma-blue"
      href={href}
    >
      <div className="grid size-48 place-items-center rounded-xl border-2 border-crypt-ink bg-hollow-green text-snow-white shadow-[0_4px_0_#3f8f01]">
        {icon}
      </div>
      <h2 className="mt-16 text-heading-sm font-bold tracking-heading-sm">{title}</h2>
      <p className="mt-8 text-body leading-body tracking-body text-grave-gray">{text}</p>
      <span className="mt-16 inline-flex items-center gap-8 text-caption font-bold uppercase tracking-caption text-plasma-blue">
        {cta}
        <ArrowRight size={16} strokeWidth={3} className="transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

function InfoTile({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border-2 border-cloud-gray bg-parchment p-24">
      <div className="grid size-48 place-items-center rounded-xl border-2 border-crypt-ink bg-candle-gold text-crypt-ink">
        {icon}
      </div>
      <h2 className="mt-16 text-heading-sm font-bold tracking-heading-sm">{title}</h2>
      <p className="mt-8 text-body leading-body tracking-body text-grave-gray">{text}</p>
    </div>
  );
}

function HeroPlayfulEdge() {
  const stickers = [
    { label: "ROUTE", className: "left-[8%] top-[26px] rotate-[-5deg] bg-candle-gold" },
    { label: "BOSS", className: "left-[32%] top-[44px] rotate-[4deg] bg-blood-rose text-snow-white" },
    { label: "MAP", className: "right-[30%] top-[24px] rotate-[7deg] bg-plasma-blue text-snow-white" },
    { label: "GEAR", className: "right-[8%] top-[50px] rotate-[-4deg] bg-hollow-green text-snow-white" },
  ];

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[126px]" aria-hidden="true">
      <div className="absolute inset-x-0 bottom-[-2px] h-[88px] bg-bone-white [clip-path:polygon(0_36%,7%_26%,14%_42%,21%_22%,29%_39%,36%_30%,44%_46%,53%_25%,61%_40%,70%_29%,78%_45%,87%_27%,100%_39%,100%_100%,0_100%)]" />
      <div className="absolute inset-x-0 bottom-[20px] mx-auto hidden h-[82px] max-w-page md:block">
        {stickers.map((sticker) => (
          <span
            className={`absolute rounded-xl border-2 border-crypt-ink px-14 py-8 text-caption font-bold tracking-caption shadow-[0_4px_0_rgba(60,47,47,0.55)] ${sticker.className}`}
            key={sticker.label}
          >
            {sticker.label}
          </span>
        ))}
        <span className="absolute left-[22%] top-[58px] size-12 rotate-45 rounded-[3px] border-2 border-crypt-ink bg-candle-gold" />
        <span className="absolute right-[20%] top-[36px] size-16 rounded-full border-2 border-crypt-ink bg-bone-white" />
        <span className="absolute right-[45%] top-[64px] h-10 w-28 rounded-full border-2 border-crypt-ink bg-parchment" />
      </div>
    </div>
  );
}
