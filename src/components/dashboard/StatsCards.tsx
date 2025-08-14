import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Shield, Activity, AlertTriangle, CheckCircle } from "lucide-react";

const StatsCards = () => {
  const stats = [
    {
      title: "Active Sensors",
      value: "2,847",
      change: "+12",
      changeType: "positive",
      icon: Activity,
      description: "Monitoring agricultural zones"
    },
    {
      title: "Threat Level",
      value: "Medium",
      change: "-1 Level",
      changeType: "positive",
      icon: Shield,
      description: "Current regional assessment"
    },
    {
      title: "Active Alerts",
      value: "23",
      change: "+5",
      changeType: "negative",
      icon: AlertTriangle,
      description: "Requiring immediate attention"
    },
    {
      title: "System Status",
      value: "98.7%",
      change: "+0.3%",
      changeType: "positive",
      icon: CheckCircle,
      description: "Overall platform uptime"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        const TrendIcon = stat.changeType === 'positive' ? TrendingUp : TrendingDown;
        
        return (
          <Card key={index} className="p-6 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <IconComponent className="h-5 w-5 text-primary" />
              </div>
              <div className={`flex items-center gap-1 text-caption ${
                stat.changeType === 'positive' ? 'text-success' : 'text-critical'
              }`}>
                <TrendIcon className="h-3 w-3" />
                <span className="font-medium">{stat.change}</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <p className="text-caption text-muted-foreground">{stat.title}</p>
              <p className="text-h3 text-foreground">{stat.value}</p>
              <p className="text-caption text-muted-foreground">{stat.description}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsCards;