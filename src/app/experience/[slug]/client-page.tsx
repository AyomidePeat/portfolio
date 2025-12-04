"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ExternalLink } from "lucide-react";
import { ExperienceItem, Responsibility, SkillCategory } from "@/types/experience";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

interface ExperienceDetailPageProps {
  experience: ExperienceItem;
}

const ResponsibilitiesSection = ({ responsibilities }: { responsibilities: Responsibility[] }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    transition={{ staggerChildren: 0.2 }}
    viewport={{ once: true }}
    className="mt-20 text-center"
  >
    <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-secondary-foreground mb-8">
      Key Responsibilities
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {responsibilities.map((resp, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          className="p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
        >
          <h3 className="text-2xl font-semibold text-primary mb-3">{resp.title}</h3>
          <p className="text-lg text-foreground mb-5 leading-relaxed">{resp.description}</p>

          {resp.skills.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-border mt-4">
              <span className="text-sm font-semibold text-foreground mr-1">Skills:</span>
              {resp.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap transition-all hover:bg-primary/50 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const TechnicalSkillsTabs = ({ technicalSkills }: { technicalSkills: SkillCategory[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      className="mt-24 text-center"
    >
      <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-secondary-foreground mb-8">
        Technical Skills Applied
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center mb-10 gap-4 flex-wrap">
        {technicalSkills.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`relative px-6 py-2 font-medium rounded-full transition-all duration-300 ${
              activeTab === index
                ? "text-white bg-primary/20"
                : "text-primary/80 bg-card hover:bg-primary/10"
            }`}
          >
            {tab.category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        variants={fadeInUp}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full mx-auto"
      >
        {technicalSkills[activeTab]?.items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <h3 className="font-semibold text-primary text-lg mb-2">{item.name}</h3>
            <p className="text-muted-foreground text-sm">{item.detail}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default function ExperienceDetailPage({ experience }: ExperienceDetailPageProps) {
  return (
    <div className="w-full overflow-y-auto scroll-smooth">
      {/* HEADER SECTION */}
      <header
        className="relative w-full py-20 md:py-28 bg-cover bg-center text-center"
        style={{ backgroundImage: `url(${experience.image})` }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        <div className="relative z-10 container mx-auto max-w-5xl px-6">
          <Link
            href="/#experience"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
          >
            <ChevronLeft className="w-6 h-6 mr-2" /> Back to Experience
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            {experience.company}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-lg md:text-xl font-semibold text-white/90"
          >
            {experience.fullTitle} | {experience.fullDate}
          </motion.p>

          {experience.link && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex justify-center"
            >
              <Link
                href={experience.link}
                target="_blank"
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-black px-4 py-2 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                <ExternalLink className="w-4 h-4" /> View Company
              </Link>
            </motion.div>
          )}
        </div>
      </header>

      {/* MAIN BODY */}
      <main className="w-full px-6 py-10 bg-background/50">
        {/* DESCRIPTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="mx-auto mt-12 text-left max-w-7xl"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
              Description
            </h2>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-foreground bg-gradient-to-br from-accent/20 to-accent/5 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ">
            {experience.mission}
          </p>
        </motion.section>

        {/* RESPONSIBILITIES */}
        {experience.responsibilities.length > 0 && (
          <ResponsibilitiesSection responsibilities={experience.responsibilities} />
        )}

        {/* TECHNICAL SKILLS */}
        {experience.technicalSkills.length > 0 && (
          <TechnicalSkillsTabs technicalSkills={experience.technicalSkills} />
        )}
      </main>
    </div>
  );
}
