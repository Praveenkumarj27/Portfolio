import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import logo from "../../Assets/praveen.svg"
import scrolldown from "../../Assets/scroll-down.svg"
import Typewriter from "typewriter-effect";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
  NavBtn,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi,I'm Praveenkumar</h1>
            <h5>FullStack Developer</h5>
            <p>
              I design and code beautifully simple things, and I love what I do.
            </p>
            <NavBtn>
          <a
          
            className="btn PrimaryBtn"
            href="https://drive.google.com/file/d/1NVs1vu-_Ig-uE2aZ2hpo0JxuYtoYTUzI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
          </HeroLeft>
          <HeroRight>
            <Image
              src={logo}
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="about">
          <ScrollLink>
            Scroll down
            <img
              src={scrolldown}
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
      
    </main>
  );
}

export default Hero;
