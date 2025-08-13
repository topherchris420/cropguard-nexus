import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Dna, 
  Leaf, 
  Beaker, 
  Sprout,
  Microscope,
  Shield,
  Zap,
  Clock,
  TrendingUp,
  Settings
} from "lucide-react";

const CropProtectionSystems = () => {
  const protectionSystems = [
    {
      id: 'gene-edit-001',
      name: 'CRISPR Gene Editing Platform',
      icon: Dna,
      type: 'Genetic Engineering',
      status: 'active',
      progress: 87,
      cycles: 'Fast-cycle (48h)',
      targets: ['Disease resistance', 'Stress tolerance', 'Yield enhancement'],
      efficiency: 94,
      crops: ['Wheat', 'Corn', 'Rice', 'Soybeans'],
      modifications: 156,
      success_rate: 89
    },
    {
      id: 'epigen-fort-002',
      name: 'Epigenetic Fortification System',
      icon: Microscope,
      type: 'Epigenetic',
      status: 'active',
      progress: 72,
      cycles: 'Multi-generational',
      targets: ['Stress memory', 'Pathogen resistance', 'Environmental adaptation'],
      efficiency: 91,
      crops: ['Tomatoes', 'Potatoes', 'Peppers'],
      modifications: 89,
      success_rate: 85
    },
    {
      id: 'synth-metab-003',
      name: 'Synthetic Metabolite Production',
      icon: Beaker,
      type: 'Biochemical',
      status: 'active',
      progress: 95,
      cycles: 'Continuous synthesis',
      targets: ['Antimicrobial compounds', 'Antioxidants', 'Stress protectants'],
      efficiency: 88,
      crops: ['Fruits', 'Vegetables', 'Grains'],
      modifications: 234,
      success_rate: 92
    },
    {
      id: 'seed-embed-004',
      name: 'Seed-Embedded Bioresilience',
      icon: Sprout,
      type: 'Biotechnology',
      status: 'active',
      progress: 83,
      cycles: 'Pre-planting integration',
      targets: ['Germination protection', 'Early growth enhancement', 'Root colonization'],
      efficiency: 96,
      crops: ['All major crops'],
      modifications: 67,
      success_rate: 94
    },
    {
      id: 'metabolic-eng-005',
      name: 'Metabolic Engineering Platform',
      icon: Leaf,
      type: 'Metabolic',
      status: 'development',
      progress: 65,
      cycles: 'Pathway optimization',
      targets: ['Secondary metabolites', 'Nutrient enhancement', 'Toxin degradation'],
      efficiency: 79,
      crops: ['Specialty crops', 'Medicinal plants'],
      modifications: 43,
      success_rate: 78
    },
    {
      id: 'durable-resist-006',
      name: 'Durability Under Threat Pressure',
      icon: Shield,
      type: 'Resistance Engineering',
      status: 'active',
      progress: 91,
      cycles: 'Long-term stability',
      targets: ['Multi-pathogen resistance', 'Gene stack durability', 'Resistance breakdown prevention'],
      efficiency: 93,
      crops: ['Strategic reserves', 'High-value crops'],
      modifications: 128,
      success_rate: 87
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success text-success-foreground';
      case 'development': return 'bg-warning text-warning-foreground';
      case 'testing': return 'bg-accent text-accent-foreground';
      case 'inactive': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Genetic Engineering': return 'border-l-primary';
      case 'Epigenetic': return 'border-l-secondary';
      case 'Biochemical': return 'border-l-accent';
      case 'Biotechnology': return 'border-l-success';
      case 'Metabolic': return 'border-l-warning';
      case 'Resistance Engineering': return 'border-l-critical';
      default: return 'border-l-muted';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Long-Term Crop Protection Systems</h2>
          <p className="text-sm text-muted-foreground">Advanced biotechnology for sustained threat mitigation and resilience</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Clock className="h-4 w-4 mr-2" />
            Schedule Edit
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configure
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {protectionSystems.map((system) => {
          const IconComponent = system.icon;
          
          return (
            <Card key={system.id} className={`p-6 border-l-4 ${getTypeColor(system.type)} bg-card shadow-card hover:shadow-glow transition-all duration-300`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{system.name}</h3>
                    <p className="text-sm text-muted-foreground">{system.type}</p>
                  </div>
                </div>
                <Badge className={`text-xs ${getStatusColor(system.status)}`}>
                  {system.status.toUpperCase()}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-foreground font-medium">{system.progress}%</span>
                  </div>
                  <Progress value={system.progress} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Efficiency</span>
                    <span className="text-foreground font-medium">{system.efficiency}%</span>
                  </div>
                  <Progress value={system.efficiency} className="h-2" />
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Cycle Time</span>
                  <span className="text-foreground font-mono text-xs">{system.cycles}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Modifications</span>
                  <span className="text-foreground font-medium">{system.modifications}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="text-foreground font-medium">{system.success_rate}%</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Target Applications</h4>
                  <div className="flex flex-wrap gap-1">
                    {system.targets.map((target, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {target}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Supported Crops</h4>
                  <div className="flex flex-wrap gap-1">
                    {system.crops.map((crop, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {crop}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Zap className="h-3 w-3 mr-1" />
                  Initialize
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Analytics
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-3 w-3" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Global Protection Metrics */}
      <Card className="p-6 bg-card border-border shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">Global Protection Network Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Dna className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Active Edits</span>
            </div>
            <div className="text-2xl font-bold text-foreground">2,847</div>
            <div className="text-xs text-muted-foreground">Across 47 crop varieties</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-success" />
              <span className="text-sm font-medium text-foreground">Resistance Durability</span>
            </div>
            <div className="text-2xl font-bold text-foreground">8.3<span className="text-sm text-muted-foreground">yr avg</span></div>
            <div className="text-xs text-muted-foreground">Under pressure conditions</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Beaker className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Metabolite Production</span>
            </div>
            <div className="text-2xl font-bold text-foreground">94.7<span className="text-sm text-muted-foreground">%</span></div>
            <div className="text-xs text-muted-foreground">Target compound yield</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sprout className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">Deployment Ready</span>
            </div>
            <div className="text-2xl font-bold text-foreground">156M</div>
            <div className="text-xs text-muted-foreground">Enhanced seeds in reserve</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CropProtectionSystems;