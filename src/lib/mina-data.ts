/**
 * Mina the Hollower — Verified Game Data
 *
 * Sources: Gamerant weapon guide, Mobalytics trinket list, Polygon area order,
 *          Yacht Club Games press kit, Steam store page, review coverage
 *
 * 'verified'   = confirmed by 2+ sources with matching details
 * 'community'  = reported by players/guides
 */

export type DataConfidence = 'verified' | 'community';

// ─── Weapons ────────────────────────────────────────────────────

export interface Weapon {
  id: string;
  name: string;
  type: string;
  starterAvailable: boolean;
  baseCost: number; // in Bones
  baseLocation: string;
  upgrades: WeaponUpgrade[];
  description: string;
  confidence: DataConfidence;
}

export interface WeaponUpgrade {
  name: string;
  effect: string;
  cost: number;
  location: string;
}

export const weapons: Weapon[] = [
  {
    id: 'nightstar',
    name: 'Nightstar',
    type: 'Whip',
    starterAvailable: true,
    baseCost: 2000,
    baseLocation: 'Starter weapon or Legovich\'s Arms, Ossex (2,000 Bones)',
    description: 'Mina\'s trusty whip. Long reach, clean recovery — the safest baseline for learning enemy patterns.',
    confidence: 'verified',
    upgrades: [
      { name: 'Dread Mace', effect: 'Deal extra damage when striking enemies with the tip.', cost: 2000, location: 'Legovich\'s Arms, Ossex' },
      { name: 'Afterstrike', effect: 'Hold for extra pulse of damage. Keep holding to flail.', cost: 0, location: 'Ossex Courtyard chest (via Station Underside tunnel)' },
    ],
  },
  {
    id: 'blaststrike_maul',
    name: 'Blaststrike Maul',
    type: 'Hammer',
    starterAvailable: true,
    baseCost: 2000,
    baseLocation: 'Starter or Legovich\'s Arms, Ossex (2,000 Bones) or Big Lagoon Swamp Shack, Nox\'s Bayou',
    description: 'Heavy hammer. Slow but devastating — best against predictable targets.',
    confidence: 'verified',
    upgrades: [
      { name: 'Boom Charge', effect: 'Hold longer to charge an explosive strike.', cost: 2500, location: 'Legovich\'s Arms, Ossex' },
      { name: 'Spin Rush', effect: 'After attacking, press to dash forward hammer-first when Mina flashes.', cost: 0, location: 'Loner\'s Landing: Belowdecks (2 Kears required)' },
    ],
  },
  {
    id: 'whisper_vesper',
    name: 'Whisper and Vesper',
    type: 'Dual Daggers',
    starterAvailable: true,
    baseCost: 2000,
    baseLocation: 'Starter or Legovich\'s Arms (2,000 Bones) or Queensbury Crypt Foyer (free)',
    description: 'Fast dual daggers for quick pressure. Excellent for rapid hits but demands close range.',
    confidence: 'verified',
    upgrades: [
      { name: 'Lunging Cut', effect: 'Press A+X for an advancing slash.', cost: 2000, location: 'Legovich\'s Arms, Ossex' },
      { name: 'Throwing Dagger', effect: 'Hold to charge, then toss. Move fast but fight slow with one dagger.', cost: 0, location: 'Loner\'s Landing: Belowdecks (2 Kears required)' },
    ],
  },
  {
    id: 'battery_buster',
    name: 'Battery Buster',
    type: 'Cannon',
    starterAvailable: false,
    baseCost: 2000,
    baseLocation: 'Legovich\'s Arms, Ossex (2,000 Bones)',
    description: 'Ranged cannon. Safe distance pressure — ideal for awkward enemy angles.',
    confidence: 'verified',
    upgrades: [
      { name: 'Burst Shot', effect: 'Hold to charge a stronger shot.', cost: 3500, location: 'Panino\'s, Ossex Station Underside OR Astral Orrery: Stellarium chest' },
      { name: 'Charge Swing', effect: 'Hold to charge a stronger melee swing.', cost: 0, location: 'Bone Beach: Worm\'s Back chest (via Astral Orrery mirror → Infested Tent)' },
    ],
  },
  {
    id: 'guardian_casket',
    name: 'Guardian Casket',
    type: 'Shield',
    starterAvailable: false,
    baseCost: 2000,
    baseLocation: 'Legovich\'s Arms, Ossex (2,000 Bones)',
    description: 'Defensive shield with parry and toss mechanics. Best for survival-focused builds.',
    confidence: 'verified',
    upgrades: [
      { name: 'Coffin Toss', effect: 'Double-tap to toss shield, again to recall. Hop on for blast jump.', cost: 0, location: 'Septemburg: Crow Town house' },
      { name: 'Grave Counter', effect: 'Parry with good timing to unleash a stronger counter-attack.', cost: 3500, location: 'Panino\'s, Ossex Station Underside' },
    ],
  },
];

