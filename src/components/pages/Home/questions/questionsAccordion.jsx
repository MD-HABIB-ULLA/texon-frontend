'use client'

import { useState } from "react";


export default function QuestionsAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqData = [
    {
      question: "What is UX design?",
      answer: "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user."
    },
    {
      question: "What are the key principles of UX design?",
      answer: "The key principles of UX design include user-centered design, accessibility, usability, hierarchy, consistency, and feedback. These principles ensure that the design meets user needs effectively."
    },
    {
      question: "What is the difference between UX and UI design?",
      answer: "While UX design focuses on the overall user experience and how users interact with a product, UI design specifically deals with the visual elements and interface components that users directly interact with."
    },
    {
      question: "What is a wireframe?",
      answer: "A wireframe is a basic visual representation of a webpage or application that outlines the structure, layout, and functionality without including detailed design elements or content."
    },
    {
      question: "What is user testing?",
      answer: "User testing is the process of evaluating a product by testing it with representative users. It helps identify usability issues and gather feedback to improve the user experience."
    }
  ]

  return (
    <div className="pb-5">
      <div className="w-full max-w-2xl mx-auto p-4 space-y-4">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-[20px] p-6 shadow-sm cursor-pointer transition-all duration-200 hover:bg-gray-50"
          onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              {item.question}
            </h3>
            <button
              className={`w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              aria-expanded={openIndex === index}
              aria-controls={`content-${index}`}
            >
              <svg
                className="w-4 h-4 text-black"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id={`content-${index}`}
            className={`mt-2 text-gray-600 overflow-hidden transition-all duration-200 ${
              openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
            }`}
            role="region"
            aria-labelledby={`question-${index}`}
          >
            <p className="pt-2">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
