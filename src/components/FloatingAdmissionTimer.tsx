import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { XMarkIcon, ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

type Props = {
  target: string | Date;
  start?: string | Date;
  ctaText?: string;
  ctaHref?: string;
  storageKey?: string;
  heading?: string;
};

function useBumpOnChange<T>(value: T, duration = 220) {
  const [bump, setBump] = useState(false);
  useEffect(() => {
    setBump(true);
    const t = setTimeout(() => setBump(false), duration);
    return () => clearTimeout(t);
  }, [value, duration]);
  return bump;
}

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

const AdmissionTimerSticky: React.FC<Props> = ({
  target,
  start,
  ctaText = "Apply Now",
  ctaHref = "/grade10",
  storageKey = "g10-admissions-timer-collapsed",
  heading = "Grade 10 admissions close in",
}) => {
  const { pathname } = useLocation();
  if (pathname === "/") return null; // hide on homepage

  const targetDate = useMemo(() => (target instanceof Date ? target : new Date(target)), [target]);
  const startDate = useMemo(() => (start ? (start instanceof Date ? start : new Date(start)) : null), [start]);
  const { days, hours, minutes, seconds, expired } = useCountdown(targetDate);
  const secBump = useBumpOnChange(seconds);

  const [collapsed, setCollapsed] = useState<boolean>(() => {
    try {
      return localStorage.getItem(storageKey) === "1";
    } catch {
      return false;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, collapsed ? "1" : "0");
    } catch {}
  }, [collapsed, storageKey]);

  const progress = useMemo(() => {
    if (!startDate) return null;
    const total = targetDate.getTime() - startDate.getTime();
    const done = Date.now() - startDate.getTime();
    const pct = Math.min(100, Math.max(0, (done / total) * 100));
    return isFinite(pct) ? pct : null;
  }, [startDate, targetDate]);

  if (expired) return null;

  return (
    <div
      aria-live="polite"
      className="sticky"
    >
      <style>{`
        @keyframes pulseTick { 0%{transform:scale(1);opacity:1} 40%{transform:scale(1.12);opacity:.95} 100%{transform:scale(1);opacity:1} }
        .animate-pulseTick { animation: pulseTick 220ms ease-out; }
      `}</style>

      {collapsed ? (
        <div className="mx-auto w-full max-w-[72rem] px-3 sm:px-5 py-2">
          <div className="flex items-center justify-center">
            <button
              onClick={() => setCollapsed(false)}
              className="flex items-center gap-2 rounded-full bg-[#0f1b2b]/80 text-white px-3 py-2 sm:px-4 sm:py-2.5 shadow hover:brightness-110 transition text-xs sm:text-sm"
              title="Show Grade 10 admissions timer"
            >
              <span className="font-semibold">Grade 7-9 Admissions</span>
              <ChevronUpIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      ) : (
        <div className="mx-auto w-full max-w-[72rem] px-3 sm:px-5 py-2">
          <div className="w-full ">
            <div
              className="h-1 w-full"
              style={
                progress != null
                  ? { background: `linear-gradient(90deg,#df8811 ${progress}%, black ${progress}%)` }
                  : { background: "linear-gradient(90deg,#74d1f6,#df8811,#277291)" }
              }
            />
            <div className="px-3 sm:px-5 py-2 sm:py-3 flex flex-wrap items-center gap-x-3 gap-y-2">
              <div className="flex items-center gap-2 min-w-[10ch] order-1">
                <span className="text-[10px] sm:text-xs font-semibold uppercase text-neutral-700">Admissions</span>
                <span className="hidden sm:inline text-sm font-bold text-[#0f1b2b]">{heading}</span>
              </div>

              <div className="order-3 sm:order-2 flex items-center gap-2 sm:gap-3 text-[#0f1b2b] flex-1 min-w-[240px]">
                <Pill label="Days" value={days} />
                <Sep />
                <Pill label="Hours" value={hours} />
                <Sep />
                <Pill label="Minutes" value={minutes} />
                <Sep />
                <Pill label="Seconds" value={seconds} emphasize bump={secBump} />
              </div>

              <a
                href={ctaHref}
                className="order-2 sm:order-3 ml-auto inline-flex items-center justify-center rounded-full bg-[#74d1f6]/60 px-4 py-2 text-black text-sm font-semibold hover:bg-[#c8740e]/60 transition whitespace-nowrap w-full sm:w-auto"
              >
                {ctaText}
              </a>

              <div className="order-4 flex items-center ml-0 sm:ml-1">
                <button
                  onClick={() => setCollapsed(true)}
                  className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
                  title="Minimize"
                  aria-label="Minimize"
                >
                  <ChevronDownIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCollapsed(true)}
                  className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
                  title="Close"
                  aria-label="Close"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <p className="pt-1 text-[11px] text-gray-500 text-center">
            Deadline: {targetDate.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}
          </p>
        </div>
      )}
    </div>
  );
};

const Pill: React.FC<{ label: string; value: number; emphasize?: boolean; bump?: boolean }> = ({
  label,
  value,
  emphasize,
  bump,
}) => (
  <div
    className={`flex flex-col items-center justify-center px-2 sm:px-3 py-1 rounded-xl ${
      emphasize ? "bg-[#df8811] text-black" : "bg-[#74d1f6] text-black"
    } text-xs sm:text-sm font-bold`}
  >
    <span className={`tabular-nums leading-none text-base sm:text-lg ${bump ? "animate-pulseTick" : ""}`}>
      {pad2(value)}
    </span>
    <span className="uppercase text-[9px] sm:text-[10px] opacity-90 leading-tight">{label}</span>
  </div>
);

const Sep = () => <span className="w-px h-6 bg-gray-300/80" />;

export default AdmissionTimerSticky;
