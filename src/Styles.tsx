import styled from 'styled-components';

export const TitleContainer = styled.h2`
  margin: auto;
  padding-bottom: 15px;
  font-size: 50px;
`;

export const Container = styled.div`
  display: flex;
  width: 650px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  padding-top: 70px;
  font-family: Roboto;
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
  font-size: 20px;
  text-align: center;
`;



export const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ddd;
  border-radius: 5px;
  margin: 15px 0;
`;
