import { GoDotFill } from "react-icons/go";

const plans = [
  {
    title: "Subscription:",
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
      {plans.map((plan, index) => (
        <div
        key={index}
        className="w-full p-5 shadow rounded-[30px] text-white bg-primry flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-primry/95 duration-300"
      >
        <h1 className="text-[40px] font-bold mb-4 text-white">
          {plan.title}
        </h1>
        <p className="mb-4 text-[20px]">{plan.description}</p>
        <ul className="mb-4 flex-grow text-[20px] font-semibold">
          {plan.features.map((feature, i) => (
            <li key={i} className="mb-2 flex items-center">
              <GoDotFill className="text-xs flex-shrink-0" />
              <span className="ml-3">{feature}</span>
            </li>
          ))}
        </ul>
        <button className="bg-white  mt-auto w-full font-medium text-primry py-4 px-4 rounded-[20px] transition-colors duration-300">
          {plan.buttonText}
        </button>
      </div>
      ))}
    </div>
  );
}
