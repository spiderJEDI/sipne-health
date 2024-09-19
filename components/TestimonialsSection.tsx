import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      content:
        "I've struggled with lower back pain for years, and after just a few sessions here, I feel incredible relief. The staff is knowledgeable and truly cares about your well-being.",
      author: "Emily R.",
      role: "Client",
      image:
        "https://templates.sparklethings.com/spine/wp-content/uploads/sites/20/2024/08/image-2GSJ642.jpg",
    },
    {
      content:
        "The personalized treatment plan made all the difference. I regained full mobility in my neck and shoulders and learned how to maintain my health outside the clinic.",
      author: "Michael T.",
      role: "Client",
      image:
        "https://templates.sparklethings.com/spine/wp-content/uploads/sites/20/2024/08/image-L4C34GH.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-black mb-2">
              Testimonial
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              What Our Patients Say
            </h2>
            <div className="relative h-80 mb-8">
              <Image
                src="https://templates.sparklethings.com/spine/wp-content/uploads/sites/20/2024/08/images-C849C55.jpg"
                alt="Testimonial"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-gray-200 bg-white">
                <CardContent className="p-6">
                  <p className="mb-4 text-black italic">
                    &apos;{testimonial.content}&apos;
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-black">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
