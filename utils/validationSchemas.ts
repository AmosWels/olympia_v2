import * as yup from "yup";

const email = yup
  .string()
  .email("Invalid email")
  .required("Required");

const password = yup
  .string()
  .min(2, "Must be > 2 characters")
  .required("Required");

const confirmPassword = yup
  .string()
  .required('This field is required!')
  .oneOf([yup.ref('password'), null], 'Passwords don\'t match');

export const registerSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(2, "Must be >2  characters")
    .required("Required"),
  gender: yup
    .string()
    .min(2, "This field is required!")
    .required("Required"),
  surname: yup
    .string()
    .min(2, "Must be > 2 characters")
    .required("Required"),
  email,
  password,
  confirmPassword
});

export const loginSchema = yup.object().shape({
  email,
  password
});
