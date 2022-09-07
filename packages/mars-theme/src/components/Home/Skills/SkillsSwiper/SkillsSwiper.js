import React, { useState } from "react";
import P from "../../../constant/Paragraph";
import { TitleS } from "../../../constant/Title";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import {
  Pagination,
  EffectFade,
  Navigation,
  Controller,
  Autoplay,
} from "swiper";
import { connect, styled } from "frontity";
import { flex } from "../../../base/functions";

import interface1x from "../../../../assets/images/learn-slider/interface.png";
import interface2x from "../../../../assets/images/learn-slider/interface@2x.png";
import design from "../../../../assets/images/learn-slider/design.png";
import design2x from "../../../../assets/images/learn-slider/design@2x.png";
import figma from "../../../../assets/images/learn-slider/figma.png";
import figma2x from "../../../../assets/images/learn-slider/figma@2x.png";
import portfolio from "../../../../assets/images/learn-slider/portfolio.png";
import portfolio2x from "../../../../assets/images/learn-slider/portfolio@2x.png";
import job from "../../../../assets/images/learn-slider/job.png";
import job2x from "../../../../assets/images/learn-slider/job@2x.png";

const slides = [
  {
    id: 1,
    title: "Проектировать интерфейсы",
    content: "От сбора требований и постановки проблемы, до реализации",
    image: interface1x,
    image2x: interface2x,
  },
  {
    id: 2,
    title: "Визуальный дизайн",
    content:
      "Вы научитесь выстраивать композицию. Освоите типографику и работу с цветом",
    image: design,
    image2x: design2x,
  },
  {
    id: 3,
    title: "Figma",
    content:
      "Это главный инструмент веб-дизайнера на сегодня у которого есть свои особенности, о которых мы расскажем",
    image: figma,
    image2x: figma2x,
  },
  {
    id: 4,
    title: "Оформлять портфолио",
    content:
      "Вы узнаете как правильно подать результат, чтобы он был высоко оценён",
    image: portfolio,
    image2x: portfolio2x,
  },
  {
    id: 5,
    title: "Как найти первую работу",
    content:
      "Мы расскажем о том, как быстро найти первую работу и не совершить ошибок",
    image: job,
    image2x: job2x,
  },
];

