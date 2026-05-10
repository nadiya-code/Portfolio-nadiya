import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

function ProjectCard({ title, description, techStack, demoLink, githubLink, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50"
    >
      <div className="flex flex-col h-full">
        <h3 className="text-2xl font-semibold mb-3 text-balance">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors duration-200"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {demoLink && (
            <Button
              asChild
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
            >
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Demo
              </a>
            </Button>
          )}
          {githubLink && (
            <Button
              asChild
              variant="outline"
              className="transition-all duration-200 hover:bg-muted active:scale-[0.98]"
            >
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;