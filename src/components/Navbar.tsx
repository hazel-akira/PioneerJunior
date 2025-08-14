import React, { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet-async";

/**
 * PJA — Navbar styled to match screenshot
 * - Dark navy bar, white links, vertical separators
 * - "Home" first, "Get Access" last
 * - Clean alignment using max-w-7xl container
 */

/** Types */
interface DropdownMenuProps {
  isOpen: boolean
  children: ReactNode
  className?: string
}

type MenuItem = { to: string; label: string }

type MenuKey =
  | "think"
  | "pathways"
  | "boarding"
  | "talent"
  | "joinUs"
  | "fees"
  | "getAccess"

/** Data */
const MENU: Record<MenuKey, { label: string; items: MenuItem[] }> = {
  think: {
    label: "Think",
    items: [
      { to: "/think", label: "Think" },
      { to: "/different", label: "Think different" },
      { to: "/imaginative", label: "Our Imaginative Team" },
    ],
  },
  pathways: {
    label: "Think Pathways",
    items: [
      { to: "/pathways", label: "Think Pathways" },
      { to: "/detailed-pathways", label: "Think Detailed Pathways" },
      { to: "/aviation", label: "Think Aviation" },
      { to: "/mandarin", label: "Think Mandarin" },
      { to: "/maritime", label: "Think Maritime" },
    ],
  },
  boarding: {
    label: "Think Boarding",
    items: [
      { to: "/boarding", label: "Think Boarding" },
      { to: "/farm-2-fork", label: "Farm To Fork" },
      { to: "/laundry", label: "Laundry" },
      { to: "/chaplaincy", label: "Chaplaincy" },
      { to: "/nursing", label: "Nursing Care" },
      { to: "/safety", label: "Safety And Security" },
    ],
  },
  talent: {
    label: "Think Talent",
    items: [
      { to: "/talent", label: "Think Talent" },
      { to: "/band", label: "Band Life" },
      { to: "/football", label: "Soccer" },
      { to: "/swimmers", label: "Swimming" },
      { to: "/cycling", label: "Cycling" },
      { to: "/skating", label: "Skating" },
      { to: "/golf", label: "Golf" },
      { to: "/farmer", label: "Farmers Club" },
      { to: "/chess", label: "Chess Club" },
      { to: "/robotics", label: "Robotics Club" },
      { to: "/basketLife", label: "Basketball" },
    ],
  },
  joinUs: {
    label: "Join Us",
    items: [
      { to: "/join", label: "Join Us" },
      { to: "/grade7", label: "Join Grade 7" },
      { to: "/grade8", label: "Join Grade 8" },
      { to: "/grade9", label: "Join grade9" },
      { to: "https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F", label: "Enquire" },
    ],
  },
  fees: {
    label: "Fees",
    items: [
      { to: "/fees", label: "Fees" },
      { to: "/grade7fee", label: "Grade 7 Fees" },
      { to: "/grade8fee", label: "Grade 8 Fees" },
      { to: "/grade9fee", label: "Grade 9 Fees" },
      { to: "/terms", label: "Terms & Conditions" },
    ],
  },
  getAccess: {
    label: "Get Access",
    items: [
      { to: "/access", label: "Get Access" },
      { to: "/events", label: "Calendar of Events" },
      { to: "/StuAccess", label: "Student Access" },
      { to: "/staffAccess", label: "Staff Access" },
    ],
  },
}

const ORDER: MenuKey[] = [
  "think",
  "pathways",
  "boarding",
  "talent",
  "joinUs",
  "fees",
  "getAccess",
]

/** Utilities */
function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://")
}

function Divider() {
  return <span className="hidden lg:block mx-3 h-5 w-px bg-white/40" aria-hidden="true" />
}

function LinkItem({ item, onClick }: { item: MenuItem; onClick?: () => void }) {
  const base =
    "block w-full text-left px-4 py-2 rounded-md text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40" as const

  if (isExternal(item.to)) {
    return (
      <a
        href={item.to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={base + " bg-white text-black hover:bg-black hover:text-white"}
      >
        {item.label}
      </a>
    )
  }
  return (
    <NavLink
      to={item.to}
      onClick={onClick}
      className={({ isActive }) =>
        base +
        (isActive
          ? " bg-black text-white"
          : " bg-white text-black hover:bg-black hover:text-white")}
    >
      {item.label}
    </NavLink>
  )
}

/** Dropdown shell (desktop & mobile) */
const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, children, className = "" }) => {
  return (
    <div
      className={
        `absolute left-0 top-full mt-2 w-64 rounded-xl border border-white/10 bg-white text-black shadow-lg ring-1 ring-black/5
         transition-all duration-200 overflow-hidden z-50
         ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}
         ${className}`
      }
      role="menu"
      aria-hidden={!isOpen}
    >
      <div className="p-2 space-y-1 max-h-80 overflow-y-auto">{children}</div>
    </div>
  )
}

