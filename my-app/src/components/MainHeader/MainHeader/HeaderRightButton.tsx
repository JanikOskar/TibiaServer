import styled from 'styled-components';

const MainLists = styled.ul`
  display: flex;
  padding: 0;
`;


const Hidden = styled.ul`
  display: none;
`;

export const HeaderRightButton = () => (
  <MainLists>
    <div>
      <a href="/download">Download</a>
    </div>
    <div>
      <a href="/login">Login</a>
    </div>
    <div>
      <a href="/register">Register</a>
    </div>
  </MainLists>
);
