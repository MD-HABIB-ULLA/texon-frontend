import ITInfrastructureBanner from "@/components/pages/ITInfrastructure/ITInfrastructureBanner/ITInfrastructureBanner";
import ITInfrastructureBannerChoose from "@/components/pages/ITInfrastructure/ITInfrastructureChoose/ITInfrastructureBannerChoose";
import ITInfrastructureServices from "@/components/pages/ITInfrastructure/ITInfrastructureServices/ITInfrastructureServices";

export default function page() {
  return (
    <div>
      <ITInfrastructureBanner />
      <ITInfrastructureServices />
      <ITInfrastructureBannerChoose />
    </div>
  );
}
