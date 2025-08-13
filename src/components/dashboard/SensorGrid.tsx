import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Activity, Cpu, Thermometer, Droplets, Wind, Zap } from "lucide-react";

const SensorGrid = () => {
  const sensors = [
    {
      id: 'bio-001',
      name: 'Biological Sensor Array',
      icon: Activity,
      status: 'active',
      value: 87,
      unit: '%',
      location: 'Sector A-1',
      lastUpdate: '2 min ago'
    },
    {
      id: 'chem-002',
      name: 'Chemical Detection Matrix',
      icon: Cpu,
      status: 'active',
      value: 92,
      unit: '%',
      location: 'Sector B-3',
      lastUpdate: '1 min ago'
    },
    {
      id: 'temp-003',
      name: 'Temperature Monitors',
      icon: Thermometer,
      status: 'warning',
      value: 78,
      unit: '°C',
      location: 'Sector C-2',
      lastUpdate: '30 sec ago'
    },
    {
      id: 'humid-004',
      name: 'Humidity Sensors',
      icon: Droplets,
      status: 'active',
      value: 65,
      unit: '%',
      location: 'Sector A-4',
      lastUpdate: '45 sec ago'
    },
    {
      id: 'air-005',
      name: 'Air Quality Network',
      icon: Wind,
      status: 'critical',
      value: 45,
      unit: 'AQI',
      location: 'Sector D-1',
      lastUpdate: '15 sec ago'
    },
    {
      id: 'power-006',
      name: 'Power Grid Monitors',
      icon: Zap,
      status: 'active',
      value: 94,
      unit: '%',
      location: 'All Sectors',
      lastUpdate: '1 min ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success text-success-foreground';
      case 'warning': return 'bg-warning text-warning-foreground';
      case 'critical': return 'bg-critical text-critical-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success';
      case 'warning': return 'bg-warning';
      case 'critical': return 'bg-critical';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sensors.map((sensor) => {
        const IconComponent = sensor.icon;
        return (
          <Card key={sensor.id} className="p-4 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <IconComponent className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground">{sensor.name}</h4>
                  <p className="text-xs text-muted-foreground">{sensor.location}</p>
                </div>
              </div>
              <Badge className={`text-xs ${getStatusColor(sensor.status)}`}>
                {sensor.status}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-foreground">
                  {sensor.value}<span className="text-sm text-muted-foreground ml-1">{sensor.unit}</span>
                </span>
                <span className="text-xs text-muted-foreground">{sensor.lastUpdate}</span>
              </div>
              
              <Progress 
                value={sensor.status === 'critical' ? 100 : sensor.value} 
                className="h-2"
              />
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className={`w-2 h-2 rounded-full ${getProgressColor(sensor.status)} animate-pulse`}></div>
                <span>ID: {sensor.id}</span>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default SensorGrid;