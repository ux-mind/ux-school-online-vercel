import React from "react";
import Container from "../../constant/Container";
import P from "../../constant/Paragraph";
import { TitleS } from "../../constant/Title";
import { font, stretch, grayRgba, flex, whiteRgba } from "../../base/functions";
import { styled, connect } from "frontity";

import teacher from "../../../assets/images/teacher.png";
import teacher2x from "../../../assets/images/teacher@2x.png";

const lecturers = [
  {
    name: "Игорь Колесень",
    position: "Основатель школы",
    image: teacher,
    image2x: teacher2x,
  },
  {
    name: "Игорь Колесень",
    position: "Основатель школы",
    image: teacher,
    image2x: teacher2x,
  },
  {
    name: "Игорь Колесень",
    position: "Основатель школы",
    image: teacher,
    image2x: teacher2x,
  },
  {
    name: "Игорь Колесень",
    position: "Основатель школы",
    image: teacher,
    image2x: teacher2x,
  },
  {
    name: "Илья Метла",
    position: "Преподаватель курса «веб-дизайн»",
    image: teacher,
    image2x: teacher2x,
  },
  {
    name: "Саша Карасик",
    position: "Преподаватель курса «веб-дизайн»",
    image: teacher,
    image2x: teacher2x,
  },
  {
    name: "Оля Казанза",
    position: "Преподаватель курса «веб-дизайн»",
    image: teacher,
    image2x: teacher2x,
  },
  {
    name: "Ксюша Лебедева",
    position: "Преподаватель курса «дизайн старт»",
    image: teacher,
    image2x: teacher2x,
  },
  {
    name: "Олег Кучинский",
    position: "Преподаватель курса «моушн-дизайн»",
    image: teacher,
    image2x: teacher2x,
  },
  {
    name: "Оля Казанза",
    position: "Преподаватель курса «веб-дизайн»",
    image: teacher,
    image2x: teacher2x,
  },
  {
    name: "Ксюша Лебедева",
    position: "Преподаватель курса «дизайн старт»",
    image: teacher,
    image2x: teacher2x,
  },
  {
    name: "Ксюша Лебедева",
    position: "Преподаватель курса «дизайн старт»",
    image: teacher,
    image2x: teacher2x,
  },
];

const Lecturers = ({ state }) => {
  return (
    <Section>
      <Container>
        <Content>
          <LecturersContent>
            {lecturers.map((lecturer, idx) => {
              if (state.theme.isMobile && idx > 7) {
                return null;
              }

              return (
                <Lecturer>
                  <ImgWrapper>
                    <img
                      src={lecturer.image}
                      srcSet={
                        lecturer.image2x ? lecturer.image2x : lecturer.image
                      }
                      alt="lecturer"
                    />
                  </ImgWrapper>
                  <Name>{lecturer.name}</Name>
                  <Position>{lecturer.position}</Position>
                </Lecturer>
              );
            })}
          </LecturersContent>
          <InfoBlock>
            <Mission>Миссия</Mission>
            <Info>
              <InfoText>
                <P size="l">
                  Сейчас знания быстро устаревают, и учиться имеет смысл только
                  у тех, кто в этом «варится». Мы каждый день на передовой и
                  знаем, что сейчас в тренде, какие технологии лучше
                  использовать, что стоит делать, а что — нет. Наша команда UX
                  Mind имеет большой опыт работы с клиентами из Европы
                  и Америки, и этим опытом мы поделимся с тобой.
                </P>
                <P size="l">
                  Так в чём же миссия нашей школы? — Мы хотим научить тебя не
                  только дизайнить, а ещё и зарабатывать на своих навыках и
                  актуальных знаниях.
                </P>
              </InfoText>
            </Info>
          </InfoBlock>
        </Content>
      </Container>
    </Section>
  );
};

const InfoText = styled.div`
  & p {
    margin-bottom: 14px;
    color: var(--black-900);
    font-stretch: 109%;
    font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96,
      "YOPQ" 79, "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 991px) {
    & p {
      ${font(21, 32)};
    }
  }
`;

const Info = styled.div``;

const Mission = styled(P)`
  margin: 0;
  ${font(14, 20)}
  ${stretch(110)}
	color: var(--gray-500);
  @media screen and (max-width: 991px) {
    position: absolute;
    top: 25px;
    left: 0;
  }
`;

const InfoBlock = styled.div`
  border-top: 1px dashed ${grayRgba(0.2)};
  padding-top: 137px;
  display: grid;
  grid-template-columns: 4fr 6fr 2fr;
  grid-gap: 24px;
  position: relative;
  @media screen and (max-width: 991px) {
    padding-top: 152px;
    grid-template-columns: 100%;
  }
`;

const Position = styled(P)`
  ${font(14, 20)};
  ${stretch(110)};
`;

const Name = styled(TitleS)`
  ${font(21, 28)};
  letter-spacing: -0.01em;
  font-weight: 632;
  ${stretch(113)};
  margin-bottom: 2px;
  @media screen and (max-width: 768px) {
    ${font(14, 20)};
  }
`;

const ImgWrapper = styled.div`
  overflow: hidden;
  max-width: 180px;
  height: 200px;
  border-radius: 24px;
  margin-bottom: 11px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Lecturer = styled.li`
  padding: 0;
`;

const LecturersContent = styled.ul`
  padding: 160px 0 168px;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 48px;
  grid-column-gap: 24px;
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 110px 0;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 24px;
    grid-column-gap: 24px;
    max-width: 380px;
    margin: 0 auto;
  }
  @media screen and (max-width: 460px) {
    grid-column-gap: 16px;
  }
`;

const Content = styled.div``;

const Section = styled.section``;

export default connect(Lecturers);
