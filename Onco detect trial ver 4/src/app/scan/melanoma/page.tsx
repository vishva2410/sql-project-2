import { ScanForm } from "@/components/ui/ScanForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Melanoma Scanner | Oncorectin',
};

export default function MelanomaPage() {
  return (
    <ScanForm 
      type="melanoma" 
      title="Melanoma Screening" 
      description="Upload high-resolution dermoscopy and macro images of suspect skin lesions for AI analysis." 
    />
  );
}
