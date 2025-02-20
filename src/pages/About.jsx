import { useEffect, useState, useRef } from "react";
import promise from "../assets/images/promise.png";
import ad_campaign from "../assets/images/ad-campaign.jpg";
import vision from "../assets/images/vision.jpg";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutUs() {
  const sections = [
    {
      title: "Digital Marketing",
      content:
        "We provide expert digital marketing solutions, including social media marketing, search engine optimization (SEO), pay-per-click (PPC) advertising, and content marketing to help businesses maximize their online presence.",
      image: promise,
    },
    {
      title: "Branding & Design",
      content:
        "Our branding and design services include logo creation, brand identity development, and innovative creative designs that establish a strong and lasting impression for your business.",
      image: vision,
    },
    {
      title: "Advertising Campaigns",
      content:
        "We craft strategic advertising campaigns across multiple platforms, ensuring targeted reach, high engagement, and impactful brand messaging to drive conversions and brand growth.",
      image: ad_campaign,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (
            rect.top < window.innerHeight * 0.8 &&
            rect.bottom > window.innerHeight * 0.2
          ) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-gray-900 flex flex-col justify-center items-center px-6 py-12">
      {/* Sticky Image & Content */}
      <div className="sticky top-24 w-full max-w-5xl p-6 shadow-lg rounded-2xl transition-transform duration-200 bg-white flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left font-[Quicksand]">Our Services</h1>
        <div className="flex flex-col md:flex-row items-center gap-6 w-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={sections[activeIndex].image}
              src={sections[activeIndex].image}
              alt={sections[activeIndex].title}
              className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-blue-700 font-[Quicksand]">
              {sections[activeIndex].title}
            </h2>
            <p className="text-lg text-gray-800 mt-4 leading-relaxed">
              {sections[activeIndex].content}
            </p>
          </div>
        </div>
      </div>

      {/* Scrolling Sections */}
      <div className="flex flex-col items-center w-full mt-16">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="h-[50vh] flex items-center justify-center w-full"
          />
        ))}
      </div>
    </div>
  );
}
