import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../constants';

const Articles: React.FC = () => {
  return (
    <section id="articles" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex justify-between items-end"
        >
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Artikel Terbaru</h2>
            <div className="w-16 h-1 bg-neutral-900"></div>
          </div>
        </motion.div>

        <div className="space-y-8">
          {ARTICLES.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white p-8 border-2 border-transparent hover:border-neutral-900 hover:shadow-[6px_6px_0px_0px_#171717] transition-all duration-300 relative"
            >
               {/* Clickable Area Overlay */}
               <Link to={`/article/${article.id}`} className="absolute inset-0 z-10" />

              <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-4">
                <span className="text-xs font-bold font-mono text-neutral-500 uppercase tracking-widest bg-neutral-100 px-2 py-1">
                  {article.date} • {article.readTime}
                </span>
                <div className="flex gap-2">
                    {article.tags?.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] border border-neutral-300 px-1.5 py-0.5 text-neutral-500">{tag}</span>
                    ))}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                {article.excerpt}
              </p>
              <div className="inline-block text-sm font-bold text-neutral-900 border-b-2 border-neutral-200 group-hover:border-neutral-900 transition-colors pb-0.5">
                Baca Selengkapnya
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;