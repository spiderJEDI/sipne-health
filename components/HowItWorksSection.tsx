import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HowItWorksSection() {
  const steps = [
    {
      title: "Initial Consultation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Personalized Assessment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Targeted Treatment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Ongoing Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="py-24 bg-[#327681]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-2">
            How It Works
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your Path to Wellness
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-stretch"
            >
              <Card className="bg-[#327681] border-2 border-white flex-1 flex flex-col justify-between">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2 whitespace-normal break-words">
                    {/* Set a fixed height to force text into two lines */}
                    <span
                      className="block w-full"
                      style={{ minHeight: "3rem", lineHeight: "1.5rem" }}
                    >
                      {step.title}
                    </span>
                  </h3>
                  <p className="text-white/80">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
