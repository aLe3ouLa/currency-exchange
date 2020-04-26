import styled, { css } from "styled-components";
import FontAwesome from "react-fontawesome";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 18px;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
  padding: ${({ theme }) => theme.spacing.xxs}
    ${({ theme }) => theme.spacing.xs};
  border: 1px solid ${({ theme }) => theme.color.background};
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  align-self: center;
  position: absolute;
  top: 50%;
  z-index: 2;
  margin-top: -14px;

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 20%;
  }
`;

export const Loading = styled.span`
  margin-left: 5px;
  margin-right: -5px;
  ${({ isLoading }) =>
    isLoading
      ? css`
          color: ${({ theme }) => theme.color.primary};
        `
      : css`
          color: ${({ theme }) => theme.color.white};
        `}
`;

export const Currency = styled.span`
  color: ${({ theme }) => theme.color.primary};
  text-align: center;
`;

export const LineChart = styled(FontAwesome)`
  margin-right: ${({ theme }) => theme.spacing.xxs};
  color: ${({ theme }) => theme.color.primary};
`;

export const Circle = styled(FontAwesome)`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.primary};
`;
