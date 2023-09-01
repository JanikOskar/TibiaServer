import {
  AndroidOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import styled from "styled-components";
import { SubTitle } from "../../../components/SubTitle";

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonStyled = styled(Button)`
  width: 80%;
  margin-top: 12px;
  background-color: transparent;
  color: #dfe4ed;
  border: solid #dfe4ed 2px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
  display: block;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  text-decoration: none;
`;

export const DownloadBody = () => {
  return (
    <Main>
      <SubTitle title="Download" />
      <ButtonStyled
        className="regular"
        type="primary"
        shape="round"
        icon={<WindowsOutlined />}
        size={"large"}
      >
        Regular Client
      </ButtonStyled>
      <ButtonStyled
        type="primary"
        shape="round"
        icon={<WindowsOutlined />}
        size={"large"}
      >
        Custom Client
      </ButtonStyled>
      <ButtonStyled
        type="primary"
        shape="round"
        icon={<AndroidOutlined />}
        size={"large"}
      >
        Android Client
      </ButtonStyled>
    </Main>
  );
};
