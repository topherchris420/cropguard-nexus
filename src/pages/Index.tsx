import { useState } from "react";
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

const Index = () => {
  const [activeModule, setActiveModule] = useState('surveillance');
  const renderModuleContent = () => {
    switch (activeModule) {
      case 'surveillance':
        return (
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
      case 'response':
        return <CountermeasuresSystems />;
      case 'protection':
        return <CropProtectionSystems />;
      case 'prediction':
        return <ThreatPredictionModels />;
      case 'attribution':
        return <ProvenanceTracking />;
      default:
        return (
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
            <SensorGrid />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dashboard">
      <DashboardHeader />
      
      <div className="p-6 space-y-6">
        {/* Statistics Overview */}
        <StatsCards />
        
        {/* Module Navigation */}
        <div className="flex items-center gap-2 p-4 bg-card rounded-lg border border-border">
          {['surveillance', 'response', 'protection', 'prediction', 'attribution'].map((module) => (
            <button
              key={module}
              onClick={() => setActiveModule(module)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeModule === module
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-muted/20 text-muted-foreground hover:bg-muted/40 hover:text-foreground'
              }`}
            >
              {module.charAt(0).toUpperCase() + module.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Dynamic Module Content */}
        {renderModuleContent()}
      </div>
    </div>
  );
};

export default Index;
