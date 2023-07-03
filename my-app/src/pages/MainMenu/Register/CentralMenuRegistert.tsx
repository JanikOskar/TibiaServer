import { Formik, Form, Field, FieldProps } from "formik";
import { useState } from "react";
import styled from "styled-components";
import { object, string, ref, boolean, InferType } from "yup";
import { Input, Space, Checkbox, Button } from "antd";

export const CentralMenuRegister = () => {
  const validationSchema = object({
    login: string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: string().email("Invalid email").required("Required"),
    password: string().required(`PASSWORD_IS_REQUIRED`),
    repeatPassword: string()
      .oneOf([ref("password")], `PASSWORD_DONT_MATCH`)
      .required(`"PASSWORD_CONFIRM_IS_REQUIRED`),
    termsAccepted: boolean()
      .oneOf([true], `THE_TERMS_AND_CONDITION_MUST_BE_ACCEPTED`)
      .required(`THE_TERMS_AND_CONDITION_MUST_BE_ACCEPTED`),
  });

  type FormValues = InferType<typeof validationSchema>;

  const initialValues: FormValues = {
    login: "",
    email: "",
    password: "",
    repeatPassword: "",
    termsAccepted: false,
  };

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <div>
      <div>Create Account</div>
      <>
        <Formik
          initialValues={{
            login: "",
            email: "",
            password: "",
            repeatPassword: "",
            termsAccepted: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log("val", values);
            console.log("actions", actions);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Space direction="vertical">
                <Field name="email">
                  {(fieldProps: FieldProps<string>) => (
                    <Input
                      {...fieldProps.field}
                      value={email}
                      id="email"
                      placeholder="Email"
                      onChange={(event) => {
                        fieldProps.form.setFieldValue(
                          "email",
                          event.target.value
                        );
                        setEmail(event.target.value);
                      }}
                    />
                  )}
                </Field>
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <Field name="login">
                  {(fieldProps: FieldProps<string>) => (
                    <Input
                      {...fieldProps.field}
                      id="login"
                      value={login}
                      placeholder="Login"
                      onChange={(event) => {
                        fieldProps.form.setFieldValue(
                          "login",
                          event.target.value
                        );
                        setLogin(event.target.value);
                      }}
                    />
                  )}
                </Field>

                {errors.login && touched.login ? (
                  <div>{errors.login}</div>
                ) : null}

                <Field name="password">
                  {(fieldProps: FieldProps<string>) => (
                    <Input.Password
                      {...fieldProps.field}
                      id="password"
                      value={password}
                      placeholder="Input Password"
                      onChange={(event) => {
                        fieldProps.form.setFieldValue(
                          "password",
                          event.target.value
                        );
                        setPassword(event.target.value);
                      }}
                    />
                  )}
                </Field>

                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}

                <Field name="repeatPassword">
                  {(fieldProps: FieldProps<string>) => (
                    <Input.Password
                      {...fieldProps.field}
                      value={repeatPassword}
                      id="repeatPassword"
                      placeholder="Repeat Password"
                      onChange={(event) => {
                        fieldProps.form.setFieldValue(
                          "repeatPassword",
                          event.target.value
                        );
                        setRepeatPassword(event.target.value);
                      }}
                    />
                  )}
                </Field>

                {errors.repeatPassword && touched.repeatPassword ? (
                  <div>{errors.repeatPassword}</div>
                ) : null}

                <Field name="termsAccepted">
                  {(fieldProps: FieldProps<string>) => (
                    <Checkbox
                      {...fieldProps.field}
                      name="termsAccepted"
                      checked={termsAccepted}
                      onChange={(e) => {
                        fieldProps.field.onChange(e);
                        setTermsAccepted(e.target.checked);
                      }}
                    >
                      Checkbox
                    </Checkbox>
                  )}
                </Field>
                {errors.termsAccepted && touched.termsAccepted ? (
                  <div>{errors.termsAccepted}</div>
                ) : null}
              </Space>
              <button type="submit">Wyślij</button>
            </Form>
          )}
        </Formik>
      </>
    </div>
  );
};
