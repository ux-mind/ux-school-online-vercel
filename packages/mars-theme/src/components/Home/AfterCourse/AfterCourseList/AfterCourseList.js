import React, { useState } from "react";
import P from "../../../constant/Paragraph";
import { TitleS } from "../../../constant/Title";
import { grayRgba, flex, font, stretch } from "../../../base/functions";
import { styled, connect } from "frontity";

const afterList = [
  {
    id: 1,
    title: "Защита итоговой работы",
    paragraphs: [
      "Помимо небольших заданий, вы будете делать один крупный проект который станет вашей выпускной работой. В конце курса защищаете эту работу чтобы получить сертификат. ",
      `На защите будут присутствовать эксперты которые дадут обратную связь по проекту. <a href="/">Пример</a>`,
    ],
  },
  {
    id: 2,
    title: "Закрытый чат выпускников",
    paragraphs: [
      "Всех успешно защитившихся выпускников мы добавляем в наш закрытый чат телеграмм, в котором мы вы можете спросить совета, поделиться своей новой работой, а также в этот чат часто публикуются вакансии для начинающих дизайнеров.",
    ],
  },
  {
    id: 3,
    title: "Рекомендуем к стажировке",
    paragraphs: [
      "Мы внимательно следим за успехами учащихся на курсах и отмечаем себе ребят которые здорово себя проявляют, которых мы в первую очередь рекомендую для работы нашим друзьям и компаниям партнёром.",
    ],
  },
  {
    id: 4,
    title: "Помогаем составить резюме",
    paragraphs: [
      "На курсе мы проходим то как составить своё резюме, и как только вы его сделаете, по вашей просьбе мы можем У вас проконсультировать как можно его скорректировать чтобы работодатель быстрее обратил на него внимание.",
    ],
  },
  {
    id: 5,
    title: "Помогаем пройти собеседование",
    paragraphs: [
      "Пройти собеседование это большая задача в которой мы можем вам помочь, проконсультировать вас как лучше подойти к конкретному работодателя а также как лучше отвечать на вопросы которые вам могут задать на этом собеседование",
    ],
  },
];

const AfterCourseList = ({ state }) => {
  const [openedItem, setOpenedItem] = useState(1);

  return (
    <AfterList>
      {afterList.map((item, idx) => {
        const isOpened = openedItem === item.id;

        return (
          <AfterItem
            isOpened={isOpened}
            onClick={() => setOpenedItem(item.id)}
            key={item.id}
          >
            {!isOpened && (
              <ClosedItem>
                <Number>{item.id}</Number>
                <ClosedItemTitle>
                  <span>{item.title}</span>
                  {state.theme.isMobile && (
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
                          fill="#B0B5CB"
                        />
                      </svg>
                    </Drop>
                  )}
                </ClosedItemTitle>
              </ClosedItem>
            )}
            {isOpened && (
              <OpenedItem>
                <Number>{item.id}</Number>
                <OpenedItemContent>
                  <OpenedItemTitle>{item.title}</OpenedItemTitle>
                  <OpenedItemText>
                    {item.paragraphs.map((paragraph) => (
                      <P
                        size="l"
                        key={paragraph}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}
                  </OpenedItemText>
                </OpenedItemContent>
              </OpenedItem>
            )}
          </AfterItem>
        );
      })}
    </AfterList>
  );
};

const Drop = styled.span`
  margin-left: 8px;
  display: block;
`;

const OpenedItemText = styled.div`
  & p {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 991px) {
    color: var(--black-900);
  }
`;

const OpenedItemTitle = styled(TitleS)`
  margin-bottom: 19px;
  @media screen and (max-width: 991px) {
    margin-bottom: 12px;
  }
`;

const OpenedItemContent = styled.div`
  margin-top: 16px;
  height: 100%;
  max-height: calc(100% - 40px - 16px);
  ${flex("column", "flex-end", "flex-end")};
  @media screen and (max-width: 991px) {
    display: block;
    margin: 0;
  }
`;

const OpenedItem = styled.div`
  padding: 24px 48px;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  @media screen and (max-width: 991px) {
    padding: 19px 24px 17px;
  }
`;

const ClosedItemTitle = styled(P)`
  position: relative;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  margin: 0 auto;
  margin-top: 24px;
  color: var(--black-900);
  @media screen and (max-width: 991px) {
    writing-mode: horizontal-tb;
    text-orientation: auto;
    margin: 0;
    ${flex("row", "center", "space-between")};
  }
`;

const Number = styled.div`
  height: 40px;
  width: 48px;
  border-radius: 12px;
  background: var(--gray-100);
  display: grid;
  place-items: center;
  ${font(28, 36)};
  ${stretch(122)};
  color: var(--gray-400);
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const ClosedItem = styled.div`
  padding: 24px 16px;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  @media screen and (max-width: 991px) {
    padding: 12px 24px;
  }
`;

const AfterItem = styled.li`
  border-right: 1px dashed ${grayRgba(0.2)};
  flex-shrink: 0;
  ${({ isOpened }) =>
    isOpened &&
    `
			flex-grow: 1;
			max-width: calc(100% - (80px * 4));
		`}
  &:last-of-type {
    border-right: none;
  }
  @media screen and (max-width: 991px) {
    max-width: 100%;
    border: none;
    border-bottom: 1px dashed ${grayRgba(0.2)};
    &:last-of-type {
      border-bottom: none;
    }
  }
`;

const AfterList = styled.ul`
  list-style: none;
  margin: 0;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.1),
    0px 48px 64px rgba(0, 0, 0, 0.05);
  border-radius: 48px;
  background: var(--white);
  padding: 0;
  padding-right: 20px;
  ${flex("row", "stretch")};

  min-height: 576px;
  @media screen and (max-width: 991px) {
    min-height: auto;
    flex-direction: column;
    padding: 0;
    border-radius: 32px;
    margin-bottom: 48px;
  }
`;

export default connect(AfterCourseList);
