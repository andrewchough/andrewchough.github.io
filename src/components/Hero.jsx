import React from "react";

import { Button, Divider, Flex, Grid, Text } from "@mantine/core";
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
          <Text size="lg">
            Currently stationed @ <b>Adobe</b> in 🗽
          </Text>
          <Flex mt={16}>
            <Button
              component="a"
              size="sm"
              leftIcon={<IconBrandGithub size={32} />}
              variant="subtle"
              color="white"
              href="https://github.com/andrewchough"
              target="_blank"
              rel="noreferrer"
              styles={() => ({
                root: {
                  color: "white",
                  paddingRight: 0,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)"
                  },
                  marginRight: 4,
                  height: 48
                }
              })}
            />
            <Button
              component="a"
              size="sm"
              leftIcon={<IconBrandLinkedin size={36} />}
              variant="subtle"
              color="white"
              href="https://www.linkedin.com/in/andrewchough"
              target="_blank"
              rel="noreferrer"
              styles={() => ({
                root: {
                  color: "white",
                  paddingRight: 0,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)"
                  },
                  marginRight: 4,
                  height: 48
                }
              })}
            />
          </Flex>
        </Grid.Col>
        <Grid.Col span={4} offset={1}>
          <Image
            src={ProfilePicture}
            alt="Picture of Andrew Chough"
            width={504}
            height={672}
            priority
          />
        </Grid.Col>
      </Grid>
    </div>
  );
}
