import React, { useEffect, useState } from "react";
import { styled } from "frontity";

import video from "../../../assets/videos/hero-video.mov";
import poster from "../../../assets/images/about-video-large.png";
import posterMobile from "../../../assets/images/about-video-large-mobile.png";
import play from "../../../assets/images/svg/play-large.svg";

const HeroVideo = () => {
  const [isPosterMobile, setIsPosterMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const windowWidth = window.innerWidth;

      if (windowWidth > 576) {
        setIsPosterMobile(false);
      } else {
        setIsPosterMobile(true);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        const windowWidth = window.innerWidth;

        if (windowWidth > 576) {
          setIsPosterMobile(false);
        } else {
          setIsPosterMobile(true);
        }
      });
    };
  }, []);

  return (
    <Section>
      <VideoWrapper>
        <video width="100%" poster={isPosterMobile ? posterMobile : poster}>
          <source src={video} type="video/mp4" />
        </video>
        <Play>
          <img src={play} alt="play" />
        </Play>
        <Drop>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.1704 8.3295C19.6098 8.76884 19.6098 9.48116 19.1704 9.92049L12.7955 16.2954C12.3562 16.7348 11.6438 16.7348 11.2045 16.2954L4.8295 9.92049C4.39017 9.48116 4.39017 8.76884 4.8295 8.3295C5.26884 7.89017 5.98116 7.89017 6.42049 8.3295L12 13.909L17.5795 8.3295C18.0189 7.89017 18.7311 7.89017 19.1704 8.3295Z"
              fill="white"
              fillOpacity="0.6"
            />
          </svg>
        </Drop>
      </VideoWrapper>
    </Section>
  );
};

const Drop = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 128px;
  @media screen and (max-width: 991px) {
    bottom: 24px;
  }
`;

const Play = styled.button`
  display: flex;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  border: none;
  border-radius: 50%;
`;

const VideoWrapper = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
  & video {
    width: 100%;
  }
`;

const Section = styled.section``;

export default HeroVideo;
