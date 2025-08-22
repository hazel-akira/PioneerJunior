// src/components/FloatingAdmissionTimer.tsx
import React, { useEffect, useMemo, useState } from "react";
import { XMarkIcon, ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

type Corner = "bottom-right" | "bottom-left" | "top-right" | "top-left" | "bottom-center" | "top-center";
type Layout = "card" | "bar";

type Props = {
  target: string | Date;
  start?: string | Date;
  position?: Corner;           // now supports *-center
  layout?: Layout;             // "card" (default) or "bar"
  offset?: number;             // px offset from top/bottom (default 24)
  ctaText?: string;
  ctaHref?: string;
  storageKey?: string;
  heading?: string;
};

function useCountdown(targetDate: Date) {
  const [now, setNow] = useState<Date>(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = targetDate.getTime() - now.getTime();
  const clamped = Math.max(diff, 0);
  const days = Math.floor(clamped / 86400000);
  const hours = Math.floor((clamped % 86400000) / 3600000);
  const minutes = Math.floor((clamped % 3600000) / 60000);
  const seconds = Math.floor((clamped % 60000) / 1000);
  return { days, hours, minutes, seconds, expired: diff <= 0 };
}
const pad2 = (n: number) => n.toString().padStart(2, "0");

function posStyle(position: Corner, offset: number): React.CSSProperties {
  const o = { position: "fixed" as const, zIndex: 1000 } as React.CSSProperties;
  if (position === "bottom-center") return { ...o, left: "50%", transform: "translateX(-50%)", bottom: offset };
  if (position === "top-center") return { ...o, left: "50%", transform: "translateX(-50%)", top: offset };
  if (position === "bottom-right") return { ...o, right: offset, bottom: offset };
  if (position === "bottom-left") return { ...o, left: offset, bottom: offset };
  if (position === "top-right") return { ...o, right: offset, top: offset };
  return { ...o, left: offset, top: offset }; // top-left
}

/** Floating Grade 10 Admissions timer */
const FloatingAdmissionTimer: React.FC<Props> = ({
  target,
  start,
  position = "bottom-center",
  layout = "bar",
  offset = 24,
  ctaText = "Apply Now",
  ctaHref = "/grade10",
  storageKey = "g10-admissions-timer-collapsed",
  heading = "Grade 10 admissions close in",
}) => {
  const targetDate = useMemo(() => (target instanceof Date ? target : new Date(target)), [target]);
  const startDate = useMemo(() => (start ? (start instanceof Date ? start : new Date(start)) : null), [start]);
  const { days, hours, minutes, seconds, expired } = useCountdown(targetDate);

  const [collapsed, setCollapsed] = useState<boolean>(() => {
    try { return localStorage.getItem(storageKey) === "1"; } catch { return false; }
  });
  useEffect(() => {
    try { localStorage.setItem(storageKey, collapsed ? "1" : "0"); } catch {}
  }, [collapsed, storageKey]);

  const progress = useMemo(() => {
    if (!startDate) return null;
    const total = targetDate.getTime() - startDate.getTime();
    const done = Date.now() - startDate.getTime();
    const pct = Math.min(100, Math.max(0, (done / total) * 100));
    return isFinite(pct) ? pct : null;
  }, [startDate, targetDate]);

  if (expired) return null;

  // ---------- BAR LAYOUT (centered) ----------
  if (layout === "bar") {
    return (
      <div style={posStyle(position, offset)} aria-live="polite">
        {collapsed ? (
          <button
            onClick={() => setCollapsed(false)}
            className="flex items-center gap-2 rounded-full bg-[#0f1b2b] text-white px-3 py-2 shadow-lg hover:brightness-110 transition"
            aria-expanded="false"
            title="Show Grade 10 admissions timer"
          >
            <span className="text-xs font-semibold">G10 Admissions</span>
            <ChevronUpIcon className="w-4 h-4" />
          </button>
        ) : (
          <div className="w-[min(92vw,72rem)] rounded-full bg-white/95 backdrop-blur shadow-2xl ring-1 ring-black/5 overflow-hidden">
            {/* progress bar */}
            <div
              className="h-1 w-full"
              style={
                progress != null
                  ? { background: `linear-gradient(90deg,#74d1f6 ${progress}%, black${progress}%)` }
                  : { background: "linear-gradient(90deg,#74d1f6,#df8811,#277291)" }
              }
            />
            <div className="px-3 sm:px-5 py-2 sm:py-3 flex items-center gap-3 sm:gap-5">
              {/* Title */}
              <div className="flex items-center gap-2 min-w-[12ch]">
                <span className="text-[10px] sm:text-xs font-semibold uppercase text-[#277291]">Admissions</span>
                <span className="hidden sm:inline text-sm font-bold text-[#0f1b2b]">{heading}</span>
              </div>

              {/* Countdown inline */}
              <div className="flex items-center gap-2 sm:gap-3 text-[#0f1b2b]">
                <Pill label="Days" value={days} />
                <Sep />
                <Pill label="Hours" value={hours} />
                <Sep />
                <Pill label="Minutes" value={minutes} />
                <Sep />
                <Pill label="Seconds" value={seconds} />
              </div>

              {/* CTA */}
              <a
                href={ctaHref}
                className="ml-auto inline-flex items-center justify-center rounded-full bg-[#df8811] px-4 py-2 text-white font-semibold hover:bg-[#c8740e] transition whitespace-nowrap"
              >
                {ctaText}
              </a>

              {/* Controls */}
              <button
                onClick={() => setCollapsed(true)}
                className="ml-1 p-1.5 rounded-md hover:bg-gray-100 text-gray-600"
                title="Minimize"
                aria-label="Minimize"
              >
                <ChevronDownIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCollapsed(true)}
                className="p-1.5 rounded-md hover:bg-gray-100 text-gray-600"
                title="Close"
                aria-label="Close"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ---------- CARD LAYOUT (original) ----------
  return (
    <div style={posStyle(position, offset)} aria-live="polite">
      {collapsed ? (
        <button
          onClick={() => setCollapsed(false)}
          className="flex items-center gap-2 rounded-full bg-[#df8811] text-white px-3 py-2 shadow-lg hover:brightness-110 transition"
          aria-expanded="false"
          title="Show Grade 10 admissions timer"
        >
          <span className="text-xs font-semibold">G10 Admissions</span>
          <ChevronUpIcon className="w-4 h-4" />
        </button>
      ) : (
        <div className="relative w-[20rem] sm:w-[24rem] rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden">
          <div
            className="h-1"
            style={
              progress != null
                ? { background: `linear-gradient(90deg,#277291 ${progress}%, #74d1f6 ${progress}%)` }
                : { background: "linear-gradient(90deg,#277291,#74d1f6,#277291)" }
            }
          />
          <div className="p-4 sm:p-5">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-semibold tracking-wide text-[#277291] uppercase">Admissions</div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0f1b2b]">{heading}</h3>
              </div>
              <div className="flex items-center gap-1">
               
                <button onClick={() => setCollapsed(true)} className="p-1.5 rounded-md hover:bg-gray-100 text-gray-600" aria-label="Close">
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              <Box label="Days" value={days} />
              <Box label="Hours" value={hours} />
              <Box label="Minutes" value={minutes} />
              <Box label="Seconds" value={seconds} />
            </div>
            <a href={ctaHref} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#df8811] px-4 py-2.5 text-white font-semibold hover:bg-[#c8740e] transition">
              {ctaText}
            </a>
            <p className="mt-2 text-[11px] text-gray-500">
              Deadline: {targetDate.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const Box: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="rounded-lg bg-[#df8811] text-white py-2">
    <div className="text-2xl font-bold leading-none text-center tabular-nums">{pad2(value)}</div>
    <div className="text-[10px] uppercase tracking-wide text-center opacity-90">{label}</div>
  </div>
);

const Pill: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="px-2 sm:px-3 py-1 rounded-full bg-[#74d1f6] text-black text-xs sm:text-sm font-bold tabular-nums flex items-center gap-1">
    <span className="text-base sm:text-lg">{pad2(value)}</span>
    <span className="uppercase text-[9px] sm:text-[10px] opacity-90">{label}</span>
  </div>
);

const Sep = () => <span className="w-px h-6 bg-gray-300/80" />;

export default FloatingAdmissionTimer;
