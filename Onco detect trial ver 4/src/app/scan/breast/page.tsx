import { ScanForm } from "@/components/ui/ScanForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Breast Mammography Scanner | Oncorectin',
};

export default function BreastPage() {
  return (
    <ScanForm 
      type="breast" 
      title="Breast Cancer Mammography" 
      description="Upload CC and MLO view mammograms for AI detection of microcalcifications and masses." 
    />
  );
}
