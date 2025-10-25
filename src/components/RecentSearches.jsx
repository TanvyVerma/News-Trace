import { motion } from 'framer-motion';
import { History, Search, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { recentSearches } from '@/utils/mockData';
import { useNavigate } from 'react-router-dom';

const RecentSearches = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <History className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Recent Searches</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quick access to your recent searches and popular queries
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max px-4 md:justify-center">
            {recentSearches.map((search, index) => (
              <motion.div
                key={search.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card
                  className="w-64 cursor-pointer hover:shadow-lg transition-all duration-300 border-border bg-card group"
                  onClick={() => navigate(`/search?q=${encodeURIComponent(search.query)}`)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 bg-gradient-primary rounded-lg group-hover:shadow-glow transition-shadow">
                        <Search className="h-5 w-5 text-white" />
                      </div>
                      <Badge variant="secondary" className="gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {search.count}
                      </Badge>
                    </div>
                    <h3 className="font-semibold mb-2 text-lg">{search.query}</h3>
                    <p className="text-xs text-muted-foreground">{search.timestamp}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentSearches;