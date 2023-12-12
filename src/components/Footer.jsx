import React from "react";

import { Button, Flex } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin
} from "@tabler/icons";

export default function Footer() {
  return (
    <>
      <Flex justify="center" my="lg">
        <Button
          component="a"
          size="sm"
          leftIcon={<IconBrandGithub size={24} />}
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
              marginRight: 4
            }
          })}
        />
        <Button
          component="a"
          size="sm"
          leftIcon={<IconBrandLinkedin size={24} />}
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
              marginRight: 4
            }
          })}
        />
        <Button
          component="a"
          size="sm"
          leftIcon={<IconBrandGmail size={24} />}
          variant="subtle"
          color="white"
          href="mailto:andrewchough@gmail.com"
          target="_blank"
          rel="noreferrer"
          styles={() => ({
            root: {
              color: "white",
              paddingRight: 0,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)"
              },
              marginRight: 4
            }
          })}
        />
      </Flex>
      <div>
        <p className="footer">COPYRIGHT © 2024 ANDREW CHOUGH</p>
      </div>
    </>
  );
}
