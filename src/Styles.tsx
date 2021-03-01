import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    font-family: Roboto;
    font-size: 20px;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  padding: 15px;
  align-items: end;
  font-size: 60px;
  font-weight: bold;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  width: 650px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  padding-top: 70px;
`;

export const SignOutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  background-color: #ddd;
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border-radius: 5px;
  font-size: 18px;
`;

export const ToDoName = styled.p`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
`;

export const ToDoDescription = styled.p`
  margin: 10px 0;
  text-align: center;
`;

export const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ddd;
  border-radius: 5px;
  margin: 15px 0;
`;
