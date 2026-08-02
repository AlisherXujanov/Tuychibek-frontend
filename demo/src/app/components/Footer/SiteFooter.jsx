import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">Tuychibek</p>
          <p className="site-footer__tagline">
            Listening archive for nights that need a clear signal.
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <Link href="/about">About</Link>
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/register">Register</Link>
        </nav>

        <div className="site-footer__contact">
          <p className="site-footer__contact-label">Contact</p>
          <a href="mailto:hello@tuychibek.com">hello@tuychibek.com</a>
          <p className="site-footer__social">Instagram · SoundCloud · Bandcamp</p>
        </div>
      </div>

      <p className="site-footer__legal">© {year} Tuychibek. All rights reserved.</p>
    </footer>
  );
}
