import CustomDevelopment from "@/components/pages/Services/customDevelopment/customDevelopment";
import ProjectCount from "@/components/pages/Services/projectCount/projectCount";
import ServicesInclude from "@/components/pages/Services/servicesInclude/servicesInclude";
import WebDevelopmentService from "@/components/pages/Services/webDevelopmentService/webDevelopmentService";
import WebServices from "@/components/pages/Services/webServices/webServices";

export default function Services() {
  return (
    <>
      <ProjectCount />
      <WebDevelopmentService />
      <ServicesInclude />
      <CustomDevelopment />
      <WebServices />
    </>
  );
}
