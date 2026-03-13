"use client";

import React, { useState } from 'react';
import { Card, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useRouter } from 'next/navigation';
import { UploadCloud, FileText } from 'lucide-react';

interface ScanFormProps {
  type: 'melanoma' | 'brain' | 'breast';
  title: string;
  description: string;
}

export const ScanForm: React.FC<ScanFormProps> = ({ type, title, description }) => {
  const router = useRouter();
  const [symptoms, setSymptoms] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    
    setIsSubmitting(true);
    // In a real app, upload the file to an API here.
    // We will simulate ML delay and route to results.
    setTimeout(() => {
      // Create a mock ID for the result 
      const mockId = Math.random().toString(36).substring(7);
      
      // We pass the type as a query param to inform the mock LLM result page
      router.push(`/results/${mockId}?type=${type}&symptoms=${encodeURIComponent(symptoms)}`);
    }, 1500);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: "4rem 2rem" }}>
      <Button variant="outline" onClick={() => router.push('/')} style={{ marginBottom: "2rem" }}>
        &larr; Back to Dashboard
      </Button>
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{title}</h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "2rem" }}>
          {description}
        </p>

        <form onSubmit={handleSubmit}>
          <Card style={{ marginBottom: "2rem" }}>
            <CardHeader title="1. Upload Medical Image" subtitle="Strictly HIPAA compliant. Images are processed locally/temporarily." />
            
            <div style={{ 
              border: "2px dashed var(--border-color)", 
              padding: "4rem 2rem", 
              textAlign: "center",
              backgroundColor: file ? "var(--hover-bg)" : "transparent",
              transition: "var(--transition)",
              cursor: "pointer",
              position: "relative"
            }} className="hover:bg-hover">
              <input 
                type="file" 
                accept="image/*" 
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                required
                style={{
                  position: "absolute",
                  top: 0, left: 0, width: "100%", height: "100%", opacity: 0, cursor: "pointer"
                }}
              />
              <UploadCloud size={48} style={{ margin: "0 auto 1rem auto", color: "var(--text-secondary)" }} />
              <div style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                {file ? file.name : "Click or drag image to upload"}
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
                Supports JPG, PNG, DICOM (mocked) up to 20MB
              </p>
            </div>
          </Card>

          <Card style={{ marginBottom: "2rem" }}>
            <CardHeader title="2. Clinical Symptoms" subtitle="Provide any physical symptoms observed by the patient." />
            
            <div style={{ position: "relative" }}>
              <FileText size={20} style={{ position: "absolute", top: "1rem", left: "1rem", color: "var(--text-secondary)" }} />
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="E.g., Patient reports a sudden change in mole color, occasional itching..."
                style={{
                  width: "100%",
                  minHeight: "150px",
                  padding: "1rem 1rem 1rem 3rem",
                  border: "1px solid var(--border-color)",
                  backgroundColor: "var(--bg-color)",
                  color: "var(--text-color)",
                  resize: "vertical"
                }}
                required
              />
            </div>
          </Card>

          <Button 
            type="submit" 
            variant="primary" 
            fullWidth 
            size="lg"
            disabled={!file || isSubmitting}
          >
            {isSubmitting ? "PROCESSING MODELS..." : "RUN AI ANALYSIS"}
          </Button>
        </form>
      </div>
    </div>
  );
};
