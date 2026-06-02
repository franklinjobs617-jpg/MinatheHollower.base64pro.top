'use client';

import { useState, useMemo, type ReactNode } from 'react';

export interface Column<T> {
  key: string;
  header: string;
  render: (row: T) => ReactNode;
  sortable?: boolean;
  sortValue?: (row: T) => string | number;
}

interface DatabaseTableProps<T> {
  title: string;
  description: string;
  data: T[];
  columns: Column<T>[];
  searchPlaceholder?: string;
  searchKeys?: (keyof T)[];
  filters?: {
    key: string;
    label: string;
    options: { label: string; value: string }[];
    getValue: (row: T) => string;
  }[];
  emptyMessage?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DatabaseTable<T extends Record<string, any>>({
  title, description, data, columns, searchPlaceholder = 'Search...',
  searchKeys = [], filters = [], emptyMessage = 'No results.',
}: DatabaseTableProps<T>) {
  const [search, setSearch] = useState('');
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const filtered = useMemo(() => {
    let result = [...data];
    if (search.trim() && searchKeys.length > 0) {
      const q = search.toLowerCase();
      result = result.filter(row => searchKeys.some(k => {
        const v = row[k];
        return typeof v === 'string' && v.toLowerCase().includes(q);
      }));
    }
    for (const [fKey, fValue] of Object.entries(activeFilters)) {
      if (!fValue) continue;
      const filter = filters.find(f => f.key === fKey);
      if (filter) result = result.filter(row => filter.getValue(row) === fValue);
    }
    if (sortKey) {
      const col = columns.find(c => c.key === sortKey);
      result.sort((a, b) => {
        const va = col?.sortValue?.(a) ?? String(a[sortKey] ?? '');
        const vb = col?.sortValue?.(b) ?? String(b[sortKey] ?? '');
        const cmp = typeof va === 'number' && typeof vb === 'number' ? va - vb : String(va).localeCompare(String(vb));
        return sortDir === 'desc' ? -cmp : cmp;
      });
    }
    return result;
  }, [data, search, activeFilters, sortKey, sortDir]);

  return (
    <div className="space-y-24">
      <div>
        <h1 className="font-feather text-heading-lg tracking-heading-lg text-crypt-ink">{title}</h1>
        <p className="mt-8 text-body text-grave-gray">{description}</p>
        <p className="mt-4 text-caption text-grave-gray/60">{filtered.length} of {data.length} entries</p>
      </div>

      <div className="flex flex-wrap gap-12 items-center">
        <input
          type="text" placeholder={searchPlaceholder} value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 min-w-[200px] rounded-xl border-2 border-cloud-gray px-16 py-10 text-body text-crypt-ink placeholder-grave-gray/40 focus:border-plasma-blue focus:outline-none"
        />
        {filters.map(f => (
          <select
            key={f.key} value={activeFilters[f.key] ?? ''}
            onChange={e => setActiveFilters(prev => ({ ...prev, [f.key]: e.target.value }))}
            className="rounded-xl border-2 border-cloud-gray px-12 py-10 text-body text-crypt-ink focus:border-plasma-blue focus:outline-none"
          >
            <option value="">All {f.label}</option>
            {f.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        ))}
        {(search || Object.values(activeFilters).some(Boolean)) && (
          <button onClick={() => { setSearch(''); setActiveFilters({}); }} className="text-caption font-bold text-plasma-blue hover:underline">Clear</button>
        )}
      </div>

      <div className="overflow-x-auto rounded-xl border-2 border-cloud-gray">
        <table className="w-full min-w-[640px] border-collapse bg-snow-white text-left text-body">
          <thead className="bg-parchment">
            <tr>
              {columns.map(col => (
                <th key={col.key}
                  onClick={() => { if (col.sortable) { setSortKey(col.key); setSortDir(d => sortKey === col.key && d === 'asc' ? 'desc' : 'asc'); } }}
                  className={`border-b-2 border-cloud-gray px-16 py-12 text-caption font-bold uppercase tracking-caption text-crypt-ink ${col.sortable ? 'cursor-pointer hover:text-plasma-blue select-none' : ''}`}
                >
                  {col.header}{col.sortable && sortKey === col.key && (sortDir === 'asc' ? ' ↑' : ' ↓')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={columns.length} className="px-16 py-32 text-center text-grave-gray/50">{emptyMessage}</td></tr>
            ) : filtered.map((row, idx) => (
              <tr key={idx} className="border-b border-cloud-gray last:border-b-0 hover:bg-parchment/50">
                {columns.map(col => <td key={col.key} className="px-16 py-14">{col.render(row)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
