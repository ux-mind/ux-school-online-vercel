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

const Home = ({ state, post }) => {

  return (
    <HomeElement>
      <Hero post={post} />
      <Skills post={post} />
      <Program post={post} />
      <Roadmap post={post} />
      <Projects post={post} />
      <AfterCourse post={post} />
      <Certificate post={post} />
      <Lecturers post={post} />
      <Testimonials state={state} post={post} />
      <CompaniesSwiper post={post} />
      <Faq post={post} />
      <Rates post={post} />
      <Consultation post={post} />
      <About post={post} />
    </HomeElement>
  );
};

const HomeElement = styled.div``;

export default connect(Home);
