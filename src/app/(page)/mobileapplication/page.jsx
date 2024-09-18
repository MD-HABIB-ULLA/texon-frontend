import MobileApplicationBanner from "@/components/pages/MobileApplication/mobileApplicationBanner/mobileApplicationBanner";
import MobileApplicationChoose from "@/components/pages/MobileApplication/mobileApplicationChoose/mobileApplicationChoose";
import MobileApplicationServices from "@/components/pages/MobileApplication/MobileApplicationServices/mobileApplicationServices";

export default function page() {
  return (
    <div>
      <MobileApplicationBanner />
      <MobileApplicationServices />
      <MobileApplicationChoose />
    </div>
  );
}
