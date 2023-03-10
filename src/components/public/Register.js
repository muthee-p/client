import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import * as Yup from "yup";

function Register() {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    date_of_birth: "",
    gender: "",
    address:"",
    password:"",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    date_of_birth: Yup.date()
    .required("Required")
    .max(new Date(), "Date of birth can't be in the future")
    .test("age", "You must be at least 18 years old", (value) => {
      const minAge = 18;
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age >= minAge;
    }),
    gender: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
   password: Yup.string()
      .min(6, "Password should be at least 6 characters long")
      .max(20, "Password should be at most 20 characters long")
      .required("Password is required"),
  });
const history = useNavigate();

  const onSubmit = (data) => {
  	axios.post('http://localhost:3001/citizens', data).then(() =>{
    
    history.push('/insuranceform');
});
  };

  return (
    <div className="max-w-md mx-auto px-4">
      <h1 className="fixed top-0 text-4xl font-bold bg-[#212529] w-[35%] p-2 shadow-xl mb-8">Register Citizenship</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formik) => (
          <Form className="space-y-4 mt-16">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first_name" className="block font-bold mb-2">
                  First Name
                </label>
                <Field type="text" id="first_name" name="first_name" className="border rounded-lg text-zinc-700 py-2 px-4 w-full" />
                <ErrorMessage name="first_name" component="div" className="text-red-500" />
              </div>
              <div>
                <label htmlFor="last_name" className="block font-bold mb-2">
                  Last Name
                </label>
                <Field type="text" id="last_name" name="last_name" className="border rounded-lg text-zinc-700 py-2 px-4 w-full" />
                <ErrorMessage name="last_name" component="div" className="text-red-500" />
              </div>
            </div>
            <div>
              <label htmlFor="date_of_birth" className="block font-bold mb-2">
                Date of Birth
              </label>
              <Field type="date" id="date_of_birth" name="date_of_birth" className="border rounded-lg text-zinc-700 py-2 px-4 w-full" />
              <ErrorMessage name="date_of_birth" component="div" className="text-red-500" />
            </div>
             <div>
              <label className="block font-bold mb-2">Gender</label>
              <div className="flex items-center mb-4">
                <Field type="radio" id="male" name="gender" value="male" className="mr-2" />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex items-center mb-4">
                <Field type="radio" id="female" name="gender" value="female" className="mr-2" />
                <label htmlFor="female">Female</label>
              </div>
              <ErrorMessage name="gender" component="div" className="text-red-500" />
            </div>
            <div>
              <label htmlFor="address" className="block font-bold mb-2">
                Address
              </label>
              <Field type="address" id="address" name="address" className="border rounded-lg text-zinc-700 py-2 px-4 w-full" />
              <ErrorMessage name="address" component="div" className="text-red-500" />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold mb-2">
                Email Address
              </label>
              <Field type="email" id="email" name="email" className="border rounded-lg text-zinc-700 py-2 px-4 w-full" />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>

            <div>
              <label htmlFor="password" className="block font-bold mb-2">
                Password
              </label>
              <Field type="password" id="password" name="password" className="border rounded-lg text-zinc-700 py-2 px-4 w-full" />
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>
            
           
            <div className="flex justify-between">
              <button onClick={onSubmit}
              type="submit" className="bg-amber-500 p-2 w-[6rem] rounded-3xl hover:bg-zinc-700">
              Register</button>
              <button type="submit" className=" bg-zinc-300 text-zinc-700 w-[6rem] rounded-3xl p-2 hover:bg-amber-500 ">
              <Link to='/health/mental'>Go back</Link>
              </button>
              </div>
            
              </Form>
              )}
        </Formik>
        </div>
);
}

export default Register