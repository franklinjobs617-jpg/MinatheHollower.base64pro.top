'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { areas, weapons, trinkets, type Area } from '@/lib/mina-data';

const STORAGE_KEY = 'mina-progress';

interface Progress { clearedAreas: string[]; foundTrinkets: string[]; weaponUpgrades: string[]; notes: string; }

function load(): Progress {
  if (typeof window === 'undefined') return { clearedAreas: [], foundTrinkets: [], weaponUpgrades: [], notes: '' };
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}'); } catch { return { clearedAreas: [], foundTrinkets: [], weaponUpgrades: [], notes: '' }; }
}
function save(p: Progress) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch {} }

export default function ProgressTracker() {
  const [progress, setProgress] = useState<Progress>({ clearedAreas: [], foundTrinkets: [], weaponUpgrades: [], notes: '' });

  useEffect(() => { setProgress(load()); }, []);

  const update = (patch: Partial<Progress>) => {
    const next = { ...progress, ...patch };
    setProgress(next);
    save(next);
  };

  const toggleArea = (id: string) => {
    const next = progress.clearedAreas.includes(id)
      ? progress.clearedAreas.filter(a => a !== id)
      : [...progress.clearedAreas, id];
    update({ clearedAreas: next });
  };

  const toggleTrinket = (id: string) => {
    const next = progress.foundTrinkets.includes(id)
      ? progress.foundTrinkets.filter(t => t !== id)
      : [...progress.foundTrinkets, id];
    update({ foundTrinkets: next });
  };

  const toggleUpgrade = (id: string) => {
    const next = progress.weaponUpgrades.includes(id)
      ? progress.weaponUpgrades.filter(u => u !== id)
      : [...progress.weaponUpgrades, id];
    update({ weaponUpgrades: next });
  };

  const areaPct = areas.length > 0 ? Math.round((progress.clearedAreas.length / areas.length) * 100) : 0;
  const trinketPct = trinkets.length > 0 ? Math.round((progress.foundTrinkets.length / trinkets.length) * 100) : 0;

  return (
    <main className="mx-auto max-w-page px-16 py-48 md:px-24">
      <Link href="/" className="text-caption font-bold text-plasma-blue hover:underline">← Home</Link>
      <h1 className="mt-16 font-feather text-display tracking-display text-crypt-ink">Progress Tracker</h1>
      <p className="mt-12 text-body text-grave-gray max-w-2xl">Track your campaign progress. Data saved to your browser — no account needed. Check off areas, trinkets, and upgrades as you go.</p>

      {/* Progress bars */}
      <div className="mt-32 grid gap-16 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-cloud-gray bg-snow-white p-20">
          <div className="flex justify-between mb-8"><span className="font-bold text-crypt-ink">Areas</span><span className="text-caption text-plasma-blue font-bold">{areaPct}%</span></div>
          <div className="h-12 bg-parchment rounded-full overflow-hidden"><div className="h-full bg-hollow-green transition-all" style={{ width: `${areaPct}%` }} /></div>
          <p className="mt-8 text-caption text-grave-gray">{progress.clearedAreas.length}/{areas.length} cleared</p>
        </div>
        <div className="rounded-xl border-2 border-cloud-gray bg-snow-white p-20">
          <div className="flex justify-between mb-8"><span className="font-bold text-crypt-ink">Trinkets</span><span className="text-caption text-plasma-blue font-bold">{trinketPct}%</span></div>
          <div className="h-12 bg-parchment rounded-full overflow-hidden"><div className="h-full bg-candle-gold transition-all" style={{ width: `${trinketPct}%` }} /></div>
          <p className="mt-8 text-caption text-grave-gray">{progress.foundTrinkets.length}/{trinkets.length} collected</p>
        </div>
      </div>

      <div className="mt-32 grid gap-24 lg:grid-cols-2">
        {/* Areas */}
        <div className="rounded-xl border-2 border-cloud-gray bg-snow-white p-20">
          <h2 className="font-feather text-heading-sm text-crypt-ink mb-16">Areas</h2>
          <div className="space-y-6">
            {areas.map(a => (
              <label key={a.id} className={`flex items-start gap-12 rounded-xl border-2 p-12 cursor-pointer transition ${progress.clearedAreas.includes(a.id) ? 'border-hollow-green bg-hollow-green/5' : 'border-cloud-gray hover:border-plasma-blue/30'}`}>
                <input type="checkbox" checked={progress.clearedAreas.includes(a.id)} onChange={() => toggleArea(a.id)} className="mt-2 accent-hollow-green" />
                <div>
                  <span className="font-bold text-crypt-ink text-sm">{a.name}</span>
                  <span className="text-caption text-grave-gray ml-8">#{a.recommendedOrder}</span>
                  <p className="mt-2 text-xs text-grave-gray">{a.keyPickups.slice(0, 3).join(' · ')}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Weapons + Notes */}
        <div className="space-y-24">
          <div className="rounded-xl border-2 border-cloud-gray bg-snow-white p-20">
            <h2 className="font-feather text-heading-sm text-crypt-ink mb-16">Weapon Upgrades</h2>
            {weapons.map(w => (
              <div key={w.id} className="mb-12">
                <p className="font-bold text-sm text-crypt-ink">{w.name}</p>
                {w.upgrades.map((u, i) => (
                  <label key={i} className={`flex items-center gap-8 py-4 cursor-pointer ${progress.weaponUpgrades.includes(`${w.id}-${i}`) ? 'text-hollow-green' : 'text-grave-gray'}`}>
                    <input type="checkbox" checked={progress.weaponUpgrades.includes(`${w.id}-${i}`)} onChange={() => toggleUpgrade(`${w.id}-${i}`)} className="accent-hollow-green" />
                    <span className="text-xs">{u.name}</span>
                  </label>
                ))}
              </div>
            ))}
          </div>

          <div className="rounded-xl border-2 border-cloud-gray bg-snow-white p-20">
            <h2 className="font-feather text-heading-sm text-crypt-ink mb-16">Notes</h2>
            <textarea value={progress.notes} onChange={e => update({ notes: e.target.value })}
              placeholder="Boss strats, routes to revisit, trinket locations..."
              className="w-full h-32 rounded-xl border-2 border-cloud-gray p-12 text-body focus:border-plasma-blue focus:outline-none resize-y" />
          </div>
        </div>
      </div>
    </main>
  );
}
