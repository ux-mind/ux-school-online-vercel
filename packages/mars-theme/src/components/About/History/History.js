import React, { useState } from "react";
import P from "../../constant/Paragraph";
import Container from "../../constant/Container";
import WhiteBtn from "../../constant/WhiteButton";
import { font, stretch, grayRgba } from "../../base/functions";
import { styled } from "frontity";

const history = [
  {
    date: "2 марта 2018",
    content:
      "Основатель школы и студии Игорь Колесень выложил первый из серии уроков по Figma на Youtube, которые очень быстро набирают популярность.",
  },
  {
    date: "17 мая 2018",
    content:
      "Первое занятие первого потока по веб-дизайну. В группе занималось 7 человек, занятия проходили в минске по адресу Партизанский пр. д. 95.",
  },
  {
    date: "10 марта 2018",
    content: "Запуск направления «дизайн мобильных приложений»",
  },
  {
    date: "13 апреля 2020",
    content:
      "Первое занятие в дистанционном формате. Началось из-за covid-19, но формат понравился и прижился.",
  },
  {
    date: "13 апреля 2020",
    content:
      "Первое занятие в дистанционном формате. Началось из-за covid-19, но формат понравился и прижился.",
  },
];

const History = () => {
  const [historyOpened, setHistoryOpened] = useState(false);

  return (
    <Section>
      <Container>
        <Content>
          <InfoBlock>
            <Mission>История</Mission>
            <Info>
              <InfoText>
                {history.map((item, idx) => {
                  if (!historyOpened && idx > 3) {
                    return null;
                  }

                  return (
                    <InfoItem key={item.date}>
                      <Decorative className="decorative">
                        <svg
                          width="1"
                          height="100%"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            x1="0.5"
                            y1="2.18557e-08"
                            x2="0.499981"
                            y2="438"
                            stroke="#D8DCEC"
                            stroke-dasharray="3 3"
                          />
                        </svg>
                        <Point />
                      </Decorative>
                      <Date>{item.date}</Date>
                      <P size="l">{item.content}</P>
                    </InfoItem>
                  );
                })}
              </InfoText>
              <ShowMore>
                {!historyOpened && (
                  <WhiteBtn onClick={() => setHistoryOpened(true)}>
                    Показать еще
                  </WhiteBtn>
                )}
              </ShowMore>
            </Info>
          </InfoBlock>
        </Content>
      </Container>
    </Section>
  );
};

const Point = styled.div`
  width: 9px;
  height: 9px;
  background: var(--gray-200);
  border-radius: 50%;
  left: -4.5px;
  top: -4px;
  position: absolute;
`;

const Decorative = styled.div`
  position: absolute;
  left: 2px;
  top: 8px;
  height: 100%;
`;

const ShowMore = styled.div`
  padding-left: 32px;
  margin-top: 32px;
  & button {
    ${font(16, 24)};
    padding: 8px 20px;
    border-radius: 8px;
  }
`;

const Date = styled(P)`
  ${font(14, 20)};
  margin-bottom: 8px;
  @media screen and (max-width: 991px) {
    ${font(14, 20)};
  }
`;

const InfoItem = styled.li`
  position: relative;
  padding-left: 32px;
  padding-bottom: 39px;
  &:last-child {
    padding-bottom: 0;
    & .decorative svg {
      display: none;
    }
  }
`;

const InfoText = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
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
    ${font(14, 20)};
  }
`;

const InfoBlock = styled.div`
  border-top: 1px dashed ${grayRgba(0.2)};
  padding-top: 137px;
  display: grid;
  grid-template-columns: 4fr 6fr 2fr;
  grid-gap: 24px;
  position: relative;
  @media screen and (max-width: 1400px) {
    grid-template-columns: 4fr 8fr;
  }
  @media screen and (max-width: 991px) {
    padding-top: 152px;
    grid-template-columns: 100%;
  }
`;

const Content = styled.div`
  padding: 140px 0 176px;
  @media screen and (max-width: 991px) {
    padding: 148px 0 140px;
  }
`;

const Section = styled.section``;

export default History;
