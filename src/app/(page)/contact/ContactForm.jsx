export default function ContactForm() {
  return (
    <form className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-[#4B5563] mb-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-3 py-2 border border-gray rounded focus:outline-none focus:ring-1 focus:border-blue"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-[#4B5563] mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-3 py-2 border border-gray rounded focus:outline-none focus:ring-1 focus:border-blue"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-[#4B5563] mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="w-full px-3 py-2 border border-gray rounded focus:outline-none focus:ring-1 focus:border-blue"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Industry */}
        <div>
          <label className="block text-[#4B5563] mb-2">Industry</label>
          <input
            type="text"
            name="industry"
            id="industry"
            className="w-full px-3 py-2 border border-gray rounded focus:outline-none focus:ring-1 focus:border-blue"
            placeholder="Enter your industry"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="mt-4">
        <label className="block text-[#4B5563] mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="w-full px-3 py-2 border border-gray rounded focus:outline-none focus:ring-1 focus:border-blue"
          placeholder="Enter the subject"
        />
      </div>

      {/* Message */}
      <div className="mt-4">
        <label className="block text-[#4B5563] mb-2">Message</label>
        <textarea
          name="message"
          className="w-full px-3 py-2 border border-gray rounded focus:outline-none focus:ring-1 focus:border-blue"
          placeholder="Enter your message"
          rows="4"
        />
      </div>

      {/* Submit Button */}
      <div className="text-center mt-6">
        <button
          type="submit"
          className="px-20 py-2 text-lg rounded hover:bg-blue transition-all duration-200 bg-primry text-white"
        >
          Sent
        </button>
      </div>
    </form>
  );
}
