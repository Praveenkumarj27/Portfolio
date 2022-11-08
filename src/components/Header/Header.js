import React from "react";
import logo from "../../Assets/logo.png";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";


const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img src={logo} alt="logo" />
        </Logo>
        <NavMenu>
          <NavLink
            className="menu-item"
            style={{ paddingLeft: "70px" }}
            to="about"
            smooth={true}
          >
            About
          </NavLink>
          <NavLink
            className="menu-item"
            style={{ paddingLeft: "70px" }}
            to="projects"
            smooth={true}
          >
            Projects
          </NavLink>
          <NavLink
            className="menu-item"
            style={{ paddingLeft: "70px" }}
            to="contact"
            smooth={true}
          >
            Contact
          </NavLink>
        </NavMenu>
        {/* <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://drive.google.com/file/d/1Sr5AG_W18RksgFfrxDuyhkKVhor7Nd5-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn> */}
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
