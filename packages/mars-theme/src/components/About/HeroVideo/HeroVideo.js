import React, { useEffect, useState, useRef } from "react";
import { styled } from "frontity";

import poster from "../../../assets/images/about-video-large.png";
import posterMobile from "../../../assets/images/about-video-large-mobile.png";
import play from "../../../assets/images/svg/play-large.svg";
import pause from "../../../assets/images/svg/pause-large.svg";

import aboutVideo from "../../../assets/videos/UX_Mind_School.mp4";

const HeroVideo = () => {
  const videoElementRef = useRef(null);

  const [isPosterMobile, setIsPosterMobile] = useState(false);
  const [videoPlays, setVideoPlays] = useState(false);

  const toggleVideo = () => {
    if (videoElementRef.current) {
      videoPlays
        ? videoElementRef.current.pause()
        : videoElementRef.current.play();

      setVideoPlays((prev) => !prev);
    }
  };

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
      <VideoWrapper videoPlays={videoPlays}>
        <video
          width="100%"
          height="1080"
          loop={true}
          nocontrols="true"
          playsInline
          preload="auto"
          poster={isPosterMobile ? posterMobile : poster}
          ref={videoElementRef}
        >
          <source src={aboutVideo} type="video/mp4" />
          Тег video не поддерживается вашим браузером.
        </video>
        <Play onClick={() => toggleVideo()}>
          {videoPlays ? (
            <img src={pause} alt="pause" />
          ) : (
            <img src={play} alt="play" />
          )}
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

const Drop = styled.span`
  display: block;
  position: absolute;
  width: 24px;
  height: 24px;
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
    object-fit: cover;
  }
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${({ videoPlays }) => (videoPlays ? "z-index: 1" : "z-index: -1")};
    & iframe {
      width: 100%;
      height: 100%;
    }
  }
  & img {
    max-width: 100vw;
  }
  @media screen and (max-width: 1400px) {
    & video {
      max-height: 800px;
    }
  }
  @media screen and (max-width: 991px) {
    & video {
      max-height: 640px;
    }
  }
`;

const Section = styled.section``;

export default HeroVideo;
