import { useState } from 'react';
import { Mail, Twitter, Linkedin, Star, FileText, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion, AnimatePresence } from 'framer-motion';

const JournalistCard = ({ journalist }) => {
  const [expanded, setExpanded] = useState(false);

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-border bg-card">
        <CardHeader>
          <div className="flex items-start gap-4">
            <Avatar className="h-14 w-14 ring-2 ring-primary/20">
              <AvatarImage src={journalist.avatar} />
              <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                {getInitials(journalist.name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg truncate">{journalist.name}</h3>
              <p className="text-sm text-muted-foreground">{journalist.outlet}</p>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(journalist.rating)
                        ? 'fill-secondary text-secondary'
                        : 'text-muted'
                    }`}
                  />
                ))}
                <span className="text-xs text-muted-foreground ml-1">
                  ({journalist.rating})
                </span>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="gap-1">
              <FileText className="h-3 w-3" />
              {journalist.beat}
            </Badge>
            <Badge variant="outline">{journalist.section}</Badge>
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <FileText className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <p className="text-sm line-clamp-2">{journalist.latestArticle}</p>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <FileText className="h-3 w-3" />
                {journalist.articleCount} articles
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {journalist.lastPublished}
              </span>
            </div>
          </div>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-3 pt-3 border-t border-border"
              >
                {journalist.expertise && (
                  <div>
                    <p className="text-xs font-medium mb-2">Expertise</p>
                    <div className="flex flex-wrap gap-1">
                      {journalist.expertise.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {journalist.email && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <Mail className="h-3 w-3" />
                      Email
                    </Button>
                  )}
                  {journalist.twitter && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <Twitter className="h-3 w-3" />
                      Twitter
                    </Button>
                  )}
                  {journalist.linkedin && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <Linkedin className="h-3 w-3" />
                      LinkedIn
                    </Button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>

        <CardFooter>
          <Button
            variant="ghost"
            className="w-full gap-2"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                Show Less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                See More <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default JournalistCard;