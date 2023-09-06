import styled, { css } from "styled-components";

export const Container = styled.article`
  margin-bottom: 32px;

  /* opacity: ${(props) => (props.removed ? 0.5 : 1)};
  color: ${(props) => (props.removed ? "#f00" : "#fff")}; */

  // retornar vários css em uma mesma expressão
  ${(props) => css`
    opacity: ${props.removed ? 0.5 : 1};
    color: ${props.removed ? "#f00" : "#fff"};
  `}
`;

// CSS-in-JS

export const SubTitle = styled.small`
  display: block;
`;

export const Rate = styled.span`
  font-size: 12px;
  opacity: 0.7;
`;
