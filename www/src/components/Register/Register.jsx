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
    <div className="registerInput">
      <h1>Register</h1>
      <form onSubmit={handleSubmit(saveUser)}>
        <input name="name" placeholder="Name" type="text" ref={register} />
        <input
          name="lastName"
          placeholder="Last Name"
          type="text"
          ref={register}
        />
        <input name="email" placeholder="email" type="email" ref={register} />
        <input
          name="password"
          placeholder="password"
          type="password"
          ref={register}
        />
        <input
          name="passwordConfirmation"
          placeholder="Coinfirm password"
          type="password"
          ref={register}
        />
        <input
          type="submit"
        />
      </form>
    </div>
  );
};

export default Register;
