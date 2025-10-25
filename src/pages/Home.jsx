import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';
import TopRatedSection from '@/components/TopRatedSection';
import RecentSearches from '@/components/RecentSearches';

const Home = () => {
  const scrollToSearch = () => {
    document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-card border border-primary/20"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Advanced Media Intelligence Platform</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Discover & Analyze
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Top Journalists
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Access comprehensive journalist profiles, track media coverage, and identify key contacts across 1000+ outlets worldwide
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={scrollToSearch}
                className="bg-gradient-primary hover:opacity-90 transition-opacity gap-2 text-lg px-8 group"
              >
                Get Started
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 hover:bg-gradient-primary hover:text-white hover:border-primary transition-all"
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </section>

      {/* Search Section */}
      <section id="search-section" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find the Right Journalist
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Search through our extensive database of journalists by outlet, beat, expertise, or name. Get instant access to contact information and recent work.
            </p>
          </motion.div>

          <SearchBar />
        </div>
      </section>

      {/* Top Rated Journalists */}
      <TopRatedSection />

      {/* Recent Searches */}
      <RecentSearches />
    </div>
  );
};

export default Home;