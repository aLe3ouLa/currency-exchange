import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 50%;
  box-sizing: border-box;
  padding: 20px;
  ${({ isFromValue }) =>
    isFromValue
      ? css`
          background-color: ${({ theme }) => theme.color.white};
        `
      : css`
          background-color: ${({ theme }) => theme.color.background};
          height: 100% !important;
        `}
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-basis: 100%;
`;
