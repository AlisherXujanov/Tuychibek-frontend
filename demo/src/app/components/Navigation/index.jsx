"use client";

import "./nav.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

const PRIMARY_LINKS = [
  { href: "/", label: "Home", match: "exact" },
  { href: "/about", label: "About", match: "prefix" },
  { href: "/#contact", label: "Contact", match: "hash" },
];

const THEME_KEY = "theme";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 3v2.2M12 18.8V21M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M3 12h2.2M18.8 12H21M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19.5 13.2A7.5 7.5 0 1 1 10.8 4.5 6 6 0 0 0 19.5 13.2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const menuId = useId();
  const [loggedIn, setLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hash, setHash] = useState("");
  const [theme, setTheme] = useState("light");
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("logged-in");
    setLoggedIn(stored === "true");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", menuOpen);

    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("nav-menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY);
    const attr = document.documentElement.getAttribute("data-theme");
    const next =
      stored === "dark" || stored === "light"
        ? stored
        : attr === "dark"
          ? "dark"
          : "light";
    setTheme(next);
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme, themeReady]);

  function logout(event) {
    event.preventDefault();
    localStorage.removeItem("logged-in");
    window.location.reload();
  }

  function isActive(link) {
    if (link.match === "exact") return pathname === link.href;
    if (link.match === "prefix") return pathname.startsWith(link.href);
    if (link.match === "hash") {
      return pathname === "/" && hash === "#contact";
    }
    return false;
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  const themeToggle = (
    <button
      type="button"
      className="site-nav__theme"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      title={theme === "dark" ? "Light theme" : "Dark theme"}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );

  const authLinks = loggedIn ? (
    <Link href="/" className="site-nav__auth-link" onClick={logout}>
      Logout
    </Link>
  ) : (
    <>
      <Link href="/auth/login" className="site-nav__auth-link" onClick={closeMenu}>
        Login
      </Link>
      <Link href="/auth/register" className="site-nav__cta" onClick={closeMenu}>
        Register
      </Link>
    </>
  );

  const isHome = pathname === "/";
  const overHero = isHome && !scrolled && !menuOpen;
  const solid = !overHero;

  return (
    <header
      className={[
        "site-header",
        solid ? "is-solid" : "",
        overHero ? "is-over-hero" : "",
        menuOpen ? "is-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <nav className="site-nav" aria-label="Primary">
        <Link href="/" className="site-nav__brand" onClick={closeMenu}>
          Tuychibek
        </Link>

        <ul className="site-nav__links site-nav__links--desktop">
          {PRIMARY_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`site-nav__link${isActive(link) ? " is-active" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="site-nav__actions">
          {themeToggle}
          <div className="site-nav__auth site-nav__auth--desktop">{authLinks}</div>
          <button
            type="button"
            className="site-nav__toggle"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="site-nav__toggle-bar" aria-hidden="true" />
            <span className="site-nav__toggle-bar" aria-hidden="true" />
            <span className="site-nav__toggle-bar" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <div
        id={menuId}
        className={`site-nav__overlay${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul className="site-nav__links site-nav__links--mobile">
          {PRIMARY_LINKS.map((link, index) => (
            <li key={link.href} style={{ "--i": index }}>
              <Link
                href={link.href}
                className={`site-nav__link${isActive(link) ? " is-active" : ""}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="site-nav__auth site-nav__auth--mobile" style={{ "--i": PRIMARY_LINKS.length }}>
          {authLinks}
        </div>
      </div>
    </header>
  );
}
