import React from "react";
import Container from "../../constant/Container";
import CertificateBlock from "./CertificateBlock/CertificateBlock";
import { styled } from "frontity";

import commonImage from "../../../assets/images/common-image.png";
import commonImage2x from "../../../assets/images/common-image@2x.png";

const Certificate = () => {
  return (
    <Section>
      <Container>
        <ImageWrapper>
          <img
            src={commonImage}
            srcSet={`${commonImage} 1x, ${commonImage2x} 2x`}
            alt=""
          />
          <DarkLayer />
        </ImageWrapper>
        <CertificateBlock />
      </Container>
    </Section>
  );
};

const DarkLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(5, 46, 74, 0.3);
`;

const ImageWrapper = styled.div`
  margin-top: -281px;
  position: relative;
  border-radius: 48px;
  overflow: hidden;
  & img {
    height: auto;
    width: 100%;
    background-size: cover;
  }
  @media screen and (max-width: 991px) {
    border-radius: 32px;
    margin-top: -83px;
  }
`;

const Section = styled.section`
  position: relative;
`;

export default Certificate;
