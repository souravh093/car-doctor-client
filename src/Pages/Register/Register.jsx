import React, { useContext } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("password not matching");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="grid grid-cols-2 items-center px-20 my-32 min-h-[calc(100vh-300px)]">
      <div className="w-full">
        <img className="w-full" src={loginImg} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-medium">Sign Up</h2>
          </div>
          <form onSubmit={handleRegister} className="mt-8">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
                className="block w-full px-4 py-2 mt-1 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="block w-full px-4 py-2 mt-1 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="new-password"
                required
                className="block w-full px-4 py-2 mt-1 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-700"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="new-password"
                required
                className="block w-full px-4 py-2 mt-1 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign up
              </button>
            </div>
          </form>
          <div className="mt-6 flex items-center justify-center">
            <div className="text-sm font-medium text-gray-700">
              Or sign up with
            </div>
            <div className="ml-3">
              <a href="#" className="text-blue-600 hover:text-blue-500">
                <span className="sr-only">Sign up with Google</span>
                <FaGoogle className="h-6 w-6" />
              </a>
            </div>
            <div className="ml-3">
              <a href="#" className="text-blue-600 hover:text-blue-500">
                <span className="sr-only">Sign up with Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
            </div>
            <div className="ml-3">
              <a href="#" className="text-blue-600 hover:text-blue-500">
                <span className="sr-only">Sign up with GitHub</span>
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-6">
            <div className="text-sm font-medium text-gray-700">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:text-blue-500">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
