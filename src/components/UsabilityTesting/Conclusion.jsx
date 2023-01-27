import React from "react";

import { Divider, Flex, Grid } from "@mantine/core";

export default function Conclusion() {
  return (
    <>
      <Grid>
        <Grid.Col span={8} offset={2} mb={48}>
          <h4 className="case-study__section-title">Impact</h4>
          <p className="case-study__text--enlarged">
            The impact of the new changes were felt from the get go. The
            features that used the usability testing process received more
            acclaim from our external users as well as from our wider team
            internally.
          </p>
          <p className="case-study__text">
            There were fewer, if any, complaints about the newer features and
            anything that was communicated to us as a problem was immediately
            prioritized rather than tossed over into the backlog. On top of
            this, it became easier to communicate the importance of usability
            testing to others after we ran through the first few runs of these
            usability testing sessions.
          </p>
        </Grid.Col>
      </Grid>
      <Flex className="case-study__callout-box" my={48} px={200} py={60}>
        <Divider orientation="vertical" size="xl" color="blue" mr={48} />
        <h4 className="case-study__callout-box__text">
          “For the developers that helped developed the new onboarding feature,
          kudos. It has been a pleasant change."
          <br />
          <span className="case-study__callout-box__text case-study__callout-box__text--quoter">
            - Developer after changes were implemented
          </span>
        </h4>
      </Flex>
      <Grid>
        <Grid.Col span={8} offset={2} mb={48}>
          <h4 className="case-study__section-title">Reflections</h4>
          <p className="case-study__text--enlarged">Constraints</p>
          <p className="case-study__text">
            The biggest issue that occurred during this entire process was the
            scale as to which these usability sessions happened. An hour is a
            long time for anybody and over time, it became harder to gather
            users for usability sessions, especially since we offered no kind of
            compensation for their time. Therefore, it became difficult to get a
            wide variety of users that could walk through the experience of each
            feature and we had to rely solely on a pretty monotonous pool of
            people. Fortunately, since our product catered to only developers at
            Adobe, this proved to be not a huge issue. On top of this, since
            these sessions ran towards the end of feature development, it was
            much harder to go back and revise any of the fundamental user
            workflows that could have been identified and worked on if we kept
            the scope of the sessions to a smaller section of the feature.
          </p>
        </Grid.Col>
        <Grid.Col span={8} offset={2} mb={48}>
          <h4 className="case-study__section-title">Conclusion</h4>
          <p className="case-study__text">
            It’s safe to say that the usability testing sessions provided much
            more good for our team and beyond, as other teams (especially those
            that didn’t work on any UI-related work) started to devise their own
            form of usability testing process to use with their users. I’ve
            worked with some other people in the broader team to work on a
            generic usability testing framework that can be broadly applied to
            any team that needs usability testing in their workflow.
          </p>
        </Grid.Col>
      </Grid>
    </>
  );
}
