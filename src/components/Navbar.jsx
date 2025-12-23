import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = e => {
      if (e.key === "Escape") setOpen(false);
    };

    const onMouseDown = e => {
      if (!menuRef.current) return;
      if (menuRef.current.contains(e.target)) return;
      setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [open]);

  return (
    <div className="navbar">
      <div className="navbar__name__container">
        <Link
          href="/"
          className="navbar__name underline-offset-4 transition-all hover:underline"
        >
          ANDREW CHOUGH
        </Link>
      </div>
      <div>
        <div className="md-max:m-auto float-right">
          <div ref={menuRef} className="relative inline-block">
            <button
              type="button"
              className="navbar__name inline-flex items-center gap-1 underline-offset-4 transition-all hover:underline"
              aria-haspopup="menu"
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
            >
              ABOUT
              <svg
                className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.937a.75.75 0 1 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {open ? (
              <div
                role="menu"
                className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-lg border border-white/10 bg-[#111] shadow-lg"
              >
                <Link
                  href="/about"
                  role="menuitem"
                  className="block px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  PROFILE
                </Link>
                <Link
                  href="/reads"
                  role="menuitem"
                  className="block px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  READS
                </Link>
                <Link
                  href="/music"
                  role="menuitem"
                  className="block px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  MUSIC
                </Link>
              </div>
            ) : null}
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1ql0vyidt-7H0HfWyubDNT-oOvvJelcu5/view?usp=sharing"
            className="navbar__name navbar__name--resume underline-offset-4 transition-all hover:underline"
          >
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
}
