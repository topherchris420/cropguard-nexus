import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCards from "@/components/dashboard/StatsCards";
import ThreatMap from "@/components/dashboard/ThreatMap";
import SensorGrid from "@/components/dashboard/SensorGrid";
import AlertPanel from "@/components/dashboard/AlertPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dashboard">
      <DashboardHeader />
      
      <div className="p-6 space-y-6">
        {/* Statistics Overview */}
        <StatsCards />
        
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Threat Map - Takes 2 columns */}
          <div className="lg:col-span-2">
            <ThreatMap />
          </div>
          
          {/* Alert Panel - Takes 1 column */}
          <div className="lg:col-span-1">
            <AlertPanel />
          </div>
        </div>
        
        {/* Sensor Grid */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Sensor Network Status</h2>
          <SensorGrid />
        </div>
      </div>
    </div>
  );
};

export default Index;
