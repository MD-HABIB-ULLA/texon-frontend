export default function AboutService() {
  return (
    <div className="px-2 max-w-screen-xl mx-auto pb-5 md:pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-semibold mb-4">Global Service</h1>
          <p className="text-gray-600">
            Proven track record of successful projects in multiple countries.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-semibold mb-4">Customized Solutions</h1>
          <p className="text-gray-600">
            Proven track record of successful projects in multiple countries.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-semibold mb-4">Customer Satisfaction</h1>
          <p className="text-gray-600">
            Proven track record of successful projects in multiple countries.
          </p>
        </div>
      </div>
    </div>
  );
}
