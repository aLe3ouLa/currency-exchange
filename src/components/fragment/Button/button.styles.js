import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  line-height: 1.5rem;
  color: ${({ theme }) => theme.color.white};
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 0.025em;
  border: none;
  width: 80%;
  padding: ${({ theme }) => theme.spacing.xs};
  box-shadow: ${({ theme }) => theme.color.shadow};
  border-radius: 2rem;
  outline: none;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  transition: all 0.2s ease 0s;
  :hover {
    background-color: ${({ theme }) => theme.color.primaryDark};
  }
  &:disabled {
    opacity: 0.2;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    cursor: auto;
  }
`;
