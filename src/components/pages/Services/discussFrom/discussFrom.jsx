import Image from "next/image";
import discussImage from "../../../../../public/images/product development.svg";
export default function DiscussFrom() {
  return (
    <div className="max-w-screen-xl mx-auto bg-primry my-20 rounded-md">
      <div className="px-2 flex">
        {/* text  */}
        <div className="text-white p-5">
          <p>Got a project in mind?</p>
          <h1 className="text-4xl">Let’s Discuss in Details</h1>
          <Image src={discussImage} alt="discussImage" />
        </div>

        {/* from  */}
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name Here"
              className="input input-bordered"
              required
            />
          </div>
          <div className="flex justify-between">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Company Name</span>
              </label>
              <input
                type="text"
                placeholder="Ex. Texon ltd"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service required*</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Project budget*</span>
              </label>
              <input
                type="text"
                placeholder="Select Your Service"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Project details*</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Tell us more about your idea"
            ></textarea>
          </div>
          <div className="flex">
            <input type="checkbox" defaultChecked className="checkbox" />
            <p>I agree to the terms of Service and Privacy Policy.</p>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-black text-white">Send inquiry</button>
          </div>
        </form>
      </div>
    </div>
  );
}
