import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import ArticleDetail from './components/ArticleDetail';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
        <Articles />
      </main>
      <Contact />
    </>
  );
};

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-neutral-900 bg-white selection:bg-neutral-900 selection:text-white">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;