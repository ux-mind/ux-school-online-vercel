import React from "react";
import HeroVideo from "./HeroVideo/HeroVideo";
import TitleSection from "./TitleSection/TitleSection";
import Lecturers from "./Lecturers/Lecturers";
import AboutSlider from "./AboutSlider/AboutSlider";
import History from "./History/History";
import Info from "./Info/Info";
import Collaboration from "./Collaboration/Collaboration";
import { styled } from "frontity";

const About = () => {
  return (
    <AboutElement>
      <HeroVideo />
      <TitleSection />
      <Lecturers />
      <AboutSlider />
      <History />
      <Info />
      <Collaboration />
    </AboutElement>
  );
};

const AboutElement = styled.div``;

export default About;
