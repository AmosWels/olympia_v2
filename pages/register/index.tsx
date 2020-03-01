import * as React from "react";
import { FormikProps, Formik } from "formik";
// import * as Yup from "yup";
// import { graphql } from 'react-apollo'

// import { REGISTER_MUTATION } from "../../utils/graphql/mutation";

// import Wrapper from "../../styles/Wrapper";
// import InputWrapper from "../../styles/InputWrapper";
// import Input from "../../styles/Input";
// import Label from "../../styles/Label";
import Link from 'next/link';
import Layout from "../../components/Layout";
import { Form, Col, Button } from "react-bootstrap";
import FormBox from "../../components/formBox";
// import Router from "next/dist/next-server/server/router";
// import Router from "next/router";
import { title } from "process";
import { registerSchema } from "../../utils/validationSchemas";
// import console = require("console");

interface IRegisterFormValues {
    password: string;
    firstname: string;
    surname: string;
    email: string;
    confirmPassword: string;
    gender: string;
}

const Signup: React.FunctionComponent = () => (
    <Layout>
        <FormBox>
            {/* {() => ( */}
            <Formik
                validationSchema={registerSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log('>>', values)
                    setSubmitting(true);
                    resetForm();
                    setSubmitting(false);

                }}
                // onSubmit={(data) => {
                //     console.log('>>', data)
                // try {
                //     await register({
                //         variables: {
                //             data
                //         }
                //     });

                //     Router.push("/");
                // } catch (error) {
                //     const errors =
                //         (error.graphQLErrors[0] &&
                //             error.graphQLErrors[0].validationErrors) ||
                //         [];

                //     const validationErrors = errors.reduce(
                //         (obj: any, err: { property: string; constraints: string }) => {
                //             obj[err.property] = Object.values(err.constraints)[0];
                //             return obj;
                //         },
                //         {}
                //     );

                //     setErrors(validationErrors);
                //     console.error(error);
                // }
                // }}
                initialValues={{
                    surname: "",
                    firstname: "",
                    password: "",
                    confirmPassword: "",
                    email: "",
                    gender: ""
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }: FormikProps<IRegisterFormValues>) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="First name "
                                        name="firstname"
                                        defaultValue={title}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.firstname}
                                        className={touched.firstname && errors.firstname ? "error" : ''}
                                    />
                                    {touched.firstname && errors.firstname ? (
                                        <div className="error-message">{errors.firstname}</div>
                                    ) : null}
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="First surname "
                                        defaultValue={title}
                                        name="surname"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.surname}
                                        className={touched.surname && errors.surname ? "error" : ''}
                                    />
                                    {touched.surname && errors.surname ? (
                                        <div className="error-message">{errors.surname}</div>
                                    ) : null}
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter email"
                                        name="email"
                                        defaultValue={title}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        className={touched.email && errors.email ? "error" : ''}
                                    />
                                    {touched.email && errors.email ? (
                                        <div className="error-message">{errors.email}</div>
                                    ) : null}
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label> Gender</Form.Label>
                                    <Form.Control as="select"
                                        defaultValue={title}
                                        name="gender"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.gender}
                                        className={touched.gender && errors.gender ? "error" : null}
                                    >
                                        <option value="" label="Select Gender" />
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </Form.Control>
                                    {touched.gender && errors.gender ? (
                                        <div className="error-message">{errors.gender}</div>
                                    ) : null}
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="6" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                        defaultValue={title}
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        className={touched.password && errors.password ? "error" : ''}
                                    />
                                    {touched.password && errors.password ? (
                                        <div className="error-message">{errors.password}</div>
                                    ) : null}
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Repeat password "
                                        name="confirmPassword"
                                        defaultValue={title}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confirmPassword}
                                        className={touched.confirmPassword && errors.confirmPassword ? "error" : ''}
                                    />
                                    {touched.confirmPassword && errors.confirmPassword ? (
                                        <div className="error-message">{errors.confirmPassword}</div>
                                    ) : null}
                                </Form.Group>
                            </Form.Row><br/>
                            <Form.Row>
                            <Button variant="outline-secondary" type="submit" disabled={isSubmitting}>Submit</Button><br />
                            </Form.Row>
                            <Link href="/">
                                <a>Back to Login</a>
                            </Link>
                        </Form>
                    )}
            </Formik>
        </FormBox>
    </Layout>
);

export default Signup;
