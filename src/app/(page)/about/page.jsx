import AboutAgency from "@/components/pages/About/aboutAgency/aboutAgency";
import AboutService from "@/components/pages/About/aboutService/aboutService";
import Mission from "@/components/pages/About/Mission/Mission";
import TexonVideo from "@/components/pages/About/texonVideo/texonVideo";
import ProjectCount from "@/components/pages/Services/projectCount/projectCount";

export default function About() {
  return (
    <div>
      <AboutService />
      <AboutAgency />
      <Mission />
      <ProjectCount />
      <TexonVideo />
    </div>
  );
}
