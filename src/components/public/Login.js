import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    dob: Yup.date().required("Required"),
    gender: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="max-w-md mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Login</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formik) => (
          <Form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block font-bold mb-2">
                  First Name
                </label>
                <Field type="text" id="firstName" name="firstName" className="border rounded-lg py-2 px-4 w-full" />
                <ErrorMessage name="firstName" component="div" className="text-red-500" />
              </div>
              <div>
                <label htmlFor="lastName" className="block font-bold mb-2">
                  Last Name
                </label>
                <Field type="text" id="lastName" name="lastName" className="border rounded-lg py-2 px-4 w-full" />
                <ErrorMessage name="lastName" component="div" className="text-red-500" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block font-bold mb-2">
                Email Address
              </label>
              <Field type="email" id="email" name="email" className="border rounded-lg py-2 px-4 w-full" />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div>
              <label htmlFor="dob" className="block font-bold mb-2">
                Date of Birth
              </label>
              <Field type="date" id="dob" name="dob" className="border rounded-lg py-2 px-4 w-full" />
              <ErrorMessage name="dob" component="div" className="text-red-500" />
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
            <div className="flex justify-end">
              <button type="submit" className="bg-blue">Login</button>
              </div>
            
              </Form>
              )}
        </Formik>
        </div>
);
}

export default Login