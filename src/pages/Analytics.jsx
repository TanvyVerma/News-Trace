import { motion } from 'framer-motion';
import { TrendingUp, Users, FileText, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Analytics = () => {
  const metrics = [
    {
      title: 'Total Searches',
      value: '12,543',
      change: '+12.5%',
      icon: Activity,
      color: 'text-primary',
    },
    {
      title: 'Journalists Tracked',
      value: '1,247',
      change: '+8.2%',
      icon: Users,
      color: 'text-secondary',
    },
    {
      title: 'Articles Analyzed',
      value: '45,892',
      change: '+23.1%',
      icon: FileText,
      color: 'text-accent',
    },
    {
      title: 'Engagement Rate',
      value: '87.3%',
      change: '+5.4%',
      icon: TrendingUp,
      color: 'text-primary',
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Track your media intelligence performance and insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </CardTitle>
                    <Icon className={`h-4 w-4 ${metric.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-primary">{metric.change}</span> from last month
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center py-20"
        >
          <div className="max-w-md mx-auto">
            <div className="mb-4 text-6xl">📊</div>
            <h3 className="text-2xl font-bold mb-2">More Analytics Coming Soon</h3>
            <p className="text-muted-foreground">
              We're working on advanced analytics features including trend analysis,
              journalist engagement metrics, and custom reporting.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;