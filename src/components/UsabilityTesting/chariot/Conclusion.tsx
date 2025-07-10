import React from "react";

export default function Conclusion() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-24 grid grid-cols-12">
          <div className="col-span-11 lg:col-start-1">
            <h4 className="case-study__section-title">Impact</h4>
            <ul className="case-study__text--enlarged mt-4 list-inside list-disc">
              <li className="font-normal">
                60% reduction in processing time: From 5-7 minutes per donation
                to ~3 minutes
              </li>
              <li className="font-normal">
                Eliminated context switching: Single interface replaced 4+
                separate tools (Excel, Salesforce, Word, DAF portals)
              </li>
              <li className="font-normal">
                Scaled across hundreds of nonprofits processing thousands of
                donations monthly
              </li>
              <li className="font-normal">
                Improved workflow completion rates: Officers could now complete
                the entire donation review process within one system
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="my-12 bg-blue-100 px-4 sm:px-6 lg:px-8">
        <div className="case-study__callout-box mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="border-l-4 border-blue-500 pl-8">
            <p className="case-study__callout-box__text mb-4">
              &ldquo;The workflow feels natural now - I don&apos;t have to
              remember where I left off because everything is organized by what
              needs to happen next.&rdquo;
            </p>
            <p className="case-study__callout-box__text case-study__callout-box__text--quoter">
              - Developer after changes were implemented
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-12">
          <div className="col-span-10 lg:col-start-1">
            <h4 className="case-study__section-title">Reflections</h4>
            <p className="case-study__text mt-4">
              This project reinforced that successful design engineering
              requires looking beyond technical requirements to understand the
              human workflows that technology should serve. The transformation
              from a data-display interface to a workflow-optimization tool
              demonstrates how user research and iterative design thinking can
              turn a technically sound but practically limited solution into
              something that genuinely improves people&apos;s daily work lives.
            </p>
            <p className="case-study__text--enlarged mt-4">Key Learnings:</p>
            <ul className="case-study__text mt-4 list-inside list-disc">
              <li className="font-normal">
                User workflows trump technical elegance: A beautiful interface
                that doesn&apos;t match user mental models will fail regardless
                of technical sophistication
              </li>
              <li className="font-normal">
                Pivot when necessary: Being willing to fundamentally rethink an
                approach based on user feedback is crucial for creating truly
                useful products
              </li>
              <li className="font-normal">
                State management complexity pays dividends: The technical
                investment in optimistic updates created a seamless user
                experience that made the workflow feel natural practically
                limited solution into something that genuinely improves
                people&apos;s daily work lives.
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-12">
          <div className="col-span-10 lg:col-start-1">
            <h4 className="case-study__section-title">Conclusion</h4>
            <p className="case-study__text mt-4">
              The most rewarding aspect was seeing nonprofit officers who had
              been skeptical of changing their decades-old processes become
              advocates for the new system once they experienced the time
              savings and workflow improvements firsthand. This project showed
              me that the best design engineering solutions don&apos;t just work
              technically—they make people&apos;s work lives genuinely better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
