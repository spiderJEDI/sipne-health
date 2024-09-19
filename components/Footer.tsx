import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mountain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#203134] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Mountain className="h-6 w-6 text-primary mr-2" />
              <span className="font-bold text-lg">Spine</span>
            </Link>
            <p className="text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-sm text-white hover:text-primary"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Spinal Adjustments",
                "Posture Correction",
                "Pain Management",
                "Sports Injury Rehab",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-sm text-white hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-white mb-4">
              Subscribe to our newsletter for updates and health tips.
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-grow"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t border-white mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Borhan - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
