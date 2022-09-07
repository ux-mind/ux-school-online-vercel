import React from "react";
import Container from "../../constant/Container";
import Course from "./Course/Course";
import Program from "./Program/Program";
import { connect, styled } from "frontity";

import bg from "../../../assets/images/program-section-bg.png";
import mobileBg from "../../../assets/images/program-section-mobile-bg.png";

const ProgramSectionEl = ({ state }) => {
  const { isMobile } = state.theme;

  return (
    <ProgramSection>
      <Bg>
        <img src={isMobile ? mobileBg : bg} alt="background" />
      </Bg>
      <ProgramContainer>
        <Course />
      </ProgramContainer>
      <Container>
        <Program />
      </Container>
    </ProgramSection>
  );
};

const Bg = styled.div`
  position: absolute;
  width: 100%;
  top: 216px;
  left: 0;
  & img {
    width: inherit;
    height: 1440px;
  }
  @media screen and (max-width: 991px) {
    top: 176px;
    & img {
      object-position: 50% 50%;
      max-height: 1104px;
    }
  }
`;

const ProgramContainer = styled(Container)`
  @media screen and (max-width: 991px) {
    max-width: 100%;
  }
  @media screen and (max-width: 576px) {
    padding: 0;
  }
`;

const ProgramSection = styled.section`
  position: relative;
  min-height: 1656px;
  @media screen and (max-width: 991px) {
    min-height: auto;
  }
`;

export default connect(ProgramSectionEl);
