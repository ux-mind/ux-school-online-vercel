import React from "react";
import { TitleM } from "../../../constant/Title";
import AdditionalBlock from "../../../constant/AdditionalBlock";
import ProgramItem from "./ProgramItem/ProgramItem";
import { connect, styled } from "frontity";

import education from "../../../../assets/images/svg/Education.svg";
import clock from "../../../../assets/images/svg/Clock.svg";
import figma from "../../../../assets/images/svg/Figma.svg";
import pc from "../../../../assets/images/svg/PC.svg";
import mobileEducation from "../../../../assets/images/svg/Education-mobile.svg";
import mobileClock from "../../../../assets/images/svg/Clock-mobile.svg";
import mobileFigma from "../../../../assets/images/svg/Figma-mobile.svg";
import mobilePC from "../../../../assets/images/svg/PC-mobile.svg";

const program = [
  {
    id: 1,
    title: "Введение. Базовая информация для старта курса",
    videos: [
      {
        id: 1,
        title: "Синтез целей проекта",
        videoLength: "12:43",
        blocked: false,
        videoLink: "/",
      },
      {
        id: 2,
        title: "Карта стейкхолдеров",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 3,
        title: "Метод персонажей",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 4,
        title: "Пользовательские истории и сценарии",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Проектирование пользовательского опыта (UX)",
    videos: [
      {
        id: 1,
        title: "Синтез целей проекта",
        videoLength: "12:43",
        blocked: false,
        videoLink: "/",
      },
      {
        id: 2,
        title: "Карта стейкхолдеров",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 3,
        title: "Метод персонажей",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 4,
        title: "Пользовательские истории и сценарии",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Методы и артефакты проектирования пользовательского опыта (UX)",
    videos: [
      {
        id: 1,
        title: "Синтез целей проекта",
        videoLength: "12:43",
        blocked: false,
        videoLink: "/",
      },
      {
        id: 2,
        title: "Карта стейкхолдеров",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 3,
        title: "Метод персонажей",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 4,
        title: "Пользовательские истории и сценарии",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
    ],
  },
  {
    id: 4,
    title: "Информационная архитектура",
    videos: [
      {
        id: 1,
        title: "Синтез целей проекта",
        videoLength: "12:43",
        blocked: false,
        videoLink: "/",
      },
      {
        id: 2,
        title: "Карта стейкхолдеров",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 3,
        title: "Метод персонажей",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 4,
        title: "Пользовательские истории и сценарии",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
    ],
  },
  {
    id: 5,
    title: "Курс по Figma",
    videos: [
      {
        id: 1,
        title: "Синтез целей проекта",
        videoLength: "12:43",
        blocked: false,
        videoLink: "/",
      },
      {
        id: 2,
        title: "Карта стейкхолдеров",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 3,
        title: "Метод персонажей",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 4,
        title: "Пользовательские истории и сценарии",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
    ],
  },
  {
    id: 6,
    title: "Прототипирование",
    videos: [
      {
        id: 1,
        title: "Синтез целей проекта",
        videoLength: "12:43",
        blocked: false,
        videoLink: "/",
      },
      {
        id: 2,
        title: "Карта стейкхолдеров",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 3,
        title: "Метод персонажей",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 4,
        title: "Пользовательские истории и сценарии",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
    ],
  },
  {
    id: 7,
    title: "UI. Композиция",
    videos: [
      {
        id: 1,
        title: "Синтез целей проекта",
        videoLength: "12:43",
        blocked: false,
        videoLink: "/",
      },
      {
        id: 2,
        title: "Карта стейкхолдеров",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 3,
        title: "Метод персонажей",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
      {
        id: 4,
        title: "Пользовательские истории и сценарии",
        videoLength: "12:43",
        blocked: true,
        videoLink: "/",
      },
    ],
  },
];

const additionalItems = [
  {
    id: 1,
    icon: education,
    mobileIcon: mobileEducation,
    content:
      "Учиться можно в своём темпе, а в среднем ученики проходят курс примерно за 2,5 месяца",
  },
  {
    id: 2,
    icon: clock,
    mobileIcon: mobileClock,
    content:
      "Чтобы получился хороший результат, в неделю надо выделять около 10 часов",
  },
  {
    id: 3,
    icon: figma,
    mobileIcon: mobileFigma,
    content: "Вы будете учиться в Figma и немножко Photoshop",
  },
  {
    id: 4,
    icon: pc,
    mobileIcon: mobilePC,
    content: `Сомневаетесь, подойдёт ли ваш компьютер для учёбы? Откройте этот <a target="_blank" rel="noopenner noreferrer" href="https://www.figma.com/file/0oN6YlYZd91ow76uH11put/%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B0%D1%8D%D1%80%D0%BE%D0%BF%D0%BE%D1%80%D1%82-(%D0%9E%D0%BB%D1%8F-%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D0%B7%D0%B0)?node-id=162%3A124">Figma-файл</a>. Если компьютер не тормозит, значит можно нормально заниматься`,
  },
];

const Program = () => {
  return (
    <ProgramWrapper>
      <ProgramTitleM color="white">Программа обучения</ProgramTitleM>
      <ContentWrapper>
        <Block>
          <ProgramList>
            {program.map((item) => {
              return <ProgramItem key={item.id} data={item} />;
            })}
          </ProgramList>
        </Block>
        <AdditionalBlock additionalItems={additionalItems} />
      </ContentWrapper>
    </ProgramWrapper>
  );
};

const ProgramList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 48px;
  background: var(--white);
  overflow: hidden;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.1),
    0px 48px 64px rgba(0, 0, 0, 0.05);
  @media screen and (max-width: 991px) {
    border-radius: 32px;
  }
`;

const Block = styled.div``;

const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: calc(67% - 12px) calc(33% - 12px);
  @media screen and (max-width: 1400px) {
    grid-template-columns: calc(60% - 12px) calc(40% - 12px);
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
    grid-gap: 32px;
  }
`;

const ProgramTitleM = styled(TitleM)`
  margin-bottom: 46px;
  @media screen and (max-width: 991px) {
    margin-bottom: 26px;
    text-align: center;
  }
`;

const ProgramWrapper = styled.div`
  padding-top: 178px;
  position: relative;
  @media screen and (max-width: 991px) {
    padding-top: 122px;
  }
`;

export default connect(Program);
