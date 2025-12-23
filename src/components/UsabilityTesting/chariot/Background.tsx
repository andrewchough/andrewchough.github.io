import React, { useEffect, useState } from "react";

import { useMediaQuery } from "../../../hooks/useMediaQuery";

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
      <div className={largeScreen ? "mx-[24px]" : ""}>
        <div className="mx-auto w-full lg:w-2/3">
          <h4 className="case-study__section-title">Problem</h4>
          <p className="case-study__text--enlarged">
            Nonprofit officers were spending hours each day processing donations
            across multiple disconnected systems. Their workflow involved
            constant context switching between Excel spreadsheets, Salesforce
            and various DAF provider portals just to review and categorize a
            single donation.
          </p>
          <p className="case-study__text">
            While DAFpay provided richer donation data than traditional Donor
            Advised Fund payments, nonprofits still lacked a unified interface
            to actually act on this information. They needed more than just data
            visibility—they needed workflow optimization.
          </p>
        </div>
      </div>
      <div
        className={`my-[48px] flex justify-center ${
          largeScreen ? "mx-[24px]" : "mx-[60px]"
        }`}
      >
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
            How might we create a unified interface that allows nonprofit
            officers to review and act on donations in a single, streamlined
            workflow?
          </h4>
        </div>
      </div>
      <div
        className={`case-study__callout-box my-[48px] flex py-[60px] ${
          mediumScreen ? "px-[20px]" : "px-[200px]"
        }`}
      >
        <div
          aria-hidden="true"
          className="mr-[48px] w-[6px] shrink-0 self-stretch rounded bg-blue-500"
        />
        <h4 className="case-study__callout-box__text">
          &quot;I&apos;d spend my entire morning just on donations - opening
          Excel to see what&apos;s assigned to me, then switching to Salesforce
          to check donor history, then back to Excel to update status, then to
          Word to write notes. By the time I finished processing 10 donations,
          half my day was gone and I hadn&apos;t even started on my actual
          fundraising work.&quot;
          <br />
          <span className="case-study__callout-box__text case-study__callout-box__text--quoter">
            - Development officer, nonprofit organization
          </span>
        </h4>
      </div>
      <div className="mx-auto mb-[48px] w-full lg:w-2/3">
        <h4 className="case-study__section-title">Solution</h4>
        <div className="case-study__text--enlarged">
          <p className="mb-4">
            A workflow-optimized donation management system that transformed
            nonprofit donation processing:
          </p>
          <ul className="list-inside list-disc font-normal">
            <li>
              State-based workflow navigation with four key stages that match
              officers&apos; mental models
            </li>
            <li>
              Contextual detail panels that provide comprehensive donation
              information without losing workflow context or requiring
              navigation away from task lists
            </li>
            <li>
              Real-time optimistic updates with intelligent state management
              that immediately reflects changes across tabs and counts as
              donations move through the workflow
            </li>
            <li>
              Smart assignment and filtering system that allows officers to
              focus on their specific responsibilities while enabling easy
              workload redistribution
            </li>
            <li>
              Single-interface consolidation replacing the previous multi-system
              workflow (Excel, Salesforce, donation portals) with one
              purpose-built tool
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
