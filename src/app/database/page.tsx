import type { Metadata } from 'next';
import Link from 'next/link';
import { weapons, trinkets, areas } from '@/lib/mina-data';

export const metadata: Metadata = { title: 'Mina the Hollower Database | Hollow Guidebook', description: 'Searchable database of all weapons, trinkets, and areas in Mina the Hollower.' };

const cards = [
  { title: 'Weapons', desc: 'All 5 weapons with upgrades, costs, and locations.', href: '/database/weapons', count: weapons.length, icon: '⚔️' },
  { title: 'Trinkets', desc: '60 trinkets — filter by category, search by effect.', href: '/database/trinkets', count: trinkets.length, icon: '💍' },
  { title: 'Areas', desc: 'Recommended area order with key pickups and bosses.', href: '/database/areas', count: areas.length, icon: '🗺️' },
];

export default function DatabaseHub() {
  return (
    <main className="mx-auto max-w-page px-16 py-48 md:px-24">
      <Link href="/" className="text-caption font-bold text-plasma-blue hover:underline">← Home</Link>
      <h1 className="mt-16 font-feather text-display tracking-display text-crypt-ink">Mina Database</h1>
      <p className="mt-12 text-body text-grave-gray max-w-2xl">Searchable, filterable reference for every weapon, trinket, and area. Data verified from Gamerant, Mobalytics, Polygon, and Yacht Club Games press materials.</p>
      <div className="grid gap-16 mt-32 md:grid-cols-3">
        {cards.map(c => (
          <Link key={c.href} href={c.href} className="group rounded-xl border-2 border-cloud-gray bg-snow-white p-24 transition hover:border-plasma-blue">
            <span className="text-2xl">{c.icon}</span>
            <h2 className="mt-12 text-heading-sm font-bold text-crypt-ink group-hover:text-plasma-blue">{c.title}</h2>
            <p className="mt-8 text-body text-grave-gray">{c.desc}</p>
            <p className="mt-12 text-caption font-bold text-plasma-blue">{c.count} entries →</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
