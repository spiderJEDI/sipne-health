import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { HeartPulse, Stethoscope, Spline, BatteryFull } from "lucide-react"; // Import relevant icons

export default function ServicesSection() {
  const services = [
    {
      icon: <Spline className="text-white w-12 h-12 mb-4 mx-auto" />,
      title: "Spinal Adjustments",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    },
    {
      icon: <Spline className="text-white w-12 h-12 mb-4 mx-auto" />,
      title: "Posture Correction",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    },
    {
      icon: <HeartPulse className="text-white w-12 h-12 mb-4 mx-auto" />,
      title: "Pain Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    },
    {
      icon: <BatteryFull className="text-white w-12 h-12 mb-4 mx-auto" />,
      title: "Sports Injury Rehab",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    },
    {
      icon: <Spline className="text-white w-12 h-12 mb-4 mx-auto" />,
      title: "Wellness Programs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    },
    {
      icon: <Stethoscope className="text-white w-12 h-12 mb-4 mx-auto" />,
      title: "Chiropractic Consultations",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24"
      style={{ backgroundColor: "#4893A0" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-2">Services</h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tailored Care for Every Need
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-white hover:border-gray-300 transition-colors duration-300 bg-transparent">
                <CardContent className="p-6 text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white mb-4">{service.description}</p>
                  <Button variant="link" className="text-white underline">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
