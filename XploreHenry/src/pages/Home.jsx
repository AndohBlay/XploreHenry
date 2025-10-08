export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-sm">
        <h1 className="text-xl font-bold text-blue-700">HenryXplore</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="#">Packages</a></li>
          <li><a href="#">Popular Destinations</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
          Plan Your Trip
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-12 bg-blue-600 text-white">
        <h2 className="text-4xl font-bold mb-4">
          PLAN YOUR <span className="text-yellow-300">ADVENTURE</span>
        </h2>
        <p className="mb-6 text-lg">Your Journey, Perfectly Planned</p>
        <div className="flex gap-4">
          <img src="https://picsum.photos/200/120?1" alt="trip1" className="rounded-lg shadow-md" />
          <img src="https://picsum.photos/200/120?2" alt="trip2" className="rounded-lg shadow-md" />
        </div>
      </section>

      {/* Destinations */}
      <section className="p-6">
        <h3 className="text-center text-2xl font-semibold mb-6">Explore with Henry</h3>

        <p className="text-center mb-8 text-gray-600">
          Discover some of the most loved travel spots around the world
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Paris, France", desc: "Romantic city of lights, art, and cuisine" },
            { name: "Tokyo, Japan", desc: "Blend of tradition & technology" },
            { name: "Bali", desc: "Tropical paradise with beaches" },
            { name: "New York City", desc: "The city that never sleeps" },
            { name: "Rome, Italy", desc: "Historic landmarks & culture" },
            { name: "Cape Town", desc: "Stunning beaches & nature" },
          ].map((d, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
              <img src={`https://picsum.photos/300/200?random=${idx}`} alt={d.name} className="rounded-md mb-3" />
              <h4 className="font-semibold text-lg">{d.name}</h4>
              <p className="text-sm text-gray-600">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
