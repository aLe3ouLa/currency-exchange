import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";

import { changeFromTo } from "../../../redux/current/current-values.actions";
import styled from "styled-components";

const Exchange = styled.div`
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

const ExchangeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.color.primary};
`;

const ChangeCurrency = ({ changeFromTo }) => {
  const handleChange = () => {
    changeFromTo();
  };
  return (
    <Exchange onClick={handleChange}>
      <ExchangeIcon icon={faExchangeAlt} rotation={90} />
    </Exchange>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeFromTo: () => dispatch(changeFromTo()),
});

export default connect(null, mapDispatchToProps)(ChangeCurrency);
