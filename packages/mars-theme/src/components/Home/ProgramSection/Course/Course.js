import React from "react";
import P from "../../../constant/Paragraph";
import CourseItem from "./CourseItem/CourseItem";
import { styled, connect, css } from "frontity";
import { flex, whiteRgba } from "../../../base/functions";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Pagination } from "swiper";

import suitable1 from "../../../../assets/images/suitable-for-whom/suitable-for-whom-1.png";
import suitable1_2x from "../../../../assets/images/suitable-for-whom/suitable-for-whom-1@2x.png";
import suitable2 from "../../../../assets/images/suitable-for-whom/suitable-for-whom-2.png";
import suitable2_2x from "../../../../assets/images/suitable-for-whom/suitable-for-whom-2@2x.png";
import suitable3 from "../../../../assets/images/suitable-for-whom/suitable-for-whom-3.png";
import suitable3_2x from "../../../../assets/images/suitable-for-whom/suitable-for-whom-3@2x.png";
import suitable4 from "../../../../assets/images/suitable-for-whom/suitable-for-whom-4.png";
import suitable4_2x from "../../../../assets/images/suitable-for-whom/suitable-for-whom-4@2x.png";
import suitable5 from "../../../../assets/images/suitable-for-whom/suitable-for-whom-5.png";
import suitable5_2x from "../../../../assets/images/suitable-for-whom/suitable-for-whom-5@2x.png";
import suitable6 from "../../../../assets/images/suitable-for-whom/suitable-for-whom-6.png";
import suitable6_2x from "../../../../assets/images/suitable-for-whom/suitable-for-whom-6@2x.png";

const courseItems = [
  {
    id: 1,
    image: suitable1,
    image2x: suitable1_2x,
    title: "Кто вообще не знает о веб-дизайне",
    content:
      "В большом здании судебных учреждений во время перерыва заседания по делу Мельвинских члены и прокурор сошлись в кабинете Ивана Егоровича Шебек, и зашёл разговор о знаменитом красовском деле",
  },
  {
    id: 2,
    image: suitable2,
    image2x: suitable2_2x,
    title: "Начинающим веб-дизайнерам",
    content:
      "В большом здании судебных учреждений во время перерыва заседания по делу Мельвинских члены и прокурор сошлись в кабинете Ивана Егоровича Шебек, и зашёл разговор о знаменитом красовском деле",
  },
  {
    id: 3,
    image: suitable3,
    image2x: suitable3_2x,
    title: "Дизайнерам из смежных областей",
    content:
      "В большом здании судебных учреждений во время перерыва заседания по делу Мельвинских члены и прокурор сошлись в кабинете Ивана Егоровича Шебек, и зашёл разговор о знаменитом красовском деле",
  },
  {
    id: 4,
    image: suitable4,
    image2x: suitable4_2x,
    title: "Менеджерам проектов",
    content:
      "В большом здании судебных учреждений во время перерыва заседания по делу Мельвинских члены и прокурор сошлись в кабинете Ивана Егоровича Шебек, и зашёл разговор о знаменитом красовском деле",
  },
  {
    id: 5,
    image: suitable5,
    image2x: suitable5_2x,
    title: "Начинающим бизнесменам",
    content:
      "В большом здании судебных учреждений во время перерыва заседания по делу Мельвинских члены и прокурор сошлись в кабинете Ивана Егоровича Шебек, и зашёл разговор о знаменитом красовском деле",
  },
  {
    id: 6,
    image: suitable6,
    image2x: suitable6_2x,
    title: "Любителям нового",
    content:
      "В большом здании судебных учреждений во время перерыва заседания по делу Мельвинских члены и прокурор сошлись в кабинете Ивана Егоровича Шебек, и зашёл разговор о знаменитом красовском деле",
  },
];

const Course = ({ state }) => {
  const { isMobile } = state.theme;

  return (
    <CourseWrapper>
      <Question size="l">Кому подойдёт наш курс?</Question>
      {!isMobile && (
        <Content>
          {courseItems.map((item) => (
            <CourseItem
              key={item.id}
              image={item.image}
              image2x={item.image2x}
              title={item.title}
              content={item.content}
            />
          ))}
        </Content>
      )}
      {isMobile && (
        <Content>
          <Swiper
            loop={true}
            modules={[Pagination]}
            pagination={{ el: ".course-swiper-pagination", clickable: true }}
            spaceBetween={8}
            slidesPerView={"auto"}
            centeredSlides={true}
          >
            {courseItems.map((item) => (
              <SwiperSlide key={item.id}>
                <CourseItem
                  image={item.image}
                  image2x={item.image2x}
                  title={item.title}
                  content={item.content}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <SwiperPagination className="course-swiper-pagination" />
        </Content>
      )}
    </CourseWrapper>
  );
};

const SwiperPagination = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 991px) {
    display: block;
    position: relative;
    padding-bottom: 44px;
    & .swiper {
      &-slide {
        height: auto;
        align-self: stretch;
        max-width: 312px;
      }
    }
    & div.course-swiper-pagination {
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
  }
`;

const Question = styled(P)`
  margin-bottom: 39px;
  text-align: center;
`;

const CourseWrapper = styled.div`
  padding-top: 65px;
  @media screen and (max-width: 991px) {
    padding-top: 47px;
  }
`;

export default connect(Course);
