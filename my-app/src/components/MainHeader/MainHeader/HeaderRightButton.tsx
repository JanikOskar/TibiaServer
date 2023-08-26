import styled from "styled-components";

const MainLists = styled.ul`
  display: flex;
  padding: 0;
`;

const Link = styled.a`
  margin-right: 20px;
  text-decoration: none;
  text-decoration:none ;
  color:#DFCD00;
`;

export const HeaderRightButton = () => (
  <MainLists>
    <Link href="/download">
      <h3>Download</h3>
    </Link>
    <Link href="/login">
      <h3>Login</h3>
    </Link>
    <Link href="/register">
      <h3>Register</h3>
    </Link>
  </MainLists>
);
