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
    <div className="loginInput">
      <form onSubmit={handleSubmit(sendUser)}>
        <input
          name="email"
          type="email"
          placeholder="example@email.com"
          ref={register}
        />
        <input
          name="password"
          type="password"
          placeholder="Password..."
          ref={register}
        />
        <input type="submit" />
      </form>
      <div id="register">
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
