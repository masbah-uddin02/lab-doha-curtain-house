import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import AuthUser from "../../Hooks/authUser";
import { useEffect } from "react";

const Login = () => {
  const { http, setToken,userInfo } = AuthUser();
  const navigate = useNavigate();
  useEffect(()=>{
if(userInfo?.role==="admin"){
    navigate("/adminDashboard")
}
  },[userInfo])

  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    http
      .post("/user/login", { email: email, password: password })
      .then((res) => {
        if (res?.data?.status === "success") {
          console.log(res.data.data);
          swal("Success", "Successfully Login ", "success");
          setToken(
            res.data.data.user.email,
            res.data.data.token,
            res.data.data.user.role,
            res.data.data.user,
            res.data.data.userIp
          );
        //   window.location.reload();
          // window.location.reload();
        } else {
          // console.log("rrrrrr");
        }
      })
      .catch((err) => {
        console.log("Error", err.response.data.message);
        if (
          err.response.data.message ===
          "No user Found. Please Create an account"
        ) {
          swal("Error", "No user Found. Please Create an account!", "error");
        }
        if (
          err.response.data.message ===
          "Please check your email to verify your account."
        ) {
          swal(
            "Error",
            "Please check your email to verify your account!",
            "error"
          );
        }
        if (err.response.data.message === "email or password are not correct") {
          swal("Error", "Email or Password Wrong! ", "error");
        }
        if (err.response.data.message === "Device limit exceeded") {
          swal("Error", "Device limit exceeded! ", "error");
        }
      });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              onSubmit={(e) => handelSubmit(e)}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your E-mail"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                {/* <Link
                  to="/resetPassword"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link> */}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:scale-105 duration-300"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Don’t have an account yet?{" "}
                <Link
                  to="/signUp"
                  className="font-medium text-primary-600 hover:underline "
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
