import styled from "styled-components";

export const Select = styled.select`
  width: 80px;
  padding: ${({ theme }) => theme.spacing.xxs};
  font-size: 1.6rem;
  border: 0;
  height: 34px;
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right transparent;
  appearance: none;
  background-position-x: 50px;
`;
