import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ThreatMap = () => {
  const threats = [
    { id: 1, lat: 40.7128, lng: -74.0060, level: 'high', type: 'Chemical Detection' },
    { id: 2, lat: 34.0522, lng: -118.2437, level: 'medium', type: 'Biological Anomaly' },
    { id: 3, lat: 41.8781, lng: -87.6298, level: 'low', type: 'Sensor Calibration' },
    { id: 4, lat: 29.7604, lng: -95.3698, level: 'critical', type: 'Pathogen Alert' },
  ];

  const getThreatColor = (level: string) => {
    switch (level) {
      case 'critical': return 'bg-threat-critical';
      case 'high': return 'bg-threat-high';
      case 'medium': return 'bg-threat-medium';
      case 'low': return 'bg-threat-low';
      default: return 'bg-muted';
    }
  };

  return (
    <Card className="p-6 h-full bg-card border-border shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-foreground">Global Threat Map</h3>
        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-threat-critical"></div>
            <span className="text-xs text-muted-foreground">Critical</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-threat-high"></div>
            <span className="text-xs text-muted-foreground">High</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-threat-medium"></div>
            <span className="text-xs text-muted-foreground">Medium</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-threat-low"></div>
            <span className="text-xs text-muted-foreground">Low</span>
          </div>
        </div>
      </div>
      
      <div className="relative w-full h-96 bg-gradient-to-br from-muted/20 to-background rounded-lg overflow-hidden">
        {/* Simplified world map representation */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            <path d="M 150 100 Q 200 80 250 100 L 300 120 Q 350 110 400 130 L 450 150 Q 500 140 550 160 L 600 180 Q 650 170 700 190" 
                  stroke="currentColor" strokeWidth="2" fill="none" className="text-muted-foreground" />
            <path d="M 100 200 Q 200 180 300 200 L 400 220 Q 500 210 600 230 L 700 250" 
                  stroke="currentColor" strokeWidth="2" fill="none" className="text-muted-foreground" />
            <path d="M 50 300 Q 150 280 250 300 L 350 320 Q 450 310 550 330 L 650 350" 
                  stroke="currentColor" strokeWidth="2" fill="none" className="text-muted-foreground" />
          </svg>
        </div>
        
        {/* Threat indicators */}
        {threats.map((threat) => (
          <div
            key={threat.id}
            className={`absolute w-4 h-4 rounded-full ${getThreatColor(threat.level)} glow-primary animate-pulse cursor-pointer`}
            style={{
              left: `${(threat.lng + 180) * (100 / 360)}%`,
              top: `${(90 - threat.lat) * (100 / 180)}%`,
            }}
            title={`${threat.type} - ${threat.level} threat`}
          >
            <div className={`absolute inset-0 rounded-full ${getThreatColor(threat.level)} animate-ping`}></div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 space-y-2">
        <h4 className="text-sm font-medium text-foreground">Active Threats</h4>
        {threats.map((threat) => (
          <div key={threat.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/20">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${getThreatColor(threat.level)}`}></div>
              <span className="text-sm text-foreground">{threat.type}</span>
            </div>
            <Badge variant={threat.level === 'critical' ? 'destructive' : 'secondary'} className="text-xs">
              {threat.level.toUpperCase()}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ThreatMap;