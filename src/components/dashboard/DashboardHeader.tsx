import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Eye, 
  Zap, 
  Target, 
  Search, 
  Settings, 
  User,
  Bell,
  RefreshCw
} from "lucide-react";

const DashboardHeader = () => {
  const modules = [
    { id: 'detection', name: 'Detection', icon: Eye, active: true },
    { id: 'response', name: 'Response', icon: Zap, active: false },
    { id: 'protection', name: 'Protection', icon: Shield, active: false },
    { id: 'prediction', name: 'Prediction', icon: Target, active: false },
    { id: 'attribution', name: 'Attribution', icon: Search, active: false }
  ];

  return (
    <div className="bg-card border-b border-border shadow-card">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary glow-primary" />
              <div>
                <h1 className="text-2xl font-bold gradient-text">AgriSecure AI</h1>
                <p className="text-sm text-muted-foreground">Agricultural Biosecurity Platform</p>
              </div>
            </div>
            <Badge className="bg-success text-success-foreground">
              System Operational
            </Badge>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8">
              <RefreshCw className="h-3 w-3 mr-1" />
              Refresh
            </Button>
            <Button variant="outline" size="sm" className="h-8">
              <Bell className="h-3 w-3 mr-1" />
              <Badge className="ml-1 bg-critical text-critical-foreground text-xs px-1">3</Badge>
            </Button>
            <Button variant="outline" size="sm" className="h-8">
              <Settings className="h-3 w-3" />
            </Button>
            <Button variant="outline" size="sm" className="h-8">
              <User className="h-3 w-3" />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {modules.map((module) => {
            const IconComponent = module.icon;
            return (
              <Button
                key={module.id}
                variant={module.active ? "default" : "outline"}
                size="sm"
                className={`h-8 ${module.active ? 'glow-primary' : ''}`}
              >
                <IconComponent className="h-3 w-3 mr-1" />
                {module.name}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;