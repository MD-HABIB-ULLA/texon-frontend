import CloudComputingBanner from "@/components/pages/cloudComputing/cloudComputingBanner/cloudComputingBanner";
import CloudComputingChoose from "@/components/pages/cloudComputing/cloudComputingChoose/cloudComputingChoose";
import CloudComputingServices from "@/components/pages/cloudComputing/cloudComputingServices/cloudComputingServices";

export default function page() {
  return (
    <div>
      <CloudComputingBanner />
      <CloudComputingServices />
      <CloudComputingChoose />
    </div>
  );
}
