import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  name: yup.string().max(20, "Hey its too largee").required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const saveUser = (data) => {
    // data => user form data 
    // write the code here :D 
  }

  return (
    <div className="registerInput" className="m-32">
      <h1 className="text-form text-center text-indigo-100 pb-8">Create your account</h1>
      <form onSubmit={handleSubmit(saveUser)} className="form h-64 grid gap-1 w-2/5 shadow-2xl p-8 h-96 text-center">
        <input name="name" placeholder="Name" type="text" ref={register} />
        <input
          name="lastName"
          placeholder="Last Name"
          type="text"
          ref={register}
        />
        <input name="email" placeholder="Email" type="email" ref={register} />
        <input
          name="password"
          placeholder="Password"
          type="password"
          ref={register}
        />
        <input
          name="passwordConfirmation"
          placeholder="Confirm password"
          type="password"
          ref={register}
        />
        <button className="button-form bg-indigo-100 w-40 rounded mt-8 h-8">Create account</button>

      </form>
    </div>
  );
};

export default Register;
