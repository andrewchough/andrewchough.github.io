import React from "react";

import { Card, Divider, Flex, Grid, Title } from "@mantine/core";

import Image from "next/image";
import RocketLogo from "public/images/rocket.png";

export default function CurrentlyWorking() {
  return (
    <>
      <Flex justify="center">
        <div>
          <Title order={1}>What I've been up to</Title>
          <Divider size="md" m={32} />
        </div>
      </Flex>
      <Grid>
        <Grid.Col span={5} offset={1}>
          <Card
            component="a"
            href="/studies/EthosUsabilityTesting"
            p="lg"
            m={32}
            className="ethos__rocket-image"
            height={1000}
          >
            <Image
              src={RocketLogo}
              alt="Rocket logo"
              height={256}
              width={256}
            />
          </Card>
        </Grid.Col>
      </Grid>
    </>
  );
}
