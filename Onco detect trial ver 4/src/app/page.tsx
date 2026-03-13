import { Card, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RiskChart } from "@/components/ui/Chart";
import { Activity, Brain, ShieldAlert, ScanLine } from "lucide-react";
import Link from "next/link";

const mockRiskData = [
  { name: 'Jan', value: 20 },
  { name: 'Feb', value: 25 },
  { name: 'Mar', value: 18 },
  { name: 'Apr', value: 35 },
  { name: 'May', value: 30 },
  { name: 'Jun', value: 15 },
];

export default function Home() {
  return (
    <div className="container animate-fade-in" style={{ padding: "4rem 2rem", minHeight: "80vh" }}>
      <header className="flex justify-between items-center" style={{ marginBottom: "4rem" }}>
        <div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", letterSpacing: "-0.05em", color: "var(--accent-color)" }}>ONCORECTIN.</h1>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>AI Radiologist & Clinical Risk Assessment</p>
        </div>
        <div>
          <Button variant="secondary" className="delay-100 animate-fade-in"><Activity size={18} style={{ marginRight: "0.5rem", display: "inline" }}/> Patient Portal</Button>
        </div>
      </header>

      <main>
        {/* Dashboard Metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
          <Card className="delay-100 animate-fade-in" hoverable>
            <h4 style={{ color: "var(--text-secondary)", fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Last Scan</h4>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold", display: "flex", alignItems: "center" }}>
              <ScanLine size={24} style={{ marginRight: "0.5rem", color: "var(--text-secondary)" }}/> 
              Negative
            </div>
          </Card>
          <Card className="delay-200 animate-fade-in" hoverable>
             <h4 style={{ color: "var(--text-secondary)", fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Overall Risk</h4>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold", display: "flex", alignItems: "center" }}>
              <ShieldAlert size={24} style={{ marginRight: "0.5rem", color: "var(--chart-color-2)" }}/> 
              15% / Low
            </div>
          </Card>
           <Card className="delay-300 animate-fade-in" hoverable>
             <h4 style={{ color: "var(--text-secondary)", fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Analyses Computed</h4>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold", display: "flex", alignItems: "center" }}>
              <Brain size={24} style={{ marginRight: "0.5rem", color: "var(--chart-color-1)" }}/> 
              12 Scans
            </div>
          </Card>
        </div>

        {/* Action Grid & Chart */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "2rem", marginBottom: "4rem" }}>
          {/* Select Scanner */}
          <div className="flex-col gap-4 delay-300 animate-fade-in">
             <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", borderBottom: "2px solid var(--border-color)", paddingBottom: "0.5rem", display: "inline-block" }}>Available Models</h2>
             
             <Card hoverable style={{ padding: "1.5rem" }}>
               <h3 style={{ fontWeight: "bold", marginBottom: "0.25rem" }}>Melanoma Screening</h3>
               <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>Dermoscopy AI analysis</p>
               <Link href="/scan/melanoma"><Button variant="primary" fullWidth size="sm">START</Button></Link>
             </Card>

             <Card hoverable style={{ padding: "1.5rem", marginTop: "1rem" }}>
               <h3 style={{ fontWeight: "bold", marginBottom: "0.25rem" }}>Brain Tumor MRI</h3>
               <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>MRI glioblastoma detection</p>
               <Link href="/scan/brain"><Button variant="outline" fullWidth size="sm">START</Button></Link>
             </Card>

             <Card hoverable style={{ padding: "1.5rem", marginTop: "1rem" }}>
               <h3 style={{ fontWeight: "bold", marginBottom: "0.25rem" }}>Breast Mammography</h3>
               <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>X-ray cancer signs</p>
               <Link href="/scan/breast"><Button variant="outline" fullWidth size="sm">START</Button></Link>
             </Card>
          </div>

          {/* Chart Section */}
          <div className="delay-300 animate-fade-in">
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", borderBottom: "2px solid var(--border-color)", paddingBottom: "0.5rem", display: "inline-block" }}>Risk Trajectory</h2>
            <Card style={{ padding: "1rem 2rem 2rem 0" }}>
               <RiskChart data={mockRiskData} dataKey="value" name="Overall Risk %" color="var(--chart-color-1)" />
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
