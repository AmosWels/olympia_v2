import * as React from "react";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";
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

interface FormValues {
    email: string;
    password: string;
    firstname: string;
    surname: string;
    gender: string;
    confirmPassword: string;
}

interface OtherProps {
    title?: string;
}

interface MyFormProps {
    initialEmail?: string;
    initialPassword?: string;
    initialConfirmPassword?: string;
    initialGender?: string;
    initialFirstname?: string;
    initialSurname?: string;
}

const Signup = (props: OtherProps & FormikProps<FormValues>) => {
    const {
        // values,
        errors,
        touched,
        // handleChange,
        // handleBlur,
        handleSubmit,
        isSubmitting,
        title
    } = props;

    return (
        <Layout>
            <FormBox>
                <Form onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="First name "
                                    name="firstname"
                                    defaultValue={title}
                                />
                                {touched.firstname && errors.firstname && <div>{errors.firstname}</div>}
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Surname</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="First surname "
                                    defaultValue={title}
                                    name="surname"
                                />
                                {touched.surname && errors.surname && <div>{errors.surname}</div>}
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
                                />
                                {touched.email && errors.email && <div>{errors.email}</div>}
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Gender "
                                    defaultValue={title}
                                    name="gender"
                                />
                                {touched.gender && errors.gender && <div>{errors.gender}</div>}
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
                                />
                                {touched.password && errors.password && <div>{errors.password}</div>}
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm password "
                                    name="confirmPassword"
                                    defaultValue={title}
                                />
                                {touched.confirmPassword && errors.confirmPassword && <div>{errors.confirmPassword}</div>}
                            </Form.Group>
                        </Form.Row>
                        <Button variant="outline-secondary" type="submit" disabled={isSubmitting}>Submit form</Button><br />
                    <Link href="/">
                        <a>Back to Login</a>
                    </Link>
                </Form>

            </FormBox>
        </Layout>
    );
};

const App = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => ({
        email: props.initialEmail || "",
        password: props.initialPassword || "",
        firstname: props.initialFirstname || "",
        surname: props.initialSurname || "",
        gender: props.initialGender || "",
        confirmPassword: props.initialConfirmPassword || ""
    }),

    validationSchema: Yup.object().shape({
        firstName: Yup.string().required('First name is required!'),
        email: Yup.string()
            .required('Email is required!'),
        password: Yup.string()
            .min(4, 'Password must be at least 4 characters long.')
            .matches(
                /^(?=.*[A-Z]).{4,}$/,
                'Your password must be at least 4 characters and contain at least one uppercase character.'
            ),
        confirmPassword: Yup.string()
            .required('This field is required!')
            .oneOf([Yup.ref('password'), null], 'Passwords don\'t match'),
    }),

    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        setTimeout(() => {
          if (values.email === 'yomi@gmail.io') {
            setErrors({ email: 'That email is already taken' })
          } else {
            resetForm()
          }
          setSubmitting(false)
        }, 2000)
      }
})(Signup);

export default App
