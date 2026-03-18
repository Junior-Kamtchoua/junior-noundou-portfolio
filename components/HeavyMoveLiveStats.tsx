"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type WeeklyPoint = {
  day: string;
  bookings: number;
  revenue: number;
};

type PiePoint = {
  name: string;
  value: number;
};

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createWeeklyData(): WeeklyPoint[] {
  return [
    { day: "Mon", bookings: 18, revenue: 2400 },
    { day: "Tue", bookings: 23, revenue: 3100 },
    { day: "Wed", bookings: 20, revenue: 2800 },
    { day: "Thu", bookings: 28, revenue: 3900 },
    { day: "Fri", bookings: 34, revenue: 4700 },
    { day: "Sat", bookings: 26, revenue: 3600 },
    { day: "Sun", bookings: 17, revenue: 2500 },
  ];
}

function createRevenueSplit(): PiePoint[] {
  return [
    { name: "Completed", value: 62 },
    { name: "In Transit", value: 24 },
    { name: "Escrow", value: 14 },
  ];
}

const PIE_COLORS = ["#fb923c", "#60a5fa", "#34d399"];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);
}

export default function HeavyMoveLiveStats() {
  const [weeklyData, setWeeklyData] =
    useState<WeeklyPoint[]>(createWeeklyData());
  const [revenueSplit, setRevenueSplit] =
    useState<PiePoint[]>(createRevenueSplit());
  const [activeDrivers, setActiveDrivers] = useState(54);

  useEffect(() => {
    const interval = setInterval(() => {
      setWeeklyData((prev) =>
        prev.map((item) => ({
          ...item,
          bookings: Math.max(8, item.bookings + randomBetween(-4, 5)),
          revenue: Math.max(1000, item.revenue + randomBetween(-500, 700)),
        })),
      );

      const completed = randomBetween(50, 70);
      const inTransit = randomBetween(18, 30);
      const escrow = Math.max(8, 100 - completed - inTransit);

      setRevenueSplit([
        { name: "Completed", value: completed },
        { name: "In Transit", value: inTransit },
        { name: "Escrow", value: escrow },
      ]);

      setActiveDrivers(randomBetween(42, 68));
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const totalRevenue = useMemo(
    () => weeklyData.reduce((sum, item) => sum + item.revenue, 0),
    [weeklyData],
  );

  const totalBookings = useMemo(
    () => weeklyData.reduce((sum, item) => sum + item.bookings, 0),
    [weeklyData],
  );

  const avgOrderValue = useMemo(() => {
    if (!totalBookings) return 0;
    return Math.round(totalRevenue / totalBookings);
  }, [totalRevenue, totalBookings]);

  return (
    <div className="h-full rounded-2xl border border-white/10 bg-slate-950/70 p-3">
      <div className="h-full rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.97),rgba(2,6,23,0.98))] p-4 md:p-5">
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

        <div className="mb-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
          <MetricCard
            label="Weekly Revenue"
            value={`$${formatCurrency(totalRevenue)}`}
          />
          <MetricCard label="Total Bookings" value={String(totalBookings)} />
          <MetricCard
            label="Avg Order Value"
            value={`$${formatCurrency(avgOrderValue)}`}
          />
          <MetricCard label="Active Drivers" value={String(activeDrivers)} />
        </div>

        <div className="grid h-[calc(100%-124px)] gap-4 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4">
            <ChartCard
              title="Revenue Trend"
              subtitle="7-day simulated revenue"
              className="min-h-[220px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyData}>
                  <defs>
                    <linearGradient
                      id="revenueFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#60a5fa"
                        stopOpacity={0.45}
                      />
                      <stop
                        offset="100%"
                        stopColor="#60a5fa"
                        stopOpacity={0.02}
                      />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    stroke="rgba(255,255,255,0.06)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="day"
                    tick={{ fill: "#94a3b8", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#94a3b8", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    width={40}
                  />
                  <Tooltip
                    formatter={(value: unknown) => {
                      const val = Number(value ?? 0);
                      return [`$${formatCurrency(val)}`, "Revenue"];
                    }}
                    contentStyle={{
                      background: "rgba(15,23,42,0.95)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "14px",
                      color: "#fff",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#60a5fa"
                    strokeWidth={3}
                    fill="url(#revenueFill)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Bookings Per Day"
              subtitle="Auto-changing fake activity"
              className="min-h-[200px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} barCategoryGap="22%">
                  <CartesianGrid
                    stroke="rgba(255,255,255,0.05)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="day"
                    tick={{ fill: "#94a3b8", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#94a3b8", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    width={34}
                  />
                  <Tooltip
                    formatter={(value: unknown) => {
                      const val = Number(value ?? 0);
                      return [val, "Bookings"];
                    }}
                    contentStyle={{
                      background: "rgba(15,23,42,0.95)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "14px",
                      color: "#fff",
                    }}
                  />
                  <Bar dataKey="bookings" radius={[10, 10, 0, 0]}>
                    {weeklyData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index % 2 === 0 ? "#fb923c" : "#60a5fa"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          <ChartCard
            title="Delivery Flow Split"
            subtitle="Current marketplace status"
            className="min-h-[430px]"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={revenueSplit}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={58}
                      outerRadius={92}
                      paddingAngle={4}
                    >
                      {revenueSplit.map((entry, index) => (
                        <Cell
                          key={`pie-${entry.name}`}
                          fill={PIE_COLORS[index % PIE_COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: unknown) => {
                        const val = Number(value ?? 0);
                        return [`${val}%`, "Share"];
                      }}
                      contentStyle={{
                        background: "rgba(15,23,42,0.95)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "14px",
                        color: "#fff",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-3">
                {revenueSplit.map((item, index) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="h-3.5 w-3.5 rounded-full"
                        style={{
                          backgroundColor:
                            PIE_COLORS[index % PIE_COLORS.length],
                        }}
                      />
                      <span className="text-sm text-slate-200">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-white">
                      {item.value}%
                    </span>
                  </div>
                ))}

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    Marketplace Signal
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    Simulated data updates continuously to make the flagship
                    project section feel alive and product-driven.
                  </p>
                </div>
              </div>
            </div>
          </ChartCard>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-lg font-bold text-white">{value}</p>
    </div>
  );
}

function ChartCard({
  title,
  subtitle,
  className,
  children,
}: {
  title: string;
  subtitle: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 p-4 ${
        className ?? ""
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-xs text-slate-400">{subtitle}</p>
      </div>
      <div className="h-[calc(100%-2rem)]">{children}</div>
    </div>
  );
}
