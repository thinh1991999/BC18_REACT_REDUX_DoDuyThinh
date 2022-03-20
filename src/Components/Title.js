import styled from "styled-components";

export const Title = styled.h3`
  padding: 10px 0;
  text-align: start;
  margin: 20px 0 10px;
  border-top: 1px solid
    ${(props) => (props.theme.border ? props.theme.border : "#4d4d4d")};
  border-bottom: 1px solid
    ${(props) => (props.theme.border ? props.theme.border : "#4d4d4d")};
  color: ${(props) => (props.theme.color ? props.theme.color : "#4d4d4d")};
`;
