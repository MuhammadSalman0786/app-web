import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillInstagram } from "react-icons/ai";
// import { Link } from 'react-router-dom';
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const submitHandler = (event) => {
    event.preventDefault();
    alert(credentials.email);
  };

  const changeHandler = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex justify-center items-center w-full bg-[#D7E3FE]">
      <div className=" bg-[#FFFFFF] flex-col items-center p-5 shadow-xl rounded-3xl h-auto m-20 lg:w-[400px] md:w-3/6 w-full ">
        <h2 className="font-medium text-center text-xl mb-4">
          Hello! Welcome back
        </h2>

        <form
          className=" flex flex-col gap-3 "
          onSubmit={submitHandler}
          action=""
        >
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1" htmlFor="email">
              E-mail address
            </label>

            <input
              required
              className="border-2 text-sm w-full p-1 rounded-sm"
              id="email"
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter your email address"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              required
              className="border-2 text-sm p-1 rounded-sm"
              type="password"
              name="password"
              id="password"
              onChange={changeHandler}
              placeholder="Passwoord"
            />
          </div>
          <div className="flex justify-around">
            <div className="flex gap-1">
              <input type="checkbox" name="remember" id="remember" />
              <label className="text-sm" htmlFor="remember">
                Remember me
              </label>
            </div>
            <span className="text-blue-600 flex hover:underline justify-center text-sm">
              {" "}
              <Link to="/forgot">Forgot password? </Link>
            </span>
          </div>

          <div required className="flex gap-3 ">
            <div className=" ml-5 flex gap-1">
              <input
                className=""
                type="radio"
                value="female"
                name="gender"
                id="female"
              />
              <label className="text-sm" htmlFor="female">
                Buyer
              </label>
            </div>
            <div className="flex gap-1">
              <input
                className=""
                type="radio"
                value="male"
                name="gender"
                id="male"
              />
              <label className="text-sm" htmlFor="male">
                Supplier
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            <button
              className="bg-[#0060df] text-white p-2 hover:bg-[#003891] rounded-md font-medium"
              type="submit"
            >
              Login
            </button>
            <span className="abc text-center">or</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="border cursor-pointer hover:shadow-lg rounded p-2">
              <FcGoogle className="text-xl" />
            </div>
            <div className="border cursor-pointer hover:shadow-lg rounded p-2">
              <BsFacebook className="text-xl" />
            </div>
            <div className="border cursor-pointer hover:shadow-lg rounded p-2">
              <AiFillInstagram className="text-xl" />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-sm">Dont't have and account? </p>
            <Link>
              <span className="text-blue-500 text-sm">Create account</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
