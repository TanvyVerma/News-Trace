import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import JournalistCard from './JournalistCard';
import { topJournalists } from '@/utils/mockData';

const TopRatedSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="h-6 w-6 text-secondary" />
            <h2 className="text-3xl md:text-4xl font-bold">Top Rated Journalists</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the most influential and respected journalists across various beats and outlets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topJournalists.map((journalist, index) => (
            <motion.div
              key={journalist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <JournalistCard journalist={journalist} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedSection;