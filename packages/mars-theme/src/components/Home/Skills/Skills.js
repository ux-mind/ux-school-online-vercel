import React from "react";
import Container from "../../constant/Container";
import SkillsSwiper from "./SkillsSwiper/SkillsSwiper";
import { TitleM } from "../../constant/Title";
import { connect, styled, css } from "frontity";
import { font } from "../../base/functions";

import poster from "../../../assets/images/about-video.png";

const Skills = () => {
  return (
    <SkillsSection>
      <VideoContainer>
        <VideoWrapper>
          <div
            css={css`
              position: relative;
            `}
          >
            <video width="100%" poster={poster}>
              <source src="" type="video/mp4" />
            </video>
            <Play aria-label="play video">
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="72"
                  height="72"
                  rx="36"
                  fill="white"
                  fillOpacity="0.1"
                />
                <path
                  d="M46.3487 35.5951C46.6252 35.7946 46.6252 36.2064 46.3487 36.406L31.3395 47.2376C31.0088 47.4763 30.5469 47.24 30.5469 46.8322V25.1689C30.5469 24.7611 31.0088 24.5248 31.3395 24.7634L46.3487 35.5951Z"
                  fill="white"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="71"
                  height="71"
                  rx="35.5"
                  stroke="white"
                  strokeOpacity="0.3"
                />
              </svg>
            </Play>
          </div>
        </VideoWrapper>
      </VideoContainer>
      <SkillsContainer>
        <SkillsBlock>
          <SkillsTitleM>Чему вы&nbsp;научитесь</SkillsTitleM>
          <SkillsSwiper />
        </SkillsBlock>
      </SkillsContainer>
    </SkillsSection>
  );
};

const SkillsTitleM = styled(TitleM)`
  @media screen and (max-width: 1400px) {
    ${font(38, 46)};
  }
  @media screen and (max-width: 991px) {
    text-align: center;
    margin-bottom: 34px;
  }
`;

const Play = styled.button`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  border: none;
  transition: transform 0.2s;
  &:hover {
    transform: translate(-50%, -50%) scale(1.08);
  }
  &:active {
    transform: translate(-50%, -50%);
  }
`;

const VideoWrapper = styled.div`
  position: absolute;
  top: -272px;
  left: 0;
  & video {
    position: relative;
    border-radius: 48px;
  }
  @media screen and (max-width: 991px) {
    top: -88px;
    & video {
      border-radius: 32px;
    }
  }
  @media screen and (max-width: 576px) {
    width: calc(100vw - 48px);
    left: 50%;
    transform: translateX(-50%);
  }
`;

const SkillsBlock = styled.div`
  display: grid;
  grid-template-columns: calc((408 / 1200) * 100%) calc((792 / 1200) * 100%);
  padding-top: 552px;
  padding-bottom: 200px;
  border-bottom: 1px dashed #0e102933;
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
    padding-bottom: 104px;
  }
`;

const VideoContainer = styled(Container)`
  position: relative;
`;

const SkillsContainer = styled.div`
  padding: 0 var(--container-padding-xl);
  overflow: hidden;
  @media screen and (max-width: 1400px) {
    padding: 0 var(--container-padding-lg);
  }
  @media screen and (max-width: 991px) {
    padding: 0 var(--container-padding-md);
  }
  @media screen and (max-width: 768px) {
    padding: 0 var(--container-padding-xs);
  }
  @media screen and (max-width: 1400px) {
    padding: 0 24px;
  }
`;

const SkillsSection = styled.section`
  position: relative;
`;

export default connect(Skills);
