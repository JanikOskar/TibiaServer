import { Formik, Form, Field, FieldProps } from "formik";
import { useState } from "react";
import { object, string, ref, boolean, InferType } from "yup";
import { Input, Space, Checkbox } from "antd";
import { SubTitle } from "../../../components/SubTitle";
import { styled } from "styled-components";

const FormStyle = styled(Form)`
display:flex;
align-items:center;
flex-direction:column;
`;

export const RegisterBody = () => {
  const validationSchema = object({
    login: string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: string().email("Invalid email").required("Required"),
    password: string().required(`PASSWORD IS REQUIRED`),
    repeatPassword: string()
      .oneOf([ref("password")], `PASSWORD DONT MATCH`)
      .required(`"PASSWORD CONFIRM IS REQUIRED`),
    termsAccepted: boolean()
      .oneOf([true], `THE TERMS AND CONDITION MUST BE ACCEPTED`)
      .required(`THE TERMS AND CONDITION MUST BE ACCEPTED`),
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
    <div style={{width: '100%'}}>
      <SubTitle title={`Create Account`} />
      <div style={{width: '100%'}}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log("val", values);
            console.log("actions", actions);
          }}
        >
          {({ errors, touched }) => (
            <FormStyle>
              <Space direction="vertical" style={{width: '80%'}}>
                <Field name="email" >
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
                      I have read the <a href="/rules">Terms of Service</a> and <a href="/rules">Privacy Policy</a> and I do accept them
                    </Checkbox>
                  )}
                </Field>
                {errors.termsAccepted && touched.termsAccepted ? (
                  <div>{errors.termsAccepted}</div>
                ) : null}
              </Space>
              <button style={{width: '10%'}} type="submit">Wyślij</button>
            </FormStyle>
          )}
        </Formik>
      </div>
    </div>
  );
};
