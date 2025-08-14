import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, Shield, Bell, Clock, ExternalLink } from "lucide-react";

const AlertPanel = () => {
  const alerts = [
    {
      id: 'alert-001',
      type: 'Critical',
      title: 'Pathogen Detection - Sector D-1',
      description: 'Unusual biological signatures detected in agricultural samples',
      timestamp: '2024-01-13 14:32:15',
      source: 'Bio-Detection Network',
      confidence: 94,
      status: 'investigating'
    },
    {
      id: 'alert-002',
      type: 'High',
      title: 'Chemical Anomaly - Sector B-3',
      description: 'Elevated pesticide levels beyond normal threshold',
      timestamp: '2024-01-13 14:28:42',
      source: 'Chemical Sensors',
      confidence: 87,
      status: 'acknowledged'
    },
    {
      id: 'alert-003',
      type: 'Medium',
      title: 'Temperature Spike - Sector C-2',
      description: 'Rapid temperature increase detected in storage facilities',
      timestamp: '2024-01-13 14:25:18',
      source: 'Environmental Monitors',
      confidence: 78,
      status: 'resolved'
    },
    {
      id: 'alert-004',
      type: 'Low',
      title: 'Sensor Calibration Required',
      description: 'Routine maintenance needed for humidity sensors',
      timestamp: '2024-01-13 14:20:05',
      source: 'System Diagnostics',
      confidence: 100,
      status: 'scheduled'
    }
  ];

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'Critical': return 'border-l-critical bg-critical/5';
      case 'High': return 'border-l-threat-high bg-threat-high/5';
      case 'Medium': return 'border-l-warning bg-warning/5';
      case 'Low': return 'border-l-success bg-success/5';
      default: return 'border-l-muted bg-muted/5';
    }
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'Critical': return 'destructive';
      case 'High': return 'secondary';
      case 'Medium': return 'outline';
      case 'Low': return 'secondary';
      default: return 'outline';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'investigating': return 'text-critical';
      case 'acknowledged': return 'text-warning';
      case 'resolved': return 'text-success';
      case 'scheduled': return 'text-accent';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Card className="p-6 h-full bg-card border-border shadow-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-warning" />
          <h3 className="text-h4 text-foreground">Active Alerts</h3>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="h-8">
            <Bell className="h-3 w-3 mr-1" />
            Configure
          </Button>
          <Button variant="outline" size="sm" className="h-8">
            <Shield className="h-3 w-3 mr-1" />
            Response
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-lg border-l-4 ${getAlertColor(alert.type)} transition-all hover:shadow-md`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant={getBadgeVariant(alert.type)} className="text-caption">
                    {alert.type}
                  </Badge>
                  <span className={`text-caption font-medium ${getStatusColor(alert.status)}`}>
                    {alert.status.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-caption text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {new Date(alert.timestamp).toLocaleTimeString()}
                </div>
              </div>
              
              <h4 className="text-body font-medium text-foreground mb-1">{alert.title}</h4>
              <p className="text-body-sm text-muted-foreground mb-3">{alert.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-caption text-muted-foreground">
                  <span>Source: {alert.source}</span>
                  <span>Confidence: {alert.confidence}%</span>
                </div>
                <Button variant="ghost" size="sm" className="h-6 px-2">
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-body-sm">
          <span className="text-muted-foreground">
            {alerts.length} active alerts
          </span>
          <Button variant="outline" size="sm">
            View All Alerts
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AlertPanel;