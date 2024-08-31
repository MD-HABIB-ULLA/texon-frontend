import AmazingFeatures from "@/components/pages/Products/amazingFeatures/amazingFeatures";
import OurSolution from "@/components/pages/Products/ourSolution/ourSolution";
import PerfectPlan from "@/components/pages/Products/perfectPlan/perfectPlan";
import Support from "@/components/pages/Products/Support/Support";
import TrustedCompanies from "@/components/pages/Products/trustedCompanies/trustedCompanies";

export default function Products() {
  return (
    <div className="text-charleston">
      <OurSolution />
      <Support />
      <AmazingFeatures />
      <TrustedCompanies />
      <PerfectPlan />
    </div>
  );
}
