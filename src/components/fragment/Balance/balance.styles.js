import styled, { css } from "styled-components";

export const BalanceContainer = styled.p`
  font-size: 1.2rem;
  margin-bottom: calc(
    ${({ theme }) => theme.spacing.sm} + ${({ theme }) => theme.spacing.xxs}
  );
  ${({ error }) =>
    error
      ? css`
          color: ${({ theme }) => theme.color.error};
        `
      : css`
          color: ${({ theme }) => theme.color.gray};
        `};
`;
