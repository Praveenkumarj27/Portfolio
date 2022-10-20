import React from "react";
import styled from "styled-components";
import foot from "../../Assets/footer_wave.svg"

const FooterSection = styled.div`
  background-image: url(${foot});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;
  

  span {
    position: absolute;
    bottom: 3rem;
    color: #fff;
    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          Coded with 💙 by{" "}
          <a
            href="https://github.com/praveenkumarj27/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Praveen
          </a>{" "}
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;