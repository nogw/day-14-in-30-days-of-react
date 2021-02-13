import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  min-height:85vh;

  div {
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    img {
    border-radius:30px;
    height:130px;
    width:130px;
    }

    h1 {
      padding: 15px;
      font-family: monospace;
      font-weight: 900;
      font-size: 30px;
    }
    p {
      width: 400px;
      font-family: monospace;
      font-size: 20px;
      text-align: center;
    }
  }
`;

