'use client';

import Link from 'next/link';
import DatabaseTable, { type Column } from '@/components/database-table';
import { trinkets, type Trinket } from '@/lib/mina-data';

const CAT_COLORS: Record<string, string> = {
  survival: 'bg-green-100 text-green-800', damage: 'bg-red-100 text-red-800',
  utility: 'bg-blue-100 text-blue-800', movement: 'bg-purple-100 text-purple-800',
  beastium: 'bg-orange-100 text-orange-800',
};

const columns: Column<Trinket>[] = [
  { key: 'name', header: 'Trinket', sortable: true, sortValue: r => r.name, render: r => <span className="font-bold text-crypt-ink">{r.name}</span> },
  { key: 'effect', header: 'Effect', sortable: false, render: r => <span className="text-sm text-grave-gray">{r.effect}</span> },
  { key: 'category', header: 'Type', sortable: true, sortValue: r => r.category, render: r => <span className={`inline-block rounded-full px-8 py-2 text-caption font-bold ${CAT_COLORS[r.category] ?? 'bg-gray-100 text-gray-600'}`}>{r.category}</span> },
  { key: 'location', header: 'Location', sortable: true, sortValue: r => r.location, render: r => <span className="text-sm text-grave-gray">{r.location}</span> },
];

export default function TrinketsDatabase() {
  return (
    <main className="mx-auto max-w-page px-16 py-48 md:px-24">
      <Link href="/database" className="text-caption font-bold text-plasma-blue hover:underline">← Database</Link>
      <DatabaseTable
        title="Trinket Database"
        description="All 60 trinkets with verified effects and locations from Mobalytics, Gamerant, and community guides. Filter by type or search by effect."
        data={trinkets}
        columns={columns}
        searchPlaceholder="Search trinkets by name or effect..."
        searchKeys={['name', 'effect', 'location']}
        filters={[{
          key: 'category', label: 'Type',
          options: ['survival', 'damage', 'utility', 'movement', 'beastium'].map(c => ({ label: c, value: c })),
          getValue: r => r.category,
        }]}
      />
    </main>
  );
}
