"use client";
import HeadingTitle from "@/components/common/title/headingTitle";
import QuestionsAccordion from "./questionsAccordion";

export default function Questions() {
  const faqData = [
    {
      question: "What is ERP software?",
      answer:
        "Enterprise Resource Planning (ERP) software integrates core business processes into a single system, managing everything from finance to inventory and HR.",
    },
    {
      question: "How can management software benefit my business?",
      answer:
        "Management software can improve efficiency, reduce costs, enhance decision-making, and provide better visibility into business operations.",
    },
    {
      question: "What's the implementation process like?",
      answer:
        "Implementation typically involves assessment, customization, data migration, training, and ongoing support, usually taking 3-6 months.",
    },
    {
      question: "Can the software be customized?",
      answer:
        "Yes, our management solutions can be customized to match your specific business processes and requirements.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer comprehensive support including training, technical assistance, regular updates, and dedicated account management.",
    },
  ];
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
        <div className="max-w-4xl mx-auto">
          <QuestionsAccordion faqData={faqData} />
        </div>
      </div>
    </div>
  );
}
