import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const contactInfo = [
    { icon: Phone, text: "+123-456-7890" },
    { icon: Mail, text: "hello@reallygreatsite.com" },
    { icon: MapPin, text: "123 Anywhere St., Any City" },
  ];

  return (
    <section id="contact" className="py-24 bg-[#EAFAFA] text-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            className="lg:w-1/2 flex flex-col justify-between"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Make an Appointment
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <span className="text-black">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input type="tel" placeholder="Your Phone" />
              <textarea
                className="w-full p-3 border rounded-md"
                rows={4}
                placeholder="Your Message"
              ></textarea>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
