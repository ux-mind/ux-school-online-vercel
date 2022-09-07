import React from "react";
import HeroVideo from "./HeroVideo/HeroVideo";
import TitleSection from "./TitleSection/TitleSection";
import Lecturers from "./Lecturers/Lecturers";
import { styled } from "frontity";

const About = () => {
  return (
    <AboutElement>
      <HeroVideo />
      <TitleSection />
      <Lecturers />
    </AboutElement>
  );
};

const AboutElement = styled.div``;

export default About;
