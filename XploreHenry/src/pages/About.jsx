export default function About() {
  return (
    <div className="bg-white py-12 px-6 md:px-16">
      {/* About Text */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <img
          src="https://images.unsplash.com/photo-1502920917128-1aa500764b43?auto=format&fit=crop&w=400&q=80"
          alt="Planning Map"
          className="w-64 h-64 object-cover rounded-full shadow-md"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">ABOUT US</h2>
          <p className="text-gray-700 text-lg max-w-xl">
            <strong>HenryXplore</strong> is designed to help travelers easily
            plan their journeys by discovering destinations, exploring
            activities, and creating itineraries in minutes.
          </p>
        </div>
      </div>

      {/* Info Boxes */}
      <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-blue-700 mb-2">Vision & Values</h3>
          <p className="text-gray-600">
            To make trip planning simple, inspiring, and stress-free for
            everyone.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-blue-700 mb-2">Why Choose Us</h3>
          <p className="text-gray-600">
            ✈️ Easy trip planning in minutes.
            <br />✨ Popular destinations at your fingertips.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <p className="text-gray-700 mb-3">
            Ready to start your journey? Head over to the planner and create
            your first trip today.
          </p>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
            Plan Your Trip
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 text-white mt-16 p-6 md:px-16 w-full flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold text-lg">HenryXplore</h3>
          <p className="text-sm">Your Journey, Perfectly Planned</p>
        </div>

        <div className="text-center">
          <h4 className="font-semibold mb-1">CONTACT INFO</h4>
          <p>GODANDBLAY@GMAIL.COM</p>
          <p>+233541851088</p>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="font-semibold mb-1">FOLLOW US ON</h4>
          <div className="flex gap-3">
            <a href="#">
              <img
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="Google"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/color/48/facebook-new.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/twitterx--v2.png"
                alt="X"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
