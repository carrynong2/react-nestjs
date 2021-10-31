import React, { useState } from "react";
import { useHistory } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthService from "../services/AuthService";

type LoginFormProps = {
  loginCallback?: () => void;
};

const LoginForm = (props: LoginFormProps) => {
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const history = useHistory();

  return (
    <div className="LoginForm">
      <Formik
        initialValues={{ login: "", password: "" }}
        validate={(values) => {
          const errors: any = {};
          if (values.login === "") {
            errors.login = "Login required.";
          }
          if (values.password === "") {
            errors.password = "Password required.";
          }
          return errors;
        }}
        onSubmit={async (values, actions) => {
          const result = await AuthService.loginUser(
            values.login,
            values.password
          );
          if (!result) {
            setLoginErrorMessage("Wrong username or password");
          } else {
            setLoginErrorMessage("");
            if (props.loginCallback) {
              props.loginCallback();
            }
            history.push("/");
          }
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {loginErrorMessage && <div>{loginErrorMessage}</div>}
            Login:
            <Field type="input" name="login" />
            <ErrorMessage name="login" component="div" />
            <br />
            Password:
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <br />
            <button disabled={isSubmitting}>Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
