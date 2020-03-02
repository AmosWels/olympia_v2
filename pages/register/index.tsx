import * as React from "react";
import { FormikProps, Formik } from "formik";
import Router from "next/router";
import Link from 'next/link';
import Layout from "../../components/Layout";
import { Form, Col, Button, Spinner } from "react-bootstrap";
import FormBox from "../../components/formBox";
import { title } from "process";
import { registerSchema } from "../../utils/validationSchemas";
import { RegisterComponent } from "../../generated/apolloComponents";

interface IRegisterFormValues {
    password: string;
    confirmPassword: string;
    firstname: string;
    surname: string;
    email: string;
    gender: string;
}

const Signup: React.FunctionComponent = () => (
    <Layout>
        <FormBox>
            <RegisterComponent>
                {register => (
                    <Formik
                        onSubmit={async data => {
                            try {
                                await register({
                                    variables: data
                                });
                                alert(JSON.stringify('Created Succesfully'));
                                Router.push("/");
                            } catch (error) {
                                alert(JSON.stringify('Not created, User Already Exists', error));
                            }
                        }
                        }
                        validationSchema={registerSchema}
                        initialValues={{
                            surname: "",
                            firstname: "",
                            password: "",
                            email: "",
                            gender: "",
                            confirmPassword: ""
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
                                            <Form.Label className="required">First name</Form.Label>
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
                                            <Form.Label className="required">Surname</Form.Label>
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
                                            <Form.Label className="required">Email</Form.Label>
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
                                            <Form.Label className="required"> Gender</Form.Label>
                                            <Form.Control as="select"
                                                defaultValue={title}
                                                name="gender"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.gender}
                                                className={touched.gender && errors.gender ? 'error gender' : 'gender'}
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
                                            <Form.Label className="required">Password</Form.Label>
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
                                            <Form.Label className="required">Confirm Password</Form.Label>
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
                                    </Form.Row><br />
                                    <Form.Row>
                                        <Button className="buttonHolder"
                                            variant="outline-secondary"
                                            type="submit"
                                            disabled={isSubmitting} >
                                            {isSubmitting ? (<Spinner
                                                as="span"
                                                animation="grow"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true" />) : null}
                                            Signup
                                        </Button>
                                    </Form.Row>
                                    <Link href="/">
                                        <a className="text-position">Back to Login</a>
                                    </Link>
                                </Form>
                            )}
                    </Formik>
                )}
            </RegisterComponent>
        </FormBox>
    </Layout >
);

export default Signup;
