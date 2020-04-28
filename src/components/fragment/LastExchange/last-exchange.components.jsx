import React from "react";
import {
  LastExchangeContainer,
  ParagraphContainer,
  Title,
  DateParagraph,
  Sync,
  ExchangeCtn,
} from "./last-exchange.styles";

import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import { getCurrencySymbol } from "../../../utils/currencies";

const LastExchange = ({ lastExchange }) => {
  return (
    <>
      <h5>Last Exchange: </h5>
      <LastExchangeContainer>
        <Sync icon={faSyncAlt} />
        <ExchangeCtn>
          <ParagraphContainer>
            <Title data-testid="title">
              Exchanged to {lastExchange.toCurrency}
            </Title>
            <p>{`${getCurrencySymbol(lastExchange.fromCurrency)} -${
              lastExchange.fromValue
            }`}</p>
          </ParagraphContainer>

          <ParagraphContainer>
            <DateParagraph>
              {moment(lastExchange.date).format("MMM Do YYYY")}
            </DateParagraph>
            <p>{`${getCurrencySymbol(lastExchange.toCurrency)} +${
              lastExchange.toValue
            }`}</p>
          </ParagraphContainer>
        </ExchangeCtn>
      </LastExchangeContainer>
    </>
  );
};

export default LastExchange;
