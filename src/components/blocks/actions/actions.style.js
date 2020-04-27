import styled from "./node_modules/styled-components";
import { Link } from "./node_modules/react-router-dom";
import { FontAwesomeIcon } from "./node_modules/@fortawesome/react-fontawesome";

export const ExchangeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Exchange = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;

  p {
    color: ${({ theme }) => theme.color.primary};
    margin: 4px 0;
    font-weight: 500;
  }
`;

export const ExchangeIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  padding: 8px;
  border-radius: 50%;
  min-width: 30px;
  min-height: 30px;
`;
