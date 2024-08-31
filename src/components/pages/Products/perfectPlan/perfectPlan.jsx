import HeadingTitle from "@/components/common/title/headingTitle";
import PlanCard from "./planCard";

export default function PerfectPlan() {
  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <div>
        <HeadingTitle
          heading={<>Pick the perfect plan</>}
          subHeading={
            <>
              <p>
                {" "}
                You can compare the pricing models and choose the best one for
                your store on our <br /> website. You can also upgrade or
                downgrade anytime according to your needs.
              </p>
              <p className="pt-5">
                So what are you waiting for? Don’t let this opportunity pass you
                by. Contact us <br /> today and get ready to launch your online
                store with our readymade ecommerce <br /> website and app
                solution. You won’t regret it
              </p>
            </>
          }
        />
      </div>
      <PlanCard />
    </div>
  );
}
