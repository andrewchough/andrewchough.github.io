import React from "react";

export default function Navbar(props) {
  function handleChange() {
    props.onThemeChange(!props.theme);
  }

  return (
    <div
      className="navbar"
    >
      <div className="navbar__name__container">
        <a
          href="/"
          className="navbar__name"
        >
          ANDREW CHOUGH
        </a>
      </div>
      <div>
        <div className="float-right md-max:m-auto">
          <a
            href="/about"
            className="navbar__name"
          >
          ABOUT
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1ALlfH1E9uvWa0417cLdCJE5AOmXwkXpR/view?usp=sharing"
            className="navbar__name navbar__name--resume"
          >
          RESUME
          </a>
        </div>
      </div>
    </div>
  );
}
