import React from "react";

import { Button, Divider, Flex, Grid, MediaQuery, Text } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons";

import Image from "next/image";
import ProfilePicture from "public/images/me.jpeg";

export default function Hero() {
  return (
    <div>
      <Grid
        gutter={6}
        sx={() => ({
          padding: 40,
          marginTop: 60,

          "@media (max-width: 756px)": {
            paddingRight: 28,
            paddingTop: 0
          }
        })}
      >
        <MediaQuery smallerThan="lg" styles={{ marginTop: "48px" }}>
          <Grid.Col sm={12} orderXs={2} lg={7} orderLg={1}>
            <Text size="xl">
              Andrew is a <span className="text-dark-blue">UX designer</span>
              {" and "}
              <span className="text-dark-green">frontend engineer</span> who
              values inclusivity and empathy in creating products that generate
              meaningful change in people's lives and is enthusiastic about opportunities to influence an end-to-end experience.
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
        </MediaQuery>
        <Grid.Col
          sm={12}
          orderXs={1}
          lg={4}
          offsetLg={1}
          orderLg={2}
          className="hero__image-container"
        >
          <Image
            src={ProfilePicture}
            alt="Picture of Andrew Chough"
            className="hero__image"
            priority
          />
        </Grid.Col>
      </Grid>
    </div>
  );
}
