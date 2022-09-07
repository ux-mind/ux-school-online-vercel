import React from "react";
import P from "../../constant/Paragraph";
import { styled } from "frontity";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Autoplay } from "swiper";

import yandex from "../../../assets/images/companies/yandex-logo.svg";
import alphaBank from "../../../assets/images/companies/Alfa-Bank-logo.svg";
import dabrabyt from "../../../assets/images/companies/dabrabyt-logo.png";
import epam from "../../../assets/images/companies/epam-logo.svg";
import iba from "../../../assets/images/companies/iba-logo.svg";
import itransition from "../../../assets/images/companies/itransition-logo.svg";
import techArt from "../../../assets/images/companies/tech-art-logo.svg";

const companies = [
  yandex,
  alphaBank,
  dabrabyt,
  epam,
  iba,
  itransition,
  techArt,
];

const CompaniesSwiper = () => {
  return (
    <Section>
      <Title>
        <P size="l">Наши выпускники работают здесь</P>
      </Title>
      <SwiperWrapper>
        <Swiper
          className="companies-swiper"
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={8}
          loop={true}
          slidesPerView={"auto"}
          centeredSlides={true}
        >
          {companies.map((companyIcon) => (
            <SwiperSlide key={companyIcon}>
              <CompanyWrapper>
                <img src={companyIcon} alt="company" />
              </CompanyWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </Section>
  );
};

const CompanyWrapper = styled.div`
  display: grid;
  place-items: center;
  background: var(--gray-50);
  min-height: 104px;
  border-radius: 24px;
  & img {
    max-width: calc(100% - 12px);
  }
`;

const SwiperWrapper = styled.div``;

const Title = styled.div`
  margin-bottom: 32px;
  text-align: center;
  & p {
    color: var(--black-900);
  }
`;

const Section = styled.section`
  padding: 169px 0 200px;
  & .companies-swiper {
    & .swiper-slide {
      width: 273px;
    }
  }
  @media screen and (max-width: 991px) {
    padding: 119px 0 112px;
  }
`;

export default CompaniesSwiper;
