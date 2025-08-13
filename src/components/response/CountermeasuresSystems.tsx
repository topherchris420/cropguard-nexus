import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Plane, 
  Zap, 
  Droplets, 
  Bug, 
  FlaskConical,
  Cpu,
  Radio,
  Settings,
  Play,
  Pause,
  AlertTriangle
} from "lucide-react";

const CountermeasuresSystems = () => {
  const deploymentSystems = [
    {
      id: 'bio-form-001',
      name: 'Bio-Formulation Dispensers',
      icon: FlaskConical,
      type: 'Biological',
      units: 12,
      ready: 11,
      capacity: '2.4 L',
      range: '500m radius',
      status: 'armed',
      lastDeployment: '6h ago',
      activeAgents: ['Bacillus thuringiensis', 'Trichoderma harzianum'],
      effectiveness: 94
    },
    {
      id: 'rna-int-002',
      name: 'RNA Interference Platforms',
      icon: Cpu,
      type: 'Genetic',
      units: 8,
      ready: 8,
      capacity: '50ml vials',
      range: '200m precision',
      status: 'armed',
      lastDeployment: 'None',
      activeAgents: ['siRNA construct 7A', 'miRNA inhibitor 3B'],
      effectiveness: 89
    },
    {
      id: 'nano-carr-003',
      name: 'Nanocarrier Delivery Systems',
      icon: Zap,
      type: 'Nanotechnology',
      units: 6,
      ready: 5,
      capacity: '100mg carriers',
      range: '1km targeted',
      status: 'warning',
      lastDeployment: '2h ago',
      activeAgents: ['Lipid nanoparticles', 'PLGA microspheres'],
      effectiveness: 91
    },
    {
      id: 'aerial-disp-004',
      name: 'Aerial Dispersal Drones',
      icon: Plane,
      type: 'Mechanical',
      units: 15,
      ready: 14,
      capacity: '5L payload',
      range: '10km flight',
      status: 'armed',
      lastDeployment: '1h ago',
      activeAgents: ['Precision spray system', 'UV sterilization'],
      effectiveness: 87
    },
    {
      id: 'microbial-bio-005',
      name: 'Microbial Biocontrol Units',
      icon: Bug,
      type: 'Biological',
      units: 20,
      ready: 19,
      capacity: '1B CFU/ml',
      range: '300m soil',
      status: 'armed',
      lastDeployment: '4h ago',
      activeAgents: ['Pseudomonas fluorescens', 'Streptomyces lydicus'],
      effectiveness: 96
    },
    {
      id: 'smart-irrig-006',
      name: 'Smart Irrigation Countermeasures',
      icon: Droplets,
      type: 'Chemical',
      units: 30,
      ready: 28,
      capacity: '1000L tanks',
      range: 'Field-wide',
      status: 'armed',
      lastDeployment: '30min ago',
      activeAgents: ['Copper sulfate', 'Potassium bicarbonate'],
      effectiveness: 85
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'armed': return 'bg-success text-success-foreground';
      case 'warning': return 'bg-warning text-warning-foreground';
      case 'deploying': return 'bg-accent text-accent-foreground';
      case 'maintenance': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Biological': return 'border-l-success';
      case 'Genetic': return 'border-l-primary';
      case 'Nanotechnology': return 'border-l-accent';
      case 'Mechanical': return 'border-l-warning';
      case 'Chemical': return 'border-l-secondary';
      default: return 'border-l-muted';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Rapid Response Countermeasures</h2>
          <p className="text-sm text-muted-foreground">Autonomous deployment systems with minimal logistics footprint</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="bg-critical/10 border-critical text-critical hover:bg-critical hover:text-critical-foreground">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Emergency Deploy
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configure
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {deploymentSystems.map((system) => {
          const IconComponent = system.icon;
          const readyPercentage = (system.ready / system.units) * 100;
          
          return (
            <Card key={system.id} className={`p-6 border-l-4 ${getTypeColor(system.type)} bg-card shadow-card hover:shadow-glow transition-all duration-300`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{system.name}</h3>
                    <p className="text-sm text-muted-foreground">{system.type} Countermeasure</p>
                  </div>
                </div>
                <Badge className={`text-xs ${getStatusColor(system.status)}`}>
                  {system.status.toUpperCase()}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ready Units</span>
                    <span className="text-foreground font-medium">{system.ready}/{system.units}</span>
                  </div>
                  <Progress value={readyPercentage} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Effectiveness</span>
                    <span className="text-foreground font-medium">{system.effectiveness}%</span>
                  </div>
                  <Progress value={system.effectiveness} className="h-2" />
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Capacity</span>
                  <span className="text-foreground font-mono">{system.capacity}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Coverage Range</span>
                  <span className="text-foreground font-mono">{system.range}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last Deployment</span>
                  <span className="text-foreground">{system.lastDeployment}</span>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <h4 className="text-sm font-medium text-foreground">Active Agents</h4>
                <div className="flex flex-wrap gap-1">
                  {system.activeAgents.map((agent, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {agent}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Play className="h-3 w-3 mr-1" />
                  Deploy
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Radio className="h-3 w-3 mr-1" />
                  Monitor
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-3 w-3" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Deployment Command Center */}
      <Card className="p-6 bg-card border-border shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">Autonomous Deployment Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Response Time</span>
            </div>
            <div className="text-2xl font-bold text-foreground">4.2<span className="text-sm text-muted-foreground">min</span></div>
            <Progress value={88} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FlaskConical className="h-4 w-4 text-success" />
              <span className="text-sm font-medium text-foreground">Agent Inventory</span>
            </div>
            <div className="text-2xl font-bold text-foreground">94<span className="text-sm text-muted-foreground">%</span></div>
            <Progress value={94} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Plane className="h-4 w-4 text-warning" />
              <span className="text-sm font-medium text-foreground">Fleet Readiness</span>
            </div>
            <div className="text-2xl font-bold text-foreground">91<span className="text-sm text-muted-foreground">%</span></div>
            <Progress value={91} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Radio className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Field Autonomy</span>
            </div>
            <div className="text-2xl font-bold text-foreground">87<span className="text-sm text-muted-foreground">%</span></div>
            <Progress value={87} className="h-2" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CountermeasuresSystems;