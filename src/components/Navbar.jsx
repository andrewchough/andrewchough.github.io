import React from "react";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__name__container">
        <Link
          href="/"
          className="navbar__name hover:underline underline-offset-4 transition-all"
        >
          ANDREW CHOUGH
        </Link>
      </div>
      <div>
        <div className="float-right md-max:m-auto">
          <Link
            href="/about"
            className="navbar__name hover:underline underline-offset-4 transition-all"
          >
            ABOUT
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1ql0vyidt-7H0HfWyubDNT-oOvvJelcu5/view?usp=sharing"
            className="navbar__name navbar__name--resume hover:underline underline-offset-4 transition-all"
          >
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
}
