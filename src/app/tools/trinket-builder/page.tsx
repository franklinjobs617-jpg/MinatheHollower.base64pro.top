'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { trinkets, type Trinket } from '@/lib/mina-data';

const CATEGORIES = ['survival', 'damage', 'utility', 'movement', 'beastium'] as const;
const CAT_LABELS: Record<string, string> = { survival: 'Survival', damage: 'Damage', utility: 'Utility', movement: 'Movement', beastium: 'Beastium' };
const CAT_COLORS: Record<string, string> = { survival: 'bg-green-100 text-green-800 border-green-300', damage: 'bg-red-100 text-red-800 border-red-300', utility: 'bg-blue-100 text-blue-800 border-blue-300', movement: 'bg-purple-100 text-purple-800 border-purple-300', beastium: 'bg-orange-100 text-orange-800 border-orange-300' };

const STORAGE_KEY = 'mina-trinket-builds';

function loadBuilds(): Record<string, string[]> {
  if (typeof window === 'undefined') return {};
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}'); } catch { return {}; }
}
function saveBuilds(builds: Record<string, string[]>) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(builds)); } catch {}
}

const GOALS = [
  { id: 'boss_survival', label: 'Boss Survival', desc: 'Prioritize revive, healing, and damage reduction.', suggest: ['proto_spark', 'primed_vial', 'valor_medallion'] },
  { id: 'exploration', label: 'Exploration', desc: 'Mobility and hazard protection for map traversal.', suggest: ['tunneling_codex', 'iron_lung', 'bellows_bustle', 'wallower_gauntlets', 'spike_spurs'] },
  { id: 'glass_cannon', label: 'Glass Cannon', desc: 'Max damage, accept fragility.', suggest: ['uranium_bracelet', 'chain_capacitor', 'desperation_bonnet'] },
  { id: 'bone_farming', label: 'Bone Farming', desc: 'Maximize currency gain from routes.', suggest: ['deboning_wand', 'watchful_eye', 'windfall_charm'] },
];

