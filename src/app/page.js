import Clients from "@/components/pages/Home/clients/clients";
import CoreServices from "@/components/pages/Home/coreServices/coreServices";
import OurPreviousWork from "@/components/pages/Home/ourPreviousWork/ourPreviousWork";
import TexonGlance from "@/components/pages/Home/texonGlance/texonGlance";
import AboutTexon from "../components/pages/Home/aboutTexon/aboutTexon";
import DevelopmentServices from "../components/pages/Home/developmentServices/developmentServices";
import DiscussDetails from "../components/pages/Home/discussDetails/discussDetails";
import DynamicWebsite from "../components/pages/Home/dynamicWebsite/dynamicWebsite";
import MobileApps from "../components/pages/Home/mobileApps/mobileApps";
import OurCompany from "../components/pages/Home/ourCompany/ourCompany";
import Questions from "../components/pages/Home/questions/questions";
import SoftwareProducts from "../components/pages/Home/softwareProducts/softwareProducts";
import TechKnowledge from "../components/pages/Home/techKnowledge/techKnowledge";

export default function Home() {
  return (
    <main>
      <OurCompany />
      <TexonGlance />
      {/* <NextLevel /> */}
      <OurPreviousWork />
      <CoreServices />
      <SoftwareProducts />
      <DevelopmentServices />
      <AboutTexon />
      <DynamicWebsite />
      <MobileApps />
      <Clients />
      <TechKnowledge />
      <Questions />
      <DiscussDetails />
    </main>
  );
}
