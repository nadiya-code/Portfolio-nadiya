import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';

function ProjectsPage() {
  const projects = [
    {
      title: 'Spam Message Detection',
      description: 'Machine learning-based spam detection system using natural language processing techniques. Trained on diverse datasets to accurately classify messages with high precision and recall rates.',
      techStack: ['Python', 'NLP', 'scikit-learn', 'Pandas', 'NLTK'],
      demoLink: 'https://github.com/nadiya-code/SPAM-MESSAGE-DETECTION-.git',
      githubLink: 'https://github.com/nadiya-code/SPAM-MESSAGE-DETECTION-.git'
    },
    {
      title: 'Smart Quotes Generator',
      description: 'A dynamic quotes generator built with JavaScript and Tailwind CSS that fetches and displays inspiring quotes with smooth animations and intuitive user interactions.',
      techStack: ['JavaScript', 'Tailwind CSS'],
      demoLink: 'https://quoteverser.netlify.app/',
      githubLink: 'https://github.com/nadiya-code/quote-generator.git'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Projects | Full-Stack AI Developer</title>
        <meta name="description" content="Explore my portfolio of AI and full-stack development projects, including spam detection, smart quotes generator, and predictive analytics solutions." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <h1
                  className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Featured projects
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A collection of my work in AI, machine learning, and full-stack development.
                  Each project represents a unique challenge and learning experience.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    {...project}
                    index={index}
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-16 text-center"
              >
                <p className="text-muted-foreground mb-4">
                  More projects coming soon. Check back regularly for updates.
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ProjectsPage;