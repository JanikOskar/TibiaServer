import { Formik, Form, Field, FieldProps } from "formik";
import { useState } from "react";
import { object, string, InferType } from "yup";
import { Input, Space } from "antd";
import { styled } from "styled-components";
import { SubTitle } from "components/SubTitle";

const FormStyle = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #3d3942;
  padding-top: 12px;
`;

const LoginBodyStyle = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #1b191d;
`;

const InputLoginStyle = styled(Input)`
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

export const LoginBody = () => {
  const validationSchema = object({
    login: string().required("Login is required"),
    password: string().required(`Password is required`),
  });

  type FormValues = InferType<typeof validationSchema>;

  const initialValues: FormValues = {
    login: "",
    password: "",
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginBodyStyle style={{ width: "100%", height: "100vh" }}>
      <SubTitle title={`Login`} />
      <div style={{ width: "100%", marginTop: `12px` }}>
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
                <Field name="login">
                  {(fieldProps: FieldProps<string>) => (
                    <InputLoginStyle
                      {...fieldProps.field}
                      id="login"
                      value={login}
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
                </Field>
                {errors.login && touched.login ? (
                  <ErrorStyle>{errors.login}</ErrorStyle>
                ) : null}
                <Field name="password">
                  {(fieldProps: FieldProps<string>) => (
                    <InputPasswordStyle
                      {...fieldProps.field}
                      id="password"
                      value={password}
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
                </Field>
                {errors.password && touched.password ? (
                  <ErrorStyle>{errors.password}</ErrorStyle>
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
                  Zaloguj
                </button>
              </div>
            </FormStyle>
          )}
        </Formik>
      </div>
    </LoginBodyStyle>
  );
};
