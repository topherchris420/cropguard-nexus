import React, { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCards from "@/components/dashboard/StatsCards";
import ThreatMap from "@/components/dashboard/ThreatMap";
import SensorGrid from "@/components/dashboard/SensorGrid";
import AlertPanel from "@/components/dashboard/AlertPanel";
import MultimodalSensors from "@/components/surveillance/MultimodalSensors";
import CountermeasuresSystems from "@/components/response/CountermeasuresSystems";
import CropProtectionSystems from "@/components/protection/CropProtectionSystems";
import ThreatPredictionModels from "@/components/prediction/ThreatPredictionModels";
import ProvenanceTracking from "@/components/attribution/ProvenanceTracking";

// Define a new component for the complex surveillance module content
const SurveillanceModule: React.FC = () => (
  <div className="space-y-6">
    <MultimodalSensors />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <ThreatMap />
      </div>
      <div className="lg:col-span-1">
        <AlertPanel />
      </div>
    </div>
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-4">Legacy Sensor Network</h2>
      <SensorGrid />
    </div>
  </div>
);

// Define type for module names for type safety
type ModuleName = 'surveillance' | 'response' | 'protection' | 'prediction' | 'attribution';

// Configuration object for modules
const moduleConfig: Record<ModuleName, { component: React.FC, title: string }> = {
  surveillance: { component: SurveillanceModule, title: 'Surveillance' },
  response: { component: CountermeasuresSystems, title: 'Response' },
  protection: { component: CropProtectionSystems, title: 'Protection' },
  prediction: { component: ThreatPredictionModels, title: 'Prediction' },
  attribution: { component: ProvenanceTracking, title: 'Attribution' },
};

const Index = () => {
  const [activeModule, setActiveModule] = useState<ModuleName>('surveillance');

  const ActiveModuleComponent = moduleConfig[activeModule].component;

  return (
    <div className="min-h-screen bg-gradient-dashboard">
      <DashboardHeader />
      
      <div className="p-6 space-y-6">
        {/* Statistics Overview */}
        <StatsCards />
        
        {/* Module Navigation */}
        <div className="flex items-center gap-2 p-4 bg-card rounded-lg border border-border">
          {(Object.keys(moduleConfig) as ModuleName[]).map((moduleName) => (
            <button
              key={moduleName}
              onClick={() => setActiveModule(moduleName)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeModule === moduleName
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-muted/20 text-muted-foreground hover:bg-muted/40 hover:text-foreground'
              }`}
            >
              {moduleConfig[moduleName].title}
            </button>
          ))}
        </div>
        
        {/* Dynamic Module Content */}
        <ActiveModuleComponent />
      </div>
    </div>
  );
};

export default Index;
