import React from "react";

export default function Conclusion() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-24 grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <h4 className="case-study__section-title">Impact</h4>
            <p className="case-study__text--enlarged">
              The impact of the new changes were felt from the get go. The
              features that used the usability testing process received more
              acclaim from our external users as well as from our wider team
              internally.
            </p>
            <p className="case-study__text mt-4">
              There were fewer, if any, complaints about the newer features and
              anything that was communicated to us as a problem was immediately
              prioritized rather than tossed over into the backlog. On top of
              this, it became easier to communicate the importance of usability
              testing to others after we ran through the first few runs of these
              usability testing sessions.
            </p>
          </div>
        </div>
      </div>

      <div className="my-12 bg-blue-100 px-4 sm:px-6 lg:px-8">
        <div className="case-study__callout-box mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="border-l-4 border-blue-500 pl-8">
            <p className="case-study__callout-box__text mb-4">
              &ldquo;For the developers that helped developed the new onboarding
              feature, kudos. It has been a pleasant change.&rdquo;
            </p>
            <p className="case-study__callout-box__text case-study__callout-box__text--quoter">
              - Developer after changes were implemented
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <h4 className="case-study__section-title">Reflections</h4>
            <p className="case-study__text--enlarged">Constraints</p>
            <p className="case-study__text mt-4">
              The biggest issue that occurred during this entire process was the
              scale as to which these usability sessions happened. An hour is a
              long time for anybody and over time, it became harder to gather
              users for usability sessions, especially since we offered no kind
              of compensation for their time. Therefore, it became difficult to
              get a wide variety of users that could walk through the experience
              of each feature and we had to rely solely on a pretty monotonous
              pool of people. Fortunately, since our product catered to only
              developers at Adobe, this proved to be not a huge issue. On top of
              this, since these sessions ran towards the end of feature
              development, it was much harder to go back and revise any of the
              fundamental user workflows that could have been identified and
              worked on if we kept the scope of the sessions to a smaller
              section of the feature.
            </p>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <h4 className="case-study__section-title">Conclusion</h4>
            <p className="case-study__text mt-4">
              It&apos;s safe to say that the usability testing sessions provided
              much more good for our team and beyond, as other teams (especially
              those that didn&apos;t work on any UI-related work) started to
              devise their own form of usability testing process to use with
              their users. I&apos;ve worked with some other people in the
              broader team to work on a generic usability testing framework that
              can be broadly applied to any team that needs usability testing in
              their workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
