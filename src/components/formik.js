import React from "react";
import { useFormik } from "formik";

//lesson formik is almost like formcgroup in angular.

export default function FormikForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: ""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>firstName:</label>
      <input
        id="firstName"
        name="firstName"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <label>lastName:</label>
      <input
        id="lastName"
        name="lastName"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <label>Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
