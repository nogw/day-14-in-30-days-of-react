import styled from 'styled-components';

export const Container = styled.div`
  position:relative;
  width: 420px;
  background-color: #fff;
  margin-bottom: 20px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
  border-radius: 20px;

  h1, h2 {
    font-size: 15px;
    font-family: monospace;
    
    span {
      font-weight: bold;
    }
  }
`;

export const Image = styled.div`
  height: 180px;
  overflow: hidden;
  border-radius: 15px;
  
  img {
    height: 250px;
    width: 400px;
    object-fit: cover;
    transition: transform .5s ease;

    padding: 0px;
    margin: 0px;

    &:hover {
      transform: scale(1.5)
    }
  }
`;

export const Name = styled.div`
  margin: 15px 0px 15px 0px;
  
  h1 {
    font-weight: 400;
  }
`;

export const Origin = styled.div`
  margin: 15px 0px 15px 0px;

  h1 {
    font-weight: 900;
  }
`;

export const Temperament = styled.div`
  margin: 15px 0px 15px 0px;

  h1 {
    font-weight: 400;
  }
`;

export const Life = styled.div`
  margin: 15px 0px 15px 0px;

  h1 {
    font-weight: 400;
  }
`;

export const Description = styled.div`
  margin: 15px 0px 15px 0px;

  h1 {
    margin: 5px 0px 5px 0px;
    font-weight: 400;
  }
`;

export const Weight = styled.div`
  margin: 15px 0px 15px 0px;

  h1 {
    font-weight: 400;
  }
`;


export const Button = styled.button`
  margin: 15px 0px 15px 0px;

  background-color: #6152F4;
  padding: 10px 20px;
  width: 100%;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-family: monospace;
  font-size: 20px;
  font-weight: bold;
`;
