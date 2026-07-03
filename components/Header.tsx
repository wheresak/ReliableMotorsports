'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '../lib/siteConfig';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link href="/" className="logo-link" aria-label="Reliable Motorsports home">
          <img src="/logo/reliable-logo.png" alt="Reliable Motorsports logo" className="site-logo" />
          <span>{siteConfig.siteName}</span>
        </Link>

        <nav className={`primary-nav ${open ? 'open' : ''}`} aria-label="Primary navigation">
          {siteConfig.navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link href="/contact" className="btn btn-primary nav-cta">
            Book Service
          </Link>
          <button className={`menu-toggle ${open ? 'active' : ''}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
