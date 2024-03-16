import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-800 bg-cover bg-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        {/* Desktop Background Image */}
        <div
          className="absolute inset-0 hidden bg-opacity-75 bg-cover bg-center bg-no-repeat md:block"
          style={{ backgroundImage: `url('/desktop-background.jpg')` }}
        ></div>
        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 block bg-opacity-75 bg-cover bg-center bg-no-repeat md:hidden"
          style={{ backgroundImage: `url('/mobile-background.jpg')` }}
        ></div>
      </div>

      {/* Content */}
      <div className="text-center">
        {/* Heading */}
        <h1 className="mb-4 text-4xl font-bold text-primary md:text-6xl">
          Oops!
        </h1>
        {/* Message */}
        <p className="mb-8 text-lg md:text-xl">
          Well this is awkward, something is wrong.
          <br />
          Please try again.
        </p>
        {/* Button */}
        <Link href="/">
          <a className="hover:bg-primary-dark rounded-md bg-primary px-6 py-3 text-white transition duration-300">
            Go to Homepage
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
