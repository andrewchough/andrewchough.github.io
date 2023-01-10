import React from "react";

import Link from "next/link";

export default function Navbar(props) {
  function handleChange() {
    props.onThemeChange(!props.theme);
  }

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
            href="https://drive.google.com/file/d/1DwVegUHHQVb9ZVK7dEi77HVOoqoy6imL/view?usp=share_link"
            className="navbar__name navbar__name--resume"
          >
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
}
