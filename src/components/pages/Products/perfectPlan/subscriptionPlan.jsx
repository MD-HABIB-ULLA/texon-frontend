import { GoDotFill } from "react-icons/go";

const subscriptionplans = [
  {
    title: "Subscription",
    description:
      "You can use our solution with full features and unlimited products. You pay a monthly subscription fee and get access to all the updates and new features.",
    features: [
      "Free installation or 3 months free trial",
      "Unlimited products",
      "Customizable design and features",
      "No transaction fee",
      "Pay a low monthly subscription fee",
    ],
    buttonText: "Start Your Project",
  },
];
export default function SubscriptionPlan() {
  return (
    <div>
      {subscriptionplans.map((subscriptionplan, index) => (
        <div key={index} className="p-4 rounded-lg bg-[#F2F2F3] flex flex-col">
          <h1 className="text-xl font-bold mb-4 text-primry">
            {subscriptionplan.title}
          </h1>
          <p className="mb-4">{subscriptionplan.description}</p>
          <ul className="mb-4 flex-grow">
            {subscriptionplan.features.map((feature, i) => (
              <li key={i} className="mb-2 flex items-center">
                <GoDotFill className="text-xs flex-shrink-0" />
                <span className="ml-3">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="bg-primry hover:bg-blue mt-auto w-full text-white py-2 px-4 rounded">
            {subscriptionplan.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
}
