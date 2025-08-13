import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  CloudRain, 
  Bug, 
  Network,
  Cpu,
  TrendingUp,
  AlertTriangle,
  BarChart3,
  MapPin,
  Calendar,
  Settings
} from "lucide-react";

const ThreatPredictionModels = () => {
  const predictionModels = [
    {
      id: 'climate-001',
      name: 'Climate-Pathogen Interaction Model',
      icon: CloudRain,
      type: 'Climate Modeling',
      accuracy: 91,
      confidence: 87,
      timeHorizon: '30-90 days',
      lastUpdate: '15min ago',
      status: 'active',
      dataStreams: ['Temperature', 'Humidity', 'Precipitation', 'Wind patterns'],
      predictions: [
        { threat: 'Late Blight', probability: 78, region: 'Northeast', days: 14 },
        { threat: 'Wheat Rust', probability: 45, region: 'Midwest', days: 28 },
        { threat: 'Citrus Greening', probability: 89, region: 'Southeast', days: 7 }
      ]
    },
    {
      id: 'pathogen-evo-002',
      name: 'Pathogen Evolution Simulator',
      icon: Bug,
      type: 'Evolutionary Biology',
      accuracy: 84,
      confidence: 79,
      timeHorizon: '6-18 months',
      lastUpdate: '32min ago',
      status: 'active',
      dataStreams: ['Genetic sequences', 'Mutation rates', 'Selection pressure', 'Population dynamics'],
      predictions: [
        { threat: 'Resistance breakdown', probability: 67, region: 'Global', days: 180 },
        { threat: 'New strain emergence', probability: 34, region: 'Tropical', days: 120 },
        { threat: 'Host jump event', probability: 12, region: 'Asia-Pacific', days: 240 }
      ]
    },
    {
      id: 'agroeco-net-003',
      name: 'Agroecological Network Analysis',
      icon: Network,
      type: 'Systems Biology',
      accuracy: 88,
      confidence: 85,
      timeHorizon: '1-12 months',
      lastUpdate: '8min ago',
      status: 'active',
      dataStreams: ['Species interactions', 'Nutrient flows', 'Biodiversity indices', 'Land use patterns'],
      predictions: [
        { threat: 'Pollinator decline', probability: 56, region: 'Temperate', days: 90 },
        { threat: 'Soil degradation', probability: 71, region: 'Arid zones', days: 365 },
        { threat: 'Invasive spread', probability: 43, region: 'Coastal', days: 60 }
      ]
    },
    {
      id: 'ensemble-ai-004',
      name: 'Ensemble AI Decision Engine',
      icon: Cpu,
      type: 'Machine Learning',
      accuracy: 93,
      confidence: 91,
      timeHorizon: '1-365 days',
      lastUpdate: '3min ago',
      status: 'active',
      dataStreams: ['Sensor fusion', 'Satellite imagery', 'Weather forecasts', 'Historical patterns'],
      predictions: [
        { threat: 'Multi-threat scenario', probability: 82, region: 'High-risk zones', days: 45 },
        { threat: 'Cascading failures', probability: 29, region: 'Critical infrastructure', days: 90 },
        { threat: 'Supply chain disruption', probability: 61, region: 'Trade corridors', days: 21 }
      ]
    }
  ];

  const scenarios = [
    {
      id: 'scenario-001',
      name: 'Simultaneous Multi-Pathogen Outbreak',
      probability: 15,
      impact: 'Critical',
      timeframe: '2-6 months',
      regions: ['Midwest', 'Great Plains'],
      mitigation: 'Coordinated countermeasure deployment'
    },
    {
      id: 'scenario-002',
      name: 'Climate-Induced Vulnerability Window',
      probability: 68,
      impact: 'High',
      timeframe: '3-8 weeks',
      regions: ['Northeast', 'Southeast'],
      mitigation: 'Enhanced monitoring and preemptive protection'
    },
    {
      id: 'scenario-003',
      name: 'Resistance Gene Breakdown Event',
      probability: 23,
      impact: 'High',
      timeframe: '6-18 months',
      regions: ['Global deployment areas'],
      mitigation: 'Gene stack deployment and alternative strategies'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success text-success-foreground';
      case 'updating': return 'bg-warning text-warning-foreground';
      case 'error': return 'bg-critical text-critical-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Critical': return 'text-critical';
      case 'High': return 'text-warning';
      case 'Medium': return 'text-accent';
      case 'Low': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 70) return 'text-critical';
    if (probability >= 50) return 'text-warning';
    if (probability >= 30) return 'text-accent';
    return 'text-success';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Threat Prediction & Modeling</h2>
          <p className="text-sm text-muted-foreground">AI-powered ensemble models for scenario planning and decision support</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <BarChart3 className="h-4 w-4 mr-2" />
            Scenario Planning
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configure Models
          </Button>
        </div>
      </div>

      {/* Prediction Models */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {predictionModels.map((model) => {
          const IconComponent = model.icon;
          
          return (
            <Card key={model.id} className="p-6 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{model.name}</h3>
                    <p className="text-sm text-muted-foreground">{model.type}</p>
                  </div>
                </div>
                <Badge className={`text-xs ${getStatusColor(model.status)}`}>
                  {model.status.toUpperCase()}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Accuracy</span>
                    <span className="text-foreground font-medium">{model.accuracy}%</span>
                  </div>
                  <Progress value={model.accuracy} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Confidence</span>
                    <span className="text-foreground font-medium">{model.confidence}%</span>
                  </div>
                  <Progress value={model.confidence} className="h-2" />
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Time Horizon</span>
                  <span className="text-foreground font-mono text-xs">{model.timeHorizon}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last Update</span>
                  <span className="text-foreground">{model.lastUpdate}</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <h4 className="text-sm font-medium text-foreground">Data Streams</h4>
                <div className="flex flex-wrap gap-1">
                  {model.dataStreams.map((stream, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {stream}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <h4 className="text-sm font-medium text-foreground">Current Predictions</h4>
                {model.predictions.map((prediction, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded bg-muted/20">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getProbabilityColor(prediction.probability) === 'text-critical' ? 'bg-critical' : 
                                                                 getProbabilityColor(prediction.probability) === 'text-warning' ? 'bg-warning' :
                                                                 getProbabilityColor(prediction.probability) === 'text-accent' ? 'bg-accent' : 'bg-success'}`}></div>
                      <span className="text-sm text-foreground">{prediction.threat}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className={`font-medium ${getProbabilityColor(prediction.probability)}`}>{prediction.probability}%</span>
                      <span>·</span>
                      <span>{prediction.days}d</span>
                      <span>·</span>
                      <span>{prediction.region}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <BarChart3 className="h-3 w-3 mr-1" />
                  Details
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Trends
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Scenario Planning */}
      <Card className="p-6 bg-card border-border shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">Scenario Planning Dashboard</h3>
        <div className="space-y-4">
          {scenarios.map((scenario) => (
            <div key={scenario.id} className="p-4 rounded-lg border border-border hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-medium text-foreground">{scenario.name}</h4>
                  <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{scenario.timeframe}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{scenario.regions.join(', ')}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className={`text-sm font-medium ${getProbabilityColor(scenario.probability)}`}>
                      {scenario.probability}% probability
                    </div>
                    <div className={`text-xs ${getImpactColor(scenario.impact)}`}>
                      {scenario.impact} impact
                    </div>
                  </div>
                  <AlertTriangle className={`h-4 w-4 ${getImpactColor(scenario.impact)}`} />
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground mb-3">
                <strong>Mitigation:</strong> {scenario.mitigation}
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  Export Scenario
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ThreatPredictionModels;