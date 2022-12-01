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
import parse from "html-react-parser";

const Hero = ({ state, post }) => {
  const scrollToRates = () => {
    state.theme.ratesElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroWrapper>
      <Container>
        <Content>
          <HeroTitle>
            {post.acf.main_banner_title
              ? parse(post.acf.main_banner_title)
              : ""}
          </HeroTitle>
          <AdvantagesList>
            {post.acf.main_banner_list &&
              post.acf.main_banner_list.map((item) => (
                <li key={item.main_banner_list_item}>
                  {item.main_banner_list_item}
                </li>
              ))}
          </AdvantagesList>
          <PrimaryButton
            onClick={scrollToRates}
            content={
              post.acf.main_banner_button_text
                ? parse(post.acf.main_banner_button_text)
                : ""
            }
          />
          <VideoWrapper>
            <video
              width="1020"
              height="1020"
              autoPlay
              nocontrols="true"
              playsInline
              muted
              loop={true}
              preload="auto"
            >
              <source src={post.acf.main_banner_animation} type="video/mp4" />
              <source
                src={post.acf.main_banner_animation_webm}
                type="video/webm"
              />{" "}
              § Тег video не поддерживается вашим браузером.
            </video>
          </VideoWrapper>
          <Quote>
            <p>
              {post.acf.main_banner_sticker_text
                ? parse(post.acf.main_banner_sticker_text)
                : ""}
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
  max-width: 390px;
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
  height: 1020px;
  position: absolute;
  top: -3px;
  right: -225px;
  @media screen and (max-width: 1400px) {
    height: auto;
    right: -218px;
    top: 69px;
    & video {
      width: 800px;
      height: 800px;
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
      height: auto;
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
