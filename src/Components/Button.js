import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  width: fit-content;
  height: 48px;
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid
    ${(props) => (props.theme.color ? props.theme.color : "#4d4d4d")};
  background-color: ${(props) =>
    props.theme.backgroundColor ? props.theme.backgroundColor : "#4d4d4d"};
  color: ${(props) => (props.theme.color ? props.theme.color : "#4d4d4d")};
  transition: all 0.3s linear;
  &:hover {
    opacity: 0.5;
  }
`;
