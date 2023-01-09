import React from "react";

export default function Navbar(props) {
  function handleChange() {
    props.onThemeChange(!props.theme);
  }

  return (
    <div
      className={`flex items-center justify-between flex-wrap p-5 ${
        props.theme ? "navbar__dark" : "navbar__light"
      }`}
    >
      <div className="flex items-center flex-shrink-0 navbar__name__container">
        <a
          href="/"
          className="hover:underline font-medium text-2xl tracking-tight lg:ml-5 navbar__name"
        >
          ANDREW CHOUGH
        </a>
      </div>
      <div className="float-right md-max:m-auto">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1ALlfH1E9uvWa0417cLdCJE5AOmXwkXpR/view?usp=sharing"
          className="mx-4 md-max:hidden"
        >
          RESUME
        </a>
      </div>
    </div>
  );
}
