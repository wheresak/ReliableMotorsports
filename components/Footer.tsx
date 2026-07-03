import Link from 'next/link';
import { siteConfig } from '../lib/siteConfig';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <p className="footer-brand">{siteConfig.siteName}</p>
          <p>{siteConfig.address}</p>
          <p>{siteConfig.phone}</p>
        </div>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
      <p className="footer-copy">Reliable Motorsports — Appointment only in Scarborough, Ontario.</p>
    </footer>
  );
}
