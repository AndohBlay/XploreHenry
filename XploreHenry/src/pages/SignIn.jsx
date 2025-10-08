export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-700">
      <div className="bg-blue-700 text-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-center text-2xl font-bold mb-6">SIGN IN</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-md text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md text-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md text-black"
          />
          <button className="bg-yellow-400 text-black py-2 rounded-md hover:bg-yellow-500">
            Sign In
          </button>
        </form>

        <p className="text-center text-sm mt-4">OR WITH</p>

        <div className="flex justify-center gap-4 mt-3">
          <button className="bg-white text-black px-4 py-2 rounded-md">Google</button>
          <button className="bg-white text-black px-4 py-2 rounded-md">Facebook</button>
          <button className="bg-white text-black px-4 py-2 rounded-md">Apple</button>
        </div>
      </div>
    </div>
  );
}
