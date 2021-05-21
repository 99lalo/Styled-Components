import React from "react";
import styled, { css } from "styled-components";
import { FadeIn } from "./styled";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.lighter};
  color: ${(props) => props.theme.colors.main};
  font-size: ${(props) => props.theme.fontSizes.p};
  margin: ${({ margin }) => (margin ? margin : "2rem")};
  padding: 0.5rem 1rem;
  margin-top: ${({ theme }) => theme.spacers.large};
  border: 1px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  animation: 2s ${FadeIn} ease-in;
  ${({ primary }) =>
    primary &&
    css`
      background-color: palevioletred;
      color: white;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}

  &:hover {
    color: white;
    background-color: palevioletred;
  }

  @media ${({ theme }) => theme.mediaQueries.bellow786} {
    font-size: 0.4rem;
    color: blue;
  }
`;
const OutterWrapper = styled.div`
  width: 100%;
  background-color: #333;
  margin-top: 1rem;

  &:hover ${StyledButton} {
    color: red;
  }
`;

const SuperButton = styled(StyledButton)`
  font-size: 2.5rem;
`;
const Button = ({ primary, margin, children }) => {
  return (
    <OutterWrapper>
      <StyledButton margin={margin} primary={primary}>
        {children}
      </StyledButton>
    </OutterWrapper>
  );
};

export default Button;
