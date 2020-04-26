import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RatesContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 18px;
  font-size: 1.2rem;
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

export const Currency = styled.span`
  color: ${({ theme }) => theme.color.primary};
  text-align: center;
`;

export const LineChart = styled(FontAwesomeIcon)`
  margin-right: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.color.primary};
`;