// ─── Key Trinkets ────────────────────────────────────────────────

export interface Trinket {
  id: string;
  name: string;
  effect: string;
  location: string;
  category: 'survival' | 'damage' | 'utility' | 'movement' | 'beastium';
  confidence: DataConfidence;
}

export const trinkets: Trinket[] = [
  // Survival
  { id: 'proto_spark', name: 'Proto Spark', effect: 'Save from death once, reset on death.', location: 'Queensbury Crypt — The Duke\'s quest', category: 'survival', confidence: 'verified' },
  { id: 'primed_vial', name: 'Primed Vial Pouch', effect: '+2 vials, partial heal even on miss.', location: 'Southern Outskirts — Basement', category: 'survival', confidence: 'verified' },
  { id: 'vascular_syrup', name: 'Vascular Syrup', effect: 'Slow health drain on hit, can\'t die until empty.', location: 'Nox\'s Bayou — near Big Lagoon', category: 'survival', confidence: 'verified' },
  { id: 'intravenous_vial', name: 'Intravenous Vial', effect: 'Auto-use vial if enough Plasma.', location: 'Ossex Bazaar (expanded)', category: 'survival', confidence: 'verified' },
  { id: 'spark_catcher', name: 'Spark Catcher', effect: '+1 Spark container, recover Sparks from enemies.', location: 'Backwaters — Pinky', category: 'survival', confidence: 'verified' },
  { id: 'bell_of_grace', name: 'Bell of Grace', effect: 'Chance to keep Spark on death, save Bones.', location: 'Ossex — Frayd reward', category: 'survival', confidence: 'verified' },
  { id: 'valor_medallion', name: 'Valor Medallion', effect: 'Move while healing, no Plasma loss on hit.', location: 'Ossex — Furl & Roma reward', category: 'survival', confidence: 'verified' },
  { id: 'blinking_glass', name: 'Blinking Glass', effect: 'Chance to dodge damage.', location: 'Coltrane Peak — Mirren', category: 'survival', confidence: 'verified' },
  { id: 'evasion_powder', name: 'Evasion Powder', effect: 'Longer invulnerability after damage.', location: 'Backwaters — use Ladder', category: 'survival', confidence: 'verified' },
  { id: 'flame_guard', name: 'Flame Guard', effect: 'Blocks fire/explosion hit, recharges.', location: 'Western Wilds — Molten Foundry', category: 'survival', confidence: 'verified' },
  { id: 'voltaic_guard', name: 'Voltaic Guard', effect: 'Blocks lightning hit, recharges.', location: 'Kindlewood — Madd House', category: 'survival', confidence: 'verified' },
  { id: 'warding_beastium', name: 'Warding Beastium', effect: 'Less damage taken, weaker healing.', location: 'Ossex — near Evra', category: 'survival', confidence: 'verified' },

  // Damage
  { id: 'lace_glove', name: 'Lace Glove', effect: 'Raises Attack by 1.', location: 'Southern Outskirts — Ack & Dak reward', category: 'damage', confidence: 'verified' },
  { id: 'uranium_bracelet', name: 'Uranium Bracelet', effect: 'More damage dealt & received (glass cannon).', location: 'Nether Kraken / Ossex Bazaar (late)', category: 'damage', confidence: 'verified' },
  { id: 'desperation_bonnet', name: 'Desperation Bonnet', effect: 'More damage at low health.', location: 'Mourner\'s Mile — tomb', category: 'damage', confidence: 'verified' },
  { id: 'chain_capacitor', name: 'Chain Capacitor', effect: 'Combo damage boost.', location: 'Eastern Heath — Choppe Shoppe', category: 'damage', confidence: 'verified' },
  { id: 'shock_flint', name: 'Shock Flint', effect: 'Shock ball at full health/Plasma.', location: 'Ossex Bazaar (expanded)', category: 'damage', confidence: 'verified' },
  { id: 'watchful_eye', name: 'Watchful Eye', effect: 'Extra Bones for unharmed kills.', location: 'Coltrane Peak — Rupert', category: 'damage', confidence: 'verified' },
  { id: 'vial_salvo', name: 'Vial Salvo', effect: 'Launch missiles on vial use.', location: 'Astral Orrery — Tubert', category: 'damage', confidence: 'verified' },
  { id: 'lightning_grip', name: 'Lightning Grip', effect: 'Damaging bolt on attack after healing.', location: 'Septemburg/Kindlewood — Campfire Kids / Bazaar', category: 'damage', confidence: 'verified' },

  // Movement
  { id: 'bellows_bustle', name: 'Bellows Bustle', effect: 'Air dash.', location: 'Race reward (Blaise) — Sandfalls, Ossex, Western Wilds', category: 'movement', confidence: 'verified' },
  { id: 'keri_wisp', name: 'Keri the Wisp', effect: 'Airborne float / extended jumps.', location: 'Southern Outskirts — Poppit near Bone Beach Trail', category: 'movement', confidence: 'verified' },
  { id: 'spring_heels', name: 'Spring Heels', effect: 'Higher/longer jump after landing.', location: 'Radiant Manor — Trooper', category: 'movement', confidence: 'verified' },
  { id: 'brisk_brew', name: 'Brisk Brew', effect: 'Walk faster, speed burst on hit.', location: 'Ossex — Trinket Bazaar (Lady Susan)', category: 'movement', confidence: 'verified' },
  { id: 'tumbling_tutu', name: 'Tumbling Tutu', effect: 'Air spin attack, bounce off enemies.', location: 'Nox\'s Bayou — Bayou Band reward', category: 'movement', confidence: 'verified' },
  { id: 'bridge_weaver', name: 'Bridge Weaver', effect: 'Web-sling across gaps.', location: 'Astral Orrery — Chest', category: 'movement', confidence: 'verified' },
  { id: 'wallower_gauntlets', name: 'Wallower\'s Gauntlets', effect: 'Burrow into walls.', location: 'Kindlewood — Chest', category: 'movement', confidence: 'verified' },
  { id: 'dodging_pendulum', name: 'Dodging Pendulum', effect: 'Dodge if you jump right before damage.', location: 'Radiant Manor — Mimic encounter', category: 'movement', confidence: 'verified' },

  // Utility
  { id: 'tunneling_codex', name: 'Tunneling Codex', effect: 'Infinite burrow hold.', location: 'Sandfalls — Ring Dive Parlor', category: 'utility', confidence: 'verified' },
  { id: 'iron_lung', name: 'Iron Lung', effect: 'More burrow time (even underwater).', location: 'Nox\'s Bayou — Mock Moon reward', category: 'utility', confidence: 'verified' },
  { id: 'plasma_funnel', name: 'Plasma Funnel', effect: 'Drink vials faster, no loss on hit.', location: 'Ossex — Trinket Bazaar (Lady Susan)', category: 'utility', confidence: 'verified' },
  { id: 'seismic_belt', name: 'Seismic Belt', effect: 'Burrow attack pulse on emerge.', location: 'Ossex — Trinket Bazaar', category: 'utility', confidence: 'verified' },
  { id: 'deboning_wand', name: 'Deboning Wand', effect: 'More Bones from enemies (bouncy).', location: 'Ossex — Elizabeth reward', category: 'utility', confidence: 'verified' },
  { id: 'steady_soles', name: 'Steady Soles', effect: 'Move normally on hazards, resist knockback.', location: 'Ossex — chest after Attic', category: 'utility', confidence: 'verified' },
  { id: 'windfall_charm', name: 'Windfall Charm', effect: 'Joules restore Plasma.', location: 'Eastern Heath — Lad reward', category: 'utility', confidence: 'verified' },
  { id: 'spike_spurs', name: 'Spike Spurs', effect: 'Walk on spikes safely.', location: 'Knight\'s Rest — Spike Vault', category: 'utility', confidence: 'verified' },
  { id: 'pit_preserver', name: 'Pit Preserver', effect: 'Bounce from pits/water.', location: 'Nox\'s Bayou — Kindly Hag', category: 'utility', confidence: 'verified' },
  { id: 'stolenoid', name: 'Stolenoid', effect: 'Magnetism for pickups.', location: 'Queensbury Crypt — Belvedere', category: 'utility', confidence: 'verified' },
  { id: 'fly_bait', name: 'Fly Bait', effect: 'Flies attack enemies on kills.', location: 'Queensbury Crypt — Midden reward', category: 'utility', confidence: 'verified' },
  { id: 'dummy_cache', name: 'Dummy Cache', effect: 'Place decoy that distracts enemies.', location: 'Western Wilds — after Coltrane Peak', category: 'utility', confidence: 'verified' },
  { id: 'polyp_lamp', name: 'Polyp Lamp', effect: 'Glow, less dark area damage.', location: 'Sandfalls — shop', category: 'utility', confidence: 'verified' },
  { id: 'thermal_pack', name: 'Thermal Pack', effect: 'Boost damage after death/Underlab.', location: 'Ossex — Miner\'s Den (Fiancé)', category: 'utility', confidence: 'verified' },
  { id: 'niter_belt', name: 'Niter Belt', effect: 'Explosion on burrow emerge.', location: 'Sandfalls', category: 'utility', confidence: 'verified' },
  { id: 'oozing_organ', name: 'Oozing Organ', effect: 'Damaging trail while burrowing.', location: 'Kindlewood — Madd House', category: 'utility', confidence: 'verified' },
  { id: 'repulsing_root', name: 'Repulsing Root', effect: 'Shrieking Mourndrake on hit.', location: 'Septemburg — Corvidden', category: 'utility', confidence: 'verified' },
  { id: 'dead_leaf', name: 'Dead Leaf', effect: 'Turn into a statue while still.', location: 'Western Wilds — Leaf', category: 'utility', confidence: 'verified' },
  { id: 'joule_syringe', name: 'Joule Syringe', effect: 'Plasma from Sidearms.', location: 'Bone Beach — treasure chest', category: 'utility', confidence: 'verified' },
  { id: 'counter_vial', name: 'Counter Vial', effect: 'Dodge counter when readying vial.', location: 'Ossex Bazaar (expanded)', category: 'utility', confidence: 'verified' },

  // Wisp companions
  { id: 'willow_wisp', name: 'Willow the Wisp', effect: 'Wisp boosts attack/speed on hit.', location: 'Eastern Heath — Poppit', category: 'utility', confidence: 'verified' },
  { id: 'helio_wisp', name: 'Helio the Wisp', effect: 'Wisp restores health on hit.', location: 'Western Wilds — Poppit', category: 'utility', confidence: 'verified' },

  // Beastiums
  { id: 'reckless_beastium', name: 'Reckless Beastium', effect: 'Powered hits after healing, more vulnerable.', location: 'Mirror\'s End — Dr. Naught', category: 'beastium', confidence: 'verified' },
  { id: 'draining_beastium', name: 'Draining Beastium', effect: 'Stronger Sidearms, more Joule cost.', location: 'Kindlewood — Madd House', category: 'beastium', confidence: 'verified' },
  { id: 'starving_beastium', name: 'Starving Beastium', effect: 'Vials refill Joules, less health from vials.', location: 'Queensbury Crypt route — hidden zone', category: 'beastium', confidence: 'verified' },
  { id: 'volatile_beastium', name: 'Volatile Beastium', effect: 'Bombs on enemy death.', location: 'Train — Bone Beach to Nox\'s Bayou', category: 'beastium', confidence: 'verified' },
  { id: 'burning_beastium', name: 'Burning Beastium', effect: 'Fireballs when hit.', location: 'Coltrane Peak', category: 'beastium', confidence: 'verified' },

  // Other
  { id: 'twill_weave', name: 'Twill Weave', effect: 'Raises Defense by 1.', location: 'Nox\'s Bayou — early area', category: 'survival', confidence: 'verified' },
  { id: 'smelling_salts', name: 'Smelling Salts', effect: 'Raises Sidearm by 1.', location: 'Eastern Heath — Frozen Pass', category: 'damage', confidence: 'verified' },
  { id: 'pneumatic_armlet', name: 'Pneumatic Armlet', effect: 'Supercharge throws.', location: 'Ossex — Music Hall (Willis)', category: 'damage', confidence: 'verified' },
  { id: 'bubble_ring', name: 'Bubble Ring', effect: 'Shield on fast strikes.', location: 'Ossex Bazaar (expanded)', category: 'survival', confidence: 'verified' },
  { id: 'glutton_jug', name: 'Glutton\'s Jug', effect: 'Fill by defeating 50 enemies.', location: 'Backwaters — Buffo', category: 'utility', confidence: 'verified' },
];

