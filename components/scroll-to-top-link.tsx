"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";

type ScrollToTopLinkProps = {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function ScrollToTopLink({ children, className, ariaLabel }: ScrollToTopLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });

    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  }

  return (
    <Link className={className} href="/" aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </Link>
  );
}
