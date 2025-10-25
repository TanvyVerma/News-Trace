import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, SlidersHorizontal } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import JournalistCard from '@/components/JournalistCard';
import Loader from '@/components/Loader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { allJournalists } from '@/utils/mockData';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [loading, setLoading] = useState(true);
  const [filteredJournalists, setFilteredJournalists] = useState(allJournalists);

  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const results = allJournalists.filter(
        (j) =>
          j.name.toLowerCase().includes(query.toLowerCase()) ||
          j.outlet.toLowerCase().includes(query.toLowerCase()) ||
          j.beat.toLowerCase().includes(query.toLowerCase()) ||
          j.section.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredJournalists(results);
      setLoading(false);
    }, 800);
  }, [query]);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Search Header */}
        <div className="mb-8">
          <SearchBar placeholder="Refine your search..." showSuggestions={false} />
        </div>

        {/* Results Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {loading ? (
                'Searching...'
              ) : (
                <>
                  Search Results
                  {query && (
                    <span className="text-muted-foreground ml-2">
                      for "{query}"
                    </span>
                  )}
                </>
              )}
            </h1>
            {!loading && (
              <p className="text-muted-foreground">
                Found {filteredJournalists.length} journalist{filteredJournalists.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Sort
            </Button>
          </div>
        </div>

        {/* Active Filters */}
        {query && !loading && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            <Badge variant="secondary" className="gap-2">
              Search: {query}
              <button className="hover:text-destructive">×</button>
            </Badge>
          </div>
        )}

        {/* Results Grid */}
        {loading ? (
          <Loader />
        ) : filteredJournalists.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredJournalists.map((journalist, index) => (
              <motion.div
                key={journalist.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <JournalistCard journalist={journalist} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto">
              <div className="mb-4 text-6xl">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No Results Found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any journalists matching "{query}". Try adjusting your search terms or filters.
              </p>
              <Button variant="outline">Clear Filters</Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;