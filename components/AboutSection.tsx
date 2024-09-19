import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const features = [
    "Passionate About Your Health",
    "Focused on Your Well-Being",
    "Guided by Experience and Expertise",
    "Committed to Personalized Care",
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              About Us
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Commitment to Your Wellness Journey
            </h2>
            <p className="text-gray-700 mb-6">
              The platform for rapid progress. Let your team focus on shipping
              features instead of managing infrastructure with automated CI/CD,
              built-in testing, and integrated collaboration.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <ChevronRight className="text-primary mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            {/* Moved the Learn More button below the list */}
            <div className="mt-8">
              <Button size="lg">Learn More</Button>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 flex justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md">
              <Image
                src="https://templates.sparklethings.com/spine/wp-content/uploads/sites/20/2024/08/images-HZXWHF7.jpg"
                alt="About Us"
                width={500}
                height={600}
                className="rounded-lg"
              />
              <div className="absolute -bottom-10 -left-10 w-3/4">
                <Image
                  src="https://templates.sparklethings.com/spine/wp-content/uploads/sites/20/2024/08/images-7998RBP.jpg"
                  alt="About Us 2"
                  width={400}
                  height={300}
                  className="rounded-lg border-8 border-primary"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
