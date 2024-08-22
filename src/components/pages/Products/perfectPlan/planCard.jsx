import { GoDotFill } from "react-icons/go";
import SubscriptionPlan from "./subscriptionPlan";

const plans = [
  {
    title: "Freemium",
    description:
      "This is the ideal option for you if you want to test our solution for free with limited features and products. You can also switch to premium anytime if you need more features and products.",
    features: [
      "Get free installation or 3 months free trial",
      "Offer up to 100 products on your store",
      "Have a basic design and features for your store",
      "Keep all your sales revenue without any transaction fee",
    ],
    buttonText: "Start Your Project",
  },
  {
    title: "Premium",
    description:
      "This is the best option for you if you want to use our solution with full features and unlimited products. You pay a monthly fee based on your sales volume, which is lower than other platforms.",
    features: [
      "Enjoy free installation or 3 months free trial",
      "Sell unlimited products on your store",
      "Customize your store’s design and features according to your preferences",
      "Pay a low transaction fee for your sales",
    ],
    buttonText: "Start Your Project",
  },
  {
    title: "One-time Buy",
    description:
      "This is the ideal option for you if you want to own our solution with full features and unlimited products. You pay a one-time fee and have the solution forever. You don’t have to worry about monthly payments or transaction fees.",
    features: [
      "Get free installation or 3 months free trial",
      "Offer unlimited products on your store",
      "Change your store’s design and features according to your preferences",
      "Keep all your sales revenue without any transaction fee",
    ],
    buttonText: "Start Your Project",
  },
];

export default function PlanCard() {
  return (
    <div className="max-w-screen-xl mx-auto px-2 md:py-10 lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="w-full p-4 rounded-lg bg-[#F2F2F3] flex flex-col"
          >
            <h1 className="text-xl font-bold mb-4 text-primry">{plan.title}</h1>
            <p className="mb-4">{plan.description}</p>
            <ul className="mb-4 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2 flex items-center">
                  <GoDotFill className="text-xs flex-shrink-0" />
                  <span className="ml-3">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="bg-primry hover:bg-blue mt-auto w-full text-white py-2 px-4 rounded">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/*  */}
      <div className="mt-5 w-[400px] mx-auto">
        <SubscriptionPlan />
      </div>
    </div>
  );
}
