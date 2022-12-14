import React from "react";
import Container from "../../constant/Container";
import P from "../../constant/Paragraph";
import Link from "../../constant/Link";
import { font, stretch, gradient, grayRgba } from "../../base/functions";
import { styled, useConnect, connect } from "frontity";
import parse from "html-react-parser";

import igor from "../../../assets/images/Igor.png";
import poster from "../../../assets/images/about-poster.png";
import mobilePoster from "../../../assets/images/about-poster-m.png";
import mobilePoster2x from "../../../assets/images/about-poster-m@2x.png";

const smallContent = [
  "«Сейчас знания быстро устаревают, и учиться имеет смысл только у тех, кто в этом «варится». Мы каждый день на передовой и знаем, что сейчас в тренде, какие технологии лучше использовать, что стоит делать, а что — нет. Наша команда UX Mind имеет большой опыт работы с клиентами из Европы и Америки»",
];

const largeContent = [
  "Сейчас знания быстро устаревают, и учиться имеет смысл только у тех, кто в этом «варится». Мы каждый день на передовой и знаем, что сейчас в тренде, какие технологии лучше использовать, что стоит делать, а что — нет. Наша команда UX Mind имеет большой опыт работы с клиентами из Европы и Америки, и этим опытом мы поделимся с тобой.",
  "Так в чём же миссия нашей школы? — Мы хотим научить тебя не только дизайнить, а ещё и зарабатывать на своих навыках и актуальных знаниях. ",
  "Мы каждый день используем приложения, серфим сайты и получаем множество из интернета. При этом совершенно не задумываемся о тех, кто всё это так здорово для нас придумал, и почему этим так удобно пользоваться.",
];

const About = ({ post }) => {
  const { state } = useConnect();
  const { isMobile } = state.theme;

  return (
    <Section>
      <Container>
        <Content>
          <Small>
            <SmallText>
              {post.acf.home_about_quote ? (
                <P key={post.acf.home_about_quote}>
                  {parse(post.acf.home_about_quote)}
                </P>
              ) : (
                ""
              )}
            </SmallText>
            <SmallInfo>
              <Avatar>
                <img src={post.acf.home_about_quote_photo.url} alt="" />
              </Avatar>
              <div>
                <Name>{post.acf.home_about_name}</Name>
                <Position>{post.acf.home_about_post}</Position>
              </div>
            </SmallInfo>
          </Small>
          <Large>
            <LargeText>
              {post.acf.home_about_text.map((item) => (
                <P size="l" key={item.home_about_paragraph}>
                  {item.home_about_paragraph
                    ? parse(item.home_about_paragraph)
                    : ""}
                </P>
              ))}
            </LargeText>
            <BtnWrapper>
              <WhiteBtn link={post.acf.home_about_button_link}>
                {post.acf.home_about_button_text}
              </WhiteBtn>
            </BtnWrapper>
          </Large>
        </Content>
      </Container>
      <Poster>
        {isMobile ? (
          <img
            src={mobilePoster}
            srcSet={`${mobilePoster} 1x, ${mobilePoster2x} 2x`}
            alt="poster"
          />
        ) : (
          <img
            src={post.acf.home_about_image_1x.url}
            srcSet={`${post.acf.home_about_image_1x.url} 1x, ${
              post.acf.home_about_image_2x.url
                ? post.acf.home_about_image_2x.url
                : post.acf.home_about_image_1x.url
            }`}
            alt="poster"
          />
        )}
      </Poster>
    </Section>
  );
};

const Poster = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(
      0deg,
      rgba(5, 46, 74, 0.3),
      rgba(5, 46, 74, 0.3)
    );
  }
`;

const Position = styled(P)`
  font-stretch: 105%;
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
  color: var(--gray-400);
  ${font(12, 16)};
  margin: 0;
`;

const Name = styled(P)`
  ${gradient()};
  margin: 0;
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
  grid-template-columns: 40px 1fr;
  grid-gap: 12px;
  margin-top: 25px;
`;

const WhiteBtn = styled(Link)`
  display: inline-block;
  color: var(--link-500);
  ${font(21, 36)};
  ${stretch(115)};
  letter-spacing: -0.01em;
  padding: 9px 31px;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  background: var(--white);
  cursor: pointer;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  @media screen and (max-width: 991px) {
    ${font(16, 24)};
    ${stretch(122)};
    font-weight: 500;
    padding: 0.4375em 1em;
    border-radius: 8px;
  }
  &:hover {
    background: var(--gray-100);
  }
`;

const BtnWrapper = styled.div`
  margin-top: 47px;
  @media screen and (max-width: 991px) {
    margin-top: 33px;
  }
  @media screen and (max-width: 576px) {
    & a {
      box-sizing: border-box;
      text-align: center;
      max-width: 100%;
      width: 100%;
    }
  }
`;

const LargeText = styled.div`
  & p {
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const SmallText = styled.div`
  & p {
    ${font(14, 20)};
  }
`;

const Large = styled.div``;

const Small = styled.div`
  @media screen and (max-width: 991px) {
    padding: 24px;
    padding-bottom: 20px;
    border: 1px dashed ${grayRgba(0.2)};
    border-radius: 32px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: calc((370 / 1200) * 100% - 38px) calc(
      (830 / 1200) * 100% - 38px
    );
  grid-gap: 76px;
  padding: 185px 0 216px;
  @media screen and (max-width: 991px) {
    padding: 72px 0;
    grid-template-columns: 100%;
    grid-gap: 87px;
  }
`;

const Section = styled.section``;

export default connect(About);
