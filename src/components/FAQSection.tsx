"use client";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  label: string;
  heading: string;
  subtext: string;
  faqs: FAQ[];
  buttonText: string;
  buttonHref: string;
}

export default function FAQSection({
  label,
  heading,
  subtext,
  faqs,
  buttonText,
  buttonHref,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <span className="text-red-600 font-semibold text-base mb-2">
          {label}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {heading}
        </h2>
        <p className="text-gray-500 mb-10">{subtext}</p>
        <div className="w-full flex flex-col gap-6 mb-8">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl px-6 py-5 flex items-center justify-between cursor-pointer transition hover:shadow"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="text-left">
                <div className="font-medium text-gray-900">{faq.question}</div>
                {openIndex === idx && (
                  <div className="text-gray-600 text-sm mt-2">{faq.answer}</div>
                )}
              </div>
              <span className="ml-4 flex-shrink-0">
                <svg
                  className={`w-7 h-7 text-gray-400 transition-transform duration-200 ${openIndex === idx ? "rotate-45" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" stroke="none" fill="#F3F4F6" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v8m-4-4h8"
                  />
                </svg>
              </span>
            </div>
          ))}
        </div>
        <a
          href={buttonHref}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg text-base flex items-center gap-2 transition-colors shadow"
        >
          {buttonText}
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
