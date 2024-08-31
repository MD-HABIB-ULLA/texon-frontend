import Clients from "@/components/pages/Home/clients/clients";
import CoreServices from "@/components/pages/Home/coreServices/coreServices";
import FeaturedClients from "@/components/pages/Home/featuredClients/featuredClients";
import OurPreviousWork from "@/components/pages/Home/ourPreviousWork/ourPreviousWork";
import Technology from "@/components/pages/Home/Technology/Technology";
import TexonGlance from "@/components/pages/Home/texonGlance/texonGlance";
import UsPartner from "@/components/pages/Home/usPartner/usPartner";
import AboutTexon from "../components/pages/Home/aboutTexon/aboutTexon";
import DevelopmentServices from "../components/pages/Home/developmentServices/developmentServices";
import DiscussDetails from "../components/pages/Home/discussDetails/discussDetails";
import OurCompany from "../components/pages/Home/ourCompany/ourCompany";
import Questions from "../components/pages/Home/questions/questions";
import SoftwareProducts from "../components/pages/Home/softwareProducts/softwareProducts";
import TechKnowledge from "../components/pages/Home/techKnowledge/techKnowledge";

export default function Home() {
  return (
    <main className="text-charleston">
      <OurCompany />
      <TexonGlance />
      <OurPreviousWork />
      <CoreServices />
      <FeaturedClients />
      <SoftwareProducts />
      <DevelopmentServices />
      <Technology />
      <AboutTexon />
      <Clients />
      <DiscussDetails />
      <TechKnowledge />
      <Questions />
      <UsPartner />
    </main>
  );
}
