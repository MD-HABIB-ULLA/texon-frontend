import ManagementSoftwareBannar from "@/components/pages/managementSoftware/managementSoftwareBannar/managementSoftwareBannar";
import ManagementSoftwareChoose from "@/components/pages/managementSoftware/managementSoftwareChoose/managementSoftwareChoose";
import ManagementSoftwareServices from "@/components/pages/managementSoftware/managementSoftwareServices/managementSoftwareServices";

export default function page() {
  return (
    <div>
      <ManagementSoftwareBannar />
      <ManagementSoftwareServices />
      <ManagementSoftwareChoose />
    </div>
  );
}
