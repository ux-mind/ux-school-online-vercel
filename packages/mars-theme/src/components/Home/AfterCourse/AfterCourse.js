import React from "react";
import Container from "../../constant/Container";
import AdditionalBlock from "./AdditionalBlock/AdditionalBlock";
import AfterCourseList from "./AfterCourseList/AfterCourseList";
import { TitleM } from "../../constant/Title";
import { styled } from "frontity";

import bg from "../../../assets/images/after-bg.png";

const AfterCourse = () => {
  return (
    <Section>
      <Container>
        <Content>
          <AfterTitleM color="white">Что будет после курса</AfterTitleM>
          <AdditionalBlock />
          <AfterCourseList />
        </Content>
      </Container>
    </Section>
  );
};

const AfterTitleM = styled(TitleM)`
  grid-column-start: 2;
  @media screen and (max-width: 991px) {
    grid-column-start: 1;
    margin-bottom: 26px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: calc(33% - 12px) calc(67% - 12px);
  padding: 178px 0 424px;
  grid-gap: 46px 24px;
  @media screen and (max-width: 1400px) {
    grid-template-columns: calc(29% - 12px) calc(71% - 12px);
  }
  @media screen and (max-width: 991px) {
    padding: 110px 0 132px;
    grid-template-columns: 100%;
    grid-gap: 0;
  }
`;

const Section = styled.section`
  position: relative;
  background: url(${bg}) no-repeat 50% / cover;
  @media screen and (max-width: 991px) {
    background-position-x: 0;
  }
`;

export default AfterCourse;
