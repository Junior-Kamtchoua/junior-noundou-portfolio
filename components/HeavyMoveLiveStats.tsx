"use client";

import { useEffect, useMemo, useState } from "react";

type DataPoint = {
  label: string;
  bookings: number;
  revenue: number;
};

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateInitialData(): DataPoint[] {
  return [
    { label: "Mon", bookings: 18, revenue: 2400 },
    { label: "Tue", bookings: 24, revenue: 3100 },
    { label: "Wed", bookings: 21, revenue: 2800 },
    { label: "Thu", bookings: 29, revenue: 3900 },
    { label: "Fri", bookings: 34, revenue: 4700 },
    { label: "Sat", bookings: 27, revenue: 3600 },
    { label: "Sun", bookings: 19, revenue: 2500 },
  ];
}

export default function HeavyMoveLiveStats() {
  const [data, setData] = useState<DataPoint[]>(generateInitialData());
  const [activeIndex, setActiveIndex] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const next = prev.map((item) => ({
          ...item,
          bookings: Math.max(8, item.bookings + randomBetween(-4, 5)),
          revenue: Math.max(1200, item.revenue + randomBetween(-500, 700)),
        }));

        setActiveIndex(randomBetween(0, next.length - 1));
        return next;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const maxBookings = useMemo(
    () => Math.max(...data.map((d) => d.bookings)),
    [data],
  );

  const maxRevenue = useMemo(
    () => Math.max(...data.map((d) => d.revenue)),
    [data],
  );

  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
  const totalBookings = data.reduce((sum, item) => sum + item.bookings, 0);
  const avgOrderValue = Math.round(totalRevenue / totalBookings);

  return (
    <div className="h-full rounded-2xl border border-white/10 bg-slate-950/70 p-3">
      <div className="h-full rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.96))] p-4 md:p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
              Live Marketplace Metrics
            </p>
            <h3 className="mt-1 text-lg font-semibold text-white">
              HeavyMove Analytics Preview
            </h3>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-emerald-200">Live</span>
          </div>
        </div>

        {/* KPI cards */}
        <div className="mb-5 grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Weekly Revenue
            </p>
            <p className="mt-2 text-lg font-bold text-white">
              ${totalRevenue.toLocaleString()}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Total Bookings
            </p>
            <p className="mt-2 text-lg font-bold text-white">{totalBookings}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Avg Order Value
            </p>
            <p className="mt-2 text-lg font-bold text-white">
              ${avgOrderValue}
            </p>
          </div>
        </div>

        {/* Bar chart */}
        <div className="mb-5 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Bookings Per Day</p>
            <p className="text-xs text-slate-400">Auto-updating fake data</p>
          </div>

          <div className="flex h-52 items-end gap-3">
            {data.map((item, index) => {
              const height = `${(item.bookings / maxBookings) * 100}%`;
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.label}
                  className="flex flex-1 flex-col items-center justify-end gap-2"
                >
                  <div className="flex h-full w-full items-end">
                    <div
                      className={`w-full rounded-t-xl transition-all duration-1000 ${
                        isActive
                          ? "bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-300 shadow-[0_0_30px_rgba(251,146,60,0.35)]"
                          : "bg-gradient-to-t from-blue-600 via-cyan-400 to-sky-300"
                      }`}
                      style={{ height }}
                      title={`${item.bookings} bookings`}
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-xs font-semibold text-white">
                      {item.bookings}
                    </p>
                    <p className="text-[11px] text-slate-400">{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Revenue line-style graph */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Revenue Trend</p>
            <p className="text-xs text-slate-400">7-day simulation</p>
          </div>

          <div className="relative h-40">
            <svg viewBox="0 0 700 200" className="h-full w-full">
              {/* grid lines */}
              {[0, 1, 2, 3].map((i) => (
                <line
                  key={i}
                  x1="0"
                  y1={30 + i * 40}
                  x2="700"
                  y2={30 + i * 40}
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />
              ))}

              {/* area */}
              <path
                d={buildAreaPath(data, maxRevenue)}
                fill="rgba(59,130,246,0.18)"
              />

              {/* line */}
              <path
                d={buildLinePath(data, maxRevenue)}
                fill="none"
                stroke="rgba(96,165,250,1)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* points */}
              {data.map((item, index) => {
                const x = (index / (data.length - 1)) * 640 + 30;
                const y = 170 - (item.revenue / maxRevenue) * 120;

                return (
                  <g key={item.label}>
                    <circle
                      cx={x}
                      cy={y}
                      r={index === activeIndex ? 7 : 5}
                      fill={index === activeIndex ? "#fb923c" : "#93c5fd"}
                    />
                  </g>
                );
              })}
            </svg>

            <div className="mt-2 flex justify-between px-1">
              {data.map((item) => (
                <span key={item.label} className="text-[11px] text-slate-400">
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function buildLinePath(data: DataPoint[], maxRevenue: number) {
  return data
    .map((item, index) => {
      const x = (index / (data.length - 1)) * 640 + 30;
      const y = 170 - (item.revenue / maxRevenue) * 120;
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
}

function buildAreaPath(data: DataPoint[], maxRevenue: number) {
  const line = data
    .map((item, index) => {
      const x = (index / (data.length - 1)) * 640 + 30;
      const y = 170 - (item.revenue / maxRevenue) * 120;
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const lastX = 670;
  const firstX = 30;

  return `${line} L ${lastX} 170 L ${firstX} 170 Z`;
}
