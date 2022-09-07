import React from "react";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Program from "./ProgramSection/ProgramSection";
import Roadmap from "./Roadmap/Roadmap";
import Projects from "./Projects/Projects";
import AfterCourse from "./AfterCourse/AfterCourse";
import Certificate from "./Certificate/Certificate";
import Lecturers from "./Lecturers/Lecturers";
import Testimonials from "./Testimonials/Testimonials";
import CompaniesSwiper from "./CompaniesSwiper/CompaniesSwiper";
import Faq from "./Faq/Faq";
import Rates from "./Rates/Rates";
import Consultation from "./Consultation/Consultation";
import About from "./About/About";
import { connect, styled } from "frontity";

const Home = () => {
  return (
    <HomeElement>
      <Hero />
      <Skills />
      <Program />
      <Roadmap />
      <Projects />
      <AfterCourse />
      <Certificate />
      <Lecturers />
      <Testimonials />
      <CompaniesSwiper />
      <Faq />
      <Rates />
      <Consultation />
      <About />
    </HomeElement>
  );
};

const HomeElement = styled.div``;

export default connect(Home);
