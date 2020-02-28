import * as React from "react";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";
import Link from 'next/link';
// import {LoginDetails, LoginPassword} from "../styles/InputLayout";
// import Input from "../styles/Input";
// import {LabelEmail, LabelPassword }from "../styles/Label";
import Layout from "../components/Layout";
import { Form, Button } from 'react-bootstrap';
import FormBox from "../components/formBox";


// import logo from "../static/ologo.jpeg";

interface FormValues {
    email: string;
    password: string;
}

interface OtherProps {
    title?: string;
}

interface MyFormProps {
    initialEmail?: string;
    initialPassword?: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const {
        // values,
        // errors,
        // touched,
        // handleChange,
        // handleBlur,
        // handleSubmit,
        // isSubmitting,
        title
    } = props;

    return (
        <Layout>
            <FormBox>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="outline-secondary" type="submit">
                        Submit
                    </Button>
                    <Link href="/register">
                        <a>Register</a>
                    </Link>
                </Form>
            </FormBox>
             {/* <img src={logo} className="app-logo" alt="logo" /> */}
             {/* <img src="../static/ologo.jpeg" /> */}
            <h1>{title}</h1>
            {/* <LoginDetails> */}
            {/* </LoginDetails> */}
        </Layout>
    );
};

const App = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => ({
        email: props.initialEmail || "",
        password: props.initialPassword || ""
    }),

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string().required("Password is required")
    }),

    handleSubmit(
        { email, password }: FormValues,
        // { props, setSubmitting, setErrors }
    ) {
        console.log(email, password);
    }
})(InnerForm);

export default App;
