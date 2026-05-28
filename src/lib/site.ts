export const siteConfig = {
  name: "Hollow Guidebook",
  gameName: "Mina the Hollower",
  defaultUrl: "https://minathehollower.base64pro.top",
  description:
    "Mina the Hollower guides for routes, weapons, trinkets, bosses, platforms, saves, and first-run decisions.",
  author: "Hollow Guidebook editors",
  lastChecked: "2026-05-28",
};

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || siteConfig.defaultUrl).replace(
    /\/$/,
    "",
  );
}

export type GuideNote = "Verified" | "Use with notes" | "Store page";

export type Source = {
  label: string;
  url: string;
  note: string;
};

export type GuideTable = {
  caption: string;
  columns: string[];
  rows: string[][];
};

export type GameMedia = {
  src: string;
  alt: string;
  caption: string;
};

export type GuideSection = {
  heading: string;
  body?: string[];
  checklist?: string[];
  table?: GuideTable;
};

export type ImageSlot = {
  label: string;
  note: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Guide = {
  slug: string;
  navTitle: string;
  title: string;
  eyebrow: string;
  description: string;
  searchIntent: string;
  progress: GuideNote;
  updatedAt: string;
  quickAnswer: string;
  verifiedOn: {
    platform: string;
    version: string;
    imageCount: number;
    note: string;
  };
  checked: string[];
  sections: GuideSection[];
  imageSlots: ImageSlot[];
  faqs: Faq[];
  related: string[];
  sources: string[];
  updateLog: string[];
};

export const sources: Record<string, Source> = {
  steam: {
    label: "Steam store",
    url: "https://store.steampowered.com/app/1875580/Mina_the_Hollower/",
    note: "Storefront details, PC availability, language support, system requirements, and Steam Deck information.",
  },
  official: {
    label: "Yacht Club Games",
    url: "https://www.yachtclubgames.com/games/mina-the-hollower/",
    note: "Game description, trailer links, and platform messaging.",
  },
  press: {
    label: "Yacht Club Games press kit",
    url: "https://www.yachtclubgames.com/press/mina-the-hollower/",
    note: "Images, logos, and launch material.",
  },
  gamesearBeginner: {
    label: "Gamesear beginner guide",
    url: "https://www.gamesear.com/tips-and-guides/mina-the-hollower-beginners-guide-11-things-i-wish-i-knew-before-starting",
    note: "External player-facing beginner coverage used for search intent comparison only.",
  },
  steamDeckHq: {
    label: "SteamDeckHQ review",
    url: "https://steamdeckhq.com/game-reviews/mina-the-hollower/",
    note: "External performance-focused Steam Deck coverage.",
  },
  rpgSitePlatform: {
    label: "RPG Site platform impressions",
    url: "https://www.rpgsite.net/feature/20428-mina-the-hollower-switch-2-vs-steam-deck-ps5-pro-rog-ally-pc-hdr",
    note: "External platform comparison coverage.",
  },
  rpgSiteDeck: {
    label: "RPG Site Steam Deck progress",
    url: "https://www.rpgsite.net/news/20347-mina-the-hollower-steam-deck-verified-valve-rating",
    note: "External Steam Deck verification coverage.",
  },
};

export const gameImages: GameMedia[] = [
  {
    src: "/images/mina/mina-screenshot-01.webp",
    alt: "Mina the Hollower image showing Mina in a gothic action room",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-02.webp",
    alt: "Mina the Hollower image with exploration and enemies",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-03.webp",
    alt: "Mina the Hollower image showing a platforming room",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-04.webp",
    alt: "Mina the Hollower image showing dungeon combat",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-05.webp",
    alt: "Mina the Hollower image with character dialogue",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-06.webp",
    alt: "Mina the Hollower image showing a hazardous room",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-07.webp",
    alt: "Mina the Hollower image with a dark area encounter",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-08.webp",
    alt: "Mina the Hollower image showing side-scrolling action",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-09.webp",
    alt: "Mina the Hollower image showing a bright outdoor area",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-10.webp",
    alt: "Mina the Hollower image showing a boss-like encounter",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-11.webp",
    alt: "Mina the Hollower image with an interior scene",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-12.webp",
    alt: "Mina the Hollower image with a map-like game area",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-13.webp",
    alt: "Mina the Hollower image showing combat and hazards",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-14.webp",
    alt: "Mina the Hollower image showing a late area scene",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-15.webp",
    alt: "Mina the Hollower image showing action gameplay",
    caption: "Mina the Hollower gameplay image.",
  },
];

export function getGameImage(seed: string, offset = 0) {
  const total = gameImages.length;
  const hash = seed
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);

  return gameImages[(hash + offset) % total];
}

