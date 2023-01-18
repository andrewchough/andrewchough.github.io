import React from "react";

import { Divider, Flex, Grid } from "@mantine/core";

export default function About() {
  return (
    <Grid style={{ padding: 60, marginTop: 60 }}>
      <Grid.Col span={4} marginTop={200}>
        <Flex justify="space-around">
          <h2 className="block__header">ABOUT</h2>
          <Divider orientation="vertical" size="lg" />
        </Flex>
      </Grid.Col>
      <Grid.Col span={7} offset={1}>
        <div className="md:col-span-6 p-12 lg:px-24 lg:py-20">
          <p className="font-light text-center sm-max:text-sm text-black wow">
            <b>Hi! </b>
            My name is Andrew Chough and I&apos;m a software engineer at Adobe,
            currently residing in New York City.
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
            I was born and raised in the Bay Area for most of my life, went to
            college in the Boston area, and am now residing in the Big Apple.
            Over the years, I&apos;ve become infatuated with music - ranging
            from hip-hop to jazz. I&apos;ve been playing the saxophone for more
            than twelve years, participating in bands such as the Wind Ensemble
            in high school to the Boston College Marching Band during my time at
            BC.
          </p>
          <p className="font-light text-center sm-max:text-sm text-black">
            My hobbies outside of the office include powerlifting, basketball,
            sudoku, finding the best cold brew in the city, and AAPI advocacy
            and intersectional movements. At Adobe, I am involved with the
            Diversity and Inclusion council and am also a lead of the Asian
            Employee Network in the New York sites. A big passion of mine is
            helping the tech field more inclusive and would love to get more
            involved in any opportunities that support that cause.
          </p>
        </div>
      </Grid.Col>
    </Grid>
  );
}
