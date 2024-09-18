import AiAutomationBanner from "@/components/pages/aiAndautomation/aiAutomationBanner/aiAutomationBanner";
import AiAutomationChoose from "@/components/pages/aiAndautomation/aiAutomationChoose/aiAutomationChoose";
import AiAutomationServices from "@/components/pages/aiAndautomation/aiAutomationServices/aiAutomationServices";

export default function page() {
  return (
    <div>
      <AiAutomationBanner />
      <AiAutomationServices />
      <AiAutomationChoose />
    </div>
  );
}
