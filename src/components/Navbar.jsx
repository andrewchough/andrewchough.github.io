import React from "react";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__name__container">
        <Link href="/" className="navbar__name">
          ANDREW CHOUGH
        </Link>
      </div>
      <div>
        <div className="float-right md-max:m-auto">
          <Link href="/about" className="navbar__name">
            ABOUT
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1ZcJuq7wTTDQstfQk0y2t4Wp7aveP6o3K/view?usp=sharing"
            className="navbar__name navbar__name--resume"
          >
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
}
