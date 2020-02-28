import * as React from "react";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

import { Wrapper, LoginDetails, LoginPassword} from "../styles/InputWrapper";
import Input from "../styles/Input";
import {LabelEmail, LabelPassword }from "../styles/Label";

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
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        title
    } = props;

    return (
        <Wrapper>
            {/* <img src={logo} className="app-logo" alt="logo" /> */}
            {/* <img src="../static/ologo.jpeg" /> */}
            <h1>{title}</h1>
            <LoginDetails>
                <form onSubmit={handleSubmit}>
                    <LabelEmail>Email</LabelEmail>
                    <Input
                        width={80}
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    
                    <LabelPassword>Password</LabelPassword>
                    <LoginPassword>
                    <Input
                        width={80}
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    </LoginPassword>
                    <button
                        type="submit"
                        disabled={
                            isSubmitting ||
                            !!(errors.email && touched.email) ||
                            !!(errors.password && touched.password)
                        }
                    >
                        Sign In
                </button>
                </form>
            </LoginDetails>
        </Wrapper>
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