const SkillsSwiper = ({ state }) => {
  const [infoSwiper, setInfoSwiper] = useState(null);
  const [infoImgSwiper, setInfoImgSwiper] = useState(null);

  return (
    <Content>
      <PrevBtn className="info-prev">
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
            d="M15.983 4.14201C15.5436 3.70266 14.8313 3.70266 14.392 4.14201L8.01701 10.517C7.57766 10.9563 7.57766 11.6686 8.01701 12.108L14.392 18.483C14.8313 18.9223 15.5436 18.9223 15.983 18.483C16.4223 18.0436 16.4223 17.3313 15.983 16.892L10.4035 11.3125L15.983 5.73291C16.4223 5.29356 16.4223 4.58136 15.983 4.14201Z"
            fill="#80859A"
          />
        </svg>
      </PrevBtn>
      <NextBtn className="info-next">
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
            d="M8.017 18.4829C8.45634 18.9223 9.16866 18.9223 9.60799 18.4829L15.9829 12.108C16.4223 11.6687 16.4223 10.9563 15.9829 10.517L9.60799 4.142C9.16866 3.70267 8.45634 3.70267 8.017 4.142C7.57767 4.58134 7.57767 5.29366 8.017 5.73299L13.5965 11.3125L8.017 16.892C7.57767 17.3314 7.57767 18.0436 8.017 18.4829Z"
            fill="#80859A"
          />
        </svg>
      </NextBtn>
      <PaginationElement className="pagination-element" />
      <Swiper
        className="info-slider"
        loop={true}
        modules={[Pagination, EffectFade, Navigation, Controller, Autoplay]}
        pagination={{ el: ".pagination-element", clickable: true }}
        effect="fade"
        navigation={{ prevEl: ".info-prev", nextEl: ".info-next" }}
        controller={{ control: infoImgSwiper }}
        onSwiper={(swiper) => setInfoSwiper(swiper)}
        speed={800}
        autoplay={{
          delay: 3000,
        }}
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <SlideContent className="slide-content">
                <Note>
                  <SlideTitle>{slide.title}</SlideTitle>
                  <Text>
                    <P size="l">{slide.content}</P>
                  </Text>
                </Note>
                <ImageContainer>
                  <ImageWrapper className="image-wrapper">
                    <img wdith="400" height="400" src={slide.image} alt="" />
                  </ImageWrapper>
                </ImageContainer>
              </SlideContent>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ImageSwiperWrapper>
        <Swiper
          className="info-img-slider"
          loop={true}
          modules={[EffectFade, Controller]}
          effect="fade"
          controller={{ control: infoSwiper }}
          onSwiper={(swiper) => {
            setInfoImgSwiper(swiper);
          }}
        >
          {slides.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <ImageWrapper>
                  <img wdith="400" height="400" src={slide.image} alt="" />
                </ImageWrapper>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ImageSwiperWrapper>
    </Content>
  );
};

const PrevBtn = styled.button`
  background: transparent;
  border: none;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 168px;
  left: 16px;
  z-index: 2;
  place-items: center;
  padding: 0;
  display: none;
  @media screen and (max-width: 991px) {
    display: grid;
  }
`;

const NextBtn = styled.button`
  background: transparent;
  border: none;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 168px;
  right: 16px;
  z-index: 2;
  place-items: center;
  padding: 0;
  display: none;
  @media screen and (max-width: 991px) {
    display: grid;
  }
`;

const PaginationElement = styled.div`
  position: absolute;
  z-index: 2;
  left: 48px;
  bottom: 40px;
`;

const ImageSwiperWrapper = styled.div`
  position: absolute;
  top: -70px;
  right: 10px;
  max-width: 400px;
  & .swiper-slide {
    opacity: 0 !important;
    &-active {
      opacity: 1 !important;
    }
  }
  @media screen and (max-width: 1400px) {
    max-width: 280px;
    max-height: 280px;
    top: 20px;
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const Text = styled.div`
  max-width: 360px;
  margin: 0 auto;
  @media screen and (max-width: 991px) {
    text-align: center;
  }
`;

const SlideTitle = styled(TitleS)`
  margin: 0;
  margin-bottom: 15px;
  @media screen and (max-width: 991px) {
    margin-bottom: 8px;
    text-align: center;
  }
`;

const Note = styled.div`
  padding-bottom: 20px;
  @media screen and (max-width: 991px) {
    padding: 0;
  }
`;

const ImageWrapper = styled.div`
  @media screen and (max-width: 1400px) {
    & img {
      max-width: 280px;
      max-height: 280px;
    }
  }
  @media screen and (max-width: 991px) {
    & img {
      max-width: 200px;
      max-height: 200px;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  & .image-wrapper {
    display: none;
  }
  @media screen and (max-width: 991px) {
    order: -1;
    & .image-wrapper {
      display: grid;
      place-items: center;
    }
  }
`;

const SlideContent = styled.div`
  display: grid;
  grid-template-columns: 288px 1fr;
  grid-gap: 46px;
  padding: 38px 48px 40px;
  min-height: 360px;
  box-sizing: border-box;
  @media screen and (max-width: 1440px) {
    grid-template-columns: 50% 50%;
    grid-gap: 0;
  }
  @media screen and (max-width: 991px) {
    padding: 24px;
    padding-bottom: 29px;
    grid-template-columns: 100%;
    grid-gap: 35px;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  background: var(--white);
  border-radius: 48px;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.1),
    0px 48px 64px rgba(0, 0, 0, 0.05);
  &::before {
    content: none;
    position: absolute;
    top: 50%;
    left: -12px;
    transform: translateY(-50%);
    width: calc(100% + 24px);
    height: calc(100% - 84px);
    border-radius: 16px;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.1),
      0px 48px 64px rgba(0, 0, 0, 0.05);
  }
  & .info-slider {
    background: var(--white);
    position: relative;
    border-radius: 48px;
  }
  & div.pagination-element {
    left: 48px;
    bottom: 40px;
    ${flex()};
    & .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background: var(--gray-200);
      opacity: 1;
      margin: 0;
      margin-right: 20px;
      &:last-of-type {
        margin-right: 0;
      }
      &-active {
        background: var(--gradient-primary-btn);
      }
    }
  }
  & .swiper-slide {
    opacity: 0 !important;
    &-active {
      opacity: 1 !important;
    }
  }
  @media screen and (max-width: 991px) {
    max-width: 360px;
    width: calc(100vw - 48px);
    margin: 0 auto;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.1),
      0px 48px 64px rgba(0, 0, 0, 0.05);
    &::before {
      content: "";
    }
    & .info-slider {
      border-radius: 32px;
    }
    & div.pagination-element {
      top: calc(100% + 52px);
      bottom: auto;
      justify-content: center;
      left: 50%;
      transform: translateX(-50%);
      max-width: 100%;
    }
  }
`;

export default connect(SkillsSwiper);
