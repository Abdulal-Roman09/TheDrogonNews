import React, { useContext } from "react";
import { Link } from "react-router";
import MainLink from "../MainLink/MainLink";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const RegisterPage = () => {
  const { createUser,setUser } = useContext(AuthContext);
  const hendelRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);
    // createUser
    createUser(email, password)
      .then((res) => {
        console.log(res);
        const user=res.user
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <MainLink></MainLink>
      <form
        onSubmit={hendelRegister}
        className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex mx-auto my-20"
      >
        <div className="card-body">
          <h2 className="text-center text-3xl font-semibold">
            Please Register Here
          </h2>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            {/* Name */}
            <input
              name="name"
              type="name"
              className="input"
              placeholder="Name"
            />
            <label className="label">Photo Url</label>
            {/* Photo Url */}
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo Url"
            />
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
              <Link className="">Already Have An Account?</Link>
              <Link to="/login">
                {" "}
                <span className="text-blue-400 underline pl-4">Login</span>
              </Link>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
