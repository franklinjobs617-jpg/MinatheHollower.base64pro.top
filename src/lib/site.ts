export const siteConfig = {
  name: "Hollow Guidebook",
  gameName: "Mina the Hollower",
  defaultUrl: "https://minathehollower.base64pro.top",
  description:
    "Practical Mina the Hollower guides for early routes, weapons, trinkets, bosses, platforms, saves, play time, and map decisions.",
  author: "Hollow Guidebook editors",
  lastChecked: "2026-05-28",
};

export function getSiteUrl() {
  const vercelUrl =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (vercelUrl ? `https://${vercelUrl}` : siteConfig.defaultUrl);

  return siteUrl.replace(
    /\/$/,
    "",
  );
}

export type Source = {
  label: string;
  url: string;
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

export type Guide = {
  slug: string;
  navTitle: string;
  title: string;
  eyebrow: string;
  description: string;
  searchIntent: string;
  updatedAt: string;
  quickAnswer: string;
  sections: GuideSection[];
  related: string[];
  sources: string[];
};

export const sources: Record<string, Source> = {
  steam: {
    label: "Steam page",
    url: "https://store.steampowered.com/app/1875580/Mina_the_Hollower/",
  },
  official: {
    label: "Yacht Club Games game page",
    url: "https://www.yachtclubgames.com/games/mina-the-hollower/",
  },
  yachtSpring: {
    label: "Yacht Club Games launch details",
    url: "https://www.yachtclubgames.com/blog/mina-the-hollower-launches-in-spring-2026/",
  },
  press: {
    label: "Yacht Club Games press kit",
    url: "https://www.yachtclubgames.com/press/mina-the-hollower/",
  },
  gamesearBeginner: {
    label: "Gamesear beginner guide",
    url: "https://www.gamesear.com/tips-and-guides/mina-the-hollower-beginners-guide-11-things-i-wish-i-knew-before-starting",
  },
  steamDeckHq: {
    label: "SteamDeckHQ review",
    url: "https://steamdeckhq.com/game-reviews/mina-the-hollower/",
  },
  rpgSiteDeck: {
    label: "RPG Site Steam Deck news",
    url: "https://www.rpgsite.net/news/20347-mina-the-hollower-steam-deck-verified-valve-rating",
  },
  rpgSitePlatform: {
    label: "RPG Site platform comparison",
    url: "https://www.rpgsite.net/feature/20428-mina-the-hollower-switch-2-vs-steam-deck-ps5-pro-rog-ally-pc-hdr",
  },
  rpgSiteReview: {
    label: "RPG Site review",
    url: "https://www.rpgsite.net/review/20442-mina-the-hollower-review",
  },
  pcGamerReview: {
    label: "PC Gamer review",
    url: "https://www.pcgamer.com/games/action/mina-the-hollower-review/",
  },
  nintendoLifeRoundup: {
    label: "Nintendo Life review roundup",
    url: "https://www.nintendolife.com/news/2026/05/round-up-the-reviews-are-in-for-mina-the-hollower",
  },
  nintendoLifeSwitch2: {
    label: "Nintendo Life Switch 2 review",
    url: "https://www.nintendolife.com/reviews/nintendo-switch-2/mina-the-hollower-nintendo-switch-2-edition",
  },
  worthplayingReview: {
    label: "Worthplaying review",
    url: "https://www.worthplaying.com/article/2026/5/27/reviews/149966-pc-review-mina-the-hollower/",
  },
  metacritic: {
    label: "Metacritic critic reviews",
    url: "https://www.metacritic.com/game/mina-the-hollower/critic-reviews/",
  },
};

export const gameImages: GameMedia[] = [
  {
    src: "/images/mina/mina-screenshot-01.webp",
    alt: "Mina fighting in a gothic action room in Mina the Hollower",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-02.webp",
    alt: "Mina exploring a monster-filled room in Mina the Hollower",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-03.webp",
    alt: "Mina crossing a platforming room in Mina the Hollower",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-04.webp",
    alt: "Dungeon combat scene from Mina the Hollower",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-05.webp",
    alt: "Character dialogue scene in Mina the Hollower",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-06.webp",
    alt: "Hazard-filled room from Mina the Hollower",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-07.webp",
    alt: "Dark encounter scene in Mina the Hollower",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-08.webp",
    alt: "Side-view action sequence in Mina the Hollower",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-09.webp",
    alt: "Outdoor area from Mina the Hollower",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-10.webp",
    alt: "Large enemy encounter in Mina the Hollower",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-11.webp",
    alt: "Interior room scene from Mina the Hollower",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-12.webp",
    alt: "Map-like area screen in Mina the Hollower",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-13.webp",
    alt: "Combat and hazard scene from Mina the Hollower",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-14.webp",
    alt: "Late area gameplay scene from Mina the Hollower",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-15.webp",
    alt: "Action gameplay scene from Mina the Hollower",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-16.webp",
    alt: "Mina using a chain attack in a rainy graveyard scene",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-17.webp",
    alt: "Mina crossing an icy platform route with enemies nearby",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-18.webp",
    alt: "Mina fighting inside a decorated interior room",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-19.webp",
    alt: "Mina standing beside a large monster encounter",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-20.webp",
    alt: "Mina moving through a dark outdoor area with enemies",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-21.webp",
    alt: "Mina battling in a colorful action room",
    caption: "Mina the Hollower gameplay image.",
  },
  {
    src: "/images/mina/mina-screenshot-22.webp",
    alt: "Mina the Hollower promotional gameplay image",
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

const guideImageStarts: Record<string, number> = {
  "beginner-guide": 0,
  weapons: 6,
  trinkets: 12,
  bosses: 18,
  "steam-deck-settings": 2,
  "save-system": 8,
  "how-long-to-beat": 14,
  "release-date-platforms": 20,
  "review-roundup": 4,
  "switch-vs-pc": 10,
  map: 16,
};

export function getGuideImage(slug: string, slot: number) {
  const start = guideImageStarts[slug] ?? 0;
  return gameImages[(start + slot) % gameImages.length];
}

export const guides: Guide[] = [
  {
    slug: "beginner-guide",
    navTitle: "Beginner",
    title: "Mina the Hollower Beginner Guide",
    eyebrow: "First hour route",
    description:
      "A Mina the Hollower beginner guide for early combat habits, safe spending, first-hour routing, and avoiding costly opening mistakes.",
    searchIntent:
      "First-session routing, safe early upgrades, resource spending, and combat habits.",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "The safest early approach is to treat the opening hour as a combat tutorial, not a race. Learn how long Mina takes to burrow, spend resources before dangerous branches, try each weapon style before committing upgrades, and avoid pushing into a new route with empty healing or a large currency stack.",
    sections: [
      {
        heading: "Detailed Breakdown",
        body: [
          "Mina the Hollower looks like a compact Game Boy Color throwback, but its opening is built around pressure. Rooms often combine enemy arcs, pits, projectiles, and awkward exits, so early progress depends less on reflex speed than on learning when to stop attacking. The burrow move is the central habit: it can dodge many threats, cross routes, and reset spacing, but it has timing limits and should not be treated as a panic button.",
          "The first hour should be spent building a simple loop. Enter a room, identify the enemy that controls space, remove it without spending rare resources, then check for suspicious walls, side paths, or pickups before moving on. That rhythm matters because Mina rewards curiosity with trinkets, shortcuts, currency, and sidearm options, while careless forward momentum can create a long recovery walk after a death.",
          "Resource spending is the other early discipline. A player carrying enough currency for an upgrade gains little by gambling on an unknown branch before visiting town or a safe point. Buying a key, improving a weapon, or stocking a useful item can make the next route easier; hoarding resources only increases the frustration of losing time to a room that has not been learned yet.",
        ],
        table: {
          caption: "First hour decision table",
          columns: ["Early problem", "Best approach", "Why it matters", "Trade-off"],
          rows: [
            [
              "First weapon choice",
              "Use the style with the clearest range and recovery.",
              "Readable spacing prevents damage while enemy patterns are still unfamiliar.",
              "Slower clears are acceptable while learning room layouts.",
            ],
            [
              "New side path",
              "Scout it after spending currency or finding a nearby safe point.",
              "Exploration is valuable, but blind routes are where early deaths usually snowball.",
              "Some rewards may wait until the route back is safer.",
            ],
            [
              "Healing window",
              "Create distance first, then heal during a predictable enemy pause.",
              "Healing is risky when used as a panic reaction during pressure.",
              "Over-defensive play can extend fights and drain focus.",
            ],
            [
              "Key purchase",
              "Buy keys when a locked route sits near the current path.",
              "Locked rooms often justify their cost through loot or route value.",
              "Buying too early can delay weapon upgrades.",
            ],
          ],
        },
      },
      {
        heading: "Why It Matters For Players",
        body: [
          "The opening hour sets the tone for the rest of the game because Mina uses difficulty as instruction. A room that feels unfair usually asks for a different rhythm: burrow earlier, attack less, approach from another angle, or return after a gear change. That makes early deaths useful only if the player reads what caused them instead of brute-forcing the same route.",
          "Weapon experimentation also matters early because upgrades and muscle memory compound. A weapon that feels safe against basic enemies may struggle against airborne pressure or tight arenas, while a high-damage option may punish missed swings. Trying several styles before investing heavily keeps the first build flexible enough for bosses, exploration, and puzzle rooms.",
        ],
        checklist: [
          "Clear a room once slowly before trying to clear it quickly.",
          "Change one piece of gear at a time so the effect is easy to feel.",
          "Spend currency before entering a branch with unknown hazards.",
          "Use sidearms for awkward targets, not for every basic enemy.",
          "Return to older rooms after a new movement or trinket option changes the route.",
        ],
      },
      {
        heading: "Important Details Players May Miss",
        body: [
          "Beginner frustration often comes from treating burrow as total safety. Review coverage and store material both frame burrowing as a core movement and defense tool, but not as immunity to every threat. Some attacks, hazard layouts, or timing windows can still punish a late burrow, which makes pre-emptive positioning stronger than last-second reactions.",
          "Healing deserves the same caution. Early player coverage highlights that healing can be slow and tied to offensive momentum, which changes boss attempts dramatically. A full set of healing resources does not help if a boss leaves no clean window to use them. Creating that window through spacing, sidearm control, or a safe arena corner is often more important than entering with maximum healing.",
          "Trinkets can reshape survival more than raw damage. A revive-style or mistake-forgiving effect is often more valuable during a first playthrough than a damage boost, because it turns a failed boss pattern into extra learning time. Damage matters later, but the first real power spike is usually the setup that lets more attempts reach the final phase.",
        ],
      },
      {
        heading: "Current Unknowns And Caveats",
        body: [
          "Exact route order and boss names should be handled carefully because Mina is built around discovery. Some public coverage discusses early regions, sidequests, and item examples, but a beginner page should avoid spoiling late routes before a player needs that information.",
          "Patch timing may also affect small details such as upgrade costs, item placement, controller prompts, or balance values. The reliable beginner advice is therefore about decision-making: reduce risk before scouting, learn burrow timing, and choose upgrades that solve the problem currently blocking progress.",
        ],
      },
      {
        heading: "Editorial Takeaway",
        body: [
          "Mina the Hollower is most forgiving when played like a dense action-adventure rather than a straight-line platformer. The early game wants patient observation, deliberate spending, and gear experiments that answer specific problems. A strong first run is not the fastest one; it is the run that builds habits sturdy enough to survive the first serious boss wall.",
        ],
      },
    ],
    related: ["weapons", "save-system", "trinkets", "map"],
    sources: ["steam", "official", "gamesearBeginner", "rpgSiteReview"],
  },
  {
    slug: "weapons",
    navTitle: "Weapons",
    title: "Mina the Hollower Weapons Guide",
    eyebrow: "Combat choices",
    description:
      "A practical Mina the Hollower weapons guide for choosing early gear by range, recovery, boss comfort, sidearm fit, and upgrade value.",
    searchIntent:
      "Starting weapon decisions, upgrade priorities, sidearm fit, and combat style trade-offs.",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "The best early weapon is the one that makes enemy spacing easiest to read. Nightstar-style reach is the safest baseline, while faster or heavier options become stronger once room layouts, burrow timing, and boss punish windows are familiar. Upgrade for consistency before chasing raw damage.",
    sections: [
      {
        heading: "Detailed Breakdown",
        body: [
          "Steam describes Mina's trusty whip, Nightstar, alongside an arsenal of weapons with different move sets. That wording matters because weapon choice is not just a damage comparison. Each weapon changes how close Mina must stand, how long a missed attack leaves her exposed, and how naturally sidearms fit between normal hits.",
          "A range-focused weapon is usually the safest opening choice because it creates time to read enemy arcs. Close-range or faster styles can clear rooms faster, but they demand better burrow timing and stronger knowledge of enemy recovery. Heavy options can feel excellent against predictable targets, then become awkward when a room fills with small enemies, projectiles, or narrow platforms.",
          "Upgrades should be judged by how they change the player's next route. PC Gamer's review notes that weapon enhancement leans toward expanded abilities rather than simple damage stacking, which makes early investment more interesting. A utility upgrade that improves safety, control, or repeatable hits may outperform a number increase if it removes the mistake that keeps ending attempts.",
        ],
        table: {
          caption: "Weapon decision table",
          columns: ["Combat need", "Best fit", "Why it works", "Risk"],
          rows: [
            [
              "Learning rooms",
              "Reach and clean recovery",
              "Keeps Mina outside enemy contact while patterns are new.",
              "Room clears can be slower than aggressive builds.",
            ],
            [
              "Fast pressure",
              "Quick close-range attacks",
              "Punishes enemies during short openings and keeps momentum high.",
              "Bad spacing turns missed hits into immediate damage.",
            ],
            [
              "Boss attempts",
              "Consistent single-target timing",
              "Reliable hits matter more than burst damage during pattern learning.",
              "May underperform in rooms with many small threats.",
            ],
            [
              "Exploration",
              "Weapon plus sidearm coverage",
              "Sidearms can solve angles the main weapon handles poorly.",
              "Energy use can become wasteful without restraint.",
            ],
          ],
        },
      },
      {
        heading: "Why It Matters For Players",
        body: [
          "Weapon commitment shapes progression speed because it affects the number of mistakes a player can survive. A safer weapon can turn a new biome into a steady scouting route, while a more aggressive weapon can make known routes faster once enemy placement is memorized. The correct choice changes as the player moves from discovery to farming, from farming to boss prep, and from boss prep to repeat clears.",
          "The most common early mistake is swapping weapons because one bad room made the current choice feel weak. Some rooms punish the weapon; others punish the approach. Before abandoning a style, it is worth changing the entry angle, using a sidearm on the specific enemy causing problems, or deciding whether burrow timing is the real failure point.",
        ],
        checklist: [
          "Pick reach when the route is unknown.",
          "Pick speed when enemy patterns are already familiar.",
          "Save sidearm energy for targets the main weapon cannot safely reach.",
          "Upgrade the weapon that improves the next boss attempt, not the one with the flashiest animation.",
          "Revisit older rooms after a weapon upgrade because utility changes can open safer routing.",
        ],
      },
      {
        heading: "Important Details Players May Miss",
        body: [
          "Sidearms are not backup weapons in the usual sense. Steam frames them as unusual tools that give Mina an advantage in combat, and review coverage describes them as options with their own resource needs. That makes them closer to problem-solvers: a projectile for awkward spacing, a defensive tool for a bad pattern, or a way to pressure an enemy without standing in the dangerous part of the room.",
          "The weapon that feels strongest in a normal room may not be strongest in a boss fight. Boss arenas tend to reward repeatable punish timing and safe recovery. A weapon that lands fewer but cleaner hits can outperform a faster option if it keeps Mina alive long enough to learn later phases.",
          "Upgrade anxiety is understandable, but Mina appears designed around experimentation. The presence of multiple weapon styles, trinkets, sidearms, and modifiers means the combat model expects players to adapt. Early spending should still be deliberate, but paralysis over finding a perfect weapon can slow learning more than a modestly inefficient upgrade.",
        ],
      },
      {
        heading: "Current Unknowns And Caveats",
        body: [
          "Exact damage values, upgrade costs, and late-game weapon breakpoints can change with balance updates or differ by version. This page should avoid ranking the entire arsenal by one universal tier list until repeatable numbers and route situations are available.",
          "The more reliable early recommendation is situational: choose range for unknown rooms, speed for familiar routes, utility for awkward enemy angles, and consistency for bosses. That advice remains useful even when individual weapon values shift.",
        ],
      },
      {
        heading: "Editorial Takeaway",
        body: [
          "Mina's weapon system works because it asks for a plan instead of a favorite button. The best weapon is rarely permanent; it is the tool that makes the current route cleaner, the current boss safer, or the current build less brittle. Early players should value control first, then specialize once the world starts repeating patterns back at them.",
        ],
      },
    ],
    related: ["beginner-guide", "bosses", "trinkets", "save-system"],
    sources: ["steam", "pcGamerReview", "gamesearBeginner"],
  },
  {
    slug: "trinkets",
    navTitle: "Trinkets",
    title: "Mina the Hollower Trinkets Guide",
    eyebrow: "Build planning",
    description:
      "A Mina the Hollower trinkets guide focused on build roles, early priorities, survivability, route value, and how to avoid wasting slots.",
    searchIntent:
      "Trinket effects, best early trinkets, location decisions, and build planning.",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Trinkets should be chosen to solve the current friction point: survival, movement, resource pressure, boss consistency, or exploration. With Yacht Club describing 60 Trinkets, the best early setup is not a universal damage stack. It is the combination that prevents the mistake causing the next death.",
    sections: [
      {
        heading: "Detailed Breakdown",
        body: [
          "Yacht Club has described Mina the Hollower as having 60 Trinkets, which makes the system too large for a simple best-item list. Trinkets are build rules: they can alter survivability, movement, resource economy, risk tolerance, and combat output. The correct question is not which trinket is strongest, but which slot solves the current route.",
          "Early players usually benefit most from mistake reduction. A trinket that improves survivability, extends a healing window, supports movement, or keeps resources stable can produce more real progress than a pure damage option. Damage becomes easier to value once enemy routes and boss patterns are familiar; before that, the strongest build is often the one that reaches later attempts more often.",
          "Worthplaying's review describes trinkets as central to defining how Mina plays, including effects that alter damage risk, plasma management, mobility, and even how damage is taken. That kind of range means players should think in build roles rather than individual collectibles. A defensive slot, a movement slot, and a damage slot often teach more than three overlapping damage boosts.",
        ],
        table: {
          caption: "Trinket priority table",
          columns: ["Build problem", "Trinket role", "Why it matters", "Trade-off"],
          rows: [
            [
              "Repeated boss deaths",
              "Survival or recovery",
              "Longer attempts create more pattern learning per run.",
              "Damage output may drop during the learning phase.",
            ],
            [
              "Hazard-heavy routes",
              "Movement or positioning",
              "Safer traversal reduces chip damage before important fights.",
              "Combat benefits may be indirect.",
            ],
            [
              "Low resource control",
              "Economy or plasma support",
              "Stable resources make sidearms and healing more reliable.",
              "Pure offense may feel weaker in short fights.",
            ],
            [
              "Known farm route",
              "Damage or speed",
              "Faster clears matter once enemy placement is familiar.",
              "Aggressive setups punish mistakes harder.",
            ],
          ],
        },
      },
      {
        heading: "Why It Matters For Players",
        body: [
          "Trinkets determine how forgiving a route feels. A player stuck on a boss may not need more attack power; the real issue may be reaching the second half of the fight with enough health to learn it. A player stuck in exploration may need movement consistency or resource stability because entering a boss with depleted supplies makes the fight harder before it begins.",
          "This is where Mina separates build planning from collectible chasing. The existence of many trinkets invites experimentation, but slots still have opportunity cost. Equipping a survival tool may delay a damage build, while equipping a damage tool may turn small mistakes into route-ending failures. The correct setup should match the stage of learning, not just the final goal.",
        ],
        checklist: [
          "Use survival effects while learning a new boss.",
          "Use movement effects when a route drains health before the main fight.",
          "Use resource effects if sidearm use or healing keeps running dry.",
          "Use damage effects after the route is known and the remaining problem is speed.",
          "Avoid changing several trinkets at once unless the whole build concept is changing.",
        ],
      },
      {
        heading: "Important Details Players May Miss",
        body: [
          "Gamesear's beginner coverage calls out Proto Spark as a particularly valuable survival trinket because a revive effect changes boss practice. That type of effect is powerful not just because it saves a death, but because it keeps a run inside the learning window. More attempts reach the dangerous phase, which means the player learns the part that actually matters.",
          "Trinkets also interact with psychology. A high-risk damage piece can encourage sloppy aggression because the reward feels immediate. A defensive or movement piece may look less exciting, but it often makes exploration cleaner by preserving health before the difficult room arrives. Mina's dense world means damage taken five rooms earlier can decide whether a boss attempt is useful.",
          "Location matters as much as effect. A strong trinket buried behind an expensive key, awkward route, or late sidequest is not an early recommendation. The best guide entry should explain when the trinket becomes practical, what problem it solves at that moment, and what slot it replaces.",
        ],
      },
      {
        heading: "Current Unknowns And Caveats",
        body: [
          "A final trinket ranking needs exact locations, slot limits, effect wording, and route timing. Public sources confirm a large trinket pool, but they do not make every pickup equally relevant to a first playthrough.",
          "Balance updates may also change the value of extreme setups, especially high-risk damage builds or effects that soften death. The stable advice is to treat trinkets as answers to specific problems: survival for learning, movement for routing, economy for resource strain, and damage for known encounters.",
        ],
      },
      {
        heading: "Editorial Takeaway",
        body: [
          "The trinket system is where Mina's old-school adventure structure becomes a build game. The smartest early players will not chase a fixed best list; they will identify the current failure point, equip around that failure, and swap again when the world starts asking a different question.",
        ],
      },
    ],
    related: ["weapons", "bosses", "beginner-guide", "map"],
    sources: ["yachtSpring", "worthplayingReview", "gamesearBeginner", "steam"],
  },
  {
    slug: "bosses",
    navTitle: "Bosses",
    title: "Mina the Hollower Boss Order and Fight Notes",
    eyebrow: "Fight prep",
    description:
      "Mina the Hollower boss prep notes for resources, burrow timing, trinket choices, safe weapons, and learning fights cleanly.",
    searchIntent:
      "Boss order, boss preparation, survival habits, and fight strategy.",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Boss fights should be approached as pattern learning first and damage races second. Enter with resources spent wisely, a trinket setup that answers the fight's main threat, and a weapon that can punish safely. Yacht Club has discussed more than 25 bosses and mini-bosses, so preparation habits matter more than memorizing a count.",
    sections: [
      {
        heading: "Detailed Breakdown",
        body: [
          "Mina the Hollower's bosses sit inside a world that already pressures movement, hazards, and resource discipline. That means a boss attempt starts before the arena door. Arriving with low health, the wrong trinkets, or no sidearm energy turns a learnable fight into noise, because the player spends the attempt surviving the setup rather than reading the pattern.",
          "The core fight rhythm is simple but demanding: observe the attack shape, burrow or move before the danger reaches Mina, punish once, then reset. Greedy double hits are where many attempts collapse. A boss with a large punish window can tempt aggressive play, but Mina's combat is harsh when recovery timing and incoming attacks overlap.",
          "Yacht Club has publicly described more than 25 bosses and mini-bosses, which signals a long runway of encounters. A guide should therefore teach repeatable fight habits: what to check before entering, how to identify the main threat, when to change trinkets, and when a weapon is failing because of range rather than player execution.",
        ],
        table: {
          caption: "Boss prep decision table",
          columns: ["Fight problem", "Adjustment", "Why it matters", "Risk"],
          rows: [
            [
              "Taking damage before the fight",
              "Improve route safety before another attempt.",
              "A weak arena entry makes later phases harder to learn.",
              "Extra preparation slows immediate rematches.",
            ],
            [
              "Cannot find healing time",
              "Use range, sidearms, or a defensive trinket to create space.",
              "Healing only matters if the fight provides a safe window.",
              "Lower damage can extend the fight.",
            ],
            [
              "Whiffing punish windows",
              "Swap to a weapon with clearer recovery.",
              "Consistent hits beat theoretical burst during pattern learning.",
              "A safer weapon may feel less exciting.",
            ],
            [
              "Late-phase panic",
              "Stop chasing damage and count the repeat pattern.",
              "The last phase often punishes greed more than caution.",
              "Longer attempts demand better focus.",
            ],
          ],
        },
      },
      {
        heading: "Why It Matters For Players",
        body: [
          "Boss preparation matters because Mina's death loop can blur the actual lesson. If a player dies while under-upgraded, low on resources, and using a trinket that does not address the fight, the takeaway is unclear. The fight might be hard, the route might be draining too much health, or the build might be solving the wrong problem.",
          "Separating those problems makes progress faster. If damage is consistent but survival fails late, defensive trinkets are the answer. If attacks are readable but punish windows are missed, weapon timing is the issue. If the arena is fine but the run to the arena is expensive, map and save habits need attention before the boss strategy does.",
        ],
        checklist: [
          "Spend or bank resources before a suspicious arena.",
          "Enter with a trinket setup that addresses the fight's clearest threat.",
          "Use the first attempt to identify attack shapes instead of forcing damage.",
          "Change weapon only when the punish window is the problem.",
          "Pause after a death and name the cause before starting the next attempt.",
        ],
      },
      {
        heading: "Important Details Players May Miss",
        body: [
          "Burrowing avoids many threats, but RPG Site's review notes that it does not bypass every attack, hazard, or gap. That distinction is crucial in boss arenas. A late burrow may still fail if the attack checks position differently, lasts longer than expected, or covers the exit point.",
          "Sidearms should be reserved for solving fight geometry. If a boss spends time outside safe melee range, a projectile or defensive sidearm can keep pressure without forcing bad positioning. If the boss is always reachable, sidearm energy may be better saved for emergencies or route recovery.",
          "Some players will be tempted to grind as soon as a boss blocks progress. Grinding can help, but it should follow diagnosis. Extra stats cannot fix a habit of attacking into unsafe recovery, and more damage does not teach the final pattern if the setup never reaches it cleanly.",
        ],
      },
      {
        heading: "Current Unknowns And Caveats",
        body: [
          "A precise boss order should avoid spoiling late routes and should not be treated as stable until the final release route is documented across platforms. Public sources confirm a large boss roster, but they do not replace player-facing route context.",
          "Names, phase details, and optional encounter timing can also be patch-sensitive. The safest page structure is to keep fight advice practical: recommended preparation, main threat, common death cause, and a spoiler-light route note.",
        ],
      },
      {
        heading: "Editorial Takeaway",
        body: [
          "Mina's bosses work best when treated as exams on the systems learned in the surrounding route. The player who arrives with a clean build, a clear plan, and a willingness to survive one more pattern before attacking will progress faster than the player trying to overpower every arena on instinct.",
        ],
      },
    ],
    related: ["weapons", "trinkets", "save-system", "map"],
    sources: ["yachtSpring", "rpgSiteReview", "pcGamerReview", "steam"],
  },
  {
    slug: "steam-deck-settings",
    navTitle: "Steam Deck",
    title: "Best Mina the Hollower Steam Deck Settings",
    eyebrow: "Handheld play",
    description:
      "Best Mina the Hollower Steam Deck settings for frame rate, battery life, controller setup, readability, and handheld play.",
    searchIntent:
      "Steam Deck settings, battery life, frame rate, controller setup, and handheld comfort.",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Mina the Hollower is a strong Steam Deck fit. RPG Site reports a Steam Deck Verified rating, while SteamDeckHQ reports stable high-refresh play with very low power draw. Start with the default profile, cap lower for battery if needed, and check the active controller if an external pad behaves oddly.",
    sections: [
      {
        heading: "Detailed Breakdown",
        body: [
          "Mina is well suited to handheld play because its pixel art, short room structure, and route-based exploration fit portable sessions. Steam lists SteamOS and Linux support, and RPG Site reports that Valve marked the game Steam Deck Verified ahead of launch. That matters because Mina depends on precise movement; input friction would be more damaging here than in a slower RPG.",
          "SteamDeckHQ's review reports stable 90 fps behavior and roughly 7W battery draw, suggesting that the game can run efficiently on Valve's handheld. That does not mean every player needs the highest refresh option. A lower cap can still feel responsive while extending battery life, especially during exploration or route cleanup.",
          "The one practical caveat is controller handling. RPG Site notes that the Deck rating included a warning about external Bluetooth or USB controllers sometimes requiring manual active-controller switching through the Quick Access Menu. That is not a dealbreaker, but it is the kind of small setup issue that can look like broken input if the player does not know where to check.",
        ],
        table: {
          caption: "Steam Deck settings table",
          columns: ["Use case", "Frame rate target", "Power approach", "Why it fits"],
          rows: [
            [
              "Default handheld play",
              "Use the game's default or Deck profile first.",
              "No manual tuning unless battery or heat becomes a concern.",
              "Best starting point for most players.",
            ],
            [
              "Battery-focused exploration",
              "60 fps cap",
              "Lower TDP after confirming stable input and audio.",
              "Keeps controls responsive while reducing drain.",
            ],
            [
              "OLED smoothness",
              "90 fps if stable",
              "Leave headroom rather than forcing the lowest wattage.",
              "Makes scrolling and dodge timing feel cleaner.",
            ],
            [
              "Docked with controller",
              "Match display refresh",
              "Check active controller in Quick Access Menu if input fails.",
              "Prevents controller confusion during couch play.",
            ],
          ],
        },
      },
      {
        heading: "Why It Matters For Players",
        body: [
          "Steam Deck performance is not just about average frame rate. Mina's combat asks for short, repeated timing decisions: burrow before impact, stop attacking before recovery becomes unsafe, and read hazards while moving between rooms. A stable frame cap is better than chasing a higher number that introduces uneven pacing.",
          "Battery matters because Mina encourages one-more-room play. A route can easily turn from a quick session into a long exploration loop with a boss at the end. Efficient settings reduce the chance of stopping mid-route, which is especially useful when a player is trying to remember landmarks without a detailed map.",
        ],
        checklist: [
          "Start on default settings before lowering power limits.",
          "Use a 60 fps cap when battery life matters more than maximum smoothness.",
          "Use high refresh only if frame pacing remains stable during combat and scrolling.",
          "Check text readability in menus, inventory, and dialogue before committing to handheld-only play.",
          "Use the Quick Access Menu if an external controller is connected but not controlling Mina.",
        ],
      },
      {
        heading: "Important Details Players May Miss",
        body: [
          "Pixel art games can look simple and still feel bad when scaling or frame pacing is off. Mina's clean presentation makes sharpness important, especially for hazards, small enemies, and UI prompts. If the image looks soft on an external display, scaling and resolution should be checked before assuming the game itself is unclear.",
          "Deck owners should also separate platform quality from guide convenience. Steam Deck may be the most comfortable way to play, while desktop PC can be easier for note-taking, route mapping, and screenshot organization. The best platform depends on whether the current session is for relaxed play, boss practice, or route documentation.",
        ],
      },
      {
        heading: "Current Unknowns And Caveats",
        body: [
          "Battery life varies with Deck model, brightness, refresh setting, external controllers, and background downloads. SteamDeckHQ's reported efficiency is a strong signal, but each handheld setup can differ.",
          "Post-launch patches may also adjust default profiles, controller behavior, or compatibility notes. The safest advice is to begin with the Deck's normal profile, change one setting at a time, and keep the frame cap stable before reducing power.",
        ],
      },
      {
        heading: "Editorial Takeaway",
        body: [
          "Mina the Hollower appears to be exactly the kind of dense action-adventure that benefits from Steam Deck: sharp rooms, quick sessions, low power demands, and enough responsiveness for serious boss attempts. The best settings are not the most complicated ones; they are the ones that keep timing steady and battery anxiety out of the route.",
        ],
      },
    ],
    related: ["switch-vs-pc", "release-date-platforms", "review-roundup", "beginner-guide"],
    sources: ["steam", "rpgSiteDeck", "steamDeckHq", "pcGamerReview"],
  },
  {
    slug: "save-system",
    navTitle: "Saving",
    title: "How Saving Works in Mina the Hollower",
    eyebrow: "Progress safety",
    description:
      "A practical save-system guide for Mina the Hollower covering checkpoints, death-risk planning, resource spending, and safe exploration habits.",
    searchIntent:
      "Saving, checkpoints, death recovery, currency safety, and route planning.",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Mina should be played with checkpoint discipline: spend or secure resources before unknown branches, treat dangerous routes as scouting runs, and check progress after each death before pushing forward again. Public coverage points to checkpoint-driven recovery, but exact autosave details should be confirmed in-game before risky routing.",
    sections: [
      {
        heading: "Detailed Breakdown",
        body: [
          "Mina the Hollower is built around routes, danger, and return paths, so saving is part of the strategy rather than a background convenience. Even without memorizing every system detail, the practical rule is clear: progress feels safest when the player spends resources before taking an unfamiliar branch and returns to a safe point before entering a suspicious arena.",
          "Gamesear's beginner coverage discusses checkpoints in relation to the Proto Spark trinket, which suggests that checkpoint contact matters for recovery and survival planning. That makes checkpoints more than rest stops. They define when an exploratory push becomes reasonable, when a boss retry is efficient, and when a currency-heavy route should be postponed.",
          "The main risk is assuming that all progress is equally safe. A player may keep a map discovery, lose a resource state, retain an upgrade, or return to a different position depending on the game's exact save rules. Until those rules are familiar, the safest habit is to verify the character's state after each death: location, currency, inventory, upgrades, and opened shortcuts.",
        ],
        table: {
          caption: "Save and death planning table",
          columns: ["Situation", "Best habit", "Why it matters", "Risk if ignored"],
          rows: [
            [
              "Large currency stack",
              "Spend before scouting a new branch.",
              "Upgrades and keys turn currency into permanent advantage.",
              "A failed route can erase momentum and patience.",
            ],
            [
              "Suspicious arena entrance",
              "Return to the nearest safe point first.",
              "Boss attempts are more useful from a clean state.",
              "Low-resource attempts teach less and frustrate more.",
            ],
            [
              "After a death",
              "Check location, inventory, currency, and shortcuts.",
              "The player learns what the save system preserved.",
              "Repeated deaths can hide the actual penalty.",
            ],
            [
              "Long exploration route",
              "Open shortcuts before chasing optional loot.",
              "Backtracking becomes safer and less time-consuming.",
              "Optional rewards can turn into expensive detours.",
            ],
          ],
        },
      },
      {
        heading: "Why It Matters For Players",
        body: [
          "Saving affects how aggressively a player explores. If a route is safe to repeat, pushing deeper makes sense. If the route drains health, sidearm energy, or currency every time, the better play is to bank progress, upgrade, or search for a shortcut first. This is especially important in Mina because exploration density makes side paths tempting even when the current build is not ready.",
          "Death can still be useful if it produces information. A clean death after reaching a boss teaches arena layout or attack timing. A messy death halfway through a hazard corridor may only say that the route was entered with the wrong plan. Save-system awareness turns those outcomes into decisions instead of frustration.",
        ],
        checklist: [
          "Spend currency before entering a route with unknown hazards.",
          "Open shortcuts before pushing for optional rewards.",
          "Start boss attempts from a repeatable route state.",
          "Check inventory and upgrades after dying to learn what persisted.",
          "Stop scouting when the route back is no longer safe.",
        ],
      },
      {
        heading: "Important Details Players May Miss",
        body: [
          "The save question is not only whether progress is stored. The more useful question is what kind of progress is stored. Map knowledge, opened shortcuts, spent currency, purchased upgrades, boss attempts, and sidequest steps may not all feel the same after a death.",
          "This is why early players should avoid long chains of unbanked progress. A route that includes a new item, a locked room, a shortcut, and a boss door should be broken into smaller goals. Secure the shortcut, then return. Spend currency, then scout. Learn the boss, then adjust the build.",
        ],
      },
      {
        heading: "Current Unknowns And Caveats",
        body: [
          "Exact autosave triggers, death penalties, and persistence rules can vary by version or patch. A careful guide should not claim more than the game demonstrates in the current build.",
          "The practical advice remains stable even when details change: bank resources before risk, use shortcuts to reduce repeat time, and evaluate a death by what it taught rather than how far it pushed the player back.",
        ],
      },
      {
        heading: "Editorial Takeaway",
        body: [
          "Mina rewards the player who treats saving as route management. The strongest early habit is not never dying; it is making sure each death starts from a sensible state and teaches something useful about the room, the boss, or the build.",
        ],
      },
    ],
    related: ["beginner-guide", "map", "bosses", "how-long-to-beat"],
    sources: ["steam", "gamesearBeginner", "rpgSiteReview"],
  },
  {
    slug: "how-long-to-beat",
    navTitle: "Play Time",
    title: "How Long Is Mina the Hollower?",
    eyebrow: "Time estimate",
    description:
      "A play-time guide for Mina the Hollower that separates first runs, exploration-heavy play, replay modifiers, and review-reported completion ranges.",
    searchIntent:
      "Play time, first-run length, exploration time, replay value, and completion expectations.",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Expect a first run to land roughly around the high teens to 20-plus hours depending on exploration and boss difficulty. Review coverage includes an 18-hour first playthrough at partial exploration and a roughly 20-hour playtime estimate, while Yacht Club's stated scope points to much longer value for secrets, New Game Plus, and modifiers.",
    sections: [
      {
        heading: "Detailed Breakdown",
        body: [
          "Mina the Hollower should not be judged by a single play-time number. The main path, secret hunting, trinket routing, boss retries, and modifier play all pull in different directions. A player who follows the obvious route and adapts quickly will finish far sooner than one who checks every suspicious wall, revisits areas with new tools, and experiments with builds.",
          "Early review data gives a useful range. Metacritic's critic excerpts include an 18-hour first-time playthrough at 54 percent exploration, while Worthplaying describes the game as roughly 20 hours with extra content and modifiers beyond that. Those numbers fit the structure Yacht Club has described: a large interconnected world, more than 25 bosses and mini-bosses, 60 Trinkets, New Game Plus, and hundreds of gameplay modifiers.",
          "The key is that Mina's length is elastic. Boss walls, map uncertainty, and build experimentation can add hours without feeling like padding because they are part of how the game asks players to learn. On the other hand, players comfortable with classic Zelda-style navigation and Soulslike repetition may move through the same material much faster.",
        ],
        table: {
          caption: "Play-time expectation table",
          columns: ["Run style", "Likely range", "What adds time", "Best fit"],
          rows: [
            [
              "Focused first run",
              "High teens to low 20s",
              "Boss retries and required route learning.",
              "Players who avoid heavy side tracking.",
            ],
            [
              "Exploration-heavy first run",
              "20-plus hours",
              "Secrets, trinkets, locked rooms, and route revisits.",
              "Players who dislike leaving suspicious rooms unresolved.",
            ],
            [
              "Build experiment run",
              "Variable",
              "Weapon swaps, trinket experimentation, and optional farming.",
              "Players optimizing comfort rather than speed.",
            ],
            [
              "Replay and modifiers",
              "Long tail",
              "New Game Plus and gameplay modifiers.",
              "Players who enjoy remixing a known route.",
            ],
          ],
        },
      },
      {
        heading: "Why It Matters For Players",
        body: [
          "Play time matters because Mina is dense rather than enormous in the open-world sense. A 20-hour estimate can hide very different experiences: one player may spend that time moving steadily through new regions, while another spends several hours solving one boss, backtracking for trinkets, or rebuilding around a difficult route.",
          "The length also affects build planning. A game with meaningful replay modifiers and New Game Plus makes it easier to choose fun over perfection on the first run. Missing an optional trinket or leaving a route unresolved does not have to become a progress-stopping problem if the game continues to reward later experimentation.",
        ],
        checklist: [
          "Add time for bosses that require repeated pattern learning.",
          "Add time for secret hunting, especially without a detailed room map.",
          "Add time for trinket and weapon experimentation.",
          "Expect shorter sessions on Steam Deck to stretch the calendar time even if save time stays modest.",
          "Treat replay modifiers as a separate value layer rather than part of the first-run estimate.",
        ],
      },
      {
        heading: "Important Details Players May Miss",
        body: [
          "A first-run hour count does not capture completion pressure. Worthplaying notes that the map can be relatively limited and expects players to remember visited locations, with shortcuts helping the process. That means a completion-minded player may spend time not because the world is huge, but because the route memory burden is real.",
          "Boss difficulty also changes length more than raw content count. A player stuck on a midgame fight can add an hour through attempts, gear swaps, or farming. Another player with the right trinket setup may clear the same wall quickly. Mina's time-to-beat is therefore partly a measure of how efficiently the player diagnoses problems.",
        ],
      },
      {
        heading: "Current Unknowns And Caveats",
        body: [
          "Public play-time data will stabilize after launch as more players finish on different platforms and difficulties. Early critic numbers are useful, but they come from experienced reviewers and may not reflect a first-time player's routing habits.",
          "Completion estimates should also be treated carefully because the game includes many trinkets, secrets, modifiers, and replay hooks. A practical page should separate main-path time, exploration time, and replay time instead of flattening them into one number.",
        ],
      },
      {
        heading: "Editorial Takeaway",
        body: [
          "Mina the Hollower looks compact, but its real length comes from density. The main path appears substantial on its own, while secrets, trinkets, boss learning, New Game Plus, and modifiers give it the kind of afterlife that suits players who like mastering a world rather than simply clearing it once.",
        ],
      },
    ],
    related: ["beginner-guide", "map", "save-system", "bosses"],
    sources: ["metacritic", "worthplayingReview", "yachtSpring", "steam"],
  },
  {
    slug: "release-date-platforms",
    navTitle: "Platforms",
    title: "Mina the Hollower Release Date and Platforms",
    eyebrow: "Buying facts",
    description:
      "Mina the Hollower release date and platform guide for Steam, Switch, PS5, Xbox, language support, and regional timing.",
    searchIntent:
      "Release date, platform list, PC storefront, language support, and buying timing.",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Mina the Hollower is launching at the end of May 2026, with Steam currently showing May 28 in some regions and many platform/review pages listing May 29. Steam, Nintendo Switch, Nintendo Switch 2, PlayStation 5, and Xbox Series X|S are the core publicly listed platforms, with Steam showing Simplified and Traditional Chinese interface support.",
    sections: [
      {
        heading: "Detailed Breakdown",
        body: [
          "The date situation needs careful wording because storefronts can show different calendar days depending on region and unlock timing. Steam currently lists May 28, 2026, while RPG Site and other public platform coverage refer to a May 29 launch. For a global audience, the most useful answer is not to force one date, but to explain that the unlock sits across that late-May window by region.",
          "Platform support is broad for an indie action-adventure. Yacht Club's launch messaging lists Nintendo Switch 2, Nintendo Switch, PlayStation 5, Xbox Series X, and Steam. RPG Site's Steam Deck coverage also lists Xbox Series X|S and PC via Steam. Steam's own page shows Windows, macOS, and SteamOS/Linux system requirement sections, making PC support wider than a single Windows-only release.",
          "Language support is especially important for a new guide subdomain because Chinese players may search before buying. Steam lists English plus 12 more supported languages for interface text, including Simplified Chinese and Traditional Chinese. The Steam table does not indicate full audio support in those languages, so buyers who require voice localization should check the storefront language matrix before purchase.",
        ],
        table: {
          caption: "Release and platform table",
          columns: ["Question", "Current answer", "Player impact", "Caveat"],
          rows: [
            [
              "Release date",
              "Late May 2026, shown as May 28 or May 29 depending on source and region.",
              "Players should check their storefront unlock time.",
              "Regional store timing can shift the displayed date.",
            ],
            [
              "PC platform",
              "Steam, with Windows, macOS, and SteamOS/Linux sections visible.",
              "PC players get flexible hardware and capture options.",
              "Availability should be checked on the store used for purchase.",
            ],
            [
              "Console platforms",
              "Switch 2, Switch, PS5, and Xbox Series X|S are publicly listed.",
              "Players can choose handheld, couch, or high-refresh setups.",
              "Performance differs by hardware.",
            ],
            [
              "Chinese support",
              "Steam lists Simplified and Traditional Chinese interface support.",
              "Chinese readers can make a clearer buying decision.",
              "Audio and subtitle columns should be read separately on Steam.",
            ],
          ],
        },
      },
      {
        heading: "Why It Matters For Players",
        body: [
          "Release timing affects more than impatience. A player buying on Steam may see the store unlock before or after a console listing in another timezone, while review coverage may use the publisher's global date. This is common for global launches and should not be read as conflicting availability unless a specific storefront fails to list the game.",
          "Platform choice also changes the first week experience. PC and Steam Deck make screenshots, settings, and guide-following easier. Switch and Switch 2 offer stronger handheld convenience for players already inside the Nintendo ecosystem. PS5 and Xbox Series X|S may be better living-room choices for players who want controller-first play without PC setup.",
        ],
        checklist: [
          "Check the exact unlock time on the storefront being used.",
          "Use Steam's language matrix for PC language support before purchase.",
          "Choose Steam Deck or PC for easier guide-following and settings control.",
          "Choose Switch or Switch 2 for native handheld play.",
          "Check platform-specific performance coverage if high refresh or HDR matters.",
        ],
      },
      {
        heading: "Important Details Players May Miss",
        body: [
          "Steam's feature list includes Steam Achievements, Steam Cloud, Remote Play options, and Family Sharing. Steam Cloud is useful for players moving between desktop and Steam Deck, while Remote Play support matters for players who want to stream to a phone, tablet, or TV without rebuying on console.",
          "Price references in early coverage commonly mention $19.99, but store pricing can vary by region and platform. The practical buying advice is to check the local storefront rather than relying on a US-dollar mention from review coverage.",
        ],
      },
      {
        heading: "Current Unknowns And Caveats",
        body: [
          "Storefront pages can change around launch, especially for regional pricing, language display, and platform-specific feature labels. The release page should stay tied to storefront data rather than old announcement text.",
          "Older articles that mention a broad Spring 2026 window are still useful for platform context, but the current buying decision should use the live store listing and the latest launch-date coverage.",
        ],
      },
      {
        heading: "Editorial Takeaway",
        body: [
          "Mina the Hollower is arriving as a genuinely multiplatform release rather than a PC-first oddity. The best buying choice comes down to how the player wants to engage with it: Steam for flexibility and Deck sync, Switch hardware for portable comfort, or home console for a straightforward controller setup.",
        ],
      },
    ],
    related: ["steam-deck-settings", "switch-vs-pc", "review-roundup", "beginner-guide"],
    sources: ["steam", "yachtSpring", "rpgSiteDeck"],
  },
  {
    slug: "review-roundup",
    navTitle: "Reviews",
    title: "Mina the Hollower Review Roundup",
    eyebrow: "Should you buy?",
    description:
      "Mina the Hollower review roundup with critic scores, buyer fit, combat notes, difficulty caveats, Steam Deck play, and replay value.",
    searchIntent:
      "Review scores, critical consensus, buyer fit, difficulty concerns, and platform impressions.",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Early reviews are strongly positive, with critics praising Mina's dense exploration, precise combat, build variety, and retro presentation. The main cautions are difficulty, movement learning curve, map memory, and some early-game friction. Players who like Zelda-style exploration with sharper combat pressure are the best fit.",
    sections: [
      {
        heading: "Detailed Breakdown",
        body: [
          "The critical picture is unusually strong. Nintendo Life's review roundup cites a Metascore in the low 90s from dozens of critic reviews, while PC Gamer scored Mina 90 and RPG Site awarded it a 10. The consensus is not only that Mina looks nostalgic, but that it uses retro limits to create a dense, modern action-adventure.",
          "The repeated praise centers on design density. Critics keep returning to combat, secrets, puzzle rooms, trinkets, boss pressure, and replay modifiers. That matters for buyers because Mina is not being reviewed as a pretty throwback alone. It is being judged as a game with enough mechanical weight to support long exploration and build experimentation.",
          "The criticisms are also useful. Some coverage points to movement learning, map limitations, early enemy pressure, and friction around difficulty. Those are not necessarily dealbreakers, but they define the right audience. Mina is more appealing to players who enjoy learning a compact world than to players who want frictionless forward progress.",
        ],
        table: {
          caption: "Review signal table",
          columns: ["Outlet", "Score or angle", "Main praise", "Buyer takeaway"],
          rows: [
            [
              "PC Gamer",
              "90",
              "Combat, secrets, modifiers, and challenge flexibility.",
              "Strong pick for players who want depth inside a retro frame.",
            ],
            [
              "RPG Site",
              "10",
              "Top-down adventure structure, surprises, and burrow-driven design.",
              "Appeals to players who value discovery and systems recontextualization.",
            ],
            [
              "Nintendo Life roundup",
              "Broad high-score consensus",
              "Exploration, gothic style, and strong classic-adventure craft.",
              "Useful for comparing platform-specific review angles.",
            ],
            [
              "Worthplaying",
              "9.0/10",
              "Trinkets, secrets, modifiers, and replay hooks.",
              "Good signal for players who care about build variety.",
            ],
          ],
        },
      },
      {
        heading: "Why It Matters For Players",
        body: [
          "Review scores answer only part of the buying question. The useful signal is fit. Mina appears to be strongest for players who enjoy reading enemy patterns, chasing hidden routes, experimenting with build tools, and accepting that some friction is intentional. A high score does not mean the game is effortless.",
          "The score spread also points to a specific kind of confidence. Critics are praising the game despite its demanding movement and old-school map expectations, which suggests those rough edges are part of the intended texture rather than signs of a thin project. Players who dislike route memory or repeated boss attempts should take that seriously before buying.",
        ],
        checklist: [
          "Buy early if dense exploration, tough combat, and build experiments sound appealing.",
          "Consider waiting if limited map guidance is a major frustration.",
          "Check Steam Deck or Switch 2 coverage if handheld performance is the deciding factor.",
          "Expect the retro look to hide a more demanding combat rhythm than the art style suggests.",
          "Use reviews for fit, not just score comparison.",
        ],
      },
      {
        heading: "Important Details Players May Miss",
        body: [
          "Several reviews emphasize modifiers and New Game Plus, which changes the value equation. Mina is not only a main-path purchase; it appears designed for players who want to replay with altered rules, different gear priorities, or more efficient routing.",
          "The map discussion is one of the most important buyer caveats. Worthplaying notes that the map can be more general than some modern players expect, with the game relying on memorable screens and shortcuts. That can be exciting for old-school exploration fans and draining for players who prefer explicit objective markers.",
          "Steam Deck coverage is another positive signal. A high-scoring action-adventure that also runs efficiently on handheld hardware has a stronger chance of becoming a daily-session game rather than a backlog item.",
        ],
      },
      {
        heading: "Current Unknowns And Caveats",
        body: [
          "Aggregate scores can move as more reviews arrive. Early enthusiasm is strong, but readers should treat score averages as a snapshot, not a permanent verdict.",
          "User reviews will add a different signal after launch, especially around difficulty spikes, platform-specific bugs, and map friction. Critic reviews suggest high quality, but player response will clarify which complaints matter most outside review conditions.",
        ],
      },
      {
        heading: "Editorial Takeaway",
        body: [
          "The review conversation around Mina the Hollower is not just hype for another retro indie. It points to a game with real mechanical density, a confident world structure, and enough challenge to make gear and route decisions matter. For the right player, that is a stronger buying signal than the score itself.",
        ],
      },
    ],
    related: ["release-date-platforms", "steam-deck-settings", "switch-vs-pc", "beginner-guide"],
    sources: [
      "pcGamerReview",
      "rpgSiteReview",
      "nintendoLifeRoundup",
      "worthplayingReview",
      "metacritic",
    ],
  },
  {
    slug: "switch-vs-pc",
    navTitle: "Switch vs PC",
    title: "Mina the Hollower Switch vs PC",
    eyebrow: "Platform choice",
    description:
      "Mina the Hollower Switch vs PC comparison for Steam Deck, Switch 2, portability, HDR, performance priorities, and guide use.",
    searchIntent:
      "Switch vs PC, Switch 2 performance, Steam Deck, platform choice, and buying advice.",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Choose PC or Steam Deck for flexibility, cloud saves, settings control, and easier guide-following. Choose Switch or Switch 2 for native handheld and console convenience. Switch 2 coverage points to 120 fps support and HDR options, while Steam Deck coverage emphasizes strong efficiency and verified compatibility.",
    sections: [
      {
        heading: "Detailed Breakdown",
        body: [
          "Mina the Hollower is a rare platform decision where several choices look strong. PC offers the most flexibility: desktop play, Steam Deck sync, easier screenshots, adjustable settings, and Steam features such as Cloud and Remote Play. That makes it the best fit for players who plan to follow guides, compare builds, or move between machines.",
          "Switch and Switch 2 offer the cleaner console experience. Nintendo Life's Switch 2 review coverage says the original Switch targets 60 fps, while Switch 2 supports 120 fps and HDR settings for compatible displays. That makes Switch 2 especially appealing for players who want a high-refresh portable-console version without PC management.",
          "Steam Deck sits between those worlds. It keeps the Steam ecosystem while playing like a handheld, and SteamDeckHQ reports excellent performance and low power draw. For many players, Deck will be the most practical version because Mina's room-based exploration and retry loops fit short portable sessions extremely well.",
        ],
        table: {
          caption: "Platform choice table",
          columns: ["Player priority", "Best fit", "Why", "Caveat"],
          rows: [
            [
              "Guide-following and screenshots",
              "PC / Steam",
              "Easier capture, note-taking, settings control, and Steam Cloud.",
              "Less portable unless paired with Steam Deck.",
            ],
            [
              "Portable Steam library",
              "Steam Deck",
              "Strong handheld fit with reported efficient performance.",
              "External controller setup may need manual switching.",
            ],
            [
              "Nintendo handheld play",
              "Switch",
              "Straightforward console portability.",
              "Lower hardware ceiling than Switch 2.",
            ],
            [
              "High-refresh console play",
              "Switch 2",
              "Coverage points to 120 fps support and HDR options.",
              "Display support affects the value of those features.",
            ],
          ],
        },
      },
      {
        heading: "Why It Matters For Players",
        body: [
          "Platform choice changes how Mina is played. On PC, the player can easily keep a map note open, compare guide pages, capture screenshots, and adjust display settings. On Switch hardware, the game becomes more frictionless as a portable adventure, but research and route tracking may require a second screen.",
          "High refresh matters because Mina's movement is timing-heavy. Burrow timing, scrolling rooms, projectile reads, and boss punish windows all benefit from stable frame pacing. A higher ceiling is attractive, but stability and display compatibility matter more than a headline number.",
        ],
        checklist: [
          "Pick PC if settings control, screenshots, and guide use matter most.",
          "Pick Steam Deck if portable play and Steam Cloud are both priorities.",
          "Pick Switch if simple handheld convenience beats performance extras.",
          "Pick Switch 2 if 120 fps and HDR support fit the display setup.",
          "Avoid buying only on score; buy on the platform that supports the way the game will actually be played.",
        ],
      },
      {
        heading: "Important Details Players May Miss",
        body: [
          "Steam features can matter more than expected. Steam Cloud makes a desktop-to-Deck setup smoother, while Remote Play options add flexibility for TV or tablet sessions. Those features are not glamorous, but they fit a game where short sessions can become repeated boss attempts.",
          "Switch 2's high-refresh advantage depends on the display environment. A player using handheld mode or a compatible TV may see more value than someone docked to a standard 60 Hz screen. HDR support also depends on the display, settings, and personal preference for pixel-art presentation.",
          "The best guide platform is not always the best couch platform. Players planning to map routes, compare screenshots, and update notes will have an easier time on PC. Players planning to enjoy the adventure casually may prefer the console that gets them playing fastest.",
        ],
      },
      {
        heading: "Current Unknowns And Caveats",
        body: [
          "Performance coverage can change after patches, and platform-specific bugs may surface only after broad launch. Early reviews are useful, but storefront and patch notes should be checked for the exact platform being purchased.",
          "The Switch 2, Steam Deck, and PC options each have different display and input variables. The best version for one player may not be the best version for another if the actual setup is a 60 Hz TV, an OLED handheld, or a desktop monitor.",
        ],
      },
      {
        heading: "Editorial Takeaway",
        body: [
          "Mina the Hollower is strong enough across platforms that the decision should be practical rather than defensive. PC and Deck are best for flexibility; Switch hardware is best for console convenience; Switch 2 is the most interesting choice for players who can actually use its high-refresh and HDR advantages.",
        ],
      },
    ],
    related: ["steam-deck-settings", "release-date-platforms", "review-roundup", "map"],
    sources: ["steam", "steamDeckHq", "rpgSiteDeck", "nintendoLifeSwitch2", "rpgSitePlatform"],
  },
  {
    slug: "map",
    navTitle: "Map",
    title: "Mina the Hollower Map and Route Notes",
    eyebrow: "Area routing",
    description:
      "A Mina the Hollower map guide for route memory, landmarks, shortcuts, backtracking, exploration pressure, and avoiding wasted trips.",
    searchIntent:
      "Map, areas, route notes, shortcuts, landmarks, and exploration planning.",
    updatedAt: siteConfig.lastChecked,
    quickAnswer:
      "Mina's map should be treated as a memory aid, not a route autopilot. Review coverage points to a relatively general map structure, so good route planning depends on landmarks, shortcuts, risk notes, and remembering which rooms connect to locked doors, trinkets, bosses, and safe return paths.",
    sections: [
      {
        heading: "Detailed Breakdown",
        body: [
          "Mina the Hollower's world is described by Yacht Club as huge, dark, secret-filled, and interconnected, with dozens of regions and more screens than Shovel Knight: Treasure Trove. That scope makes route memory a real skill. The player is not just moving from marker to marker; each room can hide a shortcut, item, locked door, enemy pattern, or later return point.",
          "Worthplaying's review calls out the map as more general than some modern players may expect, with the game relying on memorable screens and generous shortcuts. That design can be rewarding because it makes the world feel physical, but it can frustrate players who leave a suspicious room and cannot remember how to reach it two hours later.",
          "A useful map page should therefore organize routes by player task rather than raw area name. The most important information is what a room is for: a shortcut to open, a trinket to revisit, a locked door to price out, a boss route to make repeatable, or a danger room that should be skipped until the build improves.",
        ],
        table: {
          caption: "Route note table",
          columns: ["Route detail", "What to record", "Why it matters", "Player action"],
          rows: [
            [
              "Landmark",
              "A visual room feature, NPC, door, or hazard pattern.",
              "Players remember screens more easily than abstract area names.",
              "Use it as the anchor for return trips.",
            ],
            [
              "Shortcut",
              "What it connects and which side opens it.",
              "Shortcuts reduce repeated damage before bosses or loot runs.",
              "Open it before chasing optional rewards.",
            ],
            [
              "Locked door",
              "Cost, nearby route, and likely reward type.",
              "Keys compete with upgrades for early currency.",
              "Return after spending decisions are clear.",
            ],
            [
              "Danger room",
              "Main enemy, hazard, and best exit direction.",
              "Some rooms are safer as scouting routes than farming routes.",
              "Skip or rebuild if it drains too many resources.",
            ],
          ],
        },
      },
      {
        heading: "Why It Matters For Players",
        body: [
          "Map discipline directly affects progression speed. A player who remembers the shortcut back to a boss gets more useful attempts per session. A player who forgets where a locked room was may waste time wandering through already-solved danger. Mina's density makes small notes valuable because the world keeps offering reasons to return.",
          "The map also changes how players value trinkets and upgrades. A movement option may make a previously annoying route safe. A defensive build may make a hazard corridor affordable. A key may become worth buying only after the player remembers where the locked door sits relative to a safe point.",
        ],
        checklist: [
          "Name routes by landmark first and area name second.",
          "Record which shortcuts are open before planning boss attempts.",
          "Mark locked doors by cost and nearby safe point.",
          "Separate optional loot routes from required progression routes.",
          "Return to suspicious rooms after gaining movement, sidearm, or trinket options.",
        ],
      },
      {
        heading: "Important Details Players May Miss",
        body: [
          "A limited map can make a game feel harder even when combat is not the blocker. The frustration often comes from uncertainty: where the door was, whether a route has a safe return, or which branch led to the NPC. A good route note removes that uncertainty without flattening the exploration.",
          "Shortcuts are more valuable than they look. Opening a shortcut may not feel as exciting as finding a trinket, but it improves every future boss attempt, farming loop, and revisit. In a dense action-adventure, route compression is a form of power.",
          "Not every suspicious path should be solved immediately. Mina rewards curiosity, but it also punishes overextension. If a room drains healing, forces repeated sidearm use, or requires a movement option that does not feel consistent yet, the better play is to mark it and return later.",
        ],
      },
      {
        heading: "Current Unknowns And Caveats",
        body: [
          "A spoiler-safe map should avoid dumping late-region names before players naturally reach them. Public sources confirm a large world with many regions and secrets, but route guidance is most useful when it stays tied to where the player is in the adventure.",
          "Patch changes may adjust shortcuts, item placement, or map behavior. The route system should be written around landmarks and decision points so it remains useful even if exact reward values shift.",
        ],
      },
      {
        heading: "Editorial Takeaway",
        body: [
          "Mina's map design appears built to make exploration feel earned. The best route notes should preserve that feeling while removing needless friction: landmark, shortcut, risk, return path, and reason to come back. That is enough structure to help without turning the world into a checklist.",
        ],
      },
    ],
    related: ["beginner-guide", "save-system", "trinkets", "bosses"],
    sources: ["yachtSpring", "worthplayingReview", "steam", "rpgSiteReview"],
  },
];

export const guideMap = new Map(guides.map((guide) => [guide.slug, guide]));

export const hubQuickAnswer =
  "Start with the first-hour guide if the goal is safer progress, then move into weapons, trinkets, bosses, platform choice, save behavior, play time, or map routing when that specific decision appears in-game.";

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
