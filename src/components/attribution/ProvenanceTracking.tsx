import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  QrCode, 
  Fingerprint, 
  Link2,
  Search,
  Shield,
  FileText,
  Database,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Settings
} from "lucide-react";

const ProvenanceTracking = () => {
  const trackingSystems = [
    {
      id: 'molecular-001',
      name: 'Digital Molecular Barcode System',
      icon: QrCode,
      type: 'Molecular Forensics',
      status: 'active',
      samples: 15680,
      accuracy: 98.7,
      lastScan: '23 sec ago',
      database: 'Global Pathogen Registry',
      coverage: 'DNA/RNA fingerprints',
      confidence: 94
    },
    {
      id: 'genomic-002',
      name: 'Environmental Genomic Scanner',
      icon: Fingerprint,
      type: 'Genomic Analysis',
      status: 'active',
      samples: 8934,
      accuracy: 96.2,
      lastScan: '1 min ago',
      database: 'Environmental Genome DB',
      coverage: 'Metagenomic signatures',
      confidence: 91
    },
    {
      id: 'blockchain-003',
      name: 'Blockchain Sample Provenance',
      icon: Link2,
      type: 'Distributed Ledger',
      status: 'active',
      samples: 45231,
      accuracy: 99.9,
      lastScan: 'Real-time',
      database: 'Immutable Chain',
      coverage: 'Full chain of custody',
      confidence: 99
    },
    {
      id: 'forensic-ai-004',
      name: 'Forensic AI Attribution Engine',
      icon: Search,
      type: 'AI Forensics',
      status: 'active',
      samples: 12847,
      accuracy: 89.4,
      lastScan: '45 sec ago',
      database: 'Pattern Recognition DB',
      coverage: 'Anomaly signatures',
      confidence: 87
    }
  ];

  const investigations = [
    {
      id: 'inv-001',
      case: 'Pathogen Outbreak Delta-7',
      priority: 'Critical',
      status: 'Active Investigation',
      confidence: 89,
      evidence: ['Molecular signature', 'Genomic profile', 'Chain of custody'],
      attribution: 'Synthetic origin detected',
      timeline: '2024-01-13 12:00:00',
      location: 'Sector Delta-7',
      investigator: 'AI Forensics Unit Alpha'
    },
    {
      id: 'inv-002',
      case: 'Chemical Residue Analysis B-3',
      priority: 'High',
      status: 'Evidence Collection',
      confidence: 76,
      evidence: ['Chemical fingerprint', 'Isotopic analysis', 'Distribution pattern'],
      attribution: 'Industrial contamination',
      timeline: '2024-01-13 10:30:00',
      location: 'Sector Beta-3',
      investigator: 'Chemical Forensics Team'
    },
    {
      id: 'inv-003',
      case: 'Genetic Modification Trace',
      priority: 'Medium',
      status: 'Analysis Complete',
      confidence: 94,
      evidence: ['Gene sequence', 'Modification markers', 'Provenance chain'],
      attribution: 'Authorized research origin',
      timeline: '2024-01-13 08:15:00',
      location: 'Sector Gamma-2',
      investigator: 'Genomic Attribution AI'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success text-success-foreground';
      case 'warning': return 'bg-warning text-warning-foreground';
      case 'error': return 'bg-critical text-critical-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'text-critical';
      case 'High': return 'text-warning';
      case 'Medium': return 'text-accent';
      case 'Low': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  const getInvestigationStatus = (status: string) => {
    switch (status) {
      case 'Active Investigation': return { color: 'bg-critical text-critical-foreground', icon: AlertTriangle };
      case 'Evidence Collection': return { color: 'bg-warning text-warning-foreground', icon: Clock };
      case 'Analysis Complete': return { color: 'bg-success text-success-foreground', icon: CheckCircle };
      default: return { color: 'bg-muted text-muted-foreground', icon: Clock };
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Attribution & Provenance Tracking</h2>
          <p className="text-sm text-muted-foreground">Forensic AI systems for threat source identification and verification</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configure
          </Button>
        </div>
      </div>

      {/* Tracking Systems */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {trackingSystems.map((system) => {
          const IconComponent = system.icon;
          
          return (
            <Card key={system.id} className="p-6 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
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
                    <span className="text-muted-foreground">Accuracy</span>
                    <span className="text-foreground font-medium">{system.accuracy}%</span>
                  </div>
                  <Progress value={system.accuracy} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Confidence</span>
                    <span className="text-foreground font-medium">{system.confidence}%</span>
                  </div>
                  <Progress value={system.confidence} className="h-2" />
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Samples Processed</span>
                  <span className="text-foreground font-medium">{system.samples.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Coverage</span>
                  <span className="text-foreground font-mono text-xs">{system.coverage}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Database</span>
                  <span className="text-foreground text-xs">{system.database}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last Scan</span>
                  <span className="text-foreground">{system.lastScan}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Database className="h-3 w-3 mr-1" />
                  Query
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Shield className="h-3 w-3 mr-1" />
                  Verify
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Active Investigations */}
      <Card className="p-6 bg-card border-border shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">Active Forensic Investigations</h3>
        <div className="space-y-4">
          {investigations.map((investigation) => {
            const statusInfo = getInvestigationStatus(investigation.status);
            const StatusIcon = statusInfo.icon;
            
            return (
              <div key={investigation.id} className="p-4 rounded-lg border border-border hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <StatusIcon className={`h-5 w-5 ${getPriorityColor(investigation.priority)}`} />
                    <div>
                      <h4 className="font-medium text-foreground">{investigation.case}</h4>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{new Date(investigation.timeline).toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{investigation.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <Badge className={`text-xs ${statusInfo.color} mb-1`}>
                        {investigation.status}
                      </Badge>
                      <div className={`text-xs ${getPriorityColor(investigation.priority)}`}>
                        {investigation.priority} Priority
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-foreground">{investigation.confidence}%</div>
                      <div className="text-xs text-muted-foreground">Confidence</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-2">Evidence Collected</h5>
                    <div className="flex flex-wrap gap-1">
                      {investigation.evidence.map((evidence, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {evidence}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-2">Attribution</h5>
                    <p className="text-sm text-muted-foreground">{investigation.attribution}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Investigator: {investigation.investigator}
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Export Evidence
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Attribution Metrics */}
      <Card className="p-6 bg-card border-border shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">Attribution Network Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <QrCode className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Samples Tracked</span>
            </div>
            <div className="text-2xl font-bold text-foreground">82,692</div>
            <div className="text-xs text-muted-foreground">Total in database</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Fingerprint className="h-4 w-4 text-success" />
              <span className="text-sm font-medium text-foreground">Attribution Success</span>
            </div>
            <div className="text-2xl font-bold text-foreground">94.2<span className="text-sm text-muted-foreground">%</span></div>
            <div className="text-xs text-muted-foreground">Successful identifications</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Link2 className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Blockchain Integrity</span>
            </div>
            <div className="text-2xl font-bold text-foreground">100<span className="text-sm text-muted-foreground">%</span></div>
            <div className="text-xs text-muted-foreground">Chain verification</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-warning" />
              <span className="text-sm font-medium text-foreground">Active Cases</span>
            </div>
            <div className="text-2xl font-bold text-foreground">23</div>
            <div className="text-xs text-muted-foreground">Under investigation</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProvenanceTracking;