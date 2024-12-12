import CustomDevelopment from "@/components/pages/Services/customDevelopment/customDevelopment";
import DiscussFrom from "@/components/pages/Services/discussFrom/discussFrom";
import ProjectCount from "@/components/pages/Services/projectCount/projectCount";
import ServicesBanner from "@/components/pages/Services/servicesBanner/servicesBanner";
import ServicesInclude from "@/components/pages/Services/servicesInclude/servicesInclude";
import WebDevelopmentService from "@/components/pages/Services/webDevelopmentService/webDevelopmentService";
import WebServices from "@/components/pages/Services/webServices/webServices";

export default function Services() {
  return (
    <div className="text-charleston">
      <ServicesBanner />
      <ProjectCount />
      <WebDevelopmentService />
      <ServicesInclude />
      <CustomDevelopment />
      <WebServices />
      <DiscussFrom />
    </div>
  );
}
