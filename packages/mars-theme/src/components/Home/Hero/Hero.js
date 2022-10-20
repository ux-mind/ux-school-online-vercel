import React from "react";
import Container from "../../constant/Container";
import { TitleL } from "../../constant/Title";
import PrimaryButton from "../../constant/PrimaryButton";
import { connect, styled } from "frontity";
import { font, whiteRgba, stretch } from "../../base/functions";

import video from "../../../assets/videos/hero-video.mov";
import videoWebm from "../../../assets/videos/hero-video.webm";

import bg from "../../../assets/images/Bg.png";
import check from "../../../assets/images/svg/list-check.svg";

const advantages = [
  "Простым языком и для начинающих",
  "Учись в своём темпе",
  "От 5000₽ одним платёжом, или рассрочка",
];

const Hero = ({ state }) => {
  const scrollToRates = () => {
    state.theme.ratesElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroWrapper>
      <Container>
        <Content>
          <HeroTitle>
            Профессия <br />
            UX/UI-дизайнер
          </HeroTitle>
          <AdvantagesList>
            {advantages && advantages.map((text) => <li key={text}>{text}</li>)}
          </AdvantagesList>
          <PrimaryButton
            onClick={scrollToRates}
            content={"Записаться на курс"}
          />
          <VideoWrapper>
            {/* <img src={videoGif} alt="" /> */}
            <video
              width="728"
              height="728"
              autoPlay
              nocontrols="true"
              playsInline
              muted
              loop={true}
              preload="auto"
            >
              <source src={video} type="video/mp4" />
              <source src={videoWebm} type="video/webm" /> § Тег video не
              поддерживается вашим браузером.
            </video>
          </VideoWrapper>
          <Quote>
            <p>
              Сделай крутой шаг в карьере и получи современную,
              высокооплачиваемую профессию
            </p>
          </Quote>
        </Content>
      </Container>
    </HeroWrapper>
  );
};

const Quote = styled.div`
  padding: 7px 15px;
  position: absolute;
  z-index: 1;
  top: 530px;
  left: 50%;
  transform: translateX(calc(-50% + 66px)) rotate(10deg);
  backdrop-filter: blur(24px);
  background: ${whiteRgba(0.1)};
  max-width: 380px;
  border-radius: 12px;
  & p {
    ${font(16, 24)};
    color: var(--white);
    margin: 0;
    ${stretch(122)};
  }
  @media screen and (max-width: 1400px) {
    transform: translateX(calc(-50% + 126px)) rotate(10deg);
  }
  @media screen and (max-width: 991px) {
    transform: rotate(-5deg);
    left: 5px;
    bottom: 185px;
    top: auto;
    & p {
      ${font(14, 20)};
      ${stretch(110)};
    }
  }
`;

const VideoWrapper = styled.div`
  width: auto;
  height: 728px;
  position: absolute;
  top: 20px;
  right: -112px;
  @media screen and (max-width: 1400px) {
    height: auto;
    right: -80px;
    top: 120px;
    & video {
      width: 500px;
      height: 500px;
    }
  }
  @media screen and (max-width: 991px) {
    position: relative;
    top: initial;
    left: initial;
    right: initial;
    margin-top: 46px;
    width: 100%;
    & video {
      width: 100%;
    }
  }
  @media screen and (max-width: 576px) {
    width: calc(100% + 160px);
    left: 50%;
    transform: translateX(calc(-50% - 20px));
    margin: 0;
  }
`;

const AdvantagesList = styled.ul`
  margin: 0;
  margin-bottom: 50px;
  padding: 0;
  & li {
    margin: 0;
    margin-bottom: 8px;
    padding-left: 28px;
    position: relative;
    color: var(--white);
    ${font(16, 24)};
    font-stretch: 122%;
    font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96,
      "YOPQ" 79, "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
    &:last-child {
      margin-bottom: 0;
    }
    &::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      top: 2px;
      left: 0;
      background: url(${check}) no-repeat 50%;
    }
  }
`;

const HeroTitle = styled(TitleL)`
  line-height: calc(128 / 112);
  position: relative;
  z-index: 1;
  margin-bottom: 16px;
`;

const Content = styled.div`
  position: relative;
  padding-top: 182px;
  padding-bottom: 416px;
  @media screen and (max-width: 991px) {
    padding-top: calc(71px + 54px);
    padding-bottom: 135px;
  }
  @media screen and (max-width: 576px) {
    padding-bottom: 50px;
  }
`;

const HeroWrapper = styled.div`
  background: url(${bg}) 50% / cover;
  overflow: hidden;
`;

export default connect(Hero);
