import React from "react";
import {
  LastExchangeContainer,
  ParagraphContainer,
  Title,
  DateParagraph,
} from "./last-exchange.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import { getCurrencySymbol } from "../../../utils/currencies";

const LastExchange = ({ lastExchange }) => {
  return (
    <LastExchangeContainer>
      <FontAwesomeIcon icon={faSyncAlt} style={{ marginRight: "12px" }} />
      <div style={{ width: "100%" }}>
        <ParagraphContainer>
          <Title>Exchanged to {lastExchange.toCurrency}</Title>
          <p>{`${getCurrencySymbol(lastExchange.fromCurrency)} -${
            lastExchange.fromValue
          }`}</p>
        </ParagraphContainer>

        <ParagraphContainer>
          <DateParagraph>
            {moment(lastExchange.date).format("MMM Do YYYY")}
          </DateParagraph>
          <p>{`${getCurrencySymbol(
            lastExchange.toCurrency
          )} +${lastExchange.toValue.toFixed(2)}`}</p>
        </ParagraphContainer>
      </div>
    </LastExchangeContainer>
  );
};

export default LastExchange;
