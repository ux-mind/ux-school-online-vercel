import React from "react";
import Container from "../../constant/Container";
import { TitleM, TitleS } from "../../constant/Title";
import { whiteRgba, flex } from "../../base/functions";
import { styled, connect } from "frontity";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Pagination } from "swiper";

import bg from "../../../assets/images/lecturers-bg.png";
import lecturer1 from "../../../assets/images/lecturers/lecturer1.png";
import lecturer1_2x from "../../../assets/images/lecturers/lecturer1@2x.png";
import lecturer2 from "../../../assets/images/lecturers/lecturer2.png";
import lecturer2_2x from "../../../assets/images/lecturers/lecturer2@2x.png";
import lecturer3 from "../../../assets/images/lecturers/lecturer3.png";
import lecturer3_2x from "../../../assets/images/lecturers/lecturer3@2x.png";
import parse from "html-react-parser";

const lecturers = [
  { name: "Илья Метла", avatar: lecturer1, avatar2x: lecturer1_2x },
  { name: "Игорь Колесень", avatar: lecturer2, avatar2x: lecturer2_2x },
  { name: "Саша Карасик", avatar: lecturer3, avatar2x: lecturer3_2x },
];

const Lecturers = ({ state, post }) => {
  const { isMobile } = state.theme;
  console.log(post);

  return (
    <Section>
      <LecturersContainer>
        <Content>
          <LecturersTitle color="white">
            {post.acf.lecturers_title ? parse(post.acf.lecturers_title) : ""}
          </LecturersTitle>
          <SwiperWrapper>
            <Swiper
              modules={[Pagination]}
              pagination={{
                el: ".lecturers-swiper-pagination",
                clickable: true,
              }}
              slidesPerView={"auto"}
              spaceBetween={8}
              centeredSlides={true}
              breakpoints={{
                992: {
                  slidesPerView: 3,
                  centeredSlides: false,
                },
                577: {
                  centeredSlides: false,
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
              }}
            >
              {post.acf.lecturers_items.map((item) => (
                <SwiperSlide key={item.lecturers_item_name}>
                  <SlideImage>
                    <img
                      width="384"
                      src={item.lecturers_item_photo_1x.url}
                      srcSet={`${item.lecturers_item_photo_1x.url} 1x, ${
                        item.lecturers_item_photo_2x.url
                          ? item.lecturers_item_photo_2x.url
                          : item.lecturers_item_photo_1x.url
                      } 2x`}
                      alt="lecturer"
                    />
                    <Fade />
                  </SlideImage>
                  <SlideContent>
                    <Name color="white">{item.lecturers_item_name}</Name>
                  </SlideContent>
                </SwiperSlide>
              ))}
            </Swiper>
            <SwiperPagination className="lecturers-swiper-pagination" />
          </SwiperWrapper>
        </Content>
      </LecturersContainer>
    </Section>
  );
};

const LecturersContainer = styled(Container)`
  @media screen and (max-width: 576px) {
    padding: 0;
  }
`;

const SwiperPagination = styled.div`
  display: none;
  @media screen and (max-width: 991px) {
    display: flex;
  }
`;

const Fade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 39.7727%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const Name = styled(TitleS)`
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: 0;
  padding: 0 25px 22px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
`;

const SlideContent = styled.div``;

const SlideImage = styled.div`
  position: relative;
  border-radius: 48px;
  overflow: hidden;
  display: flex;
  & img {
    width: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 991px) {
    border-radius: 32px;
  }
`;

const LecturersTitle = styled(TitleM)`
  text-align: center;
  margin-bottom: 54px;
  @media screen and (max-width: 991px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 576px) {
    padding: 0 24px;
  }
`;

const SwiperWrapper = styled.div`
  position: relative;
  & .swiper-slide {
    height: auto;
    @media screen and (max-width: 576px) {
      width: 312px;
      max-width: calc(100vw - 48px);
    }
  }
  & div.lecturers-swiper-pagination {
    position: absolute;
    bottom: 0;
    top: auto;
    width: 100%;
    ${flex("row", "center", "center")};
    & .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background: ${whiteRgba(0.5)};
      opacity: 1;
      margin: 0;
      margin-right: 20px;
      &:last-of-type {
        margin-right: 0;
      }
      &-active {
        background: var(--white);
      }
    }
  }
  @media screen and (max-width: 991px) {
    & .swiper {
      padding-bottom: 44px;
    }
  }
`;

const Content = styled.div`
  padding-top: 594px;
  margin-bottom: -144px;
  @media screen and (max-width: 991px) {
    padding-top: 486px;
    margin-bottom: 0;
    padding-bottom: 124px;
  }
`;

const Section = styled.section`
  background: url(${bg}) no-repeat 50% 0;
  background-size: 100% 1000px;
  @media screen and (max-width: 991px) {
    background-size: cover;
  }
`;

export default connect(Lecturers);