/** Main component */
const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openKey, setOpenKey] = useState<MenuKey | null>(null)
  const navRef = useRef<HTMLDivElement | null>(null)
  const menuBtnId = useId()

  // Close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!navRef.current) return
      if (!navRef.current.contains(e.target as Node)) {
        setOpenKey(null)
      }
    }
    document.addEventListener("mousedown", onDocClick)
    return () => document.removeEventListener("mousedown", onDocClick)
  }, [])

  // Close mobile menu on resize up
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  function toggleDrop(key: MenuKey) {
    setOpenKey(prev => (prev === key ? null : key))
  }

  function closeAll() {
    setOpenKey(null)
    setMobileOpen(false)
  }

  // Helper to render a nav button w/ optional dropdown and divider after it
  function DesktopMenuButton({ k }: { k: MenuKey }) {
    return (
      <div className="relative flex items-center">
        <button
          id={`${menuBtnId}-${k}`}
          onClick={() => toggleDrop(k)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpenKey(null)
            if (e.key === "ArrowDown" && openKey !== k) setOpenKey(k)
          }}
          aria-haspopup="menu"
          aria-expanded={openKey === k}
          className={`flex items-center gap-1 px-3 py-2 rounded-md transition hover:bg-white/10 ${
            openKey === k ? "bg-white/10" : ""
          }`}
        >
          {MENU[k].label}
          <ChevronDownIcon className={`w-4 h-4 transition-transform ${openKey === k ? "rotate-180" : "rotate-0"}`} />
        </button>
        <DropdownMenu isOpen={openKey === k}>
          {MENU[k].items.map((it) => (
            <LinkItem key={it.label} item={it} onClick={closeAll} />
          ))}
        </DropdownMenu>
        <Divider />
      </div>
    )
  }

  return (
    <header className="sticky top-0 z-50 font-sans" style={{ fontFamily: "Poppins, sans-serif" }}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* Bar */}
      <div className="bg-[#0f1b2b] text-white backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b border-white/10">
        <div ref={navRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-14 flex items-center justify-between gap-4">
            {/* Brand */}
            <NavLink
              to="/"
              className="shrink-0 text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold tracking-wide text-white hover:text-[#E4AF23] transition-colors"
            >
              Pioneer Junior Academy
            </NavLink>

            {/* Desktop nav */}
            <nav aria-label="Primary" className="hidden lg:flex items-center text-[15px] font-semibold">
              {/* Home first */}
              <div className="flex items-center">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md hover:text-[#E4AF23] transition ${isActive ? "underline" : ""}`
                  }
                >
                  Home
                </NavLink>
                <Divider />
              </div>

              {/* Order: Think → Pathways → Boarding → Talent → Join Us → Fees */}
              {ORDER.filter(k => k !== "getAccess").map((k) => (
                <DesktopMenuButton key={k} k={k} />
              ))}

              {/* Location (static) */}
              <div className="flex items-center">
                <NavLink
                  to="/location"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md hover:text-[#E4AF23] transition ${isActive ? "underline" : ""}`
                  }
                >
                  Location
                </NavLink>
                <Divider />
              </div>

              {/* Get Access last */}
              <DesktopMenuButton k="getAccess" />
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 bg-[#E4AF23] text-white hover:bg-white hover:text-[#0f1b2b] transition"
            >
              {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`lg:hidden overflow-hidden border-b border-white/10 bg-[#0f1b2b] text-white transition-[max-height,opacity] duration-300 ${
          mobileOpen ? "opacity-100 max-h-[80vh]" : "opacity-0 max-h-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-2 text-[15px] font-semibold">
          <NavLink to="/" onClick={closeAll} className={({ isActive }) => (isActive ? "underline block" : "block")}>
            HOME
          </NavLink>

          {/* Collapsible groups */}
          {ORDER.filter(k => k !== "getAccess").map((key) => (
            <details key={key} className="group" open={false}>
              <summary
                className="list-none flex cursor-pointer items-center justify-between rounded-md px-3 py-2 hover:bg-white/10"
                onClick={(e) => {
                  e.preventDefault()
                  const el = e.currentTarget.parentElement as HTMLDetailsElement
                  el.open = !el.open
                }}
              >
                <span>{MENU[key].label}</span>
                <ChevronDownIcon className="h-4 w-4 transition group-open:rotate-180" />
              </summary>
              <div className="pl-2 py-2 space-y-1">
                {MENU[key].items.map((it) => (
                  <LinkItem key={it.label} item={it} onClick={closeAll} />
                ))}
              </div>
            </details>
          ))}

          <NavLink to="/location" onClick={closeAll} className={({ isActive }) => (isActive ? "underline block" : "block")}>
            Location
          </NavLink>

          {/* Get Access last */}
          <details className="group" open={false}>
            <summary
              className="list-none flex cursor-pointer items-center justify-between rounded-md px-3 py-2 hover:bg-white/10"
              onClick={(e) => {
                e.preventDefault()
                const parent = (e.currentTarget as HTMLElement).parentElement as HTMLDetailsElement
                parent.open = !parent.open
              }}
            >
              <span>{MENU.getAccess.label}</span>
              <ChevronDownIcon className="h-4 w-4 transition group-open:rotate-180" />
            </summary>
            <div className="pl-2 py-2 space-y-1">
              {MENU.getAccess.items.map((it) => (
                <LinkItem key={it.label} item={it} onClick={closeAll} />
              ))}
            </div>
          </details>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;
