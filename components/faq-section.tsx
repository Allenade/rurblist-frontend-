"use client";

import { useState } from "react";

type FAQItem = {
  id?: string;
  question: string;
  answer?: string;
};

type FAQSectionProps = {
  title?: string;
  items?: FAQItem[];
};

const defaultItems: FAQItem[] = [
  { question: "What Happens If A Deal Falls Through?", answer: "If a deal falls through, we guide you through next steps and help you find another verified property." },
  { question: "How Do You Verify Properties?", answer: "We verify properties through legal checks, title search, and agent verification." },
  { question: "What If I Already Have A Property I'm Interested In?", answer: "You can submit the property and we'll verify it and support you through the process." },
  { question: "Is Rurblist For Diaspora Buyers?", answer: "Yes. Rurblist is built to support diaspora buyers with verified listings and escrow." },
];

export function FAQSection({ title = "FAQs", items = defaultItems }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-3xl font-bold text-foreground uppercase sm:text-4xl">
          {title}
        </h2>
        <ul className="mt-8 border-t border-border" role="list">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <li key={item.id ?? index} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="text-foreground font-normal text-base sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center text-2xl text-foreground transition-transform"
                    aria-hidden
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`overflow-hidden transition-all ${isOpen ? "max-h-96" : "max-h-0"}`}
                >
                  {item.answer && (
                    <p className="pb-4 text-muted-foreground text-sm sm:text-base">
                      {item.answer}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
