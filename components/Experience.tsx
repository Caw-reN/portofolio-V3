import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Pengalaman Kerja</h2>
          <div className="w-16 h-1 bg-neutral-900 mx-auto md:mx-0"></div>
        </motion.div>

        <div className="relative border-l border-neutral-200 ml-4 md:ml-0 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-neutral-900 rounded-full border border-white ring-4 ring-neutral-50"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl font-bold text-neutral-900">{exp.role}</h3>
                <span className="text-sm text-neutral-500 font-medium font-mono">{exp.period}</span>
              </div>
              <p className="text-lg text-neutral-700 font-medium mb-3">{exp.company}</p>
              <p className="text-neutral-600 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;