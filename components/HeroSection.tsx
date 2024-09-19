import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://templates.sparklethings.com/spine/wp-content/uploads/sites/20/2024/08/imaged-JWDF383.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#7ABDC803] to-[#7ABDC8] opacity-90"></div>
      <motion.div
        className="container relative z-10 flex flex-col items-start justify-center h-full px-4 py-32 mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-sm font-medium text-primary mb-2">
          Welcome to Spine
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          <span>Align Your Health,</span>
          <br />
          <span>Elevate Your Life</span>
        </h1>
        <p className="max-w-[700px] text-lg text-white mb-8">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
        <motion.div
          className="mt-16 flex items-center gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex -space-x-4">
            {[1, 2, 3].map((_, i) => (
              <Avatar key={i} className="w-12 h-12 border-2 border-white">
                <AvatarFallback className="text-white">U</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div>
            <p className="font-semibold text-white">5k+ Satisfied Clients</p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
