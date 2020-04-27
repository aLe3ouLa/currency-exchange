import React from "react";
import styled from "styled-components";

import RateList from "../../blocks/RateList/rate-list.component";

const RatesContainer = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.color.white};
  height: 100vh;
`;

const Rates = () => {
  return (
    <RatesContainer>
      <RateList />
    </RatesContainer>
  );
};

export default Rates;
