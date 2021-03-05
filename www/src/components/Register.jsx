import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().max(20, "Hey its too large").required(),
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
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const saveUser = (data, e) => {
    // data => user form data
    // write the code here :D
    console.log(data);
    e.target.reset(); // reset after form submit
    setIsBoxVisible(true);
  };

  return (
    <div className="registerInput" className="m-32">
      <h2 className="text-form text-center text-indigo-100 pb-8">
        Create your account
      </h2>
      <form
        onSubmit={() => {
          handleSubmit(saveUser);
          reset();
        }}
        className="form h-64 grid gap-1 w-2/5 shadow-2xl p-8 h-96 text-center"
      >
        <div
          className={`${isBoxVisible ? "" : "hidden"
            } alert flex flex-row items-center bg-green-200 p-5 rounded border-b-2 border-green-300`}
        >
          <div className="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
            <span className="text-green-500">
              <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
          <div className="alert-content ml-4">
            <div className="alert-title font-semibold text-lg text-left text-green-800">
              Success
            </div>
            <div className="alert-description text-sm text-green-600">
              Thanks for registering!
            </div>
          </div>
        </div>

        <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {errors.name?.message}
        </p>
        <input name="name" placeholder="Name" type="text" ref={register} />

        <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {errors.lastName?.message}
        </p>
        <input
          name="lastName"
          placeholder="Last Name"
          type="text"
          ref={register}
        />

        <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {errors.email?.message}
        </p>
        <input name="email" placeholder="Email" type="email" ref={register} />

        <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {errors.password?.message}
        </p>
        <input
          name="password"
          placeholder="Password"
          type="password"
          ref={register}
        />

        <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {errors.passwordConfirmation?.message}
        </p>
        <input
          name="passwordConfirmation"
          placeholder="Confirm password"
          type="password"
          ref={register}
        />

        <button className="button-form bg-indigo-100 w-40 rounded mt-8 h-8">
          Create account
        </button>
      </form>
    </div>
  );
};

export default Register;
