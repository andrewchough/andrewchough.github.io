import React from "react";

import { ActionIcon, Button, Divider, Flex, Grid, Text } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons";

export default function Hero(props) {
  return (
    <div>
      <Grid gutter={5} style={{ padding: 40, marginTop: 60 }}>
        <Grid.Col span={6}>

          <Text size="xl">
          Andrew is a{" "}
            <span className="text-dark-blue">UX designer</span>
            {" and "}
            <span className="text-dark-green">frontend engineer</span>
            {" "}
            who values inclusivity and empathy in creating products that generate meaningful change in people's lives.
          </Text>
          <Divider my={40} size="sm" />
          <Text size="lg">
          Currently stationed @ Adobe in 🗽
          </Text>
          <Flex mt={24}>
            <ActionIcon size={40}>
              <IconBrandGithub size={32} />
            </ActionIcon>
            <ActionIcon size={40}>
              <IconBrandLinkedin size={32} />
            </ActionIcon>
          </Flex>
        </Grid.Col>
        <Grid.Col span={6}>
          <p>picture placeholder</p>
        </Grid.Col>
      </Grid>
    </div>
          
  );
}
