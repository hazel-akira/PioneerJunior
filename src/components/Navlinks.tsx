import React, { useState, useRef, useEffect, type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const closeTimeout = { current: undefined as number | undefined };

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isOpen,
  children,
  className = '',
}) => (
  <div
    className={`
      /* Mobile + Desktop: overlay popover under the trigger */
      absolute inset-x-0 top-full mt-2
      lg:left-0 lg:right-auto
      z-50 rounded-lg shadow-lg transform origin-top
      transition-all duration-200
      ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}

      /* Scroll within the panel if long */
      max-h-[60vh] overflow-y-auto overscroll-contain

      /* Background so items are readable */
      bg-[#74d1f6]

      ${className}
    `}
  >
    {children}
  </div>
);

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        openDropdown &&
        dropdownRefs.current[openDropdown] &&
        !dropdownRefs.current[openDropdown]!.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [openDropdown]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const toggleDropdown = (key: string) =>
    setOpenDropdown(openDropdown === key ? null : key);

  const closeAll = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const dropdownItems = {
    whoWeAre: [
      { to: '/who', label: 'Who We Are' },
      { to: '/History', label: 'Our History' },
      { to: '/leadership', label: 'Our Talent Management Team' },
      { to: '/nurturing', label: 'Our Nurturing Management Team' },
    ],
    nurture: [
      { to: '/nurture', label: 'Nurture' },
      { to: '/farm-2-fork', label: 'Farm-2-Fork' },
      { to: '/homefromhome', label: 'Home From Home' },
      { to: '/discipline', label: 'Discipline' },
      { to: '/chaplaincy', label: 'Chaplaincy' },
      { to: '/nursing-care', label: 'Nursing Care' }, // fixed trailing space
      { to: '/Safety', label: 'Safety and Security' },
    ],
    studyLife: [
      { to: '/studylife', label: 'Study Life' },
      { to: '/tailor-made-leadership-pathways', label: 'Tailor Made Pathways' },
      { to: '/cadet', label: 'Young Air Cadet' },
      { to: '/coding', label: 'Coding Life' },
      { to: '/seafarers', label: 'Young Seafarers' },
    ],
    talent: [
      { to: '/talent', label: 'Talent' },
      { to: '/band', label: 'Band Life' },
      { to: '/chess', label: 'Chess Masters' },
      { to: '/scouts', label: 'Scouts Life' },
      { to: '/swimmers', label: 'Swimmers Life' },
      { to: '/skating', label: 'Skating Life' },
      { to: '/cycling', label: 'Cycling Life' },
      { to: '/basket', label: 'Basketball Life' },
      { to: '/football', label: 'Footballer Life' },
      { to: '/chef', label: 'Master Chef' },
      { to: '/golf', label: 'Junior Golfer' },
    ],
    fees: [
      { to: '/fees', label: 'Our Friendly Fees' },
      { to: '/grade4fee', label: 'Grade 4 Fees' },
      { to: '/grade5fee', label: 'Grade 5 Fees' },
      { to: '/grade6fee', label: 'Grade 6 Fees' },
      { to: '/terms', label: 'Terms & Conditions' },
    ],
    howtojoinUs: [
      { to: '/join', label: ' How to Join Us' },
      { to: '/grade4', label: 'Join Grade 4' },
      { to: '/grade5', label: 'Join Grade 5' },
      { to: '/grade6', label: 'Join grade6' },
      { to: '/adm', label: 'Admissions Policy' },
      { to: 'https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F', label: 'Enquire' },
    ],
    getAccess: [
      { to: '/access', label: 'Get Access' },
      { to: '/events', label: 'Calendar of Events' },
      { to: '/StuAccess', label: 'Student Access' },
      { to: '/staffAccess', label: 'Staff Access' },
    ],
  };

  const labelMap: Record<string, string> = {
    whoWeAre: 'Who We Are',
    nurture: 'Nurture',
    studyLife: 'Study Life',
    talent: 'Talent',
    fees: 'Our Friendly Fees',
    howtojoinUs: 'How to Join Us',
    getAccess: 'Get Access',
  };

  type MenuKey = keyof typeof dropdownItems;

  const orderedKeys: MenuKey[] = [
    'whoWeAre',
    'nurture',
    'studyLife',
    'talent',
    'fees',
    'howtojoinUs',
    'getAccess'
  ];

  const renderDropdownLinks = (items: { to: string; label: string }[]) =>
    items.map(item =>
      item.to.startsWith('http') ? (
        <a
          key={item.to}
          href={item.to}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setTimeout(closeAll, 100)}
          className="block px-4 py-2 text-black hover:bg-black hover:text-white transition-colors"
        >
          {item.label}
        </a>
      ) : (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={() => setTimeout(closeAll, 100)}
          className="block px-4 py-2 text-black hover:bg-black hover:text-white transition-colors"
        >
          {item.label}
        </NavLink>
      )
    );

  return (
    <header className="bg-[#74d1f6] text-black top-0 z-50 font-sans shadow-lg">
      <div className="container mx-auto px-4 h-15 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-2xl pr-4 text-black lg:text-xl font-extrabold tracking-wide hover:opacity-90 transition-opacity"
        >
          ST PAUL THOMAS ACADEMY
        </NavLink>

        <button
          className="lg:hidden bg-[#e4af23] hover:bg-white p-2 rounded"
          onClick={() => setIsMobileMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-[#083056]" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-[#083056]" />
          )}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center text-sm font-bold whitespace-nowrap">
          <div className="flex items-center border-l border-white px-2 first:border-l-0">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'underline' : 'hover:underline')}>
              Home
            </NavLink>
          </div>

          {orderedKeys.slice(0, 2).map((key) => (
            <div
              key={key}
              ref={el => { dropdownRefs.current[key] = el }}
              className="relative flex items-center border-l border-black px-2 first:border-l-0"
              onMouseEnter={() => { clearTimeout(closeTimeout.current); setOpenDropdown(key) }}
              onMouseLeave={() => { closeTimeout.current = window.setTimeout(() => setOpenDropdown(null), 100) }}
            >
              <button
                onClick={() => toggleDropdown(key)}
                className="flex items-center gap-1 hover:underline"
                aria-expanded={openDropdown === key}
              >
                {labelMap[key]}
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === key ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              <div className="relative"> {/* anchor for absolute menu */}
                <DropdownMenu isOpen={openDropdown === key} onClose={closeAll} className="lg:w-56" >
                  {renderDropdownLinks(dropdownItems[key])}
                </DropdownMenu>
              </div>
            </div>
          ))}

          <div className="flex items-center border-l border-black px-2 first:border-l-0">
            <NavLink to="/perfomance" className={({ isActive }) => (isActive ? 'underline' : 'hover:underline')}>
              KCPE Results
            </NavLink>
          </div>

          {orderedKeys.slice(2, -1).map((key) => (
            <div
              key={key}
              ref={el => { dropdownRefs.current[key] = el }}
              className="relative flex items-center border-l border-black px-2 first:border-l-0"
              onMouseEnter={() => { clearTimeout(closeTimeout.current); setOpenDropdown(key) }}
              onMouseLeave={() => { closeTimeout.current = window.setTimeout(() => setOpenDropdown(null), 100) }}
            >
              <button
                onClick={() => toggleDropdown(key)}
                className="flex items-center gap-1 hover:underline"
                aria-expanded={openDropdown === key}
              >
                {labelMap[key]}
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === key ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              <div className="relative">
                <DropdownMenu isOpen={openDropdown === key} onClose={closeAll} className="lg:w-56">
                  {renderDropdownLinks(dropdownItems[key])}
                </DropdownMenu>
              </div>
            </div>
          ))}

          <div className="flex items-center border-l border-black px-2 first:border-l-0">
            <NavLink to="/location" className={({ isActive }) => (isActive ? 'underline' : 'hover:underline')}>
              Location
            </NavLink>
          </div>

          <div
            key="getAccess"
            ref={el => { dropdownRefs.current.getAccess = el }}
            className="relative flex items-center border-l border-black px-2 first:border-l-0"
            onMouseEnter={() => { clearTimeout(closeTimeout.current); setOpenDropdown('getAccess') }}
            onMouseLeave={() => { closeTimeout.current = window.setTimeout(() => setOpenDropdown(null), 100) }}
          >
            <button
              onClick={() => toggleDropdown('getAccess')}
              className="flex items-center gap-1 hover:underline"
              aria-expanded={openDropdown === 'getAccess'}
            >
              {labelMap.getAccess}
              <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === 'getAccess' ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            <div className="relative">
              <DropdownMenu isOpen={openDropdown === 'getAccess'} onClose={closeAll} className="lg:w-56">
                {renderDropdownLinks(dropdownItems.getAccess)}
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#74d1f6] text-black p-6 space-y-4" style={{ fontFamily: 'Times New Roman, serif' }}>
          <nav className="space-y-3">
            <NavLink to="/" onClick={closeAll} className={({ isActive }) => (isActive ? 'underline block' : 'block hover:underline')}>
              HOME
            </NavLink>

            {orderedKeys.slice(0, 2).map((key) => (
              <div key={key} ref={el => { dropdownRefs.current[key] = el }} className="relative">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="w-full flex justify-between items-center font-semibold"
                  aria-expanded={openDropdown === key}
                >
                  {labelMap[key]}
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === key ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                {/* absolute overlay so it doesn't push content */}
                <DropdownMenu isOpen={openDropdown === key} onClose={closeAll} className="w-full">
                  {renderDropdownLinks(dropdownItems[key])}
                </DropdownMenu>
              </div>
            ))}

            <NavLink to="/perfomance" onClick={closeAll} className={({ isActive }) => (isActive ? 'underline block' : 'block hover:underline')}>
              KCPE Results
            </NavLink>

            {orderedKeys.slice(2, -1).map((key) => (
              <div key={key} ref={el => { dropdownRefs.current[key] = el }} className="relative">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="w-full flex justify-between items-center font-semibold"
                  aria-expanded={openDropdown === key}
                >
                  {labelMap[key]}
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === key ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                <DropdownMenu isOpen={openDropdown === key} onClose={closeAll} className="w-full">
                  {renderDropdownLinks(dropdownItems[key])}
                </DropdownMenu>
              </div>
            ))}

            <NavLink to="/location" onClick={closeAll} className={({ isActive }) => (isActive ? 'underline block' : 'block hover:underline')}>
              Location
            </NavLink>

            <div key="getAccess" ref={el => { dropdownRefs.current.getAccess = el }} className="relative">
              <button
                onClick={() => toggleDropdown('getAccess')}
                className="w-full flex justify-between items-center font-semibold"
                aria-expanded={openDropdown === 'getAccess'}
              >
                {labelMap.getAccess}
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === 'getAccess' ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              <DropdownMenu isOpen={openDropdown === 'getAccess'} onClose={closeAll} className="w-full">
                {renderDropdownLinks(dropdownItems.getAccess)}
              </DropdownMenu>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
 