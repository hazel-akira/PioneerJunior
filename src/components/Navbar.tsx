import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

/* ===================== TYPES ===================== */

type MenuItem = { to: string; label: string };
type MenuGroup = { label: string; to: string; items: MenuItem[] };

type MenuKey =
  | "think"
  | "pathways"
  | "boarding"
  | "talent"
  | "joinUs"
  | "fees"
  | "getAccess";

/* ===================== MENU DATA ===================== */

const MENU: Record<MenuKey, MenuGroup> = {
  think: {
    label: "Think Pioneer",
    to: "/think",
    items: [
      { to: "/different", label: "Think Different" },
      { to: "/leadership", label: "Our Imaginative Team" },
    ],
  },
  pathways: {
    label: "Think Pathways",
    to: "/pathways",
    items: [
      { to: "/detailed-pathways", label: "Detailed Pathways" },
      { to: "/cadet", label: "Think Aviation" },
      { to: "/mandarin", label: "Think Mandarin" },
      { to: "/seafarers", label: "Think Maritime" },
    ],
  },
  boarding: {
    label: "Think Boarding",
    to: "/boarding-life",
    items: [
      { to: "/farm-2-fork", label: "Farm to Fork" },
      { to: "/laundry", label: "Laundry" },
      { to: "/chaplaincy", label: "Chaplaincy" },
      { to: "/nursing-care", label: "Nursing Care" },
      { to: "/safety", label: "Safety & Security" },
    ],
  },
  talent: {
    label: "Think Talent",
    to: "/talent",
    items: [
      { to: "/band", label: "Band Life" },
      { to: "/football", label: "Soccer" },
      { to: "/swimmers", label: "Swimming" },
      { to: "/cycling", label: "Cycling" },
      { to: "/skating", label: "Skating" },
      { to: "/golf", label: "Golf" },
      { to: "/farmers", label: "Farmers Club" },
      { to: "/chess", label: "Chess Club" },
      { to: "/coding", label: "Robotics Club" },
      { to: "/basket", label: "Basketball" },
    ],
  },
  joinUs: {
    label: "Join Us",
    to: "/join",
    items: [
      { to: "/grade7", label: "Join Grade 7" },
      { to: "/grade8", label: "Join Grade 8" },
      { to: "/grade9", label: "Join Grade 9" },
      {
        to: "https://enquireto.pioneergroupofschools.co.ke/main/register",
        label: "Enquire",
      },
    ],
  },
  fees: {
    label: "Fees",
    to: "/fees",
    items: [
      { to: "/grade7fee", label: "Grade 7 Fees" },
      { to: "/grade8fee", label: "Grade 8 Fees" },
      { to: "/grade9fee", label: "Grade 9 Fees" },
      { to: "/terms", label: "Terms & Conditions" },
    ],
  },
  getAccess: {
    label: "Get Access",
    to: "/access",
    items: [
      { to: "/events", label: "Calendar of Events" },
      { to: "/StuAccess", label: "Student Access" },
      { to: "/staffAccess", label: "Staff Access" },
    ],
  },
};

/* ===================== ORDER ===================== */

const DESKTOP_ORDER: (MenuKey | "home" | "kjsea" | "location")[] = [
  "home",
  "think",
  "pathways",
  "kjsea",
  "boarding",
  "talent",
  "joinUs",
  "fees",
  "location",
  "getAccess",
];

/* ===================== HELPERS ===================== */

const isExternal = (href: string) => href.startsWith("http");

const DropdownItem = ({
  item,
  isLast,
}: {
  item: MenuItem;
  isLast: boolean;
}) => {
  const base =
    "block px-4 py-2 text-sm hover:bg-black hover:text-white transition";

  return (
    <>
      {isExternal(item.to) ? (
        <a
          href={item.to}
          target="_blank"
          rel="noopener noreferrer"
          className={base}
        >
          {item.label}
        </a>
      ) : (
        <NavLink to={item.to} className={base}>
          {item.label}
        </NavLink>
      )}

      {!isLast && <div className="border-b border-gray-200 mx-2" />}
    </>
  );
};

/* ===================== NAVBAR ===================== */

const Navbar: React.FC = () => {
  const [openKey, setOpenKey] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileKey, setMobileKey] = useState<MenuKey | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-[#0f1b2b] text-white">
      <div className="max-w-8xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <NavLink to="/" className="text-2xl font-bold">
          Pioneer Junior Academy
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center font-bold">
          {DESKTOP_ORDER.map((key) => {
            if (key === "home")
              return (
                <NavLink key="home" to="/" className="px-3 py-2">
                  Home
                </NavLink>
              );

            if (key === "kjsea")
              return (
                <NavLink key="kjsea" to="/kjsea" className="px-3 py-2">
                  KJSEA
                </NavLink>
              );

            if (key === "location")
              return (
                <NavLink key="location" to="/location" className="px-3 py-2">
                  Location
                </NavLink>
              );

            return (
              <div
                key={key}
                className="relative px-3"
                onMouseEnter={() => setOpenKey(key)}
                onMouseLeave={() => setOpenKey(null)}
              >
                <NavLink
                  to={MENU[key].to}
                  className="inline-flex items-center gap-1"
                >
                  {MENU[key].label}
                  <ChevronDownIcon className="w-4 h-4" />
                </NavLink>

                {openKey === key && (
                  <div className="absolute top-full left-0 mt-3 bg-white text-black rounded-xl shadow-xl
                                  min-w-[240px] max-h-[420px] overflow-y-auto py-2">
                    {MENU[key].items.map((it, idx) => (
                      <DropdownItem
                        key={it.label}
                        item={it}
                        isLast={idx === MENU[key].items.length - 1}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 rounded-md bg-[#74d1f6]"
        >
          <Bars3Icon className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#0f1b2b] z-50 transform transition-transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between p-5 border-b border-white/20">
          <span className="font-bold">Menu</span>
          <button onClick={() => setMobileOpen(false)}>
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 space-y-2">
          <NavLink to="/" className="block px-3 py-2">
            Home
          </NavLink>

          {Object.entries(MENU).map(([key, group]) => {
            const k = key as MenuKey;
            const open = mobileKey === k;

            return (
              <div key={k}>
                <button
                  onClick={() => setMobileKey(open ? null : k)}
                  className="w-full flex justify-between px-3 py-2 hover:bg-white/10"
                >
                  {group.label}
                  <ChevronDownIcon
                    className={`w-4 h-4 transition ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open && (
                  <div className="pl-3 py-2 space-y-1 border-l border-white/20">
                    {group.items.map((it) => (
                      <NavLink
                        key={it.label}
                        to={it.to}
                        className="block px-3 py-2 text-sm hover:bg-white/10"
                        onClick={() => setMobileOpen(false)}
                      >
                        {it.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <NavLink to="/location" className="block px-3 py-2">
            Location
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
