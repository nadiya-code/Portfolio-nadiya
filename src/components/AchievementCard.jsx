import React from 'react';
import { motion } from 'framer-motion';

function AchievementCard({ icon: Icon, title, metric, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/20 rounded-xl">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-3xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {metric}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default AchievementCard;