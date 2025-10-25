import { motion } from 'framer-motion';
import { Target, Users, Zap, Shield, BarChart3, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into journalist activity, reach, and engagement metrics',
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Access to journalists from 1000+ outlets across 50+ countries',
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Live tracking of articles, social media activity, and trending topics',
    },
    {
      icon: Shield,
      title: 'Verified Contacts',
      description: 'Authenticated and regularly updated contact information',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share insights and manage media relationships as a team',
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Find exactly the right journalist for your story or pitch',
    },
  ];

  const stats = [
    { label: 'Active Journalists', value: '50K+' },
    { label: 'Media Outlets', value: '1000+' },
    { label: 'Countries Covered', value: '50+' },
    { label: 'Daily Updates', value: '10K+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">NewsTrace</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're building the world's most comprehensive media intelligence platform,
              empowering PR professionals, marketers, and journalists to make data-driven decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To democratize access to media intelligence and create meaningful connections
              between storytellers and story sources. We believe in the power of data-driven
              media relations and transparent journalism.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-border">
                    <CardContent className="p-6">
                      <div className="p-3 bg-gradient-primary rounded-lg w-fit mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad cupiditate eligendi repellendus placeat at voluptas, tenetur quas eos harum alias ullam sint quibusdam ducimus assumenda minima atque ut hic voluptatem non quisquam facilis! Excepturi iste, suscipit atque ratione, beatae ipsa ullam perspiciatis facilis tempore nobis fugiat quidem veritatis, dolore neque.
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque magni cupiditate perspiciatis. Sequi ad provident sunt libero labore ex odio assumenda non sapiente dolore excepturi aliquid animi sint officia incidunt voluptatibus velit magni eius nulla iure dolores, quia nostrum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis iure perspiciatis ut, officiis saepe eius mollitia labore dignissimos odio. Porro aspernatur doloribus pariatur dolorem officiis, reiciendis nisi quidem necessitatibus atque. Animi aut dolore quae labore quos obcaecati a nemo aliquid, commodi fugiat, pariatur ut?
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;