import React from "react";
import P from "../../../../constant/Paragraph";
import WhiteBtn from "../../../../constant/WhiteButton";
import { TitleS } from "../../../../constant/Title";
import { font, flex, stretch } from "../../../../base/functions";
import { styled, css } from "frontity";
import SimpleBar from "simplebar-react";
import { grayRgba } from "../../../../base/functions";

import resume from "../../../../../assets/images/resume-img-1.png";
import check from "../../../../../assets/images/svg/Check.svg";

import photoshop from "../../../../../assets/images/svg/Photoshop.png";
import figma from "../../../../../assets/images/svg/Figma.png";
import miro from "../../../../../assets/images/svg/Miro.png";
import zeplin from "../../../../../assets/images/svg/Zeplin.png";
import spline from "../../../../../assets/images/svg/Spline.png";

const skills = [
  "Исследования",
  "User Personas",
  "Customer Jorney Maps",
  "Вайрфреймы",
  "User-Flow",
  "Информационная архитектура",
  "Прототипирование",
  "Юзабилити",
  "Адаптивный дизайн",
  "Moodboarding",
  "Сетки",
  "Композиция",
  "Типографика",
  "Цвет",
  "Юзабилити-тестирования",
];

const apps = [
  { app: "Figma", icon: figma },
  { app: "Photoshop", icon: photoshop },
  { app: "Miro", icon: miro },
  { app: "Zeplin", icon: zeplin },
  { app: "Spline", icon: spline },
];

const Resume = ({ isOpened, setIsOpened }) => {
  return (
    <>
      <Modal className="modal" isOpened={isOpened}>
        <ModalWrapper>
          <div
            css={css`
              overflow: hidden;
            `}
          >
            <SimpleBar
              forceVisible="y"
              style={{ maxHeight: "calc(100vh - 48px)" }}
            >
              <Wrapper className="modal-wrapper">
                <Close onClick={() => setIsOpened(false)}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.43966 7.44006C7.7209 7.15916 8.10216 7.00138 8.49966 7.00138C8.89716 7.00138 9.2784 7.15916 9.55966 7.44006L15.9997 13.8801L22.4397 7.44006C22.5771 7.29268 22.7427 7.17448 22.9267 7.0925C23.1107 7.01052 23.3093 6.96644 23.5107 6.96288C23.7121 6.95932 23.9121 6.99638 24.0989 7.07182C24.2857 7.14726 24.4553 7.25954 24.5977 7.40198C24.7403 7.54442 24.8525 7.7141 24.9279 7.90086C25.0033 8.08764 25.0405 8.2877 25.0369 8.4891C25.0333 8.69052 24.9893 8.88914 24.9073 9.07314C24.8253 9.25714 24.7071 9.42274 24.5597 9.56006L18.1197 16.0001L24.5597 22.4401C24.7071 22.5775 24.8253 22.7431 24.9073 22.9271C24.9893 23.1111 25.0333 23.3097 25.0369 23.5111C25.0405 23.7125 25.0033 23.9125 24.9279 24.0993C24.8525 24.2861 24.7403 24.4557 24.5977 24.5981C24.4553 24.7407 24.2857 24.8529 24.0989 24.9283C23.9121 25.0037 23.7121 25.0409 23.5107 25.0373C23.3093 25.0337 23.1107 24.9897 22.9267 24.9077C22.7427 24.8257 22.5771 24.7075 22.4397 24.5601L15.9997 18.1201L9.55966 24.5601C9.2753 24.8251 8.8992 24.9693 8.5106 24.9625C8.122 24.9555 7.75124 24.7981 7.4764 24.5233C7.20158 24.2485 7.04416 23.8777 7.0373 23.4891C7.03044 23.1005 7.1747 22.7245 7.43966 22.4401L13.8797 16.0001L7.43966 9.56006C7.15876 9.27882 7.00098 8.89756 7.00098 8.50006C7.00098 8.10256 7.15876 7.72132 7.43966 7.44006Z"
                      fill="#B0B5CB"
                    />
                  </svg>
                </Close>
                <Header>
                  <ImageWrapper>
                    <img width="64" height="64" src={resume} alt="" />
                  </ImageWrapper>
                  <Descrition>
                    <JobTitle>Должность</JobTitle>
                    <TitleS>UX/UI Designer</TitleS>
                  </Descrition>
                </Header>
                <Info>
                  <Skills>
                    <ListTitle>Навыки</ListTitle>
                    <SkillsWrapper>
                      <SkillsList>
                        {skills.map((skill, idx) => {
                          if (idx > skills.length / 2) {
                            return null;
                          }

                          return <SkillsItem key={skill}>{skill}</SkillsItem>;
                        })}
                      </SkillsList>
                      <SkillsList>
                        {skills.map((skill, idx) => {
                          if (idx <= skills.length / 2) {
                            return null;
                          }

                          return <SkillsItem key={skill}>{skill}</SkillsItem>;
                        })}
                      </SkillsList>
                    </SkillsWrapper>
                  </Skills>
                  <Apps>
                    <ListTitle>Программы</ListTitle>
                    <AppsList>
                      {apps.map((app) => (
                        <AppItem key={app.app}>
                          <img
                            width="24"
                            height="24"
                            src={app.icon}
                            alt={app.app}
                          />
                          <span>{app.app}</span>
                        </AppItem>
                      ))}
                    </AppsList>
                  </Apps>
                  <MobileClose>
                    <WhiteBtn
                      onClick={() => {
                        setIsOpened(false);
                      }}
                    >
                      Закрыть
                    </WhiteBtn>
                  </MobileClose>
                </Info>
              </Wrapper>
            </SimpleBar>
          </div>
        </ModalWrapper>
      </Modal>
      <Blocker isOpened={isOpened} />
    </>
  );
};

