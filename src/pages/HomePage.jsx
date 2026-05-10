import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Brain, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Full-Stack AI Developer | NLP & Predictive Analytics Specialist</title>
        <meta name="description" content="Portfolio of a Full-Stack AI Developer specializing in NLP, predictive analytics, and responsive web applications with ML integration." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1612058633399-49246186dbe0)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    Full-Stack AI Developer
                    <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      NLP & Predictive Analytics Specialist
                    </span>
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
                >
                  Building responsive web applications with integrated machine learning capabilities.
                  Transforming complex data into intelligent solutions.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] text-lg px-8 py-6"
                  >
                    <Link to="/projects">
                      View my projects
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
                  About me
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/20 rounded-xl">
                        <Code2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Problem solver</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Solved 100+ LeetCode challenges with consistent practice and dedication to algorithmic thinking
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-secondary/20 rounded-xl">
                        <Brain className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">B.Tech student</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Currently in 3rd year, specializing in AI and machine learning with hands-on project experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                    Passionate about creating intelligent applications that solve real-world problems.
                    Combining full-stack development skills with machine learning expertise to build
                    innovative solutions.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="transition-all duration-200 hover:bg-muted active:scale-[0.98]"
                  >
                    <Link to="/about">
                      Learn more about my journey
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  Ready to collaborate?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Whether you have a project in mind or just want to connect, I'm always open to
                  discussing new opportunities and ideas.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-200 active:scale-[0.98]"
                >
                  <Link to="/about#contact">
                    Get in touch
                    <Zap className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;