import styled from "styled-components";

export const LastExchangeContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.color.background};
  padding: ${({ theme }) => theme.spacing.sm};

  display: flex;
  align-items: center;
`;

export const ParagraphContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
`;

export const DateParagraph = styled.p`
  color: ${({ theme }) => theme.color.gray};
`;
