import React, { useState } from "react";
import { TitleM } from "../../constant/Title";
import Link from "../../constant/Link";
import { grayRgba, flex, font } from "../../base/functions";
import { styled, connect } from "frontity";

import archi from "../../../assets/images/projects/archi.png";
import link from "../../../assets/images/svg/Link.svg";
import whitelink from "../../../assets/images/svg/whitelink.svg";

const projects = [
  {
    id: 1,
    title: "Archi.Cultuta",
    image: archi,
    link: "https://www.figma.com/exit?url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F143116149%2FAnother-Country-Furniture-shop-website-concept",
  },
  {
    id: 2,
    title: "Chigunka Mobile App",
    image: archi,
    link: "https://www.figma.com/exit?url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F143116149%2FAnother-Country-Furniture-shop-website-concept",
  },
  {
    id: 3,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "https://www.figma.com/exit?url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F143116149%2FAnother-Country-Furniture-shop-website-concept",
  },
  {
    id: 4,
    title: "MUR. Beauty Salon",
    image: archi,
    link: "https://www.figma.com/exit?url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F143116149%2FAnother-Country-Furniture-shop-website-concept",
  },
  {
    id: 5,
    title: "COSRX. Cosmetics Shop",
    image: archi,
    link: "https://www.figma.com/exit?url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F143116149%2FAnother-Country-Furniture-shop-website-concept",
  },
  {
    id: 6,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
  {
    id: 7,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
  {
    id: 8,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
  {
    id: 9,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
  {
    id: 10,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
  {
    id: 11,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
  {
    id: 12,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
  {
    id: 13,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
  {
    id: 14,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
  {
    id: 15,
    title: "NEDVIGA Сервис недвижимости",
    image: archi,
    link: "",
  },
];

const Projects = ({ state }) => {
  const { isMobile } = state.theme;

  const [isAllProjectsShown, setIsAllProjectsShown] = useState(false);

  return (
    <Section>
      <ProjectsTitle>Проекты наших выпускников</ProjectsTitle>
      <Content>
        {projects.map((project, idx) => {
          if (isMobile && idx > 2 && !isAllProjectsShown) {
            return null;
          }

          return (
            <ProjectBlock key={project.id}>
              <Bg>
                <img src={project.image} alt="project image" />
                <Shadow />
              </Bg>
              <BtnLinkWrapper>
                <BtnLink link={project.link}>{project.title}</BtnLink>
              </BtnLinkWrapper>
            </ProjectBlock>
          );
        })}
      </Content>
      {isMobile && !isAllProjectsShown && (
        <ShowMore>
          <ShowMoreBtn onClick={() => setIsAllProjectsShown(true)}>
            Показать ещё
          </ShowMoreBtn>
        </ShowMore>
      )}
      <AllProjects>
        <AllProjectsBtn
          rel="noopenner noreferrer"
          target="_blank"
          link={
            "https://www.behance.net/collection/181601277/itogovye-raboty-uchenikov-UX-Mind-School"
          }
        >
          Все проекты на Behance
        </AllProjectsBtn>
      </AllProjects>
    </Section>
  );
};

const ShowMore = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const ShowMoreBtn = styled.button`
  color: var(--link-500);
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  ${font(16, 24)};
  padding: 0.4375em 1em;
  width: 100%;
  max-width: 325px;
  box-sizing: border-box;
  font-weight: 500;
  font-stretch: 122%;
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
`;

const AllProjectsBtn = styled(Link)`
  display: inline-block;
  color: var(--white);
  position: relative;
  border: none;
  background: var(--gradient-primary-btn);
  padding: 0.7857em 2.2857em;
  padding-right: 98px;
  ${font(28, 36)};
  border-radius: 20px;
  font-stretch: 121%;
  letter-spacing: -0.02em;
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
  backdrop-filter: blur(50px);
  box-shadow: 0px 1px 1px rgba(55, 61, 67, 0.1),
    0px -30px 100px rgba(255, 255, 255, 0.3),
    0px 70px 90px rgba(55, 61, 67, 0.3),
    inset 0.5px 1px 0px rgba(255, 255, 255, 0.35);
  &::before {
    content: "";
    position: absolute;
    right: 64px;
    width: 24px;
    height: 24px;
    top: 50%;
    transform: translateY(-50%);
    background: url(${whitelink}) no-repeat 50%;
  }
  &:disabled {
    background: var(--gray-300);
  }
  &:hover {
    background: var(--gradient-primary-btn-hover);
  }
  &:active {
    & div {
      opacity: 1;
    }
  }
  @media screen and (max-width: 991px) {
    ${font(16, 24)};
    padding: 0.5em 1em;
    padding-right: 40px;
    border-radius: 8px;
    width: 100%;
    max-width: 325px;
    box-sizing: border-box;
    &::before {
      right: 43px;
      width: 20px;
      height: 20px;
      background-size: 20px 20px;
    }
  }
`;

const AllProjects = styled.div`
  text-align: center;
  margin-top: 148px;
  @media screen and (max-width: 991px) {
    margin-top: 32px;
  }
`;

const BtnLink = styled(Link)`
  display: inline-block;
  padding: 8px 16px;
  padding-right: 42px;
  backdrop-filter: blur(20px);
  background: ${grayRgba(0.1)};
  position: relative;
  color: var(--white);
  ${font(16, 24)};
  font-stretch: 122%;
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
  border-radius: 12px;
  &::before {
    content: "";
    position: absolute;
    right: 16px;
    width: 16px;
    height: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: url(${link}) no-repeat 50%;
  }
  &:hover {
    color: var(--link-400);
  }
  &:active {
    color: var(--link-700);
  }
  @media screen and (max-width: 991px) {
    font-stretch: 110%;
    ${font(14, 20)};
  }
`;

const BtnLinkWrapper = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
  margin-top: auto;
  width: 100%;
  @media screen and (max-width: 991px) {
    position: absolute;
    left: 16px;
    bottom: 16px;
    width: 100%;
    max-width: calc(100% - 32px);
  }
`;

const Shadow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 50%
  );
`;

const Bg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s;
  }
  @media screen and (max-width: 991px) {
    position: static;
    & img {
      height: auto;
      max-height: 300px;
    }
  }
`;

const ProjectBlock = styled.div`
  min-width: 384px;
  min-height: 288px;
  border-radius: 48px;
  padding: 16px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  z-index: 0;
  ${flex("column")};
  &:nth-of-type(2n - 1) {
    transform: translateY(62px);
  }
  &:nth-of-type(6),
  &:nth-of-type(8),
  &:nth-of-type(10) {
    transform: translateY(62px);
  }
  &:nth-of-type(7),
  &:nth-of-type(9) {
    transform: none;
  }
  &:hover {
    & img {
      transform: scale(1.2);
    }
  }
  @media screen and (max-width: 991px) {
    border-radius: 32px;
    min-width: auto;
    min-height: auto;
    &:nth-of-type(2n - 1) {
      transform: none;
    }
    &:nth-of-type(6),
    &:nth-of-type(8),
    &:nth-of-type(10) {
      transform: none;
    }
    padding: 0;
  }
`;

const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, calc(100% / 5));
  grid-gap: 24px;
  min-width: 2016px;
  left: 50%;
  transform: translateX(calc(-50% - 50px));
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
    grid-gap: 16px;
    min-width: auto;
    position: static;
    transform: none;
    padding: 0 var(--container-padding-xs);
  }
  @media screen and (max-width: 576px) {
    padding: 0 24px;
  }
`;

const ProjectsTitle = styled(TitleM)`
  text-align: center;
  margin: 0 auto;
  max-width: 407px;
  margin-bottom: 53px;
  @media screen and (max-width: 991px) {
    margin-bottom: 34px;
  }
`;

const Section = styled.section`
  padding-top: 179px;
  padding-bottom: 200px;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 991px) {
    padding-top: 110px;
    padding-bottom: 128px;
  }
`;

export default connect(Projects);
