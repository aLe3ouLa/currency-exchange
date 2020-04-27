import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { HeaderContainer, Close, Title, HeaderTitle } from "./header.styles";

const Header = () => {
  let location = useLocation();
  const modal = location.pathname.includes("exchange-done");
  const closeBtn =
    location.pathname.includes("exchange") ||
    location.pathname.includes("rates");
  const autoBtn = location.pathname.includes("exchange");
  const title = location.pathname.includes("exchange")
    ? "Exchange"
    : location.pathname.includes("rates")
    ? "Rates"
    : "Dashboard";
  return (
    !modal && (
      <HeaderContainer modal={modal}>
        <HeaderTitle>
          {closeBtn ? (
            <Link to="/">
              <Close icon={faTimes} />
            </Link>
          ) : null}
          <Title>{title}</Title>
        </HeaderTitle>

        {autoBtn ? (
          <button style={{ backgroundColor: "transparent" }}>
            Auto <FontAwesomeIcon icon={faSyncAlt} />
          </button>
        ) : null}
      </HeaderContainer>
    )
  );
};

export default Header;
