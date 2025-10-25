import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const SearchBar = ({ placeholder = 'Search by outlet, journalist name, or beat...', showSuggestions = true }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const suggestions = ['TechCrunch', 'The Wall Street Journal', 'Reuters', 'AI Journalists'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="w-full max-w-3xl mx-auto"
    >
      <form onSubmit={handleSearch} className="relative">
        <div
          className={`relative flex items-center gap-2 bg-card rounded-xl border-2 transition-all duration-300 ${
            isFocused
              ? 'border-primary shadow-glow'
              : 'border-border hover:border-primary/50'
          }`}
        >
          <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="pl-12 pr-24 h-14 border-0 bg-transparent text-base focus-visible:ring-0"
          />
          <Button
            type="submit"
            className="absolute right-2 bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            Search
          </Button>
        </div>
      </form>

      {showSuggestions && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 flex flex-wrap items-center gap-2"
        >
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <TrendingUp className="h-4 w-4" />
            Popular:
          </span>
          {suggestions.map((suggestion) => (
            <Button
              key={suggestion}
              variant="outline"
              size="sm"
              onClick={() => {
                setQuery(suggestion);
                navigate(`/search?q=${encodeURIComponent(suggestion)}`);
              }}
              className="hover:bg-gradient-primary hover:text-white transition-all"
            >
              {suggestion}
            </Button>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default SearchBar;