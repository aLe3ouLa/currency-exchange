import styled, { css } from "styled-components";

export const BalanceContainer = styled.p`
  font-size: 1.2rem;
  ${({ error }) =>
    error
      ? css`
          color: ${({ theme }) => theme.color.error};
        `
      : css`
          color: ${({ theme }) => theme.color.gray};
        `};
`;
