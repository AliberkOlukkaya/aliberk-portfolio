"use client";

import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navigation, personal } from "@/data/portfolio";
import { ScrollToTopLink } from "@/components/scroll-to-top-link";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <ScrollToTopLink className="wordmark" ariaLabel="Aliberk Olukkaya, back to top">
          <span className="monogram" aria-hidden="true">AO</span>
          <span>Aliberk Olukkaya</span>
        </ScrollToTopLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="button button-small nav-cv" href={personal.cv} download>
          <Download size={15} aria-hidden="true" /> Download CV
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation">
        <div className="container">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <a className="button" href={personal.cv} download onClick={() => setOpen(false)}>
            <Download size={16} aria-hidden="true" /> Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}
