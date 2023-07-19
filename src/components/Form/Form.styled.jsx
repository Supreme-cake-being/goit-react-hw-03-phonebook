import styled from '@emotion/styled';

const FormBox = styled.form`
  margin-bottom: 28px;
`;

const Label = styled.label`
  margin-bottom: 24px;

  display: block;

  font-size: 20px;
  line-height: 24px;
`;

const Input = styled.input`
  margin-bottom: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;

  display: block;

  font-size: 16px;
  line-height: 20px;

  outline: none;
  border-radius: 16px;
  border: 1px solid black;
`;

const Button = styled.button`
  padding: 8px 16px;

  display: block;

  color: black;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid black;

  transition: color 250ms ease-out, background-color 250ms ease-out;

  &:hover,
  &:focus {
    color: white;
    background-color: black;
  }
`;

export { FormBox, Label, Input, Button };
