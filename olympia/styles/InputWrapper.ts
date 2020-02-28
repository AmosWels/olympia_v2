import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const LoginDetails = styled.div`
  position: absolute;
  width: 400px;
  height: 300px;
  left: 55%;
  top: 40%;
  background: #f9f9f9;
  border: 1px solid default #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 25px;`;

export const LoginMail = styled.div`
  top: 20%;
`;
export const LoginPassword = styled.div`
position: absolute;
width: 80%;
height: 35px;
left: 10%;
top: 50%;
`;

export const Label = styled.div`
position: absolute;
width: 104px;
height: 25.5px;
left: 10%;
font-family: Arial;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
`;
