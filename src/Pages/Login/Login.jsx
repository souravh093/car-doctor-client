import React, { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)
  const from = location.state?.from?.pathname || "/";
  console.log(from)
  const { signInUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        const userEmail = {
          email: loggedUser.email
        }
        console.log(loggedUser, userEmail);
        
        fetch('http://localhost:5000/jwt', {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(userEmail)
        })
        .then(res => res.json())
        .then(data => {
          console.log('jwt response', data);
          // Warning LocalStorage not the best place to store token it is the second best place
          localStorage.setItem('car-access-token',  data.token);
          navigate(from, {replace: true})
        })
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="grid grid-cols-2 px-20 my-32 min-h-[calc(100vh-300px)]">
      <div className="w-full">
        <img className="w-full" src={loginImg} alt="" />
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="w-full max-w-md p-6 bg-white rounded-lg border-2 border-orange-500">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-medium">Login</h2>
          </div>
          <form onSubmit={handleLogin} className="mt-8">
            <div>
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
                className="block w-full px-4 py-2 mt-1 text-gray-900 border-orange-300 border-2  rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                autoComplete="current-password"
                required
                className="block w-full px-4 py-2 mt-1 text-gray-900 border-orange-300 border-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember_me"
                  name="remember_me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6 flex items-center justify-center">
            <div className="text-sm font-medium text-gray-700">
              Or sign in with
            </div>
            <div className="ml-3">
              <a href="#" className="text-blue-600 hover:text-blue-500">
                <span className="sr-only">Sign in with Google</span>
                <FaGoogle className="h-6 w-6" />
              </a>
            </div>
            <div className="ml-3">
              <a href="#" className="text-blue-600 hover:text-blue-500">
                <span className="sr-only">Sign in with Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
            </div>
            <div className="ml-3">
              <a href="#" className="text-blue-600 hover:text-blue-500">
                <span className="sr-only">Sign in with GitHub</span>
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-6">
            <div className="text-sm font-medium text-gray-700">
              Don not have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-500"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
