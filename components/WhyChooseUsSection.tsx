import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  const reasons = [
    "Personalized Treatment Plans",
    "Highly Skilled Professionals",
    "Comprehensive Wellness Approach",
    "Patient-Centered Care",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse gap-16">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/asset/ss01.png"
              alt="Why Choose Us"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-black mb-2">
              Why choose us
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Your Well-Being, Our Priority
            </h2>
            <p className="text-black mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <Card key={index} className="border-2 border-gray-200 bg-white">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-black mb-2">{reason}</h4>
                    <p className="text-sm text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
