import React, { useEffect, useState } from "react";

import Image from "next/image";

import { useMediaQuery } from "../../../hooks/useMediaQuery";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const largeScreen = useMediaQuery("(max-width: 900px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <h1 className="case-study__page-title">
        Introducing Usability Testing to Ethos
      </h1>
      <div className="mb-12 flex justify-center">
        <Image
          src="/images/rocket.png"
          alt="Rocket logo"
          width={256}
          height={256}
        />
      </div>
      <div
        className={`grid grid-cols-12 gap-5 ${largeScreen ? "px-12" : "ml-30"}`}
      >
        <div className="col-span-12 lg:col-span-2">
          <h4 className="mb-2 text-xl font-semibold">Role</h4>
          Frontend Engineer & UI/UX Designer
        </div>
        <div
          className={`col-span-12 lg:col-span-2 lg:col-start-4 ${
            largeScreen ? "my-3" : ""
          }`}
        >
          <h4 className="mb-2 text-xl font-semibold">Team</h4>
          <p>
            <u>3 Engineers:</u> Andrew Chough, Bryan Lam, Hera Kim
          </p>
          <p>
            <u>2 Designers:</u> Andrew Chough, Bryan Lam
          </p>
        </div>
        <div
          className={`col-span-12 lg:col-span-2 lg:col-start-7 ${
            largeScreen ? "mb-3" : ""
          }`}
        >
          <h4 className="mb-2 text-xl font-semibold">Tools Used</h4>
          Adobe XD, Git
        </div>
        <div
          className={`col-span-12 lg:col-span-2 lg:col-start-10 ${
            largeScreen ? "my-3" : ""
          }`}
        >
          <h4 className="mb-2 text-xl font-semibold">Duration</h4>
          January &apos;21 - August &apos;21
        </div>
      </div>
      <div
        className={`my-12 flex justify-center ${
          largeScreen ? "mx-6" : "mx-15"
        }`}
      >
        <div className="case-study__blurb-box">
          <h2 className="case-study__blurb-title">Summary</h2>
          <h4 className="case-study__blurb-subtext font-semibold">
            Helped create a standardized usability testing framework within my
            team to open up dialogues with users as well as capture feedback and
            incorporate changes in a timely manner.
          </h4>
        </div>
      </div>
    </>
  );
}
