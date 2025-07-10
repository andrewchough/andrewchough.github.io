import React from "react";
import Image from "next/image";

export default function Process() {
  return (
    <div>
      <Image
        src="/images/chariot-case-study/file-management.jpg"
        alt="Picture of woman conducting a usability testing session virtually with a user."
        quality={100}
        className="h-[360px] w-full object-cover"
        width={1000}
        height={360}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-12 grid grid-cols-12">
          <h4 className="case-study__section-title col-span-10 lg:col-start-1">
            Process
          </h4>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5 md:pr-6 lg:col-start-1">
            <h5 className="case-study__section-subtitle font-semibold">
              Recognizing the workflow disconnect
            </h5>
            <p className="mt-2">
              The first step was identifying that our initial
              &quot;Transactions&quot; interface, while technically sound,
              wasn&apos;t actually solving the right problem. Through user
              feedback and adoption metrics, I realized that nonprofit officers
              needed more than just better data visibility—they needed their
              actual workflow supported. I communicated to the team that we
              needed to pivot from a data-display tool to a
              workflow-optimization tool. This meant stepping back from our
              technical solution to understand the human processes that our
              interface should serve, rather than forcing users to adapt to our
              system.
            </p>
          </div>
          <div className="md:col-span-7">
            <Image
              src="/images/chariot-case-study/mapping-workflows.jpg"
              alt="Picture of a whiteboard with a diagram of the four-stage workflow."
              className="mb-15 hidden h-[430px] w-full object-cover md:block"
              width={644}
              height={336}
            />
          </div>
          <div className="md:col-span-5 md:pr-6 lg:col-start-1">
            <h5 className="case-study__section-subtitle font-semibold">
              Mapping the ideal workflow
            </h5>
            <p className="mt-2">
              I focused on working directly with nonprofit officers to
              understand their day-to-day donation processing workflow. Through
              collaborative sessions, I discovered their four-stage process:
              assignment checking, categorization/tagging, verification, and CRM
              handoff. Rather than assuming what they needed, I observed how
              they actually worked across Excel, Salesforce, and DAF portals.
              This revealed that their mental model was state-based—they thought
              in terms of &quot;what stage is this donation in?&quot; rather
              than &quot;what data does this donation have?&quot; This insight
              became the foundation for redesigning the entire interface around
              workflow stages.
            </p>
          </div>
          <div className="md:col-span-7">
            <Image
              src="/images/chariot-case-study/workflow-diagrams.png"
              alt="Diagram of the four-stage workflow."
              className="mb-15 hidden h-[336px] w-full object-cover md:block"
              width={644}
              height={336}
            />
          </div>
          <div className="md:col-span-5 md:pr-6 lg:col-start-1">
            <h5 className="case-study__section-subtitle font-semibold">
              Rebuilding around user states
            </h5>
            <p className="mt-2">
              Once I understood their actual workflow, I redesigned the
              interface to match their mental model. I created four distinct
              tabs that corresponded to their workflow stages: Overview, Needs
              Review, Ready for CRM, and Waiting for Payment. The key technical
              challenge was implementing optimistic updates so that when a
              donation moved between stages, the interface would immediately
              reflect those changes across all tabs and counts. I also added the
              contextual detail panel to provide comprehensive information
              without losing workflow context, eliminating the need to navigate
              away from their task list.
            </p>
          </div>
          <div className="md:col-span-7">
            <Image
              src="/images/chariot-case-study/new-dashboard.png"
              alt="Diagram of the new dashboard."
              className="mb-15 hidden h-[336px] w-full object-cover md:block"
              width={644}
              height={336}
            />
          </div>
          <div className="md:col-span-5 md:pr-6 lg:col-start-1">
            <h5 className="case-study__section-subtitle font-semibold">
              Validating workflow efficiency
            </h5>
            <p className="mt-2">
              After implementing the new workflow-based interface, I worked with
              nonprofit officers to validate that it actually improved their
              process. We measured processing time reduction (from 5-7 minutes
              to ~3 minutes per donation) and gathered qualitative feedback
              about the elimination of context switching. The validation showed
              that officers could now complete their entire workflow within a
              single interface, and the real-time updates helped them maintain
              awareness of their progress through the donation pipeline. This
              confirmed that the pivot from data display to workflow
              optimization successfully addressed their actual needs.
            </p>
          </div>
          <div className="md:col-span-7">
            <Image
              src="/images/chariot-case-study/validating-efficiency.jpg"
              alt="Picture of colleagues sitting around a table pointing at a piece of paper."
              className="mb-15 hidden h-[336px] w-full object-cover md:block"
              width={644}
              height={336}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
