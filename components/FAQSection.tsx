import React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What should I expect during my first chiropractic visit?",
      answer:
        "Your first visit will include a thorough consultation, examination, and discussion of your health history. We'll develop a personalized treatment plan tailored to your specific needs.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "The number of sessions varies based on your condition and goals. Some patients feel relief after just one visit, while others may require ongoing care for chronic conditions.",
    },
    {
      question: "Is chiropractic care safe?",
      answer:
        "Yes, chiropractic care is safe when performed by a licensed professional. Our treatments are non-invasive and designed to support your body's natural healing process.",
    },
    {
      question: "Do I need a referral to see a chiropractor?",
      answer:
        "No, you do not need a referral to see a chiropractor. You can schedule an appointment directly with us.",
    },
    {
      question: "Will my insurance cover chiropractic care?",
      answer:
        "Many insurance plans cover chiropractic care. We recommend checking with your provider to understand your specific benefits and coverage. We also offer affordable payment options if needed.",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-xl font-semibold mb-2"
            style={{ color: "#327681" }}
          >
            Frequently Asked Questions
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Got Questions? We&apos;ve Got Answers
          </h2>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="mb-4 pb-4 cursor-pointer border-b"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <div className="flex justify-between items-center">
                  <h3
                    className="text-lg font-semibold underline"
                    style={{ color: "#327681", textDecorationColor: "#327681" }}
                  >
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`transform transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mt-2 text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
