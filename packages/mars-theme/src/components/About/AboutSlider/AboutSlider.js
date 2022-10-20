import React from "react";
import Container from "../../constant/Container";
import { styled } from "frontity";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Pagination } from "swiper";

import slide1 from "../../../assets/images/about-slide1.png";
import slide1_2x from "../../../assets/images/about-slide1@2x.png";
import slide2 from "../../../assets/images/about-slide2.png";
import slide2_2x from "../../../assets/images/about-slide2@2x.png";
import slide3 from "../../../assets/images/about-slide3.png";
import slide3_2x from "../../../assets/images/about-slide3@2x.png";

const slides = [
  { id: 1, image: slide1, image2x: slide1_2x },
  { id: 2, image: slide2, image2x: slide2_2x },
  { id: 3, image: slide3, image2x: slide3_2x },
];

const AboutSlider = () => {
  return (
    <Section>
      <Content>
        <Swiper
          loop={true}
          modules={[Pagination]}
          centeredSlides={true}
          spaceBetween={8}
          slidesPerView={"auto"}
          pagination={{
            el: ".about-swiper-pagination",
            clickable: true,
          }}
          breakpoints={{
            768: {
              spaceBetween: 24,
            },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Image>
                <img
                  src={slide.image}
                  srcSet={slide.image2x ? slide.image2x : slide.image}
                  alt="slide"
                />
              </Image>
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperPagination className="about-swiper-pagination" />
      </Content>
    </Section>
  );
};

const SwiperPagination = styled.div``;

const Image = styled.div`
  overflow: hidden;
  border-radius: 48px;
  display: flex;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 991px) {
    border-radius: 24px;
  }
`;

const Content = styled.div`
  position: relative;
  padding-top: 175px;
  padding-bottom: 44px;
  & .swiper-slide {
    max-width: 1200px;
  }
  & div.about-swiper-pagination {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
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
  @media screen and (max-width: 1400px) {
    & .swiper-slide {
      max-width: 950px;
    }
  }
  @media screen and (max-width: 991px) {
    padding-top: 144px;
    padding-bottom: 40px;
    margin-bottom: 144px;
    & .swiper-slide {
      max-width: 730px;
    }
  }
  @media screen and (max-width: 768px) {
    & .swiper-slide {
      max-width: 528px;
    }
  }
  @media screen and (max-width: 576px) {
    & .swiper-slide {
      max-width: calc(100% - 48px);
    }
  }
`;

const Section = styled.section``;

export default AboutSlider;
