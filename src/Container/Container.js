import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid
    ${(props) => (props.theme.color ? props.theme.color : "#4d4d4d")};
  background-color: ${(props) =>
    props.theme.backgroundColor ? props.theme.backgroundColor : "#4d4d4d"};
  color: ${(props) => (props.theme.color ? props.theme.color : "#4d4d4d")};
`;
