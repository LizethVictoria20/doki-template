import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const Login = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const sendUser = (data) => {
    // data => user form data
    // write the code here :D
    console.log(data);
  };
  return (
    <div className="loginInput m-24">
      <h1 className="text-form text-center text-indigo-100 pb-8">Login your account</h1>

      <form onSubmit={handleSubmit(sendUser)} className="form h-full grid gap-1 w-2/5 shadow-2xl p-8 text-center">
        <input
          name="email"
          type="email"
          placeholder="example@email.com"
          ref={register}
          className="mb-8"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={register}
          className="mb-8"
        />
        <button className="button-form bg-indigo-100 w-24 rounded mt-8 h-8">Submit</button>
        <div id="register" className="mt-8 text-white">
          <Link to="/register">Create account</Link><br />
          <a href="/">Forgot Password?</a>
        </div>
      </form>

    </div>
  );
};

export default Login;
