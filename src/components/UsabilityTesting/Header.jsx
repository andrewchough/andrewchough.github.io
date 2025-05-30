import React from "react";

import { Flex, Grid, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import Image from "next/image";
import RocketLogo from "public/images/rocket.png";

export default function Header() {
  const largeScreen = useMediaQuery("(max-width: 900px)");
  return (
    <>
      <h1 className="case-study__page-title">
        Introducing Usability Testing to Ethos
      </h1>
      <Flex justify="center" mb={48}>
        <Image src={RocketLogo} alt="Rocket logo" height={256} width={256} />
      </Flex>
      <Grid gutter={5} ml={largeScreen ? 0 : 120} px={largeScreen ? 48 : 0}>
        <Grid.Col lg={2}>
          <Title order={4} mb={8}>
            Role
          </Title>
          Design Engineer & UI/UX Designer
        </Grid.Col>
        <Grid.Col lg={2} offsetLg={1} my={largeScreen ? 12 : 0}>
          <Title order={4} mb={8}>
            Team
          </Title>
          <p>
            <u>3 Engineers:</u> Andrew Chough, Bryan Lam, Hera Kim
          </p>
          <p>
            <u>2 Designers:</u> Andrew Chough, Bryan Lam
          </p>
        </Grid.Col>
        <Grid.Col lg={2} offsetLg={1} mb={largeScreen ? 12 : 0}>
          <Title order={4} mb={8}>
            Tools Used
          </Title>
          Adobe XD, Git
        </Grid.Col>
        <Grid.Col lg={2} offsetLg={1} my={largeScreen ? 12 : 0}>
          <Title order={4} mb={8}>
            Duration
          </Title>
          January '21 - August '21
        </Grid.Col>
      </Grid>
      <Flex justify="center" my={48} mx={largeScreen ? 24 : 60}>
        <div className="case-study__blurb-box">
          <h2 className="case-study__blurb-title">Summary</h2>
          <h4 className="case-study__blurb-subtext">
            Helped create a standardized usability testing framework within my
            team to open up dialogues with users as well as capture feedback and
            incorporate changes in a timely manner.
          </h4>
        </div>
      </Flex>
    </>
  );
}
