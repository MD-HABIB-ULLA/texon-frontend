'use client'

import { useState } from "react";


export default function QuestionsAccordion({faqData}) {
  const [openIndex, setOpenIndex] = useState(0)


  return (
    <div className="pb-5">
      <div className="w-full  mx-auto p-4 space-y-4">
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
