import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-xl opacity-50" />
        <div className="relative bg-gradient-primary p-4 rounded-lg">
          <BarChart3 className="h-8 w-8 text-white" />
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;
