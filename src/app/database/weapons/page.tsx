'use client';

import { useState } from 'react';
import Link from 'next/link';
import { weapons, type Weapon } from '@/lib/mina-data';

export default function WeaponsDatabase() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <main className="mx-auto max-w-page px-16 py-48 md:px-24">
      <Link href="/database" className="text-caption font-bold text-plasma-blue hover:underline">← Database</Link>
      <h1 className="mt-16 font-feather text-display tracking-display text-crypt-ink">Weapon Database</h1>
      <p className="mt-12 text-body text-grave-gray">All 5 weapons with upgrade paths, costs, and locations. Data verified from Gamerant weapon guide.</p>

      <div className="mt-32 space-y-16">
        {weapons.map(w => (
          <div key={w.id} className="rounded-xl border-2 border-cloud-gray bg-snow-white overflow-hidden">
            <button onClick={() => setExpanded(expanded === w.id ? null : w.id)} className="w-full text-left p-24 flex items-start justify-between gap-16 hover:bg-parchment/50 transition">
              <div className="flex-1">
                <div className="flex items-center gap-12">
                  <h2 className="font-feather text-heading-sm text-crypt-ink">{w.name}</h2>
                  <span className="text-caption font-bold uppercase tracking-caption text-plasma-blue bg-parchment rounded-full px-8 py-2">{w.type}</span>
                  {w.starterAvailable && <span className="text-caption text-grave-gray/60">Starter</span>}
                </div>
                <p className="mt-8 text-body text-grave-gray">{w.description}</p>
                <div className="mt-8 flex flex-wrap gap-12 text-caption text-grave-gray">
                  <span>Base: {w.baseCost.toLocaleString()} Bones</span>
                  <span>·</span>
                  <span>{w.baseLocation}</span>
                  <span>·</span>
                  <span>{w.upgrades.length} upgrades</span>
                </div>
              </div>
              <span className="text-2xl">{expanded === w.id ? '−' : '+'}</span>
            </button>
            {expanded === w.id && (
              <div className="border-t-2 border-cloud-gray bg-parchment p-24 space-y-12">
                <h3 className="text-caption font-bold uppercase tracking-caption text-crypt-ink">Upgrades</h3>
                {w.upgrades.map((u, i) => (
                  <div key={i} className="rounded-xl bg-snow-white border border-cloud-gray p-16">
                    <div className="flex items-center justify-between gap-12">
                      <span className="font-bold text-crypt-ink">{u.name}</span>
                      {u.cost > 0 && <span className="text-caption font-bold text-plasma-blue">{u.cost.toLocaleString()} Bones</span>}
                      {u.cost === 0 && <span className="text-caption text-grave-gray">Free (chest/quest)</span>}
                    </div>
                    <p className="mt-4 text-body text-grave-gray">{u.effect}</p>
                    <p className="mt-4 text-caption text-grave-gray/60">{u.location}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
