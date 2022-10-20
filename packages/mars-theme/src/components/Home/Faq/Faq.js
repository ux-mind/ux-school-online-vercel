import React, { useState } from "react";
import Container from "../../constant/Container";
import Additional from "./Additional/Additional";
import WhiteBtn from "../../constant/WhiteButton";
import FaqItem from "./FaqItem/FaqItem";
import { grayRgba } from "../../base/functions";
import { TitleM } from "../../constant/Title";
import { styled } from "frontity";

import bg from "../../../assets/images/faq-bg.png";

const faq = [
  {
    id: 1,
    question: "Я никогда не занимался дизайном. Получится ли у меня?",
    answer: [
      "Я никогда не занимался дизайном. Получится ли у меня?",
      "Я никогда не занимался дизайном. Получится ли у меня?",
    ],
  },
  {
    id: 2,
    question: "А что с дипломом?",
    answer: ["Я никогда не занимался дизайном. Получится ли у меня?"],
  },
  {
    id: 3,
    question:
      "Как проходит дистанционное обучение и чем оно отличается от живого?",
    answer: [
      "Я никогда не занимался дизайном. Получится ли у меня?",
      "Я никогда не занимался дизайном. Получится ли у меня?",
    ],
  },
  {
    id: 4,
    question: "Если я не из Беларуси, могу ли я обучаться на ваших курсах?",
    answer: [
      "Я никогда не занимался дизайном. Получится ли у меня?",
      "Я никогда не занимался дизайном. Получится ли у меня?",
    ],
  },
  {
    id: 5,
    question: "Можно ли оплатить частями — в рассрочку?",
    answer: [
      "Я никогда не занимался дизайном. Получится ли у меня?",
      "Я никогда не занимался дизайном. Получится ли у меня?",
    ],
  },
  {
    id: 6,
    question: "Я хочу сменить сферу деятельности, но сомневаюсь, что смогу",
    answer: [
      "Я никогда не занимался дизайном. Получится ли у меня?",
      "Я никогда не занимался дизайном. Получится ли у меня?",
    ],
  },
  {
    id: 7,
    question: "Гарантируете ли вы трудоустройство?",
    answer: [
      "Я никогда не занимался дизайном. Получится ли у меня?",
      "Я никогда не занимался дизайном. Получится ли у меня?",
    ],
  },
  {
    id: 8,
    question: "Сколько зарабатывают дизайнеры?",
    answer: [
      "Я никогда не занимался дизайном. Получится ли у меня?",
      "Я никогда не занимался дизайном. Получится ли у меня?",
    ],
  },
  {
    id: 9,
    question: "Смогу ли я работать на фрилансе после прохождения курсов?",
    answer: [
      "Я никогда не занимался дизайном. Получится ли у меня?",
      "Я никогда не занимался дизайном. Получится ли у меня?",
    ],
  },
  {
    id: 10,
    question: "Гарантируете ли вы трудоустройство?",
    answer: [
      "Я никогда не занимался дизайном. Получится ли у меня?",
      "Я никогда не занимался дизайном. Получится ли у меня?",
    ],
  },
];

const Faq = () => {
  const [isAllFaqShown, setIsAllFaqShown] = useState(false);

  return (
    <Section>
      <Container>
        <Content>
          <FaqTitleM color="white">Часто задаваемые вопросы</FaqTitleM>
          <Additional />
          <FaqContent>
            <FaqBlock>
              {faq.map((item, idx) => {
                if (!isAllFaqShown && idx > 8) {
                  return null;
                }

                return <FaqItem key={item.id} data={item} />;
              })}
            </FaqBlock>
            {!isAllFaqShown && (
              <ShowMore>
                <WhiteBtn onClick={() => setIsAllFaqShown(true)}>
                  Показать ещё
                </WhiteBtn>
              </ShowMore>
            )}
          </FaqContent>
        </Content>
      </Container>
    </Section>
  );
};

const FaqContent = styled.div`
  @media screen and (max-width: 991px) {
    margin-bottom: 48px;
  }
`;

const ShowMore = styled.div`
  margin-top: 24px;
  & button {
    background: transparent;
  }
  @media screen and (max-width: 991px) {
    margin-top: 16px;
    & button {
      background: var(--white);
    }
  }
`;

const FaqBlock = styled.ul`
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

const FaqTitleM = styled(TitleM)`
  grid-column-start: 2;
  max-width: 651px;
  @media screen and (max-width: 991px) {
    grid-column-start: 1;
    margin-bottom: 30px;
    max-width: none;
  }
`;

const Content = styled.div`
  padding: 178px 0 184px;
  display: grid;
  grid-template-columns: calc((4 / 12) * 100% - 12px) calc(
      (8 / 12) * 100% - 12px
    );
  grid-column-gap: 24px;
  grid-row-gap: 46px;
  border-bottom: 1px solid ${grayRgba(0.2)};
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
    padding: 110px 0 152px;
    grid-gap: 0;
  }
`;

const Section = styled.section`
  background: url(${bg}) no-repeat 50% 0;
  background-size: 100% 936px;
  @media screen and (max-width: 991px) {
    background-size: auto 936px;
  }
`;

export default Faq;
