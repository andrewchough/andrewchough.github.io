import React from "react";
import Image from "next/image";

export default function Process() {
  return (
    <div>
      <Image
        src="/images/usability-testing.jpeg"
        alt="Picture of woman conducting a usability testing session virtually with a user."
        quality={100}
        className="h-[360px] w-full object-cover"
        width={1000}
        height={360}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-12 grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <h4 className="case-study__section-title">Process</h4>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-8 md:pr-6 lg:col-start-1">
            <h5 className="case-study__section-subtitle font-semibold">
              Moving from impromptu to agile
            </h5>
            <p className="mt-2">
              The first step in creating a viable usability testing framework
              was identifying and communicating to the right people why
              usability testing was necessary. As our tooling became the company
              standard, it became apparent that our style of pushing out
              features without visiting them again before they hit production
              was not going to be viable in the long term. Thus, I communicateD
              to my manager and higher ups that we needed to implement some form
              of usability testing for our features moving forward to ensure
              that users were able to walk through workflows without any pain
              points and to be reassured that we were creating these features
              the most sensible way. On top of this, I pointed out that the
              number of messages within our Slack community channels would
              decrease in the long term as it&apos;s assumed that any confusing
              workflows would be identified and corrected within our usability
              sessions, therefore preventing the complaints to arise in the
              first place.
            </p>
          </div>
          <div className="md:col-span-4">
            <Image
              src="/images/meeting.jpeg"
              alt="Picture of several colleagues discussing around a table."
              className="mb-15 hidden h-[430px] w-full object-cover md:block"
              width={441}
              height={330}
            />
          </div>
          <div className="md:col-span-8 md:pr-6 lg:col-start-1">
            <h5 className="case-study__section-subtitle font-semibold">
              Igniting the conversations
            </h5>
            <p className="mt-2">
              What I focused on next was ensuring that we had a usability
              testing framework in place and discussed how the broader team
              would execute on this for our features. Since our team worked on
              UI components and experiences, we came to the conclusion that we
              needed to focus on having our users walk through the features, ask
              any necessary questions related to the workflows, and probe for
              their thoughts when they ran into roadblocks. I was able to set up
              discussions within our team to form a general framework on how we
              would approach the testing sessions, what kind of questions we
              would ask, and what type of feedback we would want to hear from
              the users.
            </p>
          </div>
          <div className="md:col-span-4">
            <Image
              src="/images/brainstorming.png"
              alt="Picture of woman presenting information on a whiteboard between two ideations of an app."
              className="mb-15 hidden h-[300px] w-full object-cover md:block"
              width={441}
              height={300}
            />
          </div>
          <div className="md:col-span-8 md:pr-6 lg:col-start-1">
            <h5 className="case-study__section-subtitle font-semibold">
              Executing user sessions
            </h5>
            <p className="mt-2">
              Once this process was finalized, the team made sure to use it the
              next time we were ready to release a new feature into our product.
              I asked for volunteers in our community channels to set up a
              one-on-one or sometimes two-on-one (a notetaker would attend)
              meeting that allowed us to walk through our new features with our
              users and ask them questions about what did or didn&apos;t make
              sense while performing certain actions. During these sessions, I
              emphasized having the user think out loud about what they were
              thinking as they performed an action and asked follow up questions
              when we needed more information about anything they said. The
              results of creating this process and meeting with users to execute
              these usability sessions was that a dialogue between us and the
              users was created, ensuring that whatever feedback that was
              captured was able to be properly translated into a feature
              improvement.
            </p>
          </div>
          <div className="md:col-span-4">
            <Image
              src="/images/prototype.png"
              alt="Picture of a person pointing at a phone."
              className="mb-15 hidden h-[350px] w-full object-cover md:block"
              width={441}
              height={350}
            />
          </div>
          <div className="md:col-span-8 md:pr-6 lg:col-start-1">
            <h5 className="case-study__section-subtitle font-semibold">
              Generalizing the process
            </h5>
            <p className="mt-2">
              Once all of the user sessions were finished, I compiled the notes
              from all of the sessions and combined it into a document where
              everything was laid out. A meeting was then held internally within
              our team to go through all of the notes from each user, group
              pieces of feedback together, and prioritize any gaps in the user
              expectation vs experience or any confusing workflows. From there,
              I prioritized the ones that were blocking our release to General
              Availability and worked on fixes for these blockers. Once
              everything was finally completed, we released the feature to the
              general public, making sure to keep an eye out on any of the
              community channels where feedback might be placed.
            </p>
          </div>
          <div className="md:col-span-4">
            <Image
              src="/images/analysis.png"
              alt="Picture of colleagues putting up and analyzing post-it notes on a clear glass wall."
              className="mb-15 hidden h-[300px] w-full object-cover md:block"
              width={441}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
