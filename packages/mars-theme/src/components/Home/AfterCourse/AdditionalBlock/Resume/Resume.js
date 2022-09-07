import React from "react";
import Modal from "../../../../constant/CommonModal";
import P from "../../../../constant/Paragraph";
import { TitleS } from "../../../../constant/Title";
import { font, flex, stretch } from "../../../../base/functions";
import { styled } from "frontity";

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
    <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
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
                <img width="24" height="24" src={app.icon} alt={app.app} />
                <span>{app.app}</span>
              </AppItem>
            ))}
          </AppsList>
        </Apps>
      </Info>
    </Modal>
  );
};

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

export default Resume;
