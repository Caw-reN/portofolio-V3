import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Layers } from 'lucide-react';
import { PROJECTS } from '../constants';
import Navbar from './Navbar';
import Contact from './Contact';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-neutral-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project tidak ditemukan</h2>
          <Link to="/" className="underline hover:text-neutral-600">Kembali ke Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans text-neutral-900 selection:bg-neutral-900 selection:text-white">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-sm font-bold text-neutral-500 hover:text-neutral-900 mb-6 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Kembali
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-neutral-700 text-sm font-bold tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-neutral-900 text-white border-2 border-neutral-900 px-6 py-3 text-sm font-bold shadow-[4px_4px_0px_0px_#737373] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#737373] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-200"
              >
                <ExternalLink size={18} className="mr-2" />
                Live Preview
              </a>
              <a 
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-neutral-900 border-2 border-neutral-900 px-6 py-3 text-sm font-bold shadow-[4px_4px_0px_0px_#171717] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#171717] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-200"
              >
                <Github size={18} className="mr-2" />
                Source Code
              </a>
            </div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full aspect-video border-2 border-neutral-900 bg-neutral-100 mb-16 shadow-[8px_8px_0px_0px_#171717]"
          >
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div className="md:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4 border-l-4 border-neutral-900 pl-4">Tentang Project</h3>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4 border-l-4 border-neutral-900 pl-4">Tujuan</h3>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  {project.goals}
                </p>
              </motion.div>
            </div>

            <div className="md:col-span-1">
               <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-neutral-50 p-6 border-2 border-neutral-200 sticky top-32"
              >
                <div className="flex items-center mb-4 text-neutral-900">
                  <Layers size={24} className="mr-2" />
                  <h3 className="text-lg font-bold">Tech Stack</h3>
                </div>
                <ul className="space-y-3">
                  {project.tags.map(tag => (
                    <li key={tag} className="flex items-center text-neutral-600 border-b border-neutral-200 pb-2 last:border-0 last:pb-0">
                      <span className="w-2 h-2 bg-neutral-900 mr-3"></span>
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Gallery Preview</h3>
            <div className="grid grid-cols-1 gap-8">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="border-2 border-neutral-200 p-2 bg-white shadow-sm">
                  <img 
                    src={img} 
                    alt={`Gallery ${idx + 1}`} 
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </main>
      <Contact />
    </div>
  );
};

export default ProjectDetail;