import React from "react";

import Image from "next/image";

import { Card } from "@mantine/core";

export default function CurrentlyWorking() {
  return (
    <>
      <div className="flex justify-center">
        <div>
          <h2 className="text-[34px] font-bold">What I&apos;ve been up to</h2>
          <hr className="border-2 mt-2 border-[#373a40] w-full" />
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-5 lg:col-start-2">
          <Card
            component="a"
            href="/studies/EthosUsabilityTesting"
            p="lg"
            m={32}
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
