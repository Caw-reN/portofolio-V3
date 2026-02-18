import React from 'react';

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  goals: string;
  tags: string[];
  imageUrl: string;
  gallery: string[];
  link: string;
  repoLink: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string; // Image Header
  content: string; // HTML string content
  tags: string[];
  author: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<any>;
}

export interface Skill {
  name: string;
  category: string;
}