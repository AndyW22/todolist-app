import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import DarkModeToggle from 'react-dark-mode-toggle';

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  padding: 15px;
  background-color: ${({ theme }) => theme.containerbackground};
  font-size: 60px;
  font-weight: bold;
  justify-content: space-between;

  @media only screen and (max-width: 1100px) {
    font-size: 30px;
    align-items: center;
    min-width: 700px;
  }
`;

export const Spinner = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Toggler = styled(DarkModeToggle)`
  margin: 0 15px;
  min-width: 60px;
`;

export const Text = styled.h1`
  font-size: 20px;
  font-weight: 300;
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
  background-color: ${({ theme }) => theme.containerbackground};
  margin-bottom: 10px;
  padding: 8px;
  color: ${({ theme }) => theme.text};
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
  background-color: ${({ theme }) => theme.containerbackground};
  border-radius: 5px;
  margin: 15px 0;
`;
