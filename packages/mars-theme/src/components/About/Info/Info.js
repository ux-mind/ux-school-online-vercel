import React from "react";
import Container from "../../constant/Container";
import P from "../../constant/Paragraph";
import { TitleS } from "../../constant/Title";
import {
  grayRgba,
  font,
  stretch,
  gradient,
  whiteRgba,
} from "../../base/functions";
import { styled } from "frontity";

import igor from "../../../assets/images/Igor.png";
import bg from "../../../assets/images/quote-bg.png";
import bgMobile from "../../../assets/images/quote-bg-mobile.png";

const Info = () => {
  return (
    <Section>
      <QuoteMobile>Цитата</QuoteMobile>
      <Container>
        <Content>
          <Top>
            <InfoBlock>
              <Quote>Цитата</Quote>
              <InfoWrapper>
                <InfoText>
                  <P size="l">
                    Мы — школа дизайна, которая построена на основе студии UX
                    Mind, для того чтобы вырастить собственных специалистов и
                    делиться своим опытом со всеми желающими.
                  </P>
                  <P size="l">
                    Сейчас знания быстро устаревают, и учиться имеет смысл
                    только у тех, кто в этом «варится». Мы каждый день
                    на передовой и знаем, что сейчас в тренде, какие технологии
                    лучше использовать, что стоит делать.
                  </P>
                  <SmallInfo>
                    <Avatar>
                      <img src={igor} alt="" />
                    </Avatar>
                    <div>
                      <Name>Игорь Колесень</Name>
                      <Position>Основатель школы</Position>
                    </div>
                  </SmallInfo>
                </InfoText>
              </InfoWrapper>
            </InfoBlock>
          </Top>
          <Bottom>
            <NumbersBlock>
              <Number>2018</Number>
              <NumberTitle>Год основания</NumberTitle>
            </NumbersBlock>
            <NumbersBlock>
              <Number>1000+</Number>
              <NumberTitle>Выпускников</NumberTitle>
            </NumbersBlock>
            <NumbersBlock>
              <Number>20</Number>
              <NumberTitle>Преподавателей</NumberTitle>
            </NumbersBlock>
            <NumbersBlock>
              <Number>12</Number>
              <NumberTitle>Направлений</NumberTitle>
            </NumbersBlock>
          </Bottom>
        </Content>
      </Container>
    </Section>
  );
};

const NumberTitle = styled(P)`
  text-align: center;
`;

const Number = styled(TitleS)`
  ${gradient()};
  ${font(34, 40)};
  text-align: center;
  @media screen and (max-width: 991px) {
    ${font(34, 40)};
    font-weight: 573;
  }
`;

const NumbersBlock = styled.div`
  padding: 30px 30px 33px;
  border-right: 1px dashed ${grayRgba(0.2)};
  text-align: center;
  &:last-child {
    border-right: none;
  }
  @media screen and (max-width: 768px) {
    border: none;
    border-bottom: 1px dashed ${grayRgba(0.2)};
    &:last-child {
      border-bottom: none;
    }
  }
`;

const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  background: var(--white);
  @media screen and (max-width: 991px) {
    border: 1px dashed ${grayRgba(0.2)};
    border-radius: 24px;
    background: transparent;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

const Position = styled(P)`
  font-stretch: 105%;
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
  color: var(--gray-400);
  ${font(12, 16)};
  margin: 0;
  @media screen and (max-width: 991px) {
    && {
      ${font(12, 16)};
    }
  }
`;

const Name = styled(P)`
  && {
    margin: 0;
  }
  @media screen and (max-width: 991px) {
    && {
      ${font(14, 20)};
    }
  }
`;

const Avatar = styled.div`
  overflow: hidden;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  & img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

const SmallInfo = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 40px 1fr;
  grid-gap: 12px;
  margin-top: 39px;
  @media screen and (max-width: 991px) {
    margin-top: 27px;
  }
`;

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
`;

const InfoWrapper = styled.div``;

const Quote = styled(P)`
  margin: 0;
  ${font(14, 20)}
  ${stretch(110)}
	color: var(--gray-500);
  @media screen and (max-width: 991px) {
    ${font(14, 20)}
    position: absolute;
    top: 25px;
    left: 0;
    display: none;
  }
`;

const QuoteMobile = styled(Quote)`
  display: none;
  @media screen and (max-width: 991px) {
    display: block;
    top: 25px;
    left: var(--container-padding-md);
    display: block;
    color: ${whiteRgba(0.7)};
  }
  @media screen and (max-width: 768px) {
    left: var(--container-padding-xs);
  }
  @media screen and (max-width: 576px) {
    left: 24px;
  }
`;

const InfoBlock = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr 2fr;
  grid-gap: 24px;
  position: relative;
  @media screen and (max-width: 1400px) {
    grid-template-columns: 4fr 8fr;
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
  }
`;

const Top = styled.div`
  padding: 64px;
  padding-bottom: 98px;
  background: var(--white);
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
  border-bottom: 1px dashed ${grayRgba(0.2)};
  @media screen and (max-width: 991px) {
    border-radius: 24px;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.1),
      0px 48px 64px rgba(0, 0, 0, 0.05);
    padding: 15px 24px 20px;
    margin-bottom: 24px;
    border: none;
  }
`;

const Content = styled.div`
  position: relative;
  bottom: -128px;
  border-radius: 48px;
  overflow: hidden;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.1),
    0px 48px 64px rgba(0, 0, 0, 0.05);
  @media screen and (max-width: 991px) {
    box-shadow: none;
    overflow: visible;
    position: static;
    padding-top: 144px;
  }
`;

const Section = styled.section`
  position: relative;
  background: url(${bg}) no-repeat 50% / cover;
  padding-top: 48px;
  @media screen and (max-width: 991px) {
    padding-top: 0;
    background: url(${bgMobile}) no-repeat;
    background-size: 100% 350px;
    background-position: top;
  }
  @media screen and (max-width: 530px) {
    background-size: 100% 400px;
  }
  @media screen and (max-width: 450px) {
    background-size: 100% 472px;
  }
`;

export default Info;
