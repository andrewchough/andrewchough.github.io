import React from "react";

import { ActionIcon, Flex } from "@mantine/core";
import { IconBrandGithub, IconBrandGmail,IconBrandLinkedin } from "@tabler/icons";

export default function Footer() {
  return (
    <>
      <Flex justify="center" my="lg">
        <ActionIcon size={40}>
          <IconBrandGithub />
        </ActionIcon>
        <ActionIcon size={40}>
          <IconBrandLinkedin />
        </ActionIcon>
        <ActionIcon size={40}>
          <IconBrandGmail />
        </ActionIcon>

      </Flex>
      <div>
        <p className="footer">
          COPYRIGHT © 2023 ANDREW CHOUGH
        </p>
      </div>
    </>
  );
}
