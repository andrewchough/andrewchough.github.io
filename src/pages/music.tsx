import React from "react";

import Head from "next/head";
import fs from "fs";
import path from "path";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { parseDatedBullets, type DatedBulletGroup } from "../lib/datedBullets";

import type { GetStaticProps } from "next";

type MusicPageProps = {
  groups: DatedBulletGroup[];
};

export const getStaticProps: GetStaticProps<MusicPageProps> = async () => {
  const filePath = path.join(process.cwd(), "src", "content", "music.md");
  const markdown = fs.readFileSync(filePath, "utf8");
  const groups = parseDatedBullets(markdown);
  return { props: { groups } };
};

export default function MusicPage({ groups }: MusicPageProps) {
  return (
    <>
      <Head>
        <title>Music | Andrew Chough</title>
        <meta name="description" content="A log of music I'm listening to." />
        <link rel="icon" href="/images/logo.ico" />
      </Head>
      <Navbar />
      <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="pt-14 pb-8">
          <h1 className="text-3xl font-bold">Music</h1>
          <p className="mt-3 text-white/75">
            A running list of songs/albums I want to revisit.
          </p>
        </header>
        <section className="pb-16">
          <div className="space-y-10">
            {groups.map(group => (
              <div key={group.id} id={group.id} className="scroll-mt-24">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white/90">
                    {group.date}
                  </h2>
                </div>

                <ul className="mt-3 list-inside list-disc space-y-2 text-white/80">
                  {group.items.map((item, idx) => (
                    <li key={`${group.id}-${idx}`} className="font-normal">
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-4 hover:text-white"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <span>{item.title}</span>
                      )}

                      {item.children?.length && (
                        <ul className="mt-2 ml-12 list-outside list-disc space-y-2 text-white/50">
                          {item.children.map((child, childIdx) => (
                            <li
                              key={`${group.id}-${idx}-${childIdx}`}
                              className="font-normal"
                            >
                              {child.url ? (
                                <a
                                  href={child.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="underline underline-offset-4 hover:text-white"
                                >
                                  {child.title}
                                </a>
                              ) : (
                                <span>{child.title}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
