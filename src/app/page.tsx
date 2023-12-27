import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      {/* Left Side */}
      <div className="text-3xl w-1/2 px-8">
        <Image
          src={"/image/facebook.svg"}
          width={300}
          height={100}
          alt="facebook logo"
        />
        <p className="ml-8 -mt-3">
          Facebook helps you connect Fand share with the people in your life.
        </p>
      </div>

      {/* Right Side */}
      <div className="bg-white flex flex-col p-5 rounded-xl w-1/3 border border-1 border-gray-200">
        <input
          className="my-3 border border-1 border-gray-300 p-3 rounded-lg focus:outline-1 outline-blue-600"
          type="text"
          placeholder="Email adress or phone number"
        />
        <input
          className="my-3 border border-1 border-gray-300 p-3 rounded-lg focus:outline-1 outline-blue-600"
          type="text"
          placeholder="Password"
        />
        <button
          className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md
        hover:bg-blue-700"
        >
          Log in
        </button>
        <p
          className="cursor-pointer text-center text-sm text-blue-600 my-2
          hover:underline "
        >
          Forgotten password?
        </p>
        <span className="my-2">
          <hr />
        </span>
        <button
          className="bg-green-500 my-2 py-2 px-3 text-lg font-bold text-white rounded-md
        hover:bg-green-600 w-fit mx-auto"
        >
          Create new account
        </button>
        <p className="my-2">
          <span className="cursor-pointer font-bold hover:underline">
            Create a Page
          </span>{" "}
          for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
}
