import React from "react";

import { Divider, Flex, Grid, Text, Title } from "@mantine/core";

const Experience = () => {
  return (
    <Grid style={{ paddingLeft: 60, paddingRight: 60 }}>
      <Grid.Col span={4} marginTop={200}>
        <Flex justify="space-around">
          <h2 className="block__header">EXPERIENCE</h2>
          <Divider orientation="vertical" size="lg" />
        </Flex>
      </Grid.Col>
      <Grid.Col span={7} offset={1}>
        <Flex direction="column">
          <Title order={3}>ADOBE</Title>
          <Text color="dimmed" size="sm">
            (Jan '22 - Current)
          </Text>
          <Text>Software Development Engineer</Text>
          <Text>New York, NY</Text>
        </Flex>
        <Flex align="end" direction="column" my="lg">
          <Title order={3}>ADOBE</Title>
          <Text color="dimmed" size="sm">
            (Aug '19 - Jan '22)
          </Text>
          <Text>Platform Software Engineer</Text>
          <Text>New York, NY</Text>
        </Flex>
        <Flex direction="column" my="lg">
          <Title order={3}>ADOBE</Title>
          <Text color="dimmed" size="sm">
            (May '18 - Aug '18)
          </Text>
          <Text>Web Development Intern</Text>
          <Text>New York, NY</Text>
        </Flex>
        <Flex align="end" direction="column" my="lg">
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
