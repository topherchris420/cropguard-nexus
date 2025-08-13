import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Waves, 
  Microscope, 
  Wind, 
  Volume2, 
  Zap,
  Cpu,
  Settings,
  TrendingUp,
  AlertTriangle
} from "lucide-react";

const MultimodalSensors = () => {
  const sensorArrays = [
    {
      id: 'spectral-001',
      name: 'Hyperspectral Imaging Array',
      icon: Camera,
      type: 'Spectral',
      nodes: 24,
      active: 23,
      sensitivity: 95,
      coverage: '420-2500nm',
      status: 'operational',
      anomalies: 2,
      location: 'Grid Alpha-7',
      lastCalibration: '2h ago'
    },
    {
      id: 'voc-002',
      name: 'VOC Detection Network',
      icon: Wind,
      type: 'Chemical',
      nodes: 18,
      active: 18,
      sensitivity: 89,
      coverage: 'ppb-ppm range',
      status: 'operational',
      anomalies: 0,
      location: 'Grid Beta-3',
      lastCalibration: '4h ago'
    },
    {
      id: 'acoustic-003',
      name: 'Remote Acoustic Monitoring',
      icon: Volume2,
      type: 'Acoustic',
      nodes: 12,
      active: 11,
      sensitivity: 92,
      coverage: '0.1Hz-100kHz',
      status: 'warning',
      anomalies: 1,
      location: 'Grid Gamma-5',
      lastCalibration: '1h ago'
    },
    {
      id: 'microfluidic-004',
      name: 'Microfluidic Bio-Assay Units',
      icon: Microscope,
      type: 'Biological',
      nodes: 8,
      active: 8,
      sensitivity: 98,
      coverage: 'Real-time PCR',
      status: 'operational',
      anomalies: 0,
      location: 'Grid Delta-2',
      lastCalibration: '30min ago'
    },
    {
      id: 'electromagnetic-005',
      name: 'EM Spectrum Analyzers',
      icon: Waves,
      type: 'Electromagnetic',
      nodes: 15,
      active: 14,
      sensitivity: 87,
      coverage: '1MHz-40GHz',
      status: 'operational',
      anomalies: 1,
      location: 'Grid Epsilon-1',
      lastCalibration: '3h ago'
    },
    {
      id: 'neural-006',
      name: 'AI Fusion Processing Units',
      icon: Cpu,
      type: 'Computational',
      nodes: 6,
      active: 6,
      sensitivity: 94,
      coverage: 'Multi-modal AI',
      status: 'operational',
      anomalies: 0,
      location: 'Central Hub',
      lastCalibration: 'Real-time'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-success text-success-foreground';
      case 'warning': return 'bg-warning text-warning-foreground';
      case 'critical': return 'bg-critical text-critical-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Spectral': return 'border-l-primary';
      case 'Chemical': return 'border-l-secondary';
      case 'Acoustic': return 'border-l-accent';
      case 'Biological': return 'border-l-success';
      case 'Electromagnetic': return 'border-l-warning';
      case 'Computational': return 'border-l-critical';
      default: return 'border-l-muted';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Multimodal Surveillance Network</h2>
          <p className="text-sm text-muted-foreground">Distributed sensor fusion with AI-driven anomaly detection</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configure
          </Button>
          <Button variant="outline" size="sm">
            <TrendingUp className="h-4 w-4 mr-2" />
            Analytics
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sensorArrays.map((sensor) => {
          const IconComponent = sensor.icon;
          return (
            <Card key={sensor.id} className={`p-6 border-l-4 ${getTypeColor(sensor.type)} bg-card shadow-card hover:shadow-glow transition-all duration-300`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{sensor.name}</h3>
                    <p className="text-sm text-muted-foreground">{sensor.location}</p>
                  </div>
                </div>
                <Badge className={`text-xs ${getStatusColor(sensor.status)}`}>
                  {sensor.status.toUpperCase()}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Active Nodes</span>
                    <span className="text-foreground font-medium">{sensor.active}/{sensor.nodes}</span>
                  </div>
                  <Progress value={(sensor.active / sensor.nodes) * 100} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Sensitivity</span>
                    <span className="text-foreground font-medium">{sensor.sensitivity}%</span>
                  </div>
                  <Progress value={sensor.sensitivity} className="h-2" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Coverage Range</span>
                  <span className="text-foreground font-mono">{sensor.coverage}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last Calibration</span>
                  <span className="text-foreground">{sensor.lastCalibration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Anomalies Detected</span>
                  <div className="flex items-center gap-1">
                    {sensor.anomalies > 0 && <AlertTriangle className="h-3 w-3 text-warning" />}
                    <span className={`font-medium ${sensor.anomalies > 0 ? 'text-warning' : 'text-success'}`}>
                      {sensor.anomalies}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Data
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Calibrate
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-6 bg-card border-border shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">AI Fusion Engine Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Processing Throughput</span>
            </div>
            <div className="text-2xl font-bold text-foreground">847.2 <span className="text-sm text-muted-foreground">MB/s</span></div>
            <Progress value={85} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">AI Model Accuracy</span>
            </div>
            <div className="text-2xl font-bold text-foreground">97.3<span className="text-sm text-muted-foreground">%</span></div>
            <Progress value={97} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-success" />
              <span className="text-sm font-medium text-foreground">Detection Latency</span>
            </div>
            <div className="text-2xl font-bold text-foreground">12.4<span className="text-sm text-muted-foreground">ms</span></div>
            <Progress value={92} className="h-2" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MultimodalSensors;