"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";
import { Icon } from "@iconify/react";

const About = () => {
  const { ref } = useSectionInView("About", 0.5);

  const highlights = [
    {
      icon: "carbon:development",
      title: "10 Years",
      subtitle: "Experience",
    },
    {
      icon: "ion:rocket-outline",
      title: "7+",
      subtitle: "Deployed Apps",
    },
    {
      icon: "bi:stack",
      title: "Full-Stack",
      subtitle: "BIM & AI/ML & Architect",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading text="About me"></SectionHeading>

      {/* --- HIGHLIGHT CARDS --- */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg bg-gray-100 dark:bg-white/10 shadow-md flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <Icon
              icon={highlight.icon}
              width="40"
              className="text-amber-600 dark:text-amber-400 mb-2"
            />
            <h3 className="text-2xl font-bold">{highlight.title}</h3>
            <p className="text-gray-600 dark:text-white/70">
              {highlight.subtitle}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="text-left sm:text-center">
        I'm a Senior BIM & Revit API Engineer with 10+ years of experience building productiongrade automation tools for
        architectural, engineering, and construction workflows. Specialized in developing custom Revit plugins using C#
        and the Revit API to automate modeling, data extraction, and cross-platform BIM interoperability (IFC, DWG,
        JSON). Proven background integrating generative AI, computational design, and cloud services into BIM
        environments to reduce manual effort, improve design accuracy, and accelerate delivery timelines. Strong
        collaborator with architects, BIM managers, and product teams, translating real-world design constraints into
        scalable, maintainable software solutions.
      </p>
    </motion.section>
  );
};

export default About;
