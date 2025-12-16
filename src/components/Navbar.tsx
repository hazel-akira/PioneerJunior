import React,
 { 
  useEffect, 
  //useId, 
  useRef, 
  useState, 
  type ReactNode 
} 
from "react";
import
 { 
  NavLink 
} 
from "react-router-dom";
import 
{ 
  ChevronDownIcon, 
  Bars3Icon, 
  XMarkIcon
 } 
 from "@heroicons/react/24/outline";

/* ===================== TYPES ===================== */

type MenuItem = { to: string; label: string };

type MenuGroup = {
  label: string;
  to: string;
  items: MenuItem[];
};

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
        to: "https://enquireto.pioneergroupofschools.co.ke/main/register?school=pioneerjunioracademy.co.ke/SignIn?ReturnUrl=%2F",
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

const ORDER: MenuKey[] = [
  "think",
  "pathways",
  "boarding",
  "talent",
  "joinUs",
  "fees",
  
];

/* ===================== UTILITIES ===================== */

const isExternal = (href: string) =>
  href.startsWith("http://") || href.startsWith("https://");

const Divider = () => (
  <span className="hidden lg:block mx-1 h-5 w-px bg-white/40" />
);

const LinkItem = ({
  item,
  onClick,
}: {
  item: MenuItem;
  onClick?: () => void;
}) =>
  isExternal(item.to) ? (
    <a
      href={item.to}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="block px-3 py-2 rounded-md bg-white text-black hover:bg-black hover:text-white"
    >
      {item.label}
    </a>
  ) : (
    <NavLink
      to={item.to}
      onClick={onClick}
      className="block px-3 py-2 rounded-md bg-white text-black hover:bg-black hover:text-white"
    >
      {item.label}
    </NavLink>
  );

/* ===================== DROPDOWN ===================== */

const Dropdown = ({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) => (
  <div
    className={`absolute left-0 top-full text-sm mt-1 px-0.5 w-37 rounded-xl bg-white shadow-lg transition ${
      open
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-1 pointer-events-none"
    }`}
  >
    <div className="p-1 text-sm space-y-1">{children}</div>
  </div>
);

/* ===================== NAVBAR ===================== */

const Navbar: React.FC = () => {
  const [openKey, setOpenKey] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileKey, setMobileKey] = useState<MenuKey | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  //const id = useId();
  const closeTimeoutRef = useRef<number | null>(null);


  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenKey(null);     // close desktop dropdown
        setMobileOpen(false); // close mobile menu
        setMobileKey(null);   // close mobile submenu
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler); // mobile touch support
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);
  
  const closeAll = () => {
    setOpenKey(null);
    setMobileOpen(false);
    setMobileKey(null);
  };
  const openMenu = (key: MenuKey) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenKey(key);
  };
  
  const scheduleCloseMenu = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }
  
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpenKey(null);
    }, 300); // 👈 adjust delay here (300–500ms is ideal)
  };
  

  return (
    <header className="sticky top-0 z-50 bg-[#0f1b2b] text-white">
      <div ref={navRef} className="max-w-8xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* BRAND */}
        <NavLink to="/" className="text-2xl font-bold">
          Pioneer Junior Academy
        </NavLink>

        {/* DESKTOP */}
        <nav className="hidden lg:flex items-center text-base font-bold">
          <NavLink to="/" className="px-3 py-2">
            Home
          </NavLink>
          <Divider />

          {ORDER.map((k, i) => (
            <React.Fragment key={k}>
              <div
  className="relative"
  onMouseEnter={() => openMenu(k)}
  onMouseLeave={scheduleCloseMenu}
>
<Dropdown open={openKey === k}>
  <div
    onMouseEnter={() => openMenu(k)}
    onMouseLeave={scheduleCloseMenu}
  >
    {MENU[k].items.map((it) => (
      <LinkItem key={it.label} item={it} onClick={closeAll} />
    ))}
  </div>
</Dropdown>

                <NavLink
                  to={MENU[k].to}
                  className="px-3 py-2 inline-flex items-center gap-1"
                >
                  {MENU[k].label}
                  <ChevronDownIcon className="w-4 h-4" />
                </NavLink>

                <Dropdown open={openKey === k}>
                  {MENU[k].items.map((it) => (
                    <LinkItem key={it.label} item={it} onClick={closeAll} />
                  ))}
                </Dropdown>
              </div>
              <Divider />

              {i === 1 && (
                <>
                  <NavLink to="/kjsea" className="px-3 py-2">
                    KJSEA
                  </NavLink>
                  <Divider />
                </>
              )}
            </React.Fragment>
          ))}

        {/* Location */}
<NavLink to="/location" className="px-3 py-2">
  Location
</NavLink>
<Divider />

{/* Get Access as dropdown */}
<div
  className="relative"
  onMouseEnter={() => openMenu("getAccess")}
  onMouseLeave={scheduleCloseMenu}
>
  <NavLink
    to={MENU.getAccess.to}
    className="px-3 py-2 inline-flex items-center gap-1"
  >
    {MENU.getAccess.label}
    <ChevronDownIcon className="w-4 h-4" />
  </NavLink>

  <Dropdown open={openKey === "getAccess"}>
    {MENU.getAccess.items.map((it) => (
      <LinkItem key={it.label} item={it} onClick={closeAll} />
    ))}
  </Dropdown>
</div>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2"
        >
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0f1b2b] px-4 pb-4 space-y-2">
          <NavLink to="/" onClick={closeAll}>
            Home
          </NavLink>

          {ORDER.slice(0, 2).map((k) => (
            <MobileGroup
              key={k}
              k={k}
              openKey={mobileKey}
              setOpenKey={setMobileKey}
              closeAll={closeAll}
            />
          ))}

          <NavLink to="/kjsea" onClick={closeAll}>
            KJSEA
          </NavLink>

          {ORDER.slice(2).map((k) => (
            <MobileGroup
              key={k}
              k={k}
              openKey={mobileKey}
              setOpenKey={setMobileKey}
              closeAll={closeAll}
            />
          ))}

          <NavLink to="/location" onClick={closeAll}>
            Location
          </NavLink>

          <NavLink to="/access" onClick={closeAll}>
            Get Access
          </NavLink>
        </div>
      )}
    </header>
  );
};

/* ===================== MOBILE GROUP ===================== */

const MobileGroup = ({
  k,
  openKey,
  setOpenKey,
  closeAll,
}: {
  k: MenuKey;
  openKey: MenuKey | null;
  setOpenKey: (k: MenuKey | null) => void;
  closeAll: () => void;
}) => {
  const open = openKey === k;

  return (
    <div>
      <div className="flex justify-between items-center">
        <NavLink to={MENU[k].to} onClick={closeAll}>
          {MENU[k].label}
        </NavLink>
        <button onClick={() => setOpenKey(open ? null : k)}>
          <ChevronDownIcon
            className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="pl-4 mt-2 space-y-1">
          {MENU[k].items.map((it) => (
            <LinkItem key={it.label} item={it} onClick={closeAll} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