// ─── Area Order ──────────────────────────────────────────────────

export interface Area {
  id: string;
  name: string;
  recommendedOrder: number;
  keyPickups: string[];
  bossName?: string;
  description: string;
}

export const areas: Area[] = [
  { id: 'ossex', name: 'Ossex (Hub)', recommendedOrder: 0, keyPickups: ['Weapons shop', 'Trinket Bazaar', 'Trinket bag slots', 'Multiple NPC quests'], description: 'Central hub city. First stop after intro. Buy weapons, trinkets, bag slots, and pick up side quests.' },
  { id: 'southern_outskirts', name: 'Southern Outskirts', recommendedOrder: 1, keyPickups: ['Lace Glove', 'Primed Vial Pouch', 'Keri the Wisp'], description: 'First exploration zone. Tutorial-level enemies that teach basic combat and burrow mechanics.' },
  { id: 'queensbury_crypt', name: 'Queensbury Crypt', recommendedOrder: 2, keyPickups: ['Proto Spark', 'Whisper and Vesper (free)', 'Stolenoid', 'Whisper & Vesper daggers (free)'], bossName: 'The Duke\'s quest boss', description: 'Recommended first major dungeon. Proto Spark (revive trinket) is the top priority pickup here.' },
  { id: 'eastern_heath', name: 'Eastern Heath', recommendedOrder: 3, keyPickups: ['Chain Capacitor', 'Willow the Wisp', 'Windfall Charm', 'Smelling Salts', 'Brisk Brew'], bossName: 'Maxi (trinket bag slot)', description: 'Combat-focused area with the Choppe Shoppe and Poppit quests. Defeat Maxi for an extra trinket bag slot.' },
  { id: 'nox_bayou', name: 'Nox\'s Bayou', recommendedOrder: 4, keyPickups: ['Iron Lung', 'Pit Preserver', 'Tumbling Tutu', 'Vascular Syrup', 'Twill Weave', 'Blaststrike Maul (free alt)'], description: 'Water-heavy swamp. Iron Lung enables underwater burrowing, Pit Preserver saves you from drowning.' },
  { id: 'western_wilds', name: 'Western Wilds', recommendedOrder: 5, keyPickups: ['Helio the Wisp', 'Flame Guard', 'Dead Leaf', 'Dummy Cache'], bossName: 'Coltrane Peak boss', description: 'Fire-themed zone with the Molten Foundry. Flame Guard is essential for surviving fire hazards.' },
  { id: 'bone_beach', name: 'Bone Beach', recommendedOrder: 6, keyPickups: ['Joule Syringe', 'Battery Buster upgrades', 'Volatile Beastium'], description: 'Coastal area accessible via train from Nox\'s Bayou. Good for farming and upgrade hunting.' },
  { id: 'astral_orrery', name: 'Astral Orrery', recommendedOrder: 7, keyPickups: ['Bridge Weaver', 'Vial Salvo', 'Bubble Ring', 'Shock Flint', 'Trinket bag slot puzzle'], description: 'Late-game cosmic observatory. Mirror network connects to earlier areas for backtracking.' },
  { id: 'kindlewood', name: 'Kindlewood', recommendedOrder: 8, keyPickups: ['Wallower\'s Gauntlets', 'Oozing Organ', 'Voltaic Guard', 'Draining Beastium'], bossName: 'Madd House boss', description: 'Dark forest with Madd House. Wallower\'s Gauntlets unlock wall-burrowing — major exploration upgrade.' },
  { id: 'septemburg', name: 'Septemburg', recommendedOrder: 9, keyPickups: ['Guardian Casket upgrades', 'Lightning Grip', 'Repulsing Root'], description: 'Late-game town. Guardian Casket upgrades found here.' },
  { id: 'radiant_manor', name: 'Radiant Manor', recommendedOrder: 10, keyPickups: ['Dodging Pendulum', 'Spring Heels'], bossName: 'Final boss area', description: 'Endgame area. Final boss gauntlet with the toughest enemy patterns.' },
];

// ─── Tool Notice ─────────────────────────────────────────────────

export const TOOL_NOTICE_MINA =
  'Fan-made reference tool for Mina the Hollower. Data verified from Gamerant, Mobalytics, ' +
  'Polygon, Yacht Club Games press materials, and community guides. All Mina the Hollower ' +
  'content belongs to Yacht Club Games.';
