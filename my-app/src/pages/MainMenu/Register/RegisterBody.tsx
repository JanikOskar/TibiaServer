import { Formik, Form, Field, FieldProps } from "formik";
import { useState } from "react";
import { object, string, ref, boolean, InferType } from "yup";
import { Input, Space, Checkbox, Button } from "antd";
import { SubTitle } from "../../../components/SubTitle";
import { styled } from "styled-components";

const RegisterBodyStyle = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #3d3942;
`;

const FormStyle = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 12px;
`;

const FieldStyle = styled(Field)`
  background-color: #191c21;
`;

const InputStyle = styled(Input)`
  color: #dfcd00;
  border-color: #191c21;
  border-width: 4px;
  &:focus {
    border-color: #dfcd00;
    border-width: 4px;
  }
  &:hover {
    border-color: #dfcd00;
    border-width: 4px;
  }
`;

const InputPasswordStyle = styled(Input.Password)`
  color: #dfcd00;
  border-color: #191c21;
  border-width: 4px;
  &&:focus {
    border-color: #dfcd00;
    border-width: 4px;
  }
  &&:hover {
    border-color: #dfcd00;
    border-width: 4px;
  }
`;

const ErrorStyle = styled.div`
  color: #db162f;
`;

const CheckboxStyle = styled(Checkbox)`
  &&& {
    color: #bea6d8;
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: #dfcd00;
    }
    .ant-checkbox-inner {
      width: 20px;
      height: 20px;
      box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.02),
        0px 1px 3px rgba(50, 50, 93, 0.15);
      border-radius: 4px;
    }
  }
`;

export const RegisterBody = () => {
  const validationSchema = object({
    login: string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    email: string().email("Invalid email").required("Required"),
    password: string().required(`Password is required`),
    repeatPassword: string()
      .oneOf([ref("password")], `Password dont match`)
      .required(`Password is required`),
    termsAccepted: boolean()
      .oneOf([true], `The terms and condition must be accepted`)
      .required(`The terms and condition must be accepted`),
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
    <RegisterBodyStyle>
      <SubTitle title={`Create Account`} />
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
            <Space direction="vertical" style={{ width: "80%" }}>
              <FieldStyle name="email">
                {(fieldProps: FieldProps<string>) => (
                  <InputStyle
                    {...fieldProps.field}
                    value={email}
                    style={{ color: "#212B31" }}
                    id="email"
                    placeholder="Email"
                    onChange={(event: any) => {
                      fieldProps.form.setFieldValue(
                        "email",
                        event.target.value
                      );
                      setEmail(event.target.value);
                    }}
                  />
                )}
              </FieldStyle>
              {errors.email && touched.email ? (
                <ErrorStyle>{errors.email}</ErrorStyle>
              ) : null}
              <FieldStyle name="login">
                {(fieldProps: FieldProps<string>) => (
                  <InputStyle
                    {...fieldProps.field}
                    id="login"
                    value={login}
                    style={{ color: "#212B31" }}
                    placeholder="Login"
                    onChange={(event: any) => {
                      fieldProps.form.setFieldValue(
                        "login",
                        event.target.value
                      );
                      setLogin(event.target.value);
                    }}
                  />
                )}
              </FieldStyle>

              {errors.login && touched.login ? (
                <ErrorStyle>{errors.login}</ErrorStyle>
              ) : null}

              <FieldStyle name="password">
                {(fieldProps: FieldProps<string>) => (
                  <InputPasswordStyle
                    {...fieldProps.field}
                    id="password"
                    value={password}
                    style={{ color: "#212B31" }}
                    placeholder="Input Password"
                    onChange={(event: any) => {
                      fieldProps.form.setFieldValue(
                        "password",
                        event.target.value
                      );
                      setPassword(event.target.value);
                    }}
                  />
                )}
              </FieldStyle>

              {errors.password && touched.password ? (
                <ErrorStyle>{errors.password}</ErrorStyle>
              ) : null}

              <FieldStyle name="repeatPassword">
                {(fieldProps: FieldProps<string>) => (
                  <InputPasswordStyle
                    {...fieldProps.field}
                    value={repeatPassword}
                    id="repeatPassword"
                    style={{ color: "#212B31" }}
                    placeholder="Repeat Password"
                    onChange={(event: any) => {
                      fieldProps.form.setFieldValue(
                        "repeatPassword",
                        event.target.value
                      );
                      setRepeatPassword(event.target.value);
                    }}
                  />
                )}
              </FieldStyle>

              {errors.repeatPassword && touched.repeatPassword ? (
                <ErrorStyle>{errors.repeatPassword}</ErrorStyle>
              ) : null}

              <FieldStyle name="termsAccepted">
                {(fieldProps: FieldProps<string>) => (
                  <CheckboxStyle
                    {...fieldProps.field}
                    name="termsAccepted"
                    checked={termsAccepted}
                    onChange={(e: any) => {
                      fieldProps.field.onChange(e);
                      setTermsAccepted(e.target.checked);
                    }}
                  >
                    I have read the{" "}
                    <a href="/rules" style={{ color: "#dfcd00" }}>
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/rules" style={{ color: "#dfcd00" }}>
                      Privacy Policy
                    </a>{" "}
                    and I do accept them
                  </CheckboxStyle>
                )}
              </FieldStyle>
              {errors.termsAccepted && touched.termsAccepted ? (
                <ErrorStyle>{errors.termsAccepted}</ErrorStyle>
              ) : null}
            </Space>
            <div
              style={{
                width: `80%`,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                style={{
                  padding: `10px`,
                  backgroundColor: "#1B191D",
                  color: "#dfcd00",
                  marginBottom: "8px",
                }}
              >
                Wyślij
              </button>
            </div>
          </FormStyle>
        )}
      </Formik>
    </RegisterBodyStyle>
  );
};
