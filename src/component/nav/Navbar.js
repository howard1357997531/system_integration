import React, { useState } from "react";
import "./css/Navbar.css";
import { Box, Stack, styled } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { grey } from "@mui/material/colors";

function Navbar({ scroll }) {
  const [menuActive, setMenuActive] = useState(false);
  const [active, setActive] = useState("");

  const navMenuActiveHandler = () => {
    setMenuActive(!menuActive);
  };

  const navLinkActiveHandler = (link) => {
    setActive(link);
  };
  const navClassName = `nav-box ${active ? "active" : ""}`;
  const linkName = [
    { name: "關於我們", href: "#1" },
    { name: "產品介紹", href: "#2" },
    { name: "服務行業", href: "#3" },
    { name: "最新消息", href: "#4" },
    { name: "聯絡我們", href: "#5" },
  ];
  const linkStyle = {
    display: "inline-block",
    textDecoration: "none",
    color: grey[700],
    fontWeight: 600,
    transition: "all 0.4s ease-in-out",
  };

  const StyleBox = styled(Box)(({ theme }) => ({
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "999",
    display: "flex",
    alignItems: "center",
    padding: "10px 100px",
    width: "calc(100% - 200px)",
    height: "50px",
    backgroundColor: "#fff",
    [theme.breakpoints.down("lg")]: {
      padding: "10px 20px",
      width: "calc(100% - 40px)",
    },
  }));

  const StyleFirstBox = styled(Box)({
    width: "20%",
  });

  const StyleFirstLogoBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const StyleFirstMenuBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));

  const StyleMenuBox = styled(Box)({
    width: "36px",
    padding: "8px",
    // backgroundColor: "red",
    cursor: "pointer",
  });

  const StyleSecondStack = styled(Stack)({
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    // backgroundColor: "red",
    gap: "20px",
  });

  const StyleSecondLogoBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));

  const StyleSecondLinkBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const StyleThirdStack = styled(Stack)({
    width: "20%",
    flexDirection: "row",
    justifyContent: "right",
    alignItems: "center",
    gap: "10px",
  });

  const StyleNotificationsNoneOutlinedIcon = styled(
    NotificationsNoneOutlinedIcon
  )({
    fontSize: "24px",
    color: grey[500],
    "&:hover": {
      color: "red",
      cursor: "pointer",
    },
  });

  const StylePersonOutlineOutlinedIcon = styled(PersonOutlineOutlinedIcon)({
    fontSize: "24px",
    color: grey[500],
    "&:hover": {
      color: "red",
      cursor: "pointer",
    },
  });

  return (
    <StyleBox className={navClassName}>
      <StyleFirstBox>
        <StyleFirstLogoBox>
          <img src="company.png" alt="asd"></img>
          <img src="company2.png" alt="asd" className="img2"></img>
        </StyleFirstLogoBox>

        <StyleFirstMenuBox className="menu" onClick={navMenuActiveHandler}>
          <StyleMenuBox>
            <span
              className={`${menuActive && "active"}`}
              style={{ color: grey[500], transition: "all 0.4s ease" }}
            ></span>
            <span
              className={`${menuActive && "active"}`}
              style={{ color: grey[500], transition: "all 0.4s ease" }}
            ></span>
          </StyleMenuBox>
        </StyleFirstMenuBox>
      </StyleFirstBox>

      <StyleSecondStack>
        <StyleSecondLogoBox>
          <img src="company.png" alt="asd"></img>
          <img src="company2.png" alt="asd" className="img2"></img>
        </StyleSecondLogoBox>

        {linkName.map((link, index) => (
          <StyleSecondLinkBox
            className={`nav-link-box ${active === link.href ? "active" : ""}`}
            key={index}
          >
            <a
              href={link.href}
              style={linkStyle}
              className={`nav-link ${active === link.href ? "active" : ""}`}
              onClick={() => navLinkActiveHandler(link.href)}
            >
              {link.name}
            </a>
          </StyleSecondLinkBox>
        ))}
      </StyleSecondStack>

      <StyleThirdStack>
        <StyleNotificationsNoneOutlinedIcon />
        <StylePersonOutlineOutlinedIcon />
      </StyleThirdStack>
    </StyleBox>
  );
}

export default Navbar;
