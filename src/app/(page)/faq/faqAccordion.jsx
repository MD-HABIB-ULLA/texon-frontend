import QuestionsAccordion from "@/components/pages/Home/questions/questionsAccordion";


export default function FaqAccordion() {

  const faqData = [
    {
      question: "What is Texon Limited?",
      answer: "Texon Limited is a software development company in Bangladesh that offers end-to-end software and hardware solutions to various industries and clients worldwide."
    },
    {
      question: "What kind of services do you provide?",
      answer: "We provide full-stack software development services for websites, mobile apps, e-commerce, machine learning, artificial intelligence, and more. We can help you with UI/UX consulting, product engineering, quality assurance and testing, and custom software development."
    },
    {
      question: "What are the benefits of working with Texon Limited?",
      answer: "Some of the benefits are: Access to a team of talented and experienced developers, designers, testers, and project managers. Work with a company that has a proven track record of delivering successful projects worldwide. Enjoy competitive pricing and flexible payment options. Collaborate with a company that values your feedback and satisfaction."
    },
    {
      question: "How can I contact you for more information or a quote?",
      answer: "You can contact us by filling out the form on our website or by sending us an email at info@texonltd.com. You can also call us at +880 1409 003646 or visit our office at ….. Road, Dhaka 1212."
    },
    {
      question: "What are the technologies and tools that you use?",
      answer: "We use a variety of technologies and tools to develop our software and hardware solutions. Web development: HTML, CSS, Django, JavaScript, React, Angular, Vue, Node.js, PHP, Laravel, Python, WordPress, Shopify, Magento, etc. Mobile development: Android, iOS, Flutter, React Native, etc. E-commerce development: WooCommerce, Shopify, Magento, etc. Hardware development: Arduino, Raspberry Pi, ESP32/8266, etc."
    },
    {
      question: "How do you manage your projects?",
      answer: "We manage our projects using agile methodologies and tools that ensure efficiency, quality, and collaboration. We follow the best practices of software development and use tools such as Jira, GitHub, Slack, Zoom, and Google Drive. We also provide you with regular updates and reports on your project."
    },
    {
      question: "How do you ensure the security and privacy of my data?",
      answer: "We use encryption, authentication, authorization, backup, and firewall techniques to protect your data from unauthorized access or loss. We also comply with the relevant laws and regulations regarding data protection and privacy. We do not share or sell your data to any third party without your consent."
    },
    {
      question: "How do you ensure the quality of your products and services?",
      answer: "We ensure the quality of our products and services by following the best practices of software development, such as code review, testing, debugging, documentation, and deployment."
    },
    {
      question: "What are your payment terms and methods?",
      answer: "Our payment terms and methods are flexible and negotiable depending on your project scope and budget. We usually charge on an hourly or fixed-price basis. We accept payments via bank transfer, PayPal, Payoneer, etc. We usually require a deposit before starting the project and the rest of the payment upon completion or delivery of the project."
    }
  ];
  
  return (
  <QuestionsAccordion faqData={faqData}/>
  );
}
