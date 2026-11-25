"use client";

import { useId, useState } from "react";

const KG_CO2_PER_LITRE = 2.6; // generally accepted factor for diesel, as cited on the legacy site

/** Illustrates the emissions arithmetic. Not a prediction of savings. */
export function EmissionsCalculator() {
  const [litres, setLitres] = useState(500);
  const [saving, setSaving] = useState(10);
  const id = useId();
  const saved = (litres * saving) / 100;
  const co2Day = saved * KG_CO2_PER_LITRE;
  const co2Year = (co2Day * 365) / 1000;
  return (
    <div className="border border-bone/15 bg-ink-2 p-6 md:p-10">
      <p className="eyebrow text-bone/65">Emissions arithmetic</p>
      <div className="mt-8 grid gap-8">
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <label htmlFor={`${id}-l`} className="text-bone/80">Diesel burned per day</label>
            <output htmlFor={`${id}-l`} className="font-mono tabular text-lg">{litres.toLocaleString()} L</output>
          </div>
          <input id={`${id}-l`} type="range" min={20} max={5000} step={10} value={litres} onChange={(e) => setLitres(Number(e.target.value))} className="mt-3 w-full accent-signal" />
        </div>
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <label htmlFor={`${id}-s`} className="text-bone/80">Consumption reduction (your trial result)</label>
            <output htmlFor={`${id}-s`} className="font-mono tabular text-lg">{saving}%</output>
          </div>
          <input id={`${id}-s`} type="range" min={1} max={30} step={1} value={saving} onChange={(e) => setSaving(Number(e.target.value))} className="mt-3 w-full accent-signal" />
        </div>
      </div>
      <dl className="mt-10 grid grid-cols-2 gap-px bg-bone/10">
        <div className="bg-ink-2 py-5 pr-4">
          <dt className="text-sm text-bone/65">CO₂ avoided per day</dt>
          <dd className="display mt-2 text-4xl tabular">{Math.round(co2Day).toLocaleString()}<span className="ml-1 text-lg text-bone/60">kg</span></dd>
        </div>
        <div className="bg-ink-2 py-5 pl-4">
          <dt className="text-sm text-bone/65">CO₂ avoided per year</dt>
          <dd className="display mt-2 text-4xl text-signal tabular">{co2Year.toLocaleString(undefined, { maximumFractionDigits: 1 })}<span className="ml-1 text-lg text-bone/60">t</span></dd>
        </div>
      </dl>
      <p className="mt-6 text-xs leading-relaxed text-bone/60">Uses the generally accepted factor of {KG_CO2_PER_LITRE} kg CO₂ per litre of diesel. Results are arithmetic, not a forecast — actual savings depend on your equipment and fuel.</p>
    </div>
  );
}
