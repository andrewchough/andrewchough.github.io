import React from "react";

import Image from "next/image";

import { Card } from "@mantine/core";

export default function CurrentlyWorking() {
  return (
    <>
      <div className="flex justify-center">
        <div>
          <h2 className="text-[34px] font-bold">What I&apos;ve been up to</h2>
          <hr className="mt-2 w-full border-2 border-[#373a40]" />
        </div>
      </div>
      <div className="mt-8 flex w-full flex-col justify-between gap-12 sm:flex-row">
        <div className="mx-4 sm:mr-0 sm:ml-12 sm:w-1/2">
          <Card
            component="a"
            href="/studies/chariot"
            p="sm"
            className="chariot__image"
          >
            <Image
              src="/images/chariot.svg"
              alt="Chariot logo"
              width={256}
              height={256}
            />
          </Card>
        </div>
        <div className="mx-4 sm:mr-12 sm:ml-0 sm:w-1/2">
          <Card
            component="a"
            href="/studies/ethos"
            p="sm"
            className="ethos__rocket-image"
          >
            <Image
              src="/images/rocket.png"
              alt="Rocket logo"
              width={256}
              height={256}
            />
          </Card>
        </div>
      </div>
    </>
  );
}
