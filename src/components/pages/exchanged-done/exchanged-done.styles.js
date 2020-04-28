import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ExchangedDoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const Done = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: ${({ theme }) => theme.color.primary};
`;

export const Paragraph = styled.p`
  font-size: 1.8rem;
  margin: ${({ theme }) => theme.spacing.sm} 0;
`;
