"use client";
import HeadingTitle from "@/components/common/title/headingTitle";
import QuestionsAccordion from "./questionsAccordion";

export default function Questions() {
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <div className="px-2">
        <div className="mb-5">
          <HeadingTitle
            heading={
              <>
                You Can See Here Some
                <br /> Popular Questions
              </>
            }
          />
        </div>
        <div className="max-w-3xl mx-auto"><QuestionsAccordion /></div>
      </div>
    </div>
  );
}
