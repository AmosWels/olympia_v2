import * as React from "react";
import { FormikProps, Formik } from "formik";
import Router from "next/router";
import Link from 'next/link';
import Layout from "../components/Layout";
import { Form, Button, Spinner } from "react-bootstrap";
import FormBox from "../components/formBox";
import { loginSchema } from "../utils/validationSchemas";
import { LoginComponent } from "../generated/apolloComponents";

interface ILoginFormValues {
    email: string;
    password: string;
}



const Login: React.FunctionComponent = () => (
    <Layout title="Login Page">
        <FormBox>
            <LoginComponent>
                {login => (
                    <Formik
                        onSubmit={async (data, { setErrors }) => {
                            try {
                                const response = await login({
                                    variables: data
                                });
                                if(response !== 'undefined'){
                                let data = response.data
                                if(data){
                                    localStorage.setItem('token', JSON.stringify(data.login.token))
                                }
                                
                                }
                                Router.push("/home");
                            } catch (error) {
                                // alert(JSON.stringify('Wrong Credentials', error));
                                setErrors({
                                    email: "invalid login",
                                    password: "check password"
                                });
                            }
                        }
                        }
                        validationSchema={loginSchema}
                        initialValues={{
                            email: "",
                            password: ""
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
                        }: FormikProps<ILoginFormValues>) => (
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="validationCustom01">
                                        <Form.Label className="required">Email</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            className={touched.email && errors.email ? "error" : ''}
                                        />
                                        {touched.email && errors.email ? (
                                            <div className="error-message">{errors.email}</div>
                                        ) : null}
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label className="required">Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter password"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            className={touched.password && errors.password ? "error" : ''}
                                        />
                                        {touched.password && errors.password ? (
                                            <div className="error-message">{errors.password}</div>
                                        ) : null}
                                    </Form.Group><br />
                                    <Form.Row>
                                        <Button
                                            className="buttonHolder"
                                            variant="outline-secondary"
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (<Spinner
                                                as="span"
                                                animation="grow"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true" />) : null}
                                            Login
                                    </Button>
                                    </Form.Row>
                                    <br />
                                    <Link href="/register">
                                        <a className="text-position-login">Register</a>
                                    </Link>
                                </Form>
                            )}
                    </Formik>
                )}
            </LoginComponent>
        </FormBox>
    </Layout>
);
export default Login;
