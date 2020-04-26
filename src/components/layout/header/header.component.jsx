import React from "react";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
`;

const Close = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  margin-right: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.color.text};
`;

const HeaderContainer = styled.div`
  height: 45px;
  display: flex;
  padding: ${({ theme }) => theme.spacing.xs};
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
`;

const Header = () => {
  let location = useLocation();
  const closeBtn = location.pathname.includes("exchange");
  const title = location.pathname.includes("exchange")
    ? "Exchange"
    : "Dashboard";
  return (
    <HeaderContainer>
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
  );
};

export default Header;
