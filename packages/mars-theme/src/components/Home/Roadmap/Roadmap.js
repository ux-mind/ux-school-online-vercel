import React, { useState } from "react";
import Container from "../../constant/Container";
import P from "../../constant/Paragraph";
import { TitleM, TitleS } from "../../constant/Title";
import { font, flex, grayRgba, whiteRgba } from "../../base/functions";
import { styled, connect } from "frontity";

import next from "../../../assets/images/svg/next.svg";

const roadmap = [
  {
    id: 1,
    title: "Теория",
    paragraphs: [
      "Мы заранее записали теоретические материалы в формате видео-лекций, которые вы можете пересматривать много раз и делать это в удобное для вас время. Этот материал остаётся у вас после окончания обучения. Мы переодически обновляем материалы курса, и даже после окончания курса вам будут доступны самые свежие материалы.",
      "Задавать вопросы преподавателю можно как во время переодических живых вебинаров, так и в любое время в чаты с куратором или в общий чат учеников",
    ],
  },
  {
    id: 2,
    title: "Практика",
    paragraphs: [
      "Практика — это основа обучения на нашем курсе. Каждое из домашних заданий — выполнение этапа проектирования дизайна сайта, приближены к тому, как это и происходит в настоящей работе. На практических занятиях ученики проводят исследования, составление информационной архитектуры и прочее, так и полноценный курс по Figma. Для успешного выполнения заданий мы записали подробное видео инструкция по которым вы можете без спешки и с хорошим погружением работать над результатом.",
    ],
  },
  {
    id: 3,
    title: "Результат",
    paragraphs: [
      "После прохождения всех уроков вы сделаете уникальный дизайн сайта, и оформите его в качестве первой работы для своего портфолио. Это будет набор макетов для настольных компьютеров и их адаптация под экрана смартфона. Помимо основной и большой работы, также в ходе курса вы сделаете несколько маленьких работ в Figma, на которых будете оттачивать своё мастерство вам этом инструменте по разным темам.",
    ],
  },
  {
    id: 4,
    title: "Сертификат",
    paragraphs: [
      "Мы дорожим репутации своей школы, поэтому после того как вы оформите итоговую работу, вам предстоит её защитить для получения сертификата (и доказать тем самым что вы успешно прошли обучение). Критерием успешной защитой работы является успешно выполненные домашние работы, а также успешно реализованный выпускной проект. Защита проходит в онлайн режиме. Не ней присутствуют приглашённый эксперты, которые дают свои рекомендации.",
    ],
  },
];

const Roadmap = ({ state }) => {
  const { isMobile } = state.theme;

  const [activeSlide, setActiveSlide] = useState(roadmap[0]);

  return (
    <Section>
      <Container>
        <Content>
          <div>
            <TitleM>Как проходит обучение</TitleM>
          </div>
          <Slides>
            {!isMobile && (
              <Pagination>
                {roadmap.map((item) => (
                  <PaginationItem
                    active={activeSlide.id === item.id}
                    key={item.id}
                    onClick={() => setActiveSlide(item)}
                  >
                    <Number>{item.id}</Number>
                    <P>{item.title}</P>
                  </PaginationItem>
                ))}
              </Pagination>
            )}
            {isMobile ? (
              roadmap.map((item) => (
                <Slide key={item.id}>
                  <SlideTitle>{item.title}</SlideTitle>
                  {item.paragraphs.map((paragraph) => (
                    <P size="l" key={paragraph}>
                      {paragraph}
                    </P>
                  ))}
                </Slide>
              ))
            ) : (
              <Slide>
                {activeSlide.paragraphs.map((paragraph) => (
                  <P size="l" key={paragraph}>
                    {paragraph}
                  </P>
                ))}
              </Slide>
            )}
          </Slides>
        </Content>
      </Container>
    </Section>
  );
};

const SlideTitle = styled(TitleS)`
  margin-bottom: 8px;
`;

const Number = styled.span`
  color: var(--gray-300);
  display: inline-block;
  margin-right: 8px;
  ${font(16, 24)};
`;

const PaginationItem = styled.button`
  background: var(--white);
  padding: 8px 24px;
  border: none;
  outline: 1px solid ${grayRgba(0.1)};
  border-radius: 8px;
  ${flex("row", "center")};
  position: relative;
  margin-right: 24px;
  & p {
    font-stretch: 122%;
    font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96,
      "YOPQ" 79, "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
  }
  ${({ active }) =>
    active &&
    `
		background: var(--gradient-primary-btn);
		outline: none;
		& span {
			color: ${whiteRgba(0.5)};
		}
		& p {
			color: var(--white);
		}
		&:hover {
			background: var(--gradient-primary-btn-hover);
		}
	`}
  &:last-child {
    margin-right: 0;
    &::after {
      content: none;
    }
  }
  &::after {
    pointer-events: none;
    position: absolute;
    content: "";
    width: 16px;
    height: 16px;
    left: calc(100% + 4px);
    top: 50%;
    transform: translateY(-50%);
    background: url(${next}) no-repeat 50%;
  }
`;

const Pagination = styled.div`
  padding: 0;
  margin: 0;
  margin-bottom: 33px;
  ${flex("row", "center")};
`;

const Slide = styled.div`
  & p {
    letter-spacing: 0;
    color: var(--gray-900);
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Slides = styled.div``;

const Content = styled.div`
  display: grid;
  grid-template-columns: calc((4 / 12) * 100% - 16px) calc(
      (8 / 12) * 100% - 8px
    );
  grid-gap: 24px;
  padding-bottom: 191px;
  border-bottom: 1px dashed ${grayRgba(0.2)};
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
    grid-gap: 34px;
    padding-bottom: 97px;
  }
`;

const Section = styled.section`
  padding-top: 179px;
  @media screen and (max-width: 991px) {
    padding-top: 70px;
  }
`;

export default connect(Roadmap);
