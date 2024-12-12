export default function ContactForm() {
  return (
    <form className="max-w-5xl mx-auto p-8 bg-white/70 border-white border-2 shadow-md rounded-[30px]">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Name */}
    <div>
      <label className="block text-[#4B5563] font-medium mb-2">
        Name<span className="text-[#FF0000] text-sm">*</span>
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        placeholder="Enter your name"
      />
    </div>

    {/* Email */}
    <div>
      <label className="block text-[#4B5563] font-medium mb-2">
        Email<span className="text-[#FF0000] text-sm">*</span>
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        placeholder="Enter your email"
      />
    </div>

    {/* Phone */}
    <div>
      <label className="block text-[#4B5563] font-medium mb-2">
        Phone<span className="text-[#FF0000] text-sm">*</span>
      </label>
      <input
        type="tel"
        name="phone"
        id="phone"
        className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        placeholder="Enter your phone number"
      />
    </div>

    {/* Industry */}
    <div>
      <label className="block text-[#4B5563] font-medium mb-2">Industry</label>
      <input
        type="text"
        name="industry"
        id="industry"
        className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        placeholder="Enter your industry"
      />
    </div>
  </div>

  {/* Subject */}
  <div className="mt-6">
    <label className="block text-[#4B5563] font-medium mb-2">Subject</label>
    <input
      type="text"
      name="subject"
      id="subject"
      className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
      placeholder="Enter the subject"
    />
  </div>

  {/* Message */}
  <div className="mt-6">
    <label className="block text-[#4B5563] font-medium mb-2">
      Message<span className="text-[#FF0000] text-sm">*</span>
    </label>
    <textarea
      name="message"
      className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
      placeholder="Enter your message"
      rows="5"
    />
  </div>

  {/* Submit Button */}
  <div className="text-center mt-8">
    <button
      type="submit"
      className="px-10 py-3 text-lg font-semibold rounded-[10px] hover:bg-blue-600 transition-all duration-300 bg-primry text-white"
    >
      Send
    </button>
  </div>
</form>

  );
}
