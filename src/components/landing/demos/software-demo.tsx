"use client";

/**
 * Interactive dashboard demo — a mini analytics dashboard.
 * Users can switch between tabs, see animated charts, toggle data.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Users,
  TrendingUp,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Search,
  LayoutDashboard,
  ShoppingBag,
  Settings,
  ChevronRight,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

/* ── Data ──────────────────────────────────────────────────────────── */

type Tab = "overview" | "orders" | "analytics";

const stats = [
  { label: "Ingresos", value: "S/ 24,580", change: "+12.5%", up: true, icon: TrendingUp },
  { label: "Pedidos", value: "342", change: "+8.2%", up: true, icon: Package },
  { label: "Clientes", value: "1,204", change: "+22.1%", up: true, icon: Users },
  { label: "Ticket prom.", value: "S/ 71.87", change: "-3.4%", up: false, icon: BarChart3 },
];

const chartData = [
  { month: "Ene", value: 65 },
  { month: "Feb", value: 45 },
  { month: "Mar", value: 80 },
  { month: "Abr", value: 55 },
  { month: "May", value: 90 },
  { month: "Jun", value: 70 },
  { month: "Jul", value: 95 },
  { month: "Ago", value: 85 },
];

const recentOrders = [
  { id: "#4821", customer: "María G.", amount: "S/ 142.00", status: "Enviado", statusColor: "bg-sage/20 text-sage" },
  { id: "#4820", customer: "Carlos R.", amount: "S/ 89.50", status: "Preparando", statusColor: "bg-copper/20 text-copper" },
  { id: "#4819", customer: "Ana P.", amount: "S/ 215.00", status: "Entregado", statusColor: "bg-sage/20 text-sage" },
  { id: "#4818", customer: "Luis M.", amount: "S/ 67.00", status: "Enviado", statusColor: "bg-sage/20 text-sage" },
  { id: "#4817", customer: "Rosa V.", amount: "S/ 53.25", status: "Pendiente", statusColor: "bg-terracotta/15 text-terracotta" },
];

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", tab: "overview" as Tab },
  { icon: ShoppingBag, label: "Pedidos", tab: "orders" as Tab },
  { icon: BarChart3, label: "Analíticas", tab: "analytics" as Tab },
  { icon: Users, label: "Clientes", tab: null },
  { icon: Settings, label: "Config.", tab: null },
];

/* ── Main Component ────────────────────────────────────────────────── */