export default function TrinketBuilder() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const [buildName, setBuildName] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [savedBuilds, setSavedBuilds] = useState<Record<string, string[]>>(loadBuilds);

  const filtered = useMemo(() => {
    let result = [...trinkets];
    if (search.trim()) { const q = search.toLowerCase(); result = result.filter(t => t.name.toLowerCase().includes(q) || t.effect.toLowerCase().includes(q)); }
    if (categoryFilter) result = result.filter(t => t.category === categoryFilter);
    return result;
  }, [search, categoryFilter]);

  const toggle = (id: string) => setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const applyGoal = (goalId: string) => {
    setSelectedGoal(goalId);
    const goal = GOALS.find(g => g.id === goalId);
    if (goal) setSelected(goal.suggest);
  };

  const saveBuild = () => {
    if (!buildName.trim() || selected.length === 0) return;
    const updated = { ...savedBuilds, [buildName.trim()]: [...selected] };
    setSavedBuilds(updated);
    saveBuilds(updated);
    setBuildName('');
  };

  const loadBuild = (name: string) => {
    const ids = savedBuilds[name];
    if (ids) setSelected(ids);
  };

  const deleteBuild = (name: string) => {
    const updated = { ...savedBuilds };
    delete updated[name];
    setSavedBuilds(updated);
    saveBuilds(updated);
  };

  const selectedTrinkets = selected.map(id => trinkets.find(t => t.id === id)).filter(Boolean) as Trinket[];

  return (
    <main className="mx-auto max-w-page px-16 py-48 md:px-24">
      <Link href="/database" className="text-caption font-bold text-plasma-blue hover:underline">← Database</Link>
      <h1 className="mt-16 font-feather text-display tracking-display text-crypt-ink">Trinket Builder</h1>
      <p className="mt-12 text-body text-grave-gray max-w-2xl">Build and save trinket loadouts. Pick a goal for suggestions, or manually select from all 60 trinkets. Builds saved to your browser.</p>

      <div className="mt-32 grid gap-24 lg:grid-cols-[1fr_340px]">
        {/* LEFT: Trinket selection */}
        <div className="space-y-16">
          {/* Quick goals */}
          <div className="flex flex-wrap gap-8">
            {GOALS.map(g => (
              <button key={g.id} onClick={() => applyGoal(g.id)}
                className={`rounded-xl border-2 px-12 py-8 text-caption font-bold transition ${selectedGoal === g.id ? 'border-plasma-blue bg-plasma-blue/5 text-plasma-blue' : 'border-cloud-gray text-grave-gray hover:border-plasma-blue'}`}
              >{g.label}</button>
            ))}
          </div>

          {/* Search & Filter */}
          <div className="flex gap-12">
            <input type="text" placeholder="Search trinkets..." value={search} onChange={e => setSearch(e.target.value)}
              className="flex-1 rounded-xl border-2 border-cloud-gray px-16 py-10 text-body focus:border-plasma-blue focus:outline-none" />
            <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}
              className="rounded-xl border-2 border-cloud-gray px-12 py-10 text-body focus:border-plasma-blue focus:outline-none">
              <option value="">All types</option>
              {CATEGORIES.map(c => <option key={c} value={c}>{CAT_LABELS[c]}</option>)}
            </select>
          </div>

          {/* Trinket grid */}
          <div className="grid gap-8 sm:grid-cols-2">
            {filtered.map(t => {
              const active = selected.includes(t.id);
              return (
                <button key={t.id} onClick={() => toggle(t.id)}
                  className={`text-left rounded-xl border-2 p-12 transition ${active ? 'border-plasma-blue bg-plasma-blue/5' : 'border-cloud-gray bg-snow-white hover:border-plasma-blue/50'}`}
                >
                  <div className="flex items-center justify-between gap-8">
                    <span className="font-bold text-crypt-ink text-sm">{t.name}</span>
                    <span className={`shrink-0 rounded-full px-6 py-1 text-[10px] font-bold ${CAT_COLORS[t.category] ?? ''}`}>{CAT_LABELS[t.category] ?? t.category}</span>
                  </div>
                  <p className="mt-4 text-xs text-grave-gray">{t.effect}</p>
                  <p className="mt-2 text-[10px] text-grave-gray/50">{t.location}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Selected build */}
        <div className="space-y-16">
          <div className="rounded-xl border-2 border-plasma-blue bg-snow-white p-20 sticky top-24">
            <h2 className="font-feather text-heading-sm text-crypt-ink">Your Build ({selected.length})</h2>
            {selectedTrinkets.length === 0 ? (
              <p className="mt-12 text-body text-grave-gray/50">Select trinkets or pick a goal above.</p>
            ) : (
              <div className="mt-12 space-y-6">
                {CATEGORIES.map(cat => {
                  const items = selectedTrinkets.filter(t => t.category === cat);
                  if (items.length === 0) return null;
                  return (
                    <div key={cat}>
                      <p className="text-caption font-bold text-grave-gray uppercase">{CAT_LABELS[cat]} ({items.length})</p>
                      {items.map(t => (
                        <div key={t.id} className="flex items-center justify-between py-4 border-b border-cloud-gray last:border-0">
                          <span className="text-sm font-bold text-crypt-ink">{t.name}</span>
                          <button onClick={() => toggle(t.id)} className="text-xs text-red-500 hover:underline">Remove</button>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Save/Load */}
            <div className="mt-16 pt-16 border-t-2 border-cloud-gray space-y-8">
              <div className="flex gap-8">
                <input type="text" placeholder="Build name..." value={buildName} onChange={e => setBuildName(e.target.value)}
                  className="flex-1 rounded-xl border-2 border-cloud-gray px-12 py-8 text-sm focus:border-plasma-blue focus:outline-none" />
                <button onClick={saveBuild} disabled={!buildName.trim() || selected.length === 0}
                  className="rounded-xl bg-plasma-blue text-snow-white px-16 py-8 text-caption font-bold disabled:opacity-30">Save</button>
              </div>
              {Object.keys(savedBuilds).length > 0 && (
                <div className="space-y-4">
                  <p className="text-caption font-bold text-grave-gray">Saved Builds</p>
                  {Object.entries(savedBuilds).map(([name, ids]) => (
                    <div key={name} className="flex items-center justify-between bg-parchment rounded-lg px-8 py-4">
                      <button onClick={() => loadBuild(name)} className="text-sm font-bold text-plasma-blue hover:underline">{name} ({ids.length})</button>
                      <button onClick={() => deleteBuild(name)} className="text-xs text-red-500 hover:underline">Del</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
