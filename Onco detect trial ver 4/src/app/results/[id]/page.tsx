"use client";

import React, { useEffect, useState, use } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AlertOctagon, HeartPulse, Info, MapPin } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function ResultsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const type = searchParams.get('type') || 'Scan';
  const symptoms = searchParams.get('symptoms') || '';

  const [isLoading, setIsLoading] = useState(true);
  const [report, setReport] = useState<{
    probability: number;
    riskLevel: 'LOW' | 'MODERATE' | 'HIGH';
    llmText: string;
  } | null>(null);

  useEffect(() => {
    // Simulate an API call to the mock Next.js server (which would talk to Ollama)
    // For now, we generate a mock result client-side for demonstration.
    const timer = setTimeout(() => {
      // Randomized risk for demo: 30% chance of High Risk
      const isHighRisk = Math.random() > 0.7;
      const probability = isHighRisk ? Math.floor(Math.random() * 20) + 80 : Math.floor(Math.random() * 40) + 10;
      
      setReport({
        probability,
        riskLevel: probability > 75 ? 'HIGH' : probability > 40 ? 'MODERATE' : 'LOW',
        llmText: `Based on the provided imagery and reported symptoms ("${symptoms.substring(0, 50)}..."), the AI model detected structural patterns corresponding to a ${probability}% probability of malignancy. \n\nDisclaimer: This system is for informational and educational purposes only. It is not a diagnostic tool. Consult a certified medical professional for a definitive diagnosis.`
      });
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [symptoms]);

  if (isLoading) {
    return (
      <div className="container flex-col items-center justify-center animate-fade-in" style={{ height: "80vh" }}>
        <HeartPulse size={64} style={{ color: "var(--text-secondary)", marginBottom: "2rem", animation: "pulse 1.5s infinite" }} />
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", borderBottom: "2px solid var(--border-color)", paddingBottom: "0.5rem" }}>
          ANALYZING SCAN...
        </h2>
        <p style={{ color: "var(--text-secondary)", marginTop: "1rem" }}>Querying local LLM and visual models.</p>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}} />
      </div>
    );
  }

  if (!report) return null;

  const chartData = [
    { name: 'Probability', value: report.probability }
  ];

  return (
    <div className="container animate-fade-in delay-100" style={{ padding: "4rem 2rem" }}>
      <header style={{ marginBottom: "3rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
           <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", letterSpacing: "-0.05em" }}>ANALYSIS COMPLETE</h1>
           <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>ID: {resolvedParams.id.toUpperCase()} • Type: {type.toUpperCase()}</p>
        </div>
        <Button variant="outline" onClick={() => router.push('/')}>Dashboard</Button>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "2rem" }}>
        {/* Left Column: Probability & Emergency UI */}
        <div className="flex-col gap-4">
          <Card>
            <CardHeader title="Malignancy Probability" />
            <div style={{ height: "200px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="var(--text-secondary)" tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--text-secondary)" tickLine={false} axisLine={false} domain={[0, 100]} />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: 'var(--bg-color)', borderRadius: 0, border: '1px solid var(--border-color)'}}/>
                  <Bar dataKey="value" rx={0} ry={0}>
                    <Cell fill={report.riskLevel === 'HIGH' ? 'var(--danger-color)' : report.riskLevel === 'MODERATE' ? 'var(--chart-color-1)' : 'var(--chart-color-2)'} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <span style={{ fontSize: "3rem", fontWeight: "bold" }}>{report.probability}%</span>
            </div>
          </Card>

          {report.riskLevel === 'HIGH' && (
            <Card style={{ backgroundColor: "var(--danger-bg)", borderColor: "var(--danger-color)", color: "var(--danger-color)" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                <AlertOctagon size={24} style={{ marginRight: "0.5rem" }} />
                <h3 style={{ fontWeight: "bold", fontSize: "1.25rem" }}>HIGH RISK DETECTED</h3>
              </div>
              <p style={{ marginBottom: "1.5rem", fontSize: "0.875rem" }}>
                Immediate medical evaluation is strongly recommended based on these preliminary AI findings.
              </p>
              
              <div style={{ padding: "1rem", backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid var(--danger-color)" }}>
                <h4 style={{ fontWeight: "bold", marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
                  <MapPin size={16} style={{ marginRight: "0.5rem" }} /> Nearest Hospital Centers
                </h4>
                <ul style={{ fontSize: "0.875rem", listStyle: "none", padding: 0 }}>
                  <li style={{ padding: "0.5rem 0", borderBottom: "1px dashed var(--danger-color)" }}>
                    <strong>City General Hospital</strong> • 2.4 miles
                  </li>
                  <li style={{ padding: "0.5rem 0" }}>
                    <strong>Regional Oncology Center</strong> • 5.1 miles
                  </li>
                </ul>
              </div>
            </Card>
          )}
        </div>

        {/* Right Column: Informational Report */}
        <div>
          <Card style={{ height: "100%" }}>
            <CardHeader title="AI Radiologist Report" subtitle="Generated by Oncorectin Local LLM Inference" />
            
            <div style={{ 
              padding: "2rem", 
              backgroundColor: "var(--hover-bg)", 
              borderLeft: `4px solid ${report.riskLevel === 'HIGH' ? 'var(--danger-color)' : 'var(--text-color)'}`,
              minHeight: "300px",
              fontSize: "1.125rem",
              lineHeight: "1.8",
              whiteSpace: "pre-wrap"
            }}>
              {report.llmText}
            </div>

            <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid var(--border-color)", display: "flex", alignItems: "center", color: "var(--text-secondary)", fontSize: "0.875rem" }}>
              <Info size={16} style={{ marginRight: "0.5rem", flexShrink: 0 }} />
              Information provided is probabilistic. Algorithms are trained on clinical data but cannot replace professional histopathology or radiologic overreading.
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
