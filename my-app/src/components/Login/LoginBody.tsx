import { Formik, Form, Field, FieldProps } from "formik";
import { useState } from "react";
import { object, string, InferType } from "yup";
import { Input, Space } from "antd";
import { styled } from "styled-components";
import { SubTitle } from "components/SubTitle";

const FormStyle = styled(Form)`
display:flex;
align-items:center;
flex-direction:column;
`;

export const LoginBody = () => {
  const validationSchema = object({
    login: string()
      .required("Required"),
    password: string().required(`PASSWORD IS REQUIRED`),
  });

  type FormValues = InferType<typeof validationSchema>;

  const initialValues: FormValues = {
    login: "",
    password: "",
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{width: '100%'}}>
      <SubTitle title={`Login`} />
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
              </Space>
              <button style={{width: '10%'}} type="submit">Zaloguj</button>
            </FormStyle>
          )}
        </Formik>
      </div>
    </div>
  );
};
