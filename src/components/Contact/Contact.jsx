import { Item, Button } from './Contact.styled';

export const Contact = ({ name, number, onClick }) => {
  return (
    <Item>
      <p>{name}</p>
      <p>{number}</p>
      <Button type="button" onClick={onClick}>
        Delete
      </Button>
    </Item>
  );
};
