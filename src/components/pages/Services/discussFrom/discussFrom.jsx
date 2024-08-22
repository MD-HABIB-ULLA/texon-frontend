import Image from "next/image";
import discussImage from "../../../../../public/images/product development.svg";

export default function DiscussForm() {
  return (
    <div className="max-w-screen-xl mx-auto bg-primry my-20 rounded-md">
      <div className="px-4 md:px-8 flex flex-col md:flex-row">
        {/* Text */}
        <div className="text-white p-5 md:w-1/2">
          <p className="text-lg mb-2 font-medium">Got a project in mind?</p>
          <h1 className="text-3xl md:text-4xl mb-4 font-semibold">
            Let’s Discuss in Detail
          </h1>
          <Image
            src={discussImage}
            alt="Discuss project image"
            className="w-full"
          />
        </div>

        {/* Form */}
        <form className="card-body md:w-1/2 p-4 lg:mt-10">
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name Here"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-white">Company Name</span>
              </label>
              <input
                type="text"
                placeholder="Ex. Texon Ltd"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-white">Service Required*</span>
              </label>
              <select className="select select-bordered w-full">
                <option disabled value="">
                  Select Your Service
                </option>
                <option value="employee">Employee</option>
                <option value="hr">HR</option>
                <option value="client">Client</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-white">Project Budget*</span>
              </label>
              <select className="select select-bordered w-full">
                <option disabled value="">
                  Select Your Range
                </option>
                <option value="50000">50,000</option>
                <option value="70000">70,000</option>
                <option value="80000">80,000</option>
                <option value="90000">90,000</option>
              </select>
            </div>
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-white">Project Details*</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Tell us more about your idea"
              required
            ></textarea>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox mr-2 rounded-none text-white bg-white"
            />
            <p className="text-white">
              I agree to the Terms of Service and Privacy Policy.
            </p>
          </div>
          <div className="form-control lg:mb-0 md:mb-5 mb-5">
            <button className="btn bg-black text-white w-full md:w-auto border-none hover:bg-yellow">
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