const MobileClose = styled.div`
  display: none;
  @media screen and (max-width: 576px) {
    display: block;
  }
`;

const AppItem = styled.li`
  padding-left: 32px;
  position: relative;
  & span {
    ${font(16, 24)};
    ${stretch(122)};
  }
  & img {
    border-radius: 4px;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const AppsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 12px;
`;

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 5px) calc(50% - 5px);
  grid-gap: 10px;
  @media screen and (max-width: 576px) {
    grid-template-columns: 100%;
    grid-gap: 10px;
  }
`;

const SkillsItem = styled.li`
  position: relative;
  padding-left: 32px;
  ${font(16, 24)};
  ${stretch(122)};
  &::before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    left: 0;
    top: 0;
    background: url(${check}) no-repeat 50%;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 10px;
`;

const ListTitle = styled(P)`
  color: var(--gray-400);
  margin-bottom: 9px;
`;

const Apps = styled.div``;

const Skills = styled.div``;

const Info = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: calc(75.33% - 5px) calc(24.67% - 5px);
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
    grid-gap: 31px;
  }
  @media screen and (max-width: 576px) {
    grid-row-gap: 31px 25px;
  }
`;

const JobTitle = styled(P)`
  color: var(--gray-400);
  margin-bottom: -6px;
  @media screen and (max-width: 991px) {
    margin-bottom: -3px;
  }
`;

const Descrition = styled.div``;

const ImageWrapper = styled.div`
  display: flex;
  & img {
    border-radius: 16px;
  }
  @media screen and (max-width: 991px) {
    & img {
      width: 48px;
      height: 48px;
    }
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr;
  grid-gap: 20px;
  margin-bottom: 28px;
  @media screen and (max-width: 991px) {
    grid-template-columns: 48px 1fr;
    grid-gap: 16px;
  }
`;

const Blocker = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${grayRgba(0.25)};
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
  ${({ isOpened }) => isOpened && `pointer-events: auto; opacity: 1;`}
`;

const Close = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  display: grid;
  padding: 0;
  place-items: center;
  top: 24px;
  right: 24px;
  width: 32px;
  height: 32px;
  @media screen and (max-width: 991px) {
    top: 8px;
    right: 8px;
  }
`;

const Wrapper = styled.div`
  padding: ${({ padding }) => (padding ? padding : "40px 96px")};
  position: relative;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 991px) {
    padding: 24px;
  }
`;

const ModalWrapper = styled.div`
  position: relative;
  z-index: 10;
  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.7);
    z-index: 9;
    height: 20px;
    width: calc((712 / 792) * 100%);
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  &::after {
    content: "";
    position: absolute;
    top: calc(100% + 20px);
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.3);
    z-index: 8;
    height: 20px;
    width: calc((632 / 792) * 100%);
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  @media screen and (max-width: 991px) {
    &::before,
    &::after {
      content: none;
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  z-index: 20;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: calc(100vh - 48px);
  width: 100%;
  max-width: 792px;
  background: var(--white);
  border-radius: ${({ border }) => (border ? `${border}px` : "24px")};
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
  ${({ isOpened }) => isOpened && `pointer-events: auto; opacity: 1;`}
  & .simplebar-offset {
    max-width: 100%;
  }
  @media screen and (max-width: 991px) {
    max-width: calc(100% - 32px);
  }
`;

export default Resume;
