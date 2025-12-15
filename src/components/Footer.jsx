import React from "react";

import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
} from "@tabler/icons";

export default function Footer() {
  return (
    <>
      <div className="my-6 flex justify-center gap-1">
        <a
          className="inline-flex items-center gap-2 rounded px-2 py-1 text-white transition-colors hover:bg-white/20"
          href="https://github.com/andrewchough"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <IconBrandGithub size={24} />
        </a>
        <a
          className="inline-flex items-center gap-2 rounded px-2 py-1 text-white transition-colors hover:bg-white/20"
          href="https://www.linkedin.com/in/andrewchough"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <IconBrandLinkedin size={24} />
        </a>
        <a
          className="inline-flex items-center gap-2 rounded px-2 py-1 text-white transition-colors hover:bg-white/20"
          href="mailto:andrewchough@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
        >
          <IconBrandGmail size={24} />
        </a>
      </div>
      <div>
        <p className="footer pb-4">COPYRIGHT © 2025 ANDREW CHOUGH</p>
      </div>
    </>
  );
}
