import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Trophy, Flame, Target } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SkillBadge from '@/components/SkillBadge.jsx';
import AchievementCard from '@/components/AchievementCard.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function AboutPage() {
  const skills = [
    { skill: 'JavaScript', proficiency: 92 },
    { skill: 'Python', proficiency: 88 },
    { skill: 'React', proficiency: 90 },
    { skill: 'TailwindCSS', proficiency: 95 },
    { skill: 'Node.js', proficiency: 85 },
    { skill: 'MongoDB', proficiency: 82 },
    { skill: 'Machine Learning', proficiency: 87 },
    { skill: 'NLP', proficiency: 84 },
    { skill: 'scikit-learn', proficiency: 86 },
    { skill: 'Git', proficiency: 91 },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'LeetCode Champion',
      metric: '100+',
      description: 'Problems solved across data structures, algorithms, and system design challenges'
    },
    {
      icon: Flame,
      title: 'Consistency Streak',
      metric: '50+ days',
      description: 'Maintained daily coding practice with focused problem-solving sessions'
    },
    {
      icon: Target,
      title: 'Project Completion',
      metric: '2 projects',
      description: 'Successfully delivered full-stack and ML projects from concept to deployment'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About | Full-Stack AI Developer</title>
        <meta name="description" content="Learn about my journey as a B.Tech student specializing in AI, NLP, and full-stack development. Explore my skills, achievements, and professional background." />
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
                className="max-w-4xl mx-auto"
              >
                <h1
                  className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  My journey
                </h1>

                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    I'm currently in my 3rd year of B.Tech, specializing in artificial intelligence
                    and machine learning. My passion lies in building intelligent applications that
                    bridge the gap between complex algorithms and user-friendly interfaces.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    During my AI internship, I gained hands-on experience in natural language processing
                    and predictive analytics, working on real-world projects that required both technical
                    expertise and creative problem-solving. This experience solidified my interest in
                    combining full-stack development with machine learning.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    My goal is to create solutions that not only solve technical challenges but also
                    deliver meaningful value to users. I believe in continuous learning and staying
                    updated with the latest technologies in both web development and AI.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="skills" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
                  Technical expertise
                </h2>

                <div className="flex flex-wrap gap-3 justify-center">
                  {skills.map((item, index) => (
                    <SkillBadge
                      key={index}
                      skill={item.skill}
                      proficiency={item.proficiency}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
                  Achievements
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <AchievementCard
                      key={index}
                      {...achievement}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section id="contact" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
                  Get in touch
                </h2>
                <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed">
                  Have a project in mind or want to discuss opportunities? Send me a message
                  and I'll get back to you as soon as possible.
                </p>

                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;