const baseTest = {
  platform: "PC / Steam",
  version: "Launch source notes",
  imageCount: 0,
  note: "Gameplay images are shown for visual context; player-specific records can be added to exact steps.",
};

export const guides: Guide[] = [
  {
    slug: "beginner-guide",
    navTitle: "Beginner",
    title: "Mina the Hollower Beginner Guide",
    eyebrow: "First hour route",
    description:
      "A first-session Mina the Hollower guide focused on safe habits, early upgrades, and avoiding costly deaths.",
    searchIntent: "beginner guide, things to do first",
    progress: "Use with notes",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Start slowly, learn the burrow move before chasing damage, and spend currency before risky routes. The safest first hour is about reading enemy arcs, checking each weapon once, and returning to safe points whenever you have enough resources for an upgrade.",
    verifiedOn: baseTest,
    checked: [
      "Opening route structure and early decision points are being logged on PC / Steam.",
      "Weapon feel, upgrade timing, and death penalty notes are marked Use with notes until images are attached.",
      "Platform and store details are separated from hands-on notes.",
    ],
    sections: [
      {
        heading: "First hour checklist",
        checklist: [
          "Open the controls screen before the first combat room and confirm burrow, jump, attack, and sidearm inputs.",
          "Fight the first enemy group without spending sidearm resources so you can learn safe attack spacing.",
          "Return to a safe point before exploring an unknown branch with a large currency stack.",
          "Record the first upgrade cost you see, then decide whether to bank progress or push forward.",
          "Take one image after each new mechanic so the guide can be updated with exact UI labels.",
        ],
      },
      {
        heading: "Early choices that matter",
        body: [
          "The early game rewards patience more than speed. Most mistakes come from treating rooms like a pure action platformer when the safer play is to bait one enemy at a time, burrow away from bad angles, and reset the room before your health is low.",
          "If a path asks you to cross hazards while carrying resources, treat that path as a scouting trip. The guide should show the route, the risk, and the closest return point instead of telling players to push forward blindly.",
        ],
        table: {
          caption: "Beginner decisions to verify during PC checking",
          columns: ["Decision", "Safe default", "Why it helps", "Guide note"],
          rows: [
            [
              "First weapon comfort",
              "Use the weapon with the clearest reach",
              "Reach gives new players more room to read enemy movement.",
              "Use with notes",
            ],
            [
              "Currency spending",
              "Spend before long unknown routes",
              "It reduces frustration when a first-time route goes badly.",
              "Use with notes",
            ],
            [
              "Sidearm use",
              "Save for shielded or awkward enemies",
              "Early rooms teach spacing better when sidearms are not wasted.",
              "Use with notes",
            ],
          ],
        },
      },
      {
        heading: "Common early mistakes",
        checklist: [
          "Do not chase a damaged enemy through hazards unless the route back is already safe.",
          "Do not swap multiple build pieces at once; change one item, then check one room.",
          "Do not assume a room is solved after one clear; note whether the route is safe with low health.",
        ],
      },
    ],
    imageSlots: [
      {
        label: "Controls screen",
        note: "Record the default PC / Steam bindings before changing anything.",
      },
      {
        label: "First upgrade choice",
        note: "Record the first upgrade menu with visible cost and description.",
      },
    ],
    faqs: [
      {
        question: "What should I do first in Mina the Hollower?",
        answer:
          "Learn the controls, check basic enemy spacing, and spend resources before taking risky unexplored routes.",
      },
      {
        question: "Is this guide based on finished checking?",
        answer:
          "No. The first version is marked Use with notes until original PC / Steam images and route notes are added.",
      },
    ],
    related: ["weapons", "save-system", "trinkets", "map"],
    sources: ["steam", "official", "gamesearBeginner"],
    updateLog: [
      "2026-05-28: Created launch structure with Use with notes labels and image notes.",
    ],
  },
  {
    slug: "weapons",
    navTitle: "Weapons",
    title: "Mina the Hollower Weapons Guide",
    eyebrow: "Starting weapon notes",
    description:
      "Weapon comparison notes for Mina the Hollower, focused on early comfort, reach, timing, and player type.",
    searchIntent: "best starting weapon, weapons guide",
    progress: "Use with notes",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Pick the weapon that lets you read rooms safely, not the one that looks strongest on paper. For the first run, prioritize reach, recovery timing, and how easy it is to hit small enemies without standing inside danger.",
    verifiedOn: baseTest,
    checked: [
      "Weapon names and exact move details need player confirmation before being marked Verified.",
      "The first version compares player needs rather than claiming a final best weapon.",
      "Images will record selection UI, attack range, and upgrade wording.",
    ],
    sections: [
      {
        heading: "How to choose a starting weapon",
        body: [
          "A good early weapon should help you learn the room. If it keeps you at a readable distance, has a clear hitbox, and does not leave you stuck after a missed swing, it is probably the right first choice even if another weapon deals more damage later.",
        ],
        table: {
          caption: "Weapon choice framework",
          columns: ["Player need", "Choose for", "Avoid if", "Guide note"],
          rows: [
            [
              "Safer first run",
              "Reach and simple timing",
              "You want the fastest room clears",
              "Use with notes",
            ],
            [
              "Aggressive play",
              "Fast recovery and close pressure",
              "You are still learning enemy arcs",
              "Use with notes",
            ],
            [
              "Boss practice",
              "Consistent single-target hits",
              "The weapon whiffs on small targets",
              "Use with notes",
            ],
          ],
        },
      },
      {
        heading: "What to image",
        checklist: [
          "Selection screen with weapon names visible.",
          "One neutral attack image against a standard enemy.",
          "One missed attack recovery image to show risk.",
          "Upgrade menu wording before and after the first purchase.",
        ],
      },
      {
        heading: "Early recommendation logic",
        body: [
          "The guide should not declare a permanent best weapon on day one. The useful version is a decision table that lets players match a weapon to their goal: safer exploration, boss practice, or faster room clears.",
        ],
      },
    ],
    imageSlots: [
      {
        label: "Weapon select",
        note: "Add the first PC / Steam weapon selection image here.",
      },
      {
        label: "Attack range check",
        note: "Show the same enemy distance for each checked weapon.",
      },
    ],
    faqs: [
      {
        question: "What is the best starting weapon?",
        answer:
          "The safest recommendation is the weapon with the clearest reach and recovery timing until final PC checking is documented.",
      },
      {
        question: "Will this page rank weapons later?",
        answer:
          "Yes, but only after each weapon is checked in the same early rooms and the images are added.",
      },
    ],
    related: ["beginner-guide", "bosses", "trinkets", "save-system"],
    sources: ["steam", "official"],
    updateLog: [
      "2026-05-28: Added a player-first weapon comparison framework without final ranking claims.",
    ],
  },
  {
    slug: "trinkets",
    navTitle: "Trinkets",
    title: "Mina the Hollower Trinkets Guide",
    eyebrow: "Build pieces",
    description:
      "A verified-first trinket tracker for effects, locations, stage notes, images, and guide progress.",
    searchIntent: "trinket locations, best trinkets",
    progress: "Use with notes",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Use trinkets to solve the current problem: safer movement, steadier damage, or better resource control. This page starts as a verified tracker, so unknown locations stay marked Use with notes until an original image and route note are attached.",
    verifiedOn: baseTest,
    checked: [
      "No trinket entry is promoted to a standalone page until its effect and route are documented.",
      "Table rows can be updated one by one as images are recorded.",
      "Early recommendations avoid fixed counts until the guide tracker is filled.",
    ],
    sections: [
      {
        heading: "Launch tracker",
        body: [
          "The point of this page is fast lookup, not a wall of guesses. Each trinket row needs an effect, use case, route note, and image state before it can be treated as a reliable recommendation.",
        ],
        table: {
          caption: "Trinket tracker fields",
          columns: ["Field", "What it should tell players", "Example state", "Guide note"],
          rows: [
            [
              "Effect",
              "The exact benefit or tradeoff shown in-game",
              "Needs player check",
              "Use with notes",
            ],
            [
              "Location",
              "The nearest room, landmark, or route step",
              "Needs player check",
              "Use with notes",
            ],
            [
              "Best use",
              "Movement, boss safety, resource control, or damage",
              "Needs play check",
              "Use with notes",
            ],
            [
              "Image",
              "Inventory or pickup image with readable text",
              "Needs player image",
              "Use with notes",
            ],
          ],
        },
      },
      {
        heading: "How recommendations will work",
        checklist: [
          "A trinket must be checked in at least one normal room before being recommended for exploration.",
          "A trinket must be checked against a boss pattern before being recommended for boss fights.",
          "A location note must include a landmark, not just an area name.",
        ],
      },
      {
        heading: "Best early trinket criteria",
        body: [
          "The strongest early trinket is not always the highest damage item. For a first run, the most helpful trinket usually reduces mistakes: longer movement safety, easier recovery, clearer resource use, or a bonus that works even when the player is still learning.",
        ],
      },
    ],
    imageSlots: [
      {
        label: "First trinket pickup",
        note: "Record the pickup prompt and nearby route landmark.",
      },
      {
        label: "Inventory effect text",
        note: "Record the readable effect text before writing the row.",
      },
    ],
    faqs: [
      {
        question: "Are the trinket locations verified?",
        answer:
          "Not yet. Rows stay marked Use with notes until original pickup images and route notes are added.",
      },
      {
        question: "Should I build for damage first?",
        answer:
          "For a first run, survival and movement safety are usually easier to benefit from than pure damage.",
      },
    ],
    related: ["weapons", "bosses", "beginner-guide", "map"],
    sources: ["steam", "official"],
    updateLog: [
      "2026-05-28: Created tracker format and verification rules visible to players through guide notes.",
    ],
  },
  {
    slug: "bosses",
    navTitle: "Bosses",
    title: "Mina the Hollower Boss Order and Fight Notes",
    eyebrow: "Fight prep",
    description:
      "Boss order notes and fight preparation for Mina the Hollower, limited to encounters that have route or image evidence.",
    searchIntent: "boss order, boss strategy",
    progress: "Use with notes",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Treat boss pages as fight prep, not spoiler dumping. The useful first version lists only encounters that have been reached or publicly documented, then explains the safest weapon habits, resource checks, and image evidence still needed.",
    verifiedOn: baseTest,
    checked: [
      "Encounter names and order need PC / Steam route record before final wording.",
      "The first page avoids claiming a final boss count.",
      "Boss cards remain summary rows until a fight image and strategy note exist.",
    ],
    sections: [
      {
        heading: "Fight prep checklist",
        checklist: [
          "Return to a safe point before entering a suspicious arena door.",
          "Check sidearm resources before committing to a second attempt.",
          "Record whether the fight has adds, hazards, phase changes, or projectile walls.",
          "Record one image of the arena and one image of the victory or reward screen.",
        ],
      },
      {
        heading: "Boss note template",
        table: {
          caption: "Boss guide fields",
          columns: ["Field", "Player value", "Current state", "Guide note"],
          rows: [
            [
              "Encounter name",
              "Lets players search and match the fight",
              "Needs fight note",
              "Use with notes",
            ],
            [
              "Safe opening",
              "The first action that avoids early damage",
              "Needs fight note",
              "Use with notes",
            ],
            [
              "Recommended setup",
              "Weapon, trinket, and sidearm notes",
              "Needs fight note",
              "Use with notes",
            ],
            [
              "Common failure",
              "The mistake that causes repeat deaths",
              "Needs fight note",
              "Use with notes",
            ],
          ],
        },
      },
      {
        heading: "Spoiler policy",
        body: [
          "Fight pages should help players who are stuck without exposing late-game surprises in headings. Put spoiler-heavy names deeper in the page, and keep the first screen focused on preparation and navigation.",
        ],
      },
    ],
    imageSlots: [
      {
        label: "First arena",
        note: "Record the first boss arena entrance or opening pattern.",
      },
      {
        label: "Recommended setup",
        note: "Record inventory before the fight once a stable setup is found.",
      },
    ],
    faqs: [
      {
        question: "Does this page list every fight?",
        answer:
          "No. It lists only fights with route evidence or public source context, then marks the rest as Use with notes.",
      },
      {
        question: "Will boss pages get separate URLs?",
        answer:
          "Only after each encounter has a image, route note, and strategy that is useful on its own.",
      },
    ],
    related: ["weapons", "trinkets", "save-system", "map"],
    sources: ["steam", "official"],
    updateLog: [
      "2026-05-28: Added spoiler-safe boss guide structure without final encounter claims.",
    ],
  },
  {
    slug: "steam-deck-settings",
    navTitle: "Steam Deck",
    title: "Mina the Hollower Steam Deck Settings",
    eyebrow: "Handheld checking",
    description:
      "Steam Deck settings notes for Mina the Hollower, focused on frame rate, battery, readability, and control comfort.",
    searchIntent: "Steam Deck settings",
    progress: "Store page",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Use this page as a settings log, not a final benchmark. Public coverage indicates handheld interest is strong, but frame rate, battery, text readability, and controller images still need to be recorded before exact settings are marked Verified.",
    verifiedOn: {
      ...baseTest,
      platform: "Steam Deck reference-based notes",
      note: "Public sources are listed; original handheld images are not attached yet.",
    },
    checked: [
      "Steam Deck progress is sourced from public pages until a handheld check is available.",
      "Exact frame rate and battery values are not invented.",
      "The settings table is ready for measured values once recorded.",
    ],
    sections: [
      {
        heading: "Settings table to fill during checking",
        table: {
          caption: "Steam Deck check log",
          columns: ["Setting", "Launch default", "Test target", "Guide note"],
          rows: [
            ["Frame rate cap", "Needs device check", "Stable play first", "Use with notes"],
            ["TDP limit", "Needs device check", "Battery value after 20 minutes", "Use with notes"],
            ["Text readability", "Needs device check", "Readable UI at handheld distance", "Use with notes"],
            ["Controls", "Needs device check", "Comfortable burrow and sidearm access", "Use with notes"],
          ],
        },
      },
      {
        heading: "What matters most on handheld",
        checklist: [
          "Input latency matters more than visual tweaks for boss fights.",
          "Text readability should be checked in menus, inventory, and dialogue.",
          "Battery notes need a timed check, not a guess from one room.",
        ],
      },
      {
        heading: "Public source boundary",
        body: [
          "External handheld articles can establish that players are looking for platform guidance. They should not be used as a substitute for this site's own settings images or measured notes.",
        ],
      },
    ],
    imageSlots: [
      {
        label: "Performance overlay",
        note: "Record a 20-minute handheld check with the overlay visible.",
      },
      {
        label: "Menu readability",
        note: "Record inventory text at default handheld scale.",
      },
    ],
    faqs: [
      {
        question: "Are these Steam Deck settings final?",
        answer:
          "No. This first version is a handheld settings log; exact measurements should be updated after a timed device run.",
      },
      {
        question: "What should be checked first?",
        answer:
          "Start with frame stability, input feel, text readability, and battery use over a timed session.",
      },
    ],
    related: ["switch-vs-pc", "release-date-platforms", "weapons", "save-system"],
    sources: ["steam", "steamDeckHq", "rpgSiteDeck"],
    updateLog: [
      "2026-05-28: Added public-reference-based Deck page with measured-value placeholders.",
    ],
  },
  {
    slug: "save-system",
    navTitle: "Save System",
    title: "How Saving Works in Mina the Hollower",
    eyebrow: "Death and progress",
    description:
      "A practical save-system page explaining what to record, how to check progress loss, and what players should verify before risky routes.",
    searchIntent: "how to save",
    progress: "Use with notes",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Before taking a risky branch, confirm where the last safe point is and whether your current resources are protected. This guide is built to document checkpoint behavior with images instead of guessing how much progress is lost after death.",
    verifiedOn: baseTest,
    checked: [
      "Save point UI and death return behavior need local images.",
      "The guide uses a check checklist so readers know what has not been verified yet.",
      "Currency and upgrade persistence are not asserted until recorded.",
    ],
    sections: [
      {
        heading: "Save behavior check plan",
        table: {
          caption: "Save system checks",
          columns: ["Question", "How to check", "Why players care", "Guide note"],
          rows: [
            [
              "Where is progress saved?",
              "Record safe point UI before and after resting",
              "Prevents replaying a route by mistake",
              "Use with notes",
            ],
            [
              "What happens after death?",
              "Record return point and resource state",
              "Explains the real risk of scouting",
              "Use with notes",
            ],
            [
              "Do upgrades persist?",
              "Buy one upgrade, die, then check inventory",
              "Helps players decide when to spend",
              "Use with notes",
            ],
          ],
        },
      },
      {
        heading: "Safe habit for new players",
        checklist: [
          "Spend resources before checking a hazard-heavy path.",
          "Take a image of the safe point before entering a new branch.",
          "After death, check inventory, currency, and map progress before continuing.",
        ],
      },
    ],
    imageSlots: [
      {
        label: "Safe point UI",
        note: "Record the exact save prompt or resting screen.",
      },
      {
        label: "After death state",
        note: "Record currency and inventory immediately after returning.",
      },
    ],
    faqs: [
      {
        question: "Can I manually save anywhere?",
        answer:
          "This needs player confirmation. Until the save UI is recorded, treat risky branches as scouting trips.",
      },
      {
        question: "What should I check after dying?",
        answer:
          "Check return location, currency, upgrades, inventory, and map progress before pushing forward.",
      },
    ],
    related: ["beginner-guide", "map", "bosses", "how-long-to-beat"],
    sources: ["steam", "official"],
    updateLog: [
      "2026-05-28: Added save-system checking checklist without unsupported death-penalty claims.",
    ],
  },
  {
    slug: "how-long-to-beat",
    navTitle: "Play Time",
    title: "How Long Is Mina the Hollower?",
    eyebrow: "Time estimate",
    description:
      "Play time estimates for Mina the Hollower with separate tracks for first run, careful exploration, and future route checking.",
    searchIntent: "how long to beat",
    progress: "Use with notes",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Do not trust a single play-time number on launch day. A careful first run, a faster action-focused run, and a route-checking guide run will all produce different times, so this page tracks estimates separately until real save data is recorded.",
    verifiedOn: baseTest,
    checked: [
      "No final time claim is made before local save data is recorded.",
      "The table separates player style instead of presenting one number.",
      "Guide note images will be added at major route checkpoints.",
    ],
    sections: [
      {
        heading: "Time estimate tracker",
        table: {
          caption: "Play time categories",
          columns: ["Run type", "Who it fits", "What to measure", "Guide note"],
          rows: [
            [
              "First cautious run",
              "Players reading rooms and trying builds",
              "Save time at each major area",
              "Use with notes",
            ],
            [
              "Action-focused run",
              "Players skipping optional checks",
              "Time to credits once route is known",
              "Use with notes",
            ],
            [
              "Guide record run",
              "Players taking notes and images",
              "Extra time from documentation",
              "Use with notes",
            ],
          ],
        },
      },
      {
        heading: "What changes the length",
        checklist: [
          "How often you return to safe points before scouting.",
          "Whether you check multiple weapons and trinkets.",
          "How much route mapping and image record you do.",
          "How many boss attempts are needed before a clean clear.",
        ],
      },
    ],
    imageSlots: [
      {
        label: "Save time checkpoint",
        note: "Record the save screen at each route milestone.",
      },
      {
        label: "Guide note marker",
        note: "Record map or area label when a new major section starts.",
      },
    ],
    faqs: [
      {
        question: "Why is there no single time estimate yet?",
        answer:
          "A launch-day estimate without save data would be guesswork, so the page tracks categories until checking is logged.",
      },
      {
        question: "Will image record make the run longer?",
        answer:
          "Yes. A guide record run should be measured separately from a normal player run.",
      },
    ],
    related: ["beginner-guide", "map", "save-system", "bosses"],
    sources: ["steam", "official"],
    updateLog: [
      "2026-05-28: Added play-time tracker structure without a final hour claim.",
    ],
  },
  {
    slug: "release-date-platforms",
    navTitle: "Platforms",
    title: "Mina the Hollower Release Date and Platforms",
    eyebrow: "Buying facts",
    description:
      "Release date, platform, language, and store notes for Mina the Hollower with store and platform notes.",
    searchIntent: "release date, platforms, Chinese support",
    progress: "Store page",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Check the Steam store and Yacht Club pages before buying, because launch timing can display differently by region and storefront. This page keeps platform, language, and store facts separate from hands-on guide checking.",
    verifiedOn: {
      ...baseTest,
      platform: "Storefront and publisher pages",
      note: "Facts on this page are source-checked, not hands-on performance claims.",
    },
    checked: [
      "Release and platform facts are sourced from source-backed pages.",
      "Hands-on performance is handled on platform-specific pages.",
      "Language support should be rechecked on the Steam page before publishing changes.",
    ],
    sections: [
      {
        heading: "Launch facts to verify before publishing",
        table: {
          caption: "Store fact tracker",
          columns: ["Fact", "Where to check", "How to write it", "Guide note"],
          rows: [
            [
              "Release timing",
              "Steam and Yacht Club pages",
              "Mention regional display differences if storefronts differ",
              "Store page",
            ],
            [
              "PC availability",
              "Steam store page",
              "List Steam as the PC storefront when visible",
              "Store page",
            ],
            [
              "Console platforms",
              "Publisher page",
              "Use publisher wording and avoid performance claims",
              "Store page",
            ],
            [
              "Chinese language support",
              "Steam language table",
              "State support only if visible on the storefront",
              "Store page",
            ],
          ],
        },
      },
      {
        heading: "Buying checklist",
        checklist: [
          "Confirm your storefront region and listed release date.",
          "Check language support on the Steam page if you need Chinese text.",
          "Use platform comparison pages for performance, not this fact sheet.",
        ],
      },
    ],
    imageSlots: [
      {
        label: "Steam language table",
        note: "Record the Steam language support row before marking language facts Verified.",
      },
      {
        label: "Platform list",
        note: "Record the publisher platform section for archive reference.",
      },
    ],
    faqs: [
      {
        question: "Why can release dates look different?",
        answer:
          "Storefronts can display launch timing by region, so this page points readers to the current store before buying.",
      },
      {
        question: "Where should I check language support?",
        answer:
          "Use the Steam language table for PC language support, then recheck before purchase.",
      },
    ],
    related: ["steam-deck-settings", "switch-vs-pc", "review-roundup", "beginner-guide"],
    sources: ["steam", "official", "press"],
    updateLog: [
      "2026-05-28: Added store information page with storefront recheck guidance.",
    ],
  },
  {
    slug: "review-roundup",
    navTitle: "Reviews",
    title: "Mina the Hollower Review Roundup",
    eyebrow: "Should you buy?",
    description:
      "A review roundup that turns external coverage into buyer guidance without copying review text or pretending to be a score authority.",
    searchIntent: "reviews, scores, worth it",
    progress: "Store page",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Use reviews to decide whether Mina fits your taste: classic action-adventure pacing, precise combat, exploration, and handheld play. This roundup focuses on what reviewers agree or disagree about, then points you to source pages for exact scores.",
    verifiedOn: {
      ...baseTest,
      platform: "External review and platform coverage",
      note: "Score rows should be updated only after checking the linked review pages.",
    },
    checked: [
      "This site has not published its own score.",
      "External pages are cited for reader context and exact score verification.",
      "Hands-on buyer advice will be updated after PC / Steam checking.",
    ],
    sections: [
      {
        heading: "Review signal table",
        table: {
          caption: "External coverage to check",
          columns: ["Source", "Useful angle", "What readers learn", "Guide note"],
          rows: [
            [
              "SteamDeckHQ",
              "Handheld performance",
              "Steam Deck behavior and settings priorities",
              "Store page",
            ],
            [
              "RPG Site",
              "Platform comparison",
              "Which version may fit a player setup",
              "Store page",
            ],
            [
              "Gamesear",
              "Beginner experience",
              "What a first-time player should notice early",
              "Store page",
            ],
          ],
        },
      },
      {
        heading: "Who should buy first",
        checklist: [
          "Players who enjoy classic action-adventure games with precise room reading.",
          "Players who want a compact, route-driven game to check builds and movement.",
          "Handheld players who are willing to check current platform coverage first.",
        ],
      },
      {
        heading: "Who should wait",
        checklist: [
          "Players who need a fully mapped route before starting.",
          "Players buying on a platform where performance details matter and are not yet personally checked.",
          "Players who dislike replaying dangerous rooms while learning boss patterns.",
        ],
      },
    ],
    imageSlots: [
      {
        label: "Our PC settings screen",
        note: "Add a PC image before publishing a site verdict.",
      },
      {
        label: "First hour route evidence",
        note: "Add a route image before claiming first-hand pacing notes.",
      },
    ],
    faqs: [
      {
        question: "Does this site score the game?",
        answer:
          "Not yet. It links external coverage and waits for PC checking before publishing a verdict.",
      },
      {
        question: "What matters more than a score?",
        answer:
          "Fit matters most: combat timing, exploration tolerance, handheld needs, and comfort with retrying rooms.",
      },
    ],
    related: ["release-date-platforms", "steam-deck-settings", "switch-vs-pc", "beginner-guide"],
    sources: ["steamDeckHq", "rpgSitePlatform", "gamesearBeginner", "steam"],
    updateLog: [
      "2026-05-28: Added source-first review roundup without copying review verdicts.",
    ],
  },
  {
    slug: "switch-vs-pc",
    navTitle: "Switch vs PC",
    title: "Mina the Hollower Switch vs PC",
    eyebrow: "Platform choice",
    description:
      "A Switch vs PC buying guide that separates public platform coverage from PC / Steam checking.",
    searchIntent: "Switch vs PC",
    progress: "Store page",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Choose PC if you want easier images, settings control, and faster guide updates. Choose Switch only after checking current platform coverage and your handheld preference, because this site has Switch performance can vary by hardware and patch.",
    verifiedOn: {
      ...baseTest,
      platform: "PC / Steam first, Switch notes from platform coverage",
      note: "No Switch hands-on claims are made in this first version.",
    },
    checked: [
      "PC record workflow is planned for this site.",
      "Switch notes are sourced from public platform coverage until hardware checking exists.",
      "Load times and performance are not estimated without measured data.",
    ],
    sections: [
      {
        heading: "Platform decision table",
        table: {
          caption: "Switch vs PC choice",
          columns: ["Need", "PC / Steam", "Switch", "Guide note"],
          rows: [
            [
              "Guide images",
              "Best fit for quick record and updates",
              "Needs record workflow",
              "Use with notes",
            ],
            [
              "Handheld play",
              "Steam Deck route if available",
              "Native handheld experience",
              "Store page",
            ],
            [
              "Settings control",
              "More visible options and record tools",
              "Depends on platform build",
              "Use with notes",
            ],
            [
              "Portability",
              "Depends on PC handheld",
              "Strong reason to choose console",
              "Store page",
            ],
          ],
        },
      },
      {
        heading: "Recommendation for guide users",
        body: [
          "If your goal is to follow and verify this guide quickly, PC / Steam is the first version to prioritize because images, updates, and route notes can be recorded faster. Platform preference still matters, so the guide should not tell handheld-first players to ignore Switch coverage.",
        ],
      },
    ],
    imageSlots: [
      {
        label: "PC settings menu",
        note: "Record PC settings and input options.",
      },
      {
        label: "Switch comparison to add",
        note: "Add only after a Switch record or reliable owned-device check.",
      },
    ],
    faqs: [
      {
        question: "Is PC better for guide users?",
        answer:
          "PC is better for fast images and settings checks, which makes guide updates easier.",
      },
      {
        question: "Has this site checked Switch?",
        answer:
          "No. Switch comments are reference-based only until a hardware check is added.",
      },
    ],
    related: ["steam-deck-settings", "release-date-platforms", "review-roundup", "map"],
    sources: ["steam", "official", "rpgSitePlatform"],
    updateLog: [
      "2026-05-28: Added platform-choice page with no unsupported Switch hands-on claims.",
    ],
  },
  {
    slug: "map",
    navTitle: "Map",
    title: "Mina the Hollower Map and Route Notes",
    eyebrow: "Area tracking",
    description:
      "A map and route-note hub for Mina the Hollower, designed to show explored areas, landmarks, and image-backed route steps.",
    searchIntent: "map, areas, route",
    progress: "Use with notes",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Use the map page as a route notebook. Only explored areas should get route notes, and each useful map entry needs a landmark, risk note, return path, and image before it becomes a guide recommendation.",
    verifiedOn: baseTest,
    checked: [
      "No unexplored area gets a standalone page in the first version.",
      "The route table is ready for images and landmarks.",
      "Late-area names are avoided until they are visible in player records or trusted sources.",
    ],
    sections: [
      {
        heading: "Route note table",
        table: {
          caption: "Map entry structure",
          columns: ["Entry", "What to record", "Why it helps", "Guide note"],
          rows: [
            [
              "Area name",
              "Exact visible label or nearby landmark",
              "Lets players match their screen",
              "Use with notes",
            ],
            [
              "Risk",
              "Hazards, enemy types, or resource pressure",
              "Prevents blind pushes",
              "Use with notes",
            ],
            [
              "Return path",
              "Nearest safe point or backtrack route",
              "Helps players bank progress",
              "Use with notes",
            ],
            [
              "Image",
              "Map or room image",
              "Proves the note belongs to that route",
              "Use with notes",
            ],
          ],
        },
      },
      {
        heading: "How to read this map",
        checklist: [
          "Treat gray entries as scouting notes, not recommendations.",
          "Use green entries only when the route has a image and return-path note.",
          "Check update dates before following a route after a patch.",
        ],
      },
    ],
    imageSlots: [
      {
        label: "First area landmark",
        note: "Record the earliest visible area label or landmark.",
      },
      {
        label: "Safe return route",
        note: "Record the return route after a resource-heavy branch.",
      },
    ],
    faqs: [
      {
        question: "Is this an interactive map?",
        answer:
          "Not yet. The first version is a route-note hub that can become interactive after verified area images exist.",
      },
      {
        question: "Why are some route entries marked Use with notes?",
        answer:
          "They still need a landmark, risk note, return path, and image before they are reliable.",
      },
    ],
    related: ["beginner-guide", "save-system", "trinkets", "bosses"],
    sources: ["steam", "official", "press"],
    updateLog: [
      "2026-05-28: Added route-note structure without unsupported area claims.",
    ],
  },
];

export const guideMap = new Map(guides.map((guide) => [guide.slug, guide]));

export const hubQuickAnswer =
  "Use this hub when you want a direct answer before opening a long walkthrough. Start with the first-hour route, compare weapons and trinkets, then jump into boss prep, platform advice, save behavior, play time, or map notes when that specific question comes up.";

export function getGuide(slug: string) {
  return guideMap.get(slug);
}

export function getRelatedGuides(guide: Guide) {
  return guide.related
    .map((slug) => guideMap.get(slug))
    .filter((item): item is Guide => Boolean(item));
}

export function getGuideUrl(slug: string) {
  return `${getSiteUrl()}/${slug}`;
}
