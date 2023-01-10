import React from "react";

import { ActionIcon, Divider, Flex, Grid, Text } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons";

import Image from "next/image";
import ProfilePicture from "public/images/me.jpeg";

export default function Hero() {
  return (
    <div>
      <Grid gutter={6} style={{ padding: 40, marginTop: 60 }}>
        <Grid.Col span={7}>
          <Text size="xl">
            Andrew is a <span className="text-dark-blue">UX designer</span>
            {" and "}
            <span className="text-dark-green">frontend engineer</span> who
            values inclusivity and empathy in creating products that generate
            meaningful change in people's lives.
          </Text>
          <Divider my={40} size="sm" />
          <Text size="lg">Currently stationed @ Adobe in 🗽</Text>
          <Flex mt={24}>
            <ActionIcon size={40}>
              <IconBrandGithub size={32} />
            </ActionIcon>
            <ActionIcon size={40}>
              <IconBrandLinkedin size={32} />
            </ActionIcon>
          </Flex>
        </Grid.Col>
        <Grid.Col span={4} offset={1}>
          <Image
            src={ProfilePicture}
            alt="Picture of Andrew Chough"
            width={504}
            height={672}
          />
        </Grid.Col>
      </Grid>
    </div>
  );
}
