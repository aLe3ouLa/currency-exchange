import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ExchangeContainer = styled.div`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.background};
  background-color: ${({ theme }) => theme.color.white};
  width: 25px;
  height: 25px;
  padding: ${({ theme }) => theme.spacing.xxs};
  position: absolute;
  top: 50%;
  left: 20px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -14px;
`;

export const ExchangeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.color.primary};
`;
