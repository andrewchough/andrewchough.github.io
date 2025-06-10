import React, { useEffect, useState } from "react";

import Image from "next/image";

import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons";
import { Fade, Slide } from "react-awesome-reveal";

import { TooltipContent } from "./Tooltip/TooltipContent";
import TooltipProvider from "./Tooltip/TooltipProvider";
import { TooltipTrigger } from "./Tooltip/TooltipTrigger";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <div className="grid grid-cols-12 gap-6 p-10 mt-15 md:p-7 md:pt-0">
        <div className="col-span-12 lg:col-span-7 order-2 lg:order-1 md:mt-12">
          <Slide triggerOnce>
            <p className="text-[40px] leading-15">
              Andrew is a <span className="text-dark-blue">UX designer</span>
              {" and "}
              <span className="text-dark-green">design engineer</span> who
              values inclusivity and empathy in creating products that generate
              meaningful change in people&apos;s lives and is enthusiastic about
              opportunities to influence an end-to-end experience.
            </p>
            <hr className="my-10 border-t border-gray-200" />
            <p className="text-lg flex items-center gap-x-2">
              Currently stationed @{" "}
              <a
                href="https://givechariot.com/"
                className="text-dark-blue hover:underline transition-all"
              >
                Chariot
              </a>{" "}
              in{" "}
              <TooltipProvider placement="right">
                <TooltipTrigger asChild>
                  <span className="hover:cursor-default">🎥</span>
                </TooltipTrigger>
                <TooltipContent className="max-w-[230px] text-pretty rounded-[5px] bg-white p-3 text-xs text-black">
                  Los Angeles, CA
                </TooltipContent>
              </TooltipProvider>
            </p>
          </Slide>
          <Fade duration={4000} triggerOnce>
            <div className="flex mt-4 items-center">
              <a
                href="https://github.com/andrewchough"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:bg-white/20 p-0 mr-1 h-12 flex items-center"
              >
                <IconBrandGithub size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/andrewchough"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:bg-white/20 p-0 mr-1 h-12 flex items-center"
              >
                <IconBrandLinkedin size={36} />
              </a>
            </div>
          </Fade>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:col-start-9 order-1 lg:order-2 hero__image-container">
          <Fade duration={2000} triggerOnce>
            <Image
              src="/images/me.jpeg"
              alt="Picture of Andrew Chough"
              className="hero__image"
              width={400}
              height={400}
              priority
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}
