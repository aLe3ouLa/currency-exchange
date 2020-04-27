import styled, { css } from "styled-components";

export const Input = styled.input`
  text-align: right;
  border: none;
  outline: none;
  background: transparent;
  font-size: 3rem;
  display: flex;
  width: 70%;
  ${({ isZero }) =>
    isZero
      ? css`
          color: ${({ theme }) => theme.color.gray};
        `
      : css`
          color: ${({ theme }) => theme.color.text};
        `};
`;

export const Sign = styled.span`
  font-size: 3rem;
`;
