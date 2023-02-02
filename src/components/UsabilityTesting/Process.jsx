import React from "react";

import { Grid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import Image from "next/image";
import Analysis from "public/images/analysis.png";
import Brainstorming from "public/images/brainstorming.png";
import Meeting from "public/images/meeting.jpeg";
import Prototype from "public/images/prototype.png";
import UsabilityTestingPicture from "public/images/usability-testing.jpeg";

export default function Process() {
  const mediumScreen = useMediaQuery("(max-width: 756px)");
  const largeScreen = useMediaQuery("(max-width: 900px)");
  return (
    <div>
      <Image
        src={UsabilityTestingPicture}
        alt="Picture of woman conducting a usability testing session virtually with a user."
        quality={100}
        style={{ width: "100%", height: "360px", objectFit: "cover" }}
      />
      <Grid mx={largeScreen ? 24 : 0}>
        <Grid.Col lg={8} offsetLg={2} mt={48}>
          <h4 className="case-study__section-title">Process</h4>
        </Grid.Col>
      </Grid>
      <Grid mx={largeScreen ? 24 : 0}>
        <Grid.Col md={8} lg={5} offsetLg={2} pr={mediumScreen ? 0 : 24}>
          <h5 className="case-study__section-subtitle">
            Moving from impromptu to agile
          </h5>
          <p>
            The first step in creating a viable usability testing framework was
            identifying and communicating to the right people why usability
            testing was necessary. As our tooling became the company standard,
            it became apparent that our style of pushing out features without
            visiting them again before they hit production was not going to be
            viable in the long term. Thus, I communicateD to my manager and
            higher ups that we needed to implement some form of usability
            testing for our features moving forward to ensure that users were
            able to walk through workflows without any pain points and to be
            reassured that we were creating these features the most sensible
            way. On top of this, I pointed out that the number of messages
            within our Slack community channels would decrease in the long term
            as it’s assumed that any confusing workflows would be identified and
            corrected within our usability sessions, therefore preventing the
            complaints to arise in the first place.
          </p>
        </Grid.Col>
        <Grid.Col md={4}>
          <Image
            src={Meeting}
            alt="Picture of several colleagues discussing around a table."
            style={{
              width: mediumScreen ? "0%" : "100%",
              height: mediumScreen ? 0 : "430px",
              objectFit: "cover",
              marginBottom: "60px"
            }}
          />
        </Grid.Col>
        <Grid.Col md={8} lg={5} offsetLg={2} pr={mediumScreen ? 0 : 24}>
          <h5 className="case-study__section-subtitle">
            Igniting the conversations
          </h5>
          <p>
            What I focused on next was ensuring that we had a usability testing
            framework in place and discussed how the broader team would execute
            on this for our features. Since our team worked on UI components and
            experiences, we came to the conclusion that we needed to focus on
            having our users walk through the features, ask any necessary
            questions related to the workflows, and probe for their thoughts
            when they ran into roadblocks. I was able to set up discussions
            within our team to form a general framework on how we would approach
            the testing sessions, what kind of questions we would ask, and what
            type of feedback we would want to hear from the users.
          </p>
        </Grid.Col>
        <Grid.Col md={4}>
          <Image
            src={Brainstorming}
            alt="Picture of woman presenting information on a whiteboard between two ideations of an app."
            style={{
              width: mediumScreen ? "0%" : "100%",
              height: mediumScreen ? 0 : "300px",
              objectFit: "cover",
              marginBottom: "60px"
            }}
          />
        </Grid.Col>
        <Grid.Col md={8} lg={5} offsetLg={2} pr={mediumScreen ? 0 : 24}>
          <h5 className="case-study__section-subtitle">
            Executing user sessions
          </h5>
          <p>
            Once this process was finalized, the team made sure to use it the
            next time we were ready to release a new feature into our product. I
            asked for volunteers in our community channels to set up a
            one-on-one or sometimes two-on-one (a notetaker would attend)
            meeting that allowed us to walk through our new features with our
            users and ask them questions about what did or didn’t make sense
            while performing certain actions. During these sessions, I
            emphasized having the user think out loud about what they were
            thinking as they performed an action and asked follow up questions
            when we needed more information about anything they said. The
            results of creating this process and meeting with users to execute
            these usability sessions was that a dialogue between us and the
            users was created, ensuring that whatever feedback that was captured
            was able to be properly translated into a feature improvement.
          </p>
        </Grid.Col>
        <Grid.Col md={4}>
          <Image
            src={Prototype}
            alt="Picture of a person pointing at a phone."
            style={{
              width: mediumScreen ? "0%" : "100%",
              height: mediumScreen ? 0 : "350px",
              objectFit: "cover",
              marginBottom: "60px"
            }}
          />
        </Grid.Col>
        <Grid.Col md={8} lg={5} offsetLg={2} pr={mediumScreen ? 0 : 24}>
          <h5 className="case-study__section-subtitle">
            Generalizing the process
          </h5>
          <p>
            Once all of the user sessions were finished, I compiled the notes
            from all of the sessions and combined it into a document where
            everything was laid out. A meeting was then held internally within
            our team to go through all of the notes from each user, group pieces
            of feedback together, and prioritize any gaps in the user
            expectation vs experience or any confusing workflows. From there, I
            prioritized the ones that were blocking our release to General
            Availability and worked on fixes for these blockers. Once everything
            was finally completed, we released the feature to the general
            public, making sure to keep an eye out on any of the community
            channels where feedback might be placed.
          </p>
        </Grid.Col>
        <Grid.Col md={4}>
          <Image
            src={Analysis}
            alt="Picture of colleagues putting up and analyzing post-it notes on a clear glass wall."
            style={{
              width: mediumScreen ? "0%" : "100%",
              height: mediumScreen ? 0 : "300px",
              objectFit: "cover",
              marginBottom: "60px"
            }}
          />
        </Grid.Col>
      </Grid>
    </div>
  );
}
