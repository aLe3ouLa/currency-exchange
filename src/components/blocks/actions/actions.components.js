import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSyncAlt,
  faInfoCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Exchange = styled(Link)`
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

const ExchangeIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  padding: 8px;
  border-radius: 50%;
  min-width: 30px;
  min-height: 30px;
`;

const Actions = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Exchange to="/">
        <ExchangeIcon icon={faPlus} />
        <p>Add money</p>
      </Exchange>
      <Exchange to="/exchange">
        <ExchangeIcon icon={faSyncAlt} />
        <p>Exchange</p>
      </Exchange>
      <Exchange to="/">
        <ExchangeIcon icon={faInfoCircle} />
        <p>Details</p>
      </Exchange>
    </div>
  );
};

export default Actions;
