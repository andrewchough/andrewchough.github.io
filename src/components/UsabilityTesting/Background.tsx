import React, { useEffect, useState } from "react";

import { Divider, Flex, Grid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Background() {
  const [mounted, setMounted] = useState(false);
  const mediumScreen = useMediaQuery("(max-width: 756px)");
  const largeScreen = useMediaQuery("(max-width: 900px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Grid mx={largeScreen ? 24 : 0}>
        <Grid.Col lg={8} offsetLg={2}>
          <h4 className="case-study__section-title">Background</h4>
          <p className="case-study__text">
            When I joined Adobe in July of 2019, our internal developer tooling
            platform served 2,500+ developers across 15+ product teams, yet had
            never conducted a single usability test. Since the work that the
            team focused on was internal, our process for pushing out updates
            and features didn&apos;t go through any usability testing and
            instead relied solely on tickets that were created within JIRA to
            account for any bugs as well as Slack channels to account for any
            user experience frustrations or suggestions. Since the tooling that
            the team was creating was still in its infancy for a few years,
            including the time around when I joined, and the priority was on
            scaling the project as fast as possible, there wasn&apos;t a strong
            emphasis on conducting usability testing when developing new
            features or improving old workflows. usability testing when
            developing new features or improving old workflows.
          </p>
        </Grid.Col>
      </Grid>
      <Grid mx={largeScreen ? 24 : 0}>
        <Grid.Col lg={8} offsetLg={2}>
          <h4 className="case-study__section-title">Problem</h4>
          <p className="case-study__text--enlarged">
            For many developers within Adobe, the features being released
            didn&apos;t necessarily address frustrations about the current user
            experiences - in rare cases, they would actually create{" "}
            <u>more frustrations</u> within the interfaces. On average,
            developer satisfaction scores for our tools were 2.4 out of 5 in our
            annual feedback survey.
          </p>
          <p className="case-study__text">
            And while the importance of scaling the tooling to an enterprise
            level could not be undermined, there was a lack of priority to make
            sure that we were testing with our users whether the workflows
            introduced by these new features were appropriate. A lot of
            assumptions were made from the developers&apos; perspectives and
            with a lack of usability testing, these assumptions were often far
            from accurate. As an example, we initially assumed developers wanted
            a consolidated dashboard view of all their projects. After going
            through thorough research and testing, we discovered they actually
            preferred focused, single-project views because they rarely worked
            on multiple projects simultaneously. This assumption led to a 40%
            decrease in daily active usage when the consolidated view was
            launched.
          </p>
        </Grid.Col>
      </Grid>
      <Flex justify="center" my={48} mx={largeScreen ? 24 : 60}>
        <div className="case-study__blurb-box">
          <h2
            className={
              largeScreen
                ? "case-study__blurb-title--phone-screen case-study__blurb-title"
                : "case-study__blurb-title"
            }
          >
            Design Challenge
          </h2>
          <h4 className="case-study__blurb-subtext font-semibold">
            How might we integrate a viable and scalable usability testing
            framework within our products to ensure that we&apos;re receiving
            the right feedback in an efficient manner?
          </h4>
        </div>
      </Flex>
      <Flex
        className="case-study__callout-box"
        my={48}
        px={mediumScreen ? 20 : 200}
        py={60}
      >
        <Divider orientation="vertical" size="xl" color="blue" mr={48} />
        <h4 className="case-study__callout-box__text">
          &quot;Better user experience. Please hire a designer to help with the
          crap design that you have right now.&quot;
          <br />
          <span className="case-study__callout-box__text case-study__callout-box__text--quoter">
            - Response by developer in annual feedback survey
          </span>
        </h4>
      </Flex>
      <Grid>
        <Grid.Col span={8} offset={2} mb={48}>
          <h4 className="case-study__section-title">Solution</h4>
          <div className="case-study__text--enlarged">
            A lightweight usability testing framework that consisted of:
            <ul className="list-disc list-inside">
              <li>Bi-weekly 30-minute testing sessions with 5-8 developers</li>
              <li>
                A standardized feedback collection process using task-based
                scenarios
              </li>
              <li>
                A prioritization matrix to quickly identify which issues to
                address first
              </li>
              <li>
                Integration with our existing JIRA workflow to track UX
                improvements
              </li>
            </ul>
          </div>
        </Grid.Col>
      </Grid>
    </>
  );
}
