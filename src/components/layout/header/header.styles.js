import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
`;

export const Close = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  margin-right: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.color.text};
`;

export const HeaderContainer = styled.div`
  height: 45px;
  display: flex;
  padding: ${({ theme }) => theme.spacing.xs};
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
`;
