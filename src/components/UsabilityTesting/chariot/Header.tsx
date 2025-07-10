import React, { useEffect, useState } from "react";

import Image from "next/image";

import { useMediaQuery } from "@mantine/hooks";

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
        Streamlining Nonprofit Donation Processing: From Data Display to
        Workflow Optimization
      </h1>
      <div className="mb-12 flex justify-center">
        <Image
          src="/images/chariot.svg"
          alt="Chariot logo"
          width={256}
          height={256}
        />
      </div>
      <div
        className={`grid grid-cols-12 gap-5 ${largeScreen ? "px-12" : "ml-30"}`}
      >
        <div className="col-span-12 lg:col-span-3">
          <h4 className="mb-2 text-xl font-semibold">Role</h4>
          Frontend Engineer & Design Collaborator
        </div>
        <div
          className={`col-span-12 lg:col-span-3 lg:col-start-4 ${
            largeScreen ? "mb-3" : ""
          }`}
        >
          <h4 className="mb-2 text-xl font-semibold">Tools Used</h4>
          Figma, React, Typescript, Tailwind
        </div>
        <div
          className={`col-span-12 lg:col-span-3 lg:col-start-7 ${
            largeScreen ? "my-3" : ""
          }`}
        >
          <h4 className="mb-2 text-xl font-semibold">Duration</h4>
          October &apos;24 - April &apos;25
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
            Redesigned and built a donation management dashboard that
            transformed how nonprofit officers process donations. The final
            solution reduced donation processing time by 40-50% and eliminated
            the need for context switching between multiple applications.
          </h4>
        </div>
      </div>
    </>
  );
}
