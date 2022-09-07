import React from "react";
import Container from "../../constant/Container";
import P from "../../constant/Paragraph";
import Link from "../../constant/Link";
import { TitleL } from "../../constant/Title";
import { flex, whiteRgba, font, stretch } from "../../base/functions";
import { styled } from "frontity";

import bg from "../../../assets/images/about-title-bg.png";
import linkExternal from "../../../assets/images/svg/Link-external.svg";

const TitleSection = () => {
  return (
    <Section>
      <Container>
        <Content>
          <TitleBlock>
            <TitleTop>Школа дизайна</TitleTop>
            <TitleBottom>UX MIND School</TitleBottom>
          </TitleBlock>
          <InfoBlock>
            <Who>Кто мы такие</Who>
            <Info>
              <InfoText>
                <P size="l" color="white">
                  Мы — школа дизайна, которая построена на основе студии&nbsp;UX
                  Mind, для того чтобы вырастить собственных специалистов и
                  делиться своим опытом со всеми желающими.
                </P>
                <P size="l" color="white">
                  Сейчас знания быстро устаревают, и учиться имеет смысл только
                  у тех, кто в этом «варится». Мы каждый день на передовой
                  и знаем, что сейчас в тренде, какие технологии лучше
                  использовать, что стоит делать.
                </P>
              </InfoText>
              <InfoLink link="http://ux-mind.pro">
                ux-mind.pro
                <img width="24" height="24" src={linkExternal} alt="" />
              </InfoLink>
            </Info>
          </InfoBlock>
        </Content>
      </Container>
    </Section>
  );
};

const InfoLink = styled(Link)`
  ${flex("row", "center")};
  font-weight: 473;
  ${font(21, 36)};
  text-decoration: underline;
  color: var(--link-500);
  letter-spacing: -0.01em;
  ${stretch(115)};
  padding: 10px 32px;
  background: var(--white);
  max-width: max-content;
  border-radius: 12px;
  & img {
    margin-left: 10px;
  }
  @media screen and (max-width: 576px) {
    max-width: 100%;
    justify-content: center;
  }
`;

const InfoText = styled.div`
  margin-bottom: 47px;
  & p {
    margin-bottom: 14px;
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

const Who = styled(P)`
  margin: 0;
  ${font(14, 20)}
  ${stretch(110)}
	color: ${whiteRgba(0.7)};
  @media screen and (max-width: 991px) {
    position: absolute;
    top: 25px;
    left: 0;
  }
`;

const InfoBlock = styled.div`
  padding: 81px 0 120px;
  display: grid;
  grid-template-columns: 4fr 6fr 2fr;
  grid-gap: 24px;
  @media screen and (max-width: 991px) {
    padding: 0;
    grid-template-columns: 100%;
  }
`;

const TitleBottom = styled(TitleL)`
  position: relative;
  margin: 0;
  display: inline-block;
  margin-left: auto;
  margin-right: 64px;
  @media screen and (max-width: 1400px) {
    margin-right: 0;
  }
  @media screen and (max-width: 991px) {
    margin-left: 0;
  }
`;

const TitleTop = styled(TitleL)`
  position: relative;
  margin: 0;
  left: 0;
  display: inline-block;
`;

const TitleBlock = styled.div`
  position: relative;
  padding: 102px 0 98px;
  ${flex("column")};
  border-bottom: 1px dashed ${whiteRgba(0.3)};
  @media screen and (max-width: 991px) {
    padding: 0;
    border: none;
    margin-bottom: 27px;
  }
`;

const Content = styled.div`
  position: relative;
  padding: 126px 0 144px;
`;

const Section = styled.section`
  background: url(${bg}) no-repeat 50% / cover;
`;

export default TitleSection;
