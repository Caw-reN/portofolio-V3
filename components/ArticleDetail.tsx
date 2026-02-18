import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { ARTICLES } from '../constants';
import Navbar from './Navbar';
import Contact from './Contact';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = ARTICLES.find((a) => a.id === id);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Logic to inject Copy buttons and Filenames into existing HTML strings
  useEffect(() => {
    if (!contentRef.current) return;

    // Find all <pre> blocks
    const preBlocks = contentRef.current.querySelectorAll('pre');

    preBlocks.forEach((pre) => {
      // Check if we already processed this block to avoid duplication
      if (pre.previousElementSibling?.classList.contains('code-header')) return; // Type 1 check
      if (pre.closest('.code-wrapper')) return; // Type 2 check

      const filename = pre.getAttribute('data-filename');

      // === TYPE 1: FILE BLOCK (With Header) ===
      if (filename) {
        // Create Header Container
        const header = document.createElement('div');
        header.className = "code-header bg-neutral-800 text-neutral-300 text-xs px-4 py-2 flex justify-between items-center border-2 border-neutral-900 border-b-0 font-mono select-none mt-8";
        
        // Filename Span
        const fileSpan = document.createElement('span');
        fileSpan.innerText = filename;
        fileSpan.className = "font-bold text-neutral-400";
        
        // Copy Button
        const copyBtn = document.createElement('button');
        copyBtn.innerText = "COPY";
        copyBtn.className = "hover:text-white transition-colors font-bold uppercase tracking-wider text-[10px] flex items-center gap-1";
        
        copyBtn.onclick = () => {
          const code = pre.querySelector('code')?.innerText || pre.innerText;
          navigator.clipboard.writeText(code).then(() => {
              copyBtn.innerText = "COPIED!";
              copyBtn.classList.add("text-green-400");
              setTimeout(() => {
                  copyBtn.innerText = "COPY";
                  copyBtn.classList.remove("text-green-400");
              }, 2000);
          });
        };

        header.appendChild(fileSpan);
        header.appendChild(copyBtn);

        // Styling the PRE block to attach to header
        pre.classList.add(
          'bg-neutral-900', 
          'text-neutral-50', 
          'p-6', 
          'rounded-none', 
          'overflow-x-auto', 
          'mb-8', 
          'mt-0', // Connect to header
          'shadow-[8px_8px_0px_0px_#d4d4d4]', 
          'border-2', 
          'border-neutral-900',
          'border-t-0' // Remove top border to merge with header
        );

        // Insert Header before Pre
        if (pre.parentNode) {
          pre.parentNode.insertBefore(header, pre);
        }
      } 
      // === TYPE 2: TERMINAL/SIMPLE BLOCK (No Header, but with Copy Button) ===
      else {
        // Create a wrapper to handle absolute positioning of the copy button
        const wrapper = document.createElement('div');
        wrapper.className = "code-wrapper relative group my-6";

        // Styling the PRE block
        pre.classList.add(
          'bg-neutral-800', 
          'text-green-400', 
          'p-4',            
          'rounded-sm',     
          'overflow-x-auto',
          'text-sm',
          'font-mono',
          'border-l-4',
          'border-neutral-900',
          'pr-14' // Add padding right so text doesn't overlap with absolute button
        );

        // Copy Button for Terminal
        const copyBtn = document.createElement('button');
        copyBtn.innerText = "COPY";
        copyBtn.className = "absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-200 border border-neutral-600 hover:border-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded-sm transition-all";

        copyBtn.onclick = () => {
          const code = pre.querySelector('code')?.innerText || pre.innerText;
          navigator.clipboard.writeText(code).then(() => {
              copyBtn.innerText = "OK";
              copyBtn.classList.add("text-green-400", "border-green-400");
              setTimeout(() => {
                  copyBtn.innerText = "COPY";
                  copyBtn.classList.remove("text-green-400", "border-green-400");
              }, 2000);
          });
        };

        // DOM Manipulation to Wrap PRE
        if (pre.parentNode) {
          pre.parentNode.insertBefore(wrapper, pre); // Insert wrapper before pre
          wrapper.appendChild(pre); // Move pre inside wrapper
          wrapper.appendChild(copyBtn); // Add button to wrapper
        }
      }
    });

  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-neutral-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Artikel tidak ditemukan</h2>
          <Link to="/" className="underline hover:text-neutral-600">Kembali ke Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans text-neutral-900 selection:bg-neutral-900 selection:text-white">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <article className="max-w-3xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-sm font-bold text-neutral-500 hover:text-neutral-900 mb-8 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Kembali
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-6">
               {article.tags.map(tag => (
                   <span key={tag} className="px-2 py-1 bg-neutral-100 border border-neutral-200 text-xs font-bold text-neutral-600 uppercase tracking-wider">
                       {tag}
                   </span>
               ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center text-sm text-neutral-500 font-medium space-y-2 sm:space-y-0 sm:space-x-6 border-b-2 border-neutral-100 pb-8">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                {article.readTime}
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                {article.author}
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full aspect-[21/9] bg-neutral-100 mb-12 border-2 border-neutral-900 shadow-[8px_8px_0px_0px_#171717] overflow-hidden"
          >
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Article Content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose prose-neutral prose-lg max-w-none 
              [&>p]:mb-6 [&>p]:leading-relaxed [&>p]:text-neutral-700 
              [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-neutral-900 [&>h3]:mt-10 [&>h3]:mb-4 
              [&>blockquote]:border-l-4 [&>blockquote]:border-neutral-900 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-neutral-600 [&>blockquote]:my-8 [&>blockquote]:bg-neutral-50 [&>blockquote]:py-4
              [&>code]:bg-neutral-100 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded-sm [&>code]:font-mono [&>code]:text-sm [&>code]:text-neutral-800 [&>code]:border [&>code]:border-neutral-200"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {/* Footer Share/Action */}
          <div className="mt-16 pt-8 border-t-2 border-neutral-100 flex justify-between items-center">
            <span className="font-bold text-neutral-900">Bagikan artikel ini:</span>
            <div className="flex gap-4">
                <button className="p-2 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all">
                    <Share2 size={20} />
                </button>
            </div>
          </div>

        </article>
      </main>
      <Contact />
    </div>
  );
};

export default ArticleDetail;