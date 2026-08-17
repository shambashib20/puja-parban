"use client";

import Link from "next/link";
import { navItems, sectionIds } from "@/lib/data/navigation";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { useScrollSpy } from "@/hooks/useScrollSpy";

interface HeaderProps {
  /** Force a nav link active instead of using scroll-spy (used on blog detail pages). */
  activeOverride?: string;
}

export function Header({ activeOverride }: HeaderProps) {
  const { isOpen, toggle, close } = useMobileMenu();
  const scrollActiveId = useScrollSpy(sectionIds);
  const activeHref = activeOverride ?? `/#${scrollActiveId}`;

  return (
    <>
      <header className="header">
        <div className="container-big">
          <nav className="nav">
            <Link className="nav-brand" href="/">
              <img src="/assets/logo-header.png" alt="Puja Parban" className="nav-logo" />
            </Link>

            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={activeHref === item.href ? "active" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <button className="btn-login" onClick={() => alert("Login coming soon!")}>
                Login
              </button>
              <Link href="/#booking-form" className="btn-book">
                <img src="/assets/primary-icon.png" alt="" />
                Book Now
              </Link>
            </div>

            <button className="hamburger" aria-label="Menu" onClick={toggle}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </header>

      <div className={`mobile-menu${isOpen ? " open" : ""}`}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={close}>
            {item.label}
          </Link>
        ))}
        <button
          className="btn btn-outline"
          onClick={() => {
            alert("Login coming soon!");
            close();
          }}
        >
          Login
        </button>
        <Link href="/#booking-form" className="btn btn-primary" onClick={close}>
          Book Now
        </Link>
      </div>
    </>
  );
}
