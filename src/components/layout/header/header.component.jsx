import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { HeaderContainer, Close, Title } from "./header.styles";

const Header = () => {
  let location = useLocation();
  const modal = location.pathname.includes("exchange-done");
  const closeBtn = location.pathname.includes("exchange");
  const title = location.pathname.includes("exchange")
    ? "Exchange"
    : "Dashboard";
  return (
    !modal && (
      <HeaderContainer modal={modal}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {closeBtn ? (
            <Link to="/">
              <Close icon={faTimes} />
            </Link>
          ) : null}
          <Title>{title}</Title>
        </div>

        {closeBtn ? (
          <button style={{ backgroundColor: "transparent" }}>
            Auto <FontAwesomeIcon icon={faSyncAlt} />
          </button>
        ) : null}
      </HeaderContainer>
    )
  );
};

export default Header;
