import React from "react";

import { Flex, Grid, Title } from "@mantine/core";

import Image from "next/image";
import RocketLogo from "public/images/rocket.png";

export default function Header() {
  return (
    <>
      <h1 className="case-study__page-title">
        Introducing Usability Testing to Ethos
      </h1>
      <Flex justify="center" mb={48}>
        <Image src={RocketLogo} alt="Rocket logo" height={256} width={256} />
      </Flex>
      <Grid gutter={5} ml={120}>
        <Grid.Col span={2}>
          <Title order={4} mb={8}>
            Role
          </Title>
          Frontend Engineer & UI/UX Designer
        </Grid.Col>
        <Grid.Col span={2} offset={1}>
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
        <Grid.Col span={2} offset={1}>
          <Title order={4} mb={8}>
            Tools Used
          </Title>
          Adobe XD, Git
        </Grid.Col>
        <Grid.Col span={2} offset={1}>
          <Title order={4} mb={8}>
            Duration
          </Title>
          January '21 - August '21
        </Grid.Col>
      </Grid>
      <Flex justify="center" my={48} px={60}>
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
