import React from 'react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

function SkillBadge({ skill, proficiency, index = 0 }) {
  const getProficiencyColor = (level) => {
    if (level >= 90) return 'bg-primary/20 text-primary border-primary/30';
    if (level >= 70) return 'bg-secondary/20 text-secondary border-secondary/30';
    return 'bg-muted text-muted-foreground border-border';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="relative"
    >
      <Badge
        variant="outline"
        className={`px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
          proficiency ? getProficiencyColor(proficiency) : 'bg-muted text-foreground'
        }`}
      >
        {skill}
        {proficiency && (
          <span className="ml-2 text-xs opacity-70">
            {proficiency}%
          </span>
        )}
      </Badge>
    </motion.div>
  );
}

export default SkillBadge;