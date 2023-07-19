import styled from '@emotion/styled';

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;

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

export { Item, Button };
