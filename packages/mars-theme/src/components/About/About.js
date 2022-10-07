import React from "react";
import HeroVideo from "./HeroVideo/HeroVideo";
import TitleSection from "./TitleSection/TitleSection";
import Lecturers from "./Lecturers/Lecturers";
import AboutSlider from "./AboutSlider/AboutSlider";
import History from "./History/History";
import Info from "./Info/Info";
import Collaboration from "./Collaboration/Collaboration";
import { styled } from "frontity";

const About = ({ state, post }) => {
  return (
    <AboutElement>
      <HeroVideo post={post} />
      <TitleSection post={post} />
      <Lecturers post={post} />
      <AboutSlider post={post} />
      <History post={post} />
      <Info post={post} />
      <Collaboration post={post} />
    </AboutElement>
  );
};

const AboutElement = styled.div``;

export default About;
