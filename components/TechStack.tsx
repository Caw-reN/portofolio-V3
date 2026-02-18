import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const TechStack: React.FC = () => {
  // Kita duplikasi array skill beberapa kali untuk memastikan marquee tidak putus di layar lebar
  const marqueeSkills = [...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <section id="skills" className="py-12 bg-white border-y-2 border-neutral-900 overflow-hidden">
      <div className="relative w-full max-w-[100vw]">
        {/* Container untuk animasi */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Kecepatan animasi
          }}
        >
          {marqueeSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="inline-flex items-center mx-3"
            >
              <div className="px-6 py-2 bg-white border-2 border-neutral-900 shadow-[3px_3px_0px_0px_#171717] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#171717] transition-all cursor-default">
                <span className="font-bold text-neutral-900 text-sm tracking-wide uppercase">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;