import styled from 'styled-components';

export const Container = styled.div`
  background-color: #6152F4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 50px;

  nav {
    display: flex;
    align-items: center;
    a {
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      margin: 0px 0px 0px 50px;
      text-decoration: none;
    }
  }
`;

export const Icon = styled.div`
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 35px;
`;