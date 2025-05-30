import React from "react";

import { Divider, Flex, Grid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function About() {
  const largeScreen = useMediaQuery("(max-width: 900px)");
  return (
    <Grid style={{ padding: 60, marginTop: largeScreen ? 0 : 60 }}>
      <Grid.Col xs={12} lg={4} marginTop={200}>
        <Flex justify={largeScreen ? "center" : "space-around"}>
          <h2 className="block__header">ABOUT</h2>
          <Divider orientation={largeScreen ? "none" : "vertical"} size="lg" />
        </Flex>
      </Grid.Col>
      <Grid.Col xs={12} lg={7} offsetLg={1}>
        <div className="md:col-span-6 p-12 lg:px-24 lg:py-20">
          <p className="font-light text-center sm-max:text-sm text-black wow">
            <b>Hi! </b>
            My name is Andrew Chough and I&apos;m a founding frontend engineer
            at Chariot, currently residing in New York City.
          </p>
          <hr className="about__line" />
          <p className="font-light text-center sm-max:text-sm text-black">
            Full-time <b>designer &amp; engineer</b>. Aspiring <b>life-liver</b>
            . Professional <b>layup misser</b>. Beach <b>lover</b>.
          </p>
          <hr className="about__line" />
          <p className="font-light text-center sm-max:text-sm pb-8 text-black">
            From a young age, I always found a fascination with computers,
            starting as young as four years old where I spent time everyday to
            self-teach myself through Reader Rabbit on the PC. Since then,
            I&apos;ve been fortunate enough to have the chance to study a wide
            variety of topics about computers and gain more knowledge and
            experience in the technology space. Moving forward, I&apos;d like to
            gain more experience learning wherever I can.
          </p>
          <p className="font-light text-center sm-max:text-sm pb-8 text-black">
            I was born and raised in the Bay Area, went to college in the Boston
            area, and am now residing in the Big Apple. Over the years,
            I&apos;ve become infatuated with music - ranging from hip-hop to
            jazz. I&apos;ve been playing the saxophone for more than twelve
            years, participating in bands such as the Wind Ensemble in high
            school to the Boston College Marching Band during my time at BC.
          </p>
          <p className="font-light text-center sm-max:text-sm text-black">
            My hobbies outside of the office include&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/joonofthejungle"
            >
              powerlifting
            </a>
            , attempting to solve (and failing) the NYT crossword, finding the
            best cold brew in the city, and AAPI advocacy/intersectional
            movements. At Adobe, I was involved with the Diversity and Inclusion
            council and was also a lead of the Asian and Pacific Islander @
            Adobe network in the New York sites. A big passion of mine is
            helping the tech field more inclusive and would love to get more
            involved in any opportunities that support that cause.
          </p>
        </div>
      </Grid.Col>
    </Grid>
  );
}
