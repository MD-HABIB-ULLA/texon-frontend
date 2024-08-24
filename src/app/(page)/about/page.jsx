import AboutAgency from "@/components/pages/About/aboutAgency/aboutAgency";
import AboutService from "@/components/pages/About/aboutService/aboutService";
import Mission from "@/components/pages/About/Mission/Mission";

export default function About() {
  return (
    <div>
      <AboutService />
      <AboutAgency />
      <Mission />
    </div>
  );
}
