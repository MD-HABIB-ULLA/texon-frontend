import WebBanner from "@/components/pages/webDevelopment/webBanner/webBanner";
import WebChoose from "@/components/pages/webDevelopment/webChoose/webChoose";
import WebServices from "@/components/pages/webDevelopment/webServices/webServices";

export default function page() {
  return (
    <div>
      <WebBanner />
      <WebServices />
      <WebChoose />
    </div>
  );
}
