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
      <div className="mt-15 grid grid-cols-12 gap-6 p-10 md:p-7 md:pt-0">
        <div className="order-2 col-span-12 md:mt-12 lg:order-1 lg:col-span-7">
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
            <p className="flex items-center gap-x-2 text-lg">
              Currently stationed @{" "}
              <a
                href="https://mindfort.ai/"
                target="_blank"
                rel="noreferrer"
                className="text-dark-blue transition-all hover:underline"
              >
                MindFort
              </a>{" "}
              in{" "}
              <TooltipProvider placement="right">
                <TooltipTrigger asChild>
                  <span className="hover:cursor-default">🎥</span>
                </TooltipTrigger>
                <TooltipContent className="max-w-[230px] rounded-[5px] bg-white p-3 text-xs text-pretty text-black">
                  Los Angeles, CA
                </TooltipContent>
              </TooltipProvider>
            </p>
          </Slide>
          <Fade duration={4000} triggerOnce>
            <div className="mt-4 flex items-center">
              <a
                href="https://github.com/andrewchough"
                target="_blank"
                rel="noreferrer"
                className="mr-1 flex h-12 items-center p-0 text-white hover:bg-white/20"
              >
                <IconBrandGithub size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/andrewchough"
                target="_blank"
                rel="noreferrer"
                className="mr-1 flex h-12 items-center p-0 text-white hover:bg-white/20"
              >
                <IconBrandLinkedin size={36} />
              </a>
            </div>
          </Fade>
        </div>
        <div className="hero__image-container order-1 col-span-12 lg:order-2 lg:col-span-4 lg:col-start-9">
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
