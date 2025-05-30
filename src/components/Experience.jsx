import React from "react";

import { Divider, Flex, Grid, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const Experience = () => {
  const largeScreen = useMediaQuery("(max-width: 900px)");
  return (
    <Grid style={{ paddingLeft: 60, paddingRight: 60 }}>
      <Grid.Col xs={12} lg={4}>
        <Flex justify={largeScreen ? "center" : "space-around"}>
          <h2 className="block__header">EXPERIENCE</h2>
          <Divider orientation={largeScreen ? "none" : "vertical"} size="lg" />
        </Flex>
      </Grid.Col>
      <Grid.Col xs={12} lg={7} offsetLg={1}>
        <Flex direction="column" my="lg">
          <Title order={3}>CHARIOT</Title>
          <Text color="dimmed" size="sm">
            (Nov '23 - Present)
          </Text>
          <Text>Founding Frontend Engineer</Text>
          <Text>New York, NY</Text>
        </Flex>
        <Flex align="end" direction="column">
          <Title order={3}>ADOBE</Title>
          <Text color="dimmed" size="sm">
            (Jan '22 - Nov '23)
          </Text>
          <Text>Software Development Engineer</Text>
          <Text>New York, NY</Text>
        </Flex>
        <Flex direction="column" my="lg">
          <Title order={3}>ADOBE</Title>
          <Text color="dimmed" size="sm">
            (Aug '19 - Jan '22)
          </Text>
          <Text>Platform Software Engineer</Text>
          <Text>New York, NY</Text>
        </Flex>
        <Flex align="end" direction="column" my="lg">
          <Title order={3}>ADOBE</Title>
          <Text color="dimmed" size="sm">
            (May '18 - Aug '18)
          </Text>
          <Text>Web Development Intern</Text>
          <Text>New York, NY</Text>
        </Flex>
        <Flex direction="column" my="lg">
          <Title order={3}>BOSTON COLLEGE</Title>
          <Text color="dimmed" size="sm">
            (Aug '15 - May '19)
          </Text>
          <Text>Bachelor of Science, Computer Science</Text>
          <Text>Chestnut Hill, MA</Text>
        </Flex>
      </Grid.Col>
    </Grid>
  );
};

export default Experience;