export function SoftwareDemo({ onClose }: { onClose?: () => void }) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const maxValue = Math.max(...chartData.map((d) => d.value));

  return (
    <div className="flex h-full bg-cream-50 rounded-lg overflow-hidden">
      {/* ── Sidebar ─────────────────────────────────────────────── */}
      <div className="hidden sm:flex w-48 flex-col bg-warm-800 p-3">
        {/* Logo */}
        <div className="flex items-center gap-2 px-2 py-2 mb-4">
          <div className="h-7 w-7 rounded-lg bg-terracotta/30 flex items-center justify-center">
            <Package size={14} className="text-terracotta-light" />
          </div>
          <span className="text-sm font-medium text-cream-100">Panel Admin</span>
        </div>

        {/* Nav */}
        <nav className="space-y-0.5 flex-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => item.tab && setActiveTab(item.tab)}
              className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12px] transition ${
                item.tab === activeTab
                  ? "bg-terracotta/20 text-cream-100"
                  : "text-warm-400 hover:text-cream-200 hover:bg-white/5"
              }`}
            >
              <item.icon size={14} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* User */}
        <div className="flex items-center gap-2 px-2 py-2 border-t border-white/5 mt-2">
          <div className="h-7 w-7 rounded-full bg-warm-600 flex items-center justify-center">
            <span className="text-[10px] text-cream-200 font-medium">JG</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] text-cream-200 truncate">Jimmy</p>
            <p className="text-[9px] text-warm-400">Admin</p>
          </div>
        </div>
      </div>

      {/* ── Main content ────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-warm-800/[0.06] px-4 py-2.5 bg-cream-50">
          <div className="flex items-center gap-2 rounded-lg bg-cream-200/50 px-3 py-1.5 flex-1 max-w-xs">
            <Search size={13} className="text-warm-400" />
            <span className="text-[11px] text-warm-400">Buscar...</span>
          </div>
          <div className="flex items-center gap-2 ml-3">
            <button className="relative p-1.5 rounded-lg hover:bg-cream-200 transition">
              <Bell size={15} className="text-warm-500" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-terracotta" />
            </button>
          </div>
        </div>

        {/* Mobile tabs */}
        <div className="flex sm:hidden border-b border-warm-800/[0.06] bg-cream-50">
          {(["overview", "orders", "analytics"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-[11px] font-medium transition border-b-2 ${
                activeTab === tab
                  ? "border-terracotta text-terracotta"
                  : "border-transparent text-warm-400"
              }`}
            >
              {tab === "overview" ? "General" : tab === "orders" ? "Pedidos" : "Analíticas"}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="text-sm font-medium mb-3">Resumen</h2>

                {/* Stat cards */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-xl border border-warm-800/[0.04] bg-cream-100 p-3"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] text-warm-400">{stat.label}</span>
                        <stat.icon size={12} className="text-warm-400" />
                      </div>
                      <p className="text-base font-medium">{stat.value}</p>
                      <div className={`flex items-center gap-0.5 mt-1 text-[10px] ${stat.up ? "text-sage" : "text-terracotta"}`}>
                        {stat.up ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                        {stat.change}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart */}
                <div className="rounded-xl border border-warm-800/[0.04] bg-cream-100 p-3 mb-4">
                  <p className="text-[11px] font-medium mb-3">Ingresos mensuales</p>
                  <ResponsiveContainer width="100%" height={96}>
                    <BarChart data={chartData} barSize={10} barGap={3}>
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 8, fill: "#A89890" }}
                      />
                      <YAxis hide />
                      <Tooltip
                        cursor={{ fill: "rgba(139,111,95,0.06)" }}
                        contentStyle={{
                          background: "#FDF8F3",
                          border: "1px solid rgba(139,111,95,0.08)",
                          borderRadius: 8,
                          fontSize: 10,
                        }}
                        labelStyle={{ color: "#6B5E54" }}
                        formatter={(v) => [`S/ ${v}`, "Ventas"]}
                      />
                      <Bar dataKey="value" radius={[3, 3, 0, 0]}>
                        {chartData.map((entry, index) => (
                          <Cell
                            key={index}
                            fill={index === chartData.length - 1 ? "#C4785A" : "#A89890"}
                            fillOpacity={index === chartData.length - 1 ? 0.75 : 0.3}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Recent orders */}
                <div className="rounded-xl border border-warm-800/[0.04] bg-cream-100 p-3">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[11px] font-medium">Últimos pedidos</p>
                    <button
                      onClick={() => setActiveTab("orders")}
                      className="text-[10px] text-terracotta flex items-center gap-0.5 hover:underline"
                    >
                      Ver todos <ChevronRight size={10} />
                    </button>
                  </div>
                  <div className="space-y-1.5">
                    {recentOrders.slice(0, 3).map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between py-1.5 border-b border-warm-800/[0.03] last:border-0"
                      >
                        <div>
                          <span className="text-[11px] font-medium">{order.id}</span>
                          <span className="text-[10px] text-warm-400 ml-2">{order.customer}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-medium">{order.amount}</span>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${order.statusColor}`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "orders" && (
              <motion.div
                key="orders"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="text-sm font-medium mb-3">Pedidos</h2>
                <div className="space-y-2">
                  {recentOrders.map((order, i) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-center justify-between rounded-xl border border-warm-800/[0.04] bg-cream-100 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cream-200">
                          <Package size={14} className="text-warm-500" />
                        </div>
                        <div>
                          <p className="text-[11px] font-medium">{order.customer}</p>
                          <p className="text-[10px] text-warm-400">{order.id}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] font-medium">{order.amount}</p>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${order.statusColor}`}>
                          {order.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "analytics" && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="text-sm font-medium mb-3">Analíticas</h2>

                {/* Big chart */}
                <div className="rounded-xl border border-warm-800/[0.04] bg-cream-100 p-4 mb-3">
                  <p className="text-[11px] font-medium mb-1">Tendencia de ventas</p>
                  <p className="text-[10px] text-warm-400 mb-4">Últimos 8 meses</p>
                  <ResponsiveContainer width="100%" height={140}>
                    <BarChart data={chartData} barSize={16} barGap={4}>
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 9, fill: "#A89890" }}
                      />
                      <YAxis hide />
                      <Tooltip
                        cursor={{ fill: "rgba(139,111,95,0.06)" }}
                        contentStyle={{
                          background: "#FDF8F3",
                          border: "1px solid rgba(139,111,95,0.08)",
                          borderRadius: 8,
                          fontSize: 10,
                        }}
                        labelStyle={{ color: "#6B5E54" }}
                        formatter={(v) => [`S/ ${v}`, "Ventas"]}
                      />
                      <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                        {chartData.map((entry, index) => (
                          <Cell
                            key={index}
                            fill={index === chartData.length - 1 ? "#C4785A" : "#A89890"}
                            fillOpacity={index === chartData.length - 1 ? 0.85 : 0.35}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Summary cards */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl border border-warm-800/[0.04] bg-cream-100 p-3">
                    <p className="text-[10px] text-warm-400 mb-1">Tasa de conversión</p>
                    <p className="text-lg font-medium">3.8%</p>
                    <p className="text-[10px] text-sage flex items-center gap-0.5 mt-0.5">
                      <ArrowUpRight size={10} /> +0.5% vs mes anterior
                    </p>
                  </div>
                  <div className="rounded-xl border border-warm-800/[0.04] bg-cream-100 p-3">
                    <p className="text-[10px] text-warm-400 mb-1">Productos vendidos</p>
                    <p className="text-lg font-medium">1,847</p>
                    <p className="text-[10px] text-sage flex items-center gap-0.5 mt-0.5">
                      <ArrowUpRight size={10} /> +156 esta semana
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
