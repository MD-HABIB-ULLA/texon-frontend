import AboutAgency from "@/components/pages/About/aboutAgency/aboutAgency";
import AboutService from "@/components/pages/About/aboutService/aboutService";
import DevelopmentTeam from "@/components/pages/About/developmentTeam/developmentTeam";
import ExecutiveTeam from "@/components/pages/About/executiveTeam/executiveTeam";
import Mission from "@/components/pages/About/Mission/Mission";
import OurMember from "@/components/pages/About/ourMember/ourMember";
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
      <ExecutiveTeam />
      <DevelopmentTeam />
      <OurMember />
    </div>
  );
}
