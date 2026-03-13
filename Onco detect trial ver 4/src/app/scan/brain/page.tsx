import { ScanForm } from "@/components/ui/ScanForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brain MRI Scanner | Oncorectin',
};

export default function BrainPage() {
  return (
    <ScanForm 
      type="brain" 
      title="Brain Tumor MRI Scan" 
      description="Upload T1, T2, or FLAIR MRI sequences for detecting glioblastoma, astrocytoma, and other anomalies." 
    />
  );
}
