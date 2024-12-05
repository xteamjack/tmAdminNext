import Image from "next/image";
import Link from "next/link";

export default function Authayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600 text-white items-center justify-center p-10">
        <div className="text-center">
          <div className="text-2xl font-bold mb-6">Hello DigiHirer! 👋</div>
          <div className="text-5xl font-bold mb-6">Our motto</div>
          <div className="text-sm mb-6">
            <ol>
              <li>Where Employers and Job Seekers Thrive Together</li>
              <li>Empowering Your Career, Simplifying Your Hiring</li>
              <li>Transparency in Hiring, Predictability in Success</li>

              <li>Smart Hiring, Meaningful Careers</li>
              <li>Bridging the Gap Between Talent and Opportunity</li>
              <li>
                For Employers Who Value Talent, and Talent Who Deserves Value
              </li>

              <li>Your Career, Your Future, Our Commitment</li>

              <li>Work with Purpose. Hire with Confidence</li>
              <li>Connecting the Right Talent with the Right Opportunity</li>
              <li>
                Experience Transparency, Predictability, and Success in Every
                Hire
              </li>
            </ol>
          </div>
          <footer className="text-sm opacity-80">
            © 2025 DigiHire. All rights reserved.
          </footer>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-10">
        <div className="max-w-sm w-full">
          {/* Logo */}
          <div className="text-center text-2xl font-bold text-gray-800 mb-8">
            DigiHire
          </div>

          {/* Welcome Back */}
          {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome Back!
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-600 font-medium">
              Create a new account now
            </Link>
            , it’s FREE! Takes less than a minute.
          </p> */}

          {children}
          {/* Form */}
          {/* <form>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border-gray-300 rounded-lg shadow-sm mt-1 px-4 py-2"
            placeholder="example@gmail.com"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border-gray-300 rounded-lg shadow-sm mt-1 px-4 py-2"
            placeholder="••••••••"
          />
        </div>


        <button
          type="submit"
          className="w-full bg-black text-white rounded-lg shadow-md py-2 mb-4 hover:bg-gray-800 transition"
        >
          Login Now
        </button>

        <button
          type="button"
          className="w-full bg-white border-gray-300 text-gray-800 rounded-lg shadow-md py-2 flex items-center justify-center hover:bg-gray-100 transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google"
            className="h-5 w-5 mr-2"
          />
          Login with Google
        </button>
      </form> */}

          {/* Forget Password */}
          {/* <div className="text-sm text-center text-gray-500 mt-6">
        Forget password?{" "}
        <Link href="/reset-password">
          <a className="text-blue-600 font-medium">Click here</a>
        </Link>
      </div> */}
        </div>
      </div>
    </div>
  );
}
