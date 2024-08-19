import HeadingTitle from "@/components/common/title/headingTitle";
import QuestionsAccordion from "./questionsAccordion";

export default function Questions() {
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <div className="px-2">
        <div>
          <HeadingTitle
            heading={
              <>
                You Can See Here Some
                <br /> Popular Questions
              </>
            }
          />
        </div>
        <QuestionsAccordion />
      </div>
    </div>
  );
}
