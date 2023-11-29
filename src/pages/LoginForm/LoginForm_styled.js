import styled from "styled-components";

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  background-color: #f0f0f0; /* Цвет фона */
  border-radius: 10px; /* Закругление углов */
  padding: 20px; /* Отступы внутри контейнера */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Тень */
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc; /* Граница */
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff; /* Цвет кнопки */
  color: #fff; /* Цвет текста кнопки */
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  margin-right: 5px;
`;