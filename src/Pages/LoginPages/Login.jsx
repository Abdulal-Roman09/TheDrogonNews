import React, { useContext } from "react";
import Navber from "../../Layouts/Navber";
import { Link } from "react-router";
import MainLink from "../MainLink/MainLink";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const hendelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    // signin
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        alert("Logged in successfully");
      })
      .catch((error) => {
        alert("Login failed");
      });
  };
  return (
    <div>
      <MainLink />

      <form
        onSubmit={hendelLogin} 
        className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex mx-auto my-20"
      >
        <div className="card-body">
          <h2 className="text-center text-3xl font-semibold ">
            Please Login Here
          </h2>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            {/* Email */}
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            {/* Password */}
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div className="bg-base-100">
              <Link className="">If you are not registered yet?</Link>
              <Link to="/register">
                <span className="text-blue-400 underline pl-4">Register</span>
              </Link>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Login;
