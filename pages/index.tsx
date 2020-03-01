import * as React from "react";
import { withFormik, FormikProps } from "formik";
// import { Formik, Field, ErrorMessage, FormikProps } from "formik";
import * as Yup from "yup";
import Link from 'next/link';
import Layout from "../components/Layout";
import { Form, Button } from 'react-bootstrap';
import FormBox from "../components/formBox";
import { LoginComponent } from "../generated/apolloComponents";


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
        // // errors,
        // // touched,
        // handleChange,
        // handleBlur,
        handleSubmit,
        // isSubmitting,
        title
    } = props;

    return (
        <Layout>
            <FormBox>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="required">Email addresss</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            // value={values.email}
                             />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="required">Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password"
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            // value={values.password} 
                            />
                    </Form.Group>
                    <Button 
                        className="buttonHolder"
                        variant="outline-secondary" 
                        // type="submit"
                        href="/home"
                    //     disabled={
                    //     isSubmitting ||
                    //     !!(errors.email && touched.email) ||
                    //     !!(errors.password && touched.password)
                    // }
                    >
                        Submit
                    </Button><br/>
                    <Link href="/register">
                        <a className="text-position">Register</a>
                    </Link>
                </Form>
            </FormBox>
        <LoginComponent>
        {(mutate => {
                    return (<button onClick={async () => {
                        const response = await mutate({
                            variables: { email: "gfgh@dfgh.com", password: "gfdfg" }
                        });
                        console.log(response);
                    } }>
                        call login mutation
                    </button>);
        })}
      </LoginComponent>
            <h1>{title}</h1>
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
