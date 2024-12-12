import HeadingTitle from "@/components/common/title/headingTitle";
import WebServicesAccordion from "./webServicesAccordion";
import QuestionsAccordion from "../../Home/questions/questionsAccordion";

export default function WebServices() {

 const  faqData= [
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
  ]
  return (
    <div className=" py-14">
      <div className="max-w-screen-xl mx-auto">
        <div className="px-2">
          <div>
            <HeadingTitle
              heading={
                <>
                  Why Choose Our Website <br />
                  Development Services?
                </>
              }
              subHeading={
                <span className="text-lg">
                  We have a proven track record of providing top-notch web{" "}
                  <br /> development services to <br /> clients around the
                  globe. Here are a few reasons why you should <br /> choose us:
                </span>
              }
            />
          </div>
          {/* <WebServicesAccordion /> */}
          <QuestionsAccordion faqData={faqData}/>
        </div>
      </div>
    </div>
  );
}
