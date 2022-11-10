import React from "react";
import P from "../../../constant/Paragraph";
import Link from "../../../constant/Link";
import { stretch, font, flex, grayRgba } from "../../../base/functions";
import { styled } from "frontity";

import poster from "../../../../assets/images/youtube-poster.jpg";
import poster2x from "../../../../assets/images/youtube-poster@2x.jpg";
import insta from "../../../../assets/images/insta.png";
import insta2x from "../../../../assets/images/insta@2x.png";
import yandex from "../../../../assets/images/yandex.png";
import yandex2x from "../../../../assets/images/yandex@2x.png";
import relax from "../../../../assets/images/Relax.png";
import relax2x from "../../../../assets/images/Relax@2x.png";
import gmaps from "../../../../assets/images/Google-maps.png";
import gmaps2x from "../../../../assets/images/Google-maps@2x.png";
import parse from "html-react-parser";

const Additional = ({ post }) => {
  return (
    <Wrapper>
      <YtBlock>
        <Poster>
          <img
            src={post.acf.reviews_youtube_poster_1x.url}
            srcSet={`${post.acf.reviews_youtube_poster_1x.url} 1x, ${
              post.acf.reviews_youtube_poster_2x.url
                ? post.acf.reviews_youtube_poster_2x.url
                : post.acf.reviews_youtube_poster_1x.url
            } 2x`}
            alt="youtube poster"
          />
        </Poster>
        <YtContent>
          <P>
            {post.acf.reviews_youtube_text
              ? parse(post.acf.reviews_youtube_text)
              : ""}
          </P>
          <YtBtnWrapper>
            <YtBtn
              rel="noopenner noreferrer"
              target="_blank"
              link={post.acf.reviews_youtube_button_link}
            >
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.351 6.68386C18.351 6.68386 18.1864 5.5402 17.6795 5.03802C17.0377 4.37709 16.3202 4.37385 15.9911 4.33498C13.6344 4.1665 10.0962 4.1665 10.0962 4.1665H10.0896C10.0896 4.1665 6.5514 4.1665 4.19477 4.33498C3.86563 4.37385 3.14811 4.37709 2.50629 5.03802C1.99942 5.5402 1.83814 6.68386 1.83814 6.68386C1.83814 6.68386 1.66699 8.02839 1.66699 9.36969V10.6267C1.66699 11.968 1.83485 13.3126 1.83485 13.3126C1.83485 13.3126 1.99942 14.4562 2.503 14.9584C3.14482 15.6193 3.98741 15.5967 4.36263 15.6679C5.7121 15.7943 10.0929 15.8332 10.0929 15.8332C10.0929 15.8332 13.6344 15.8267 15.9911 15.6615C16.3202 15.6226 17.0377 15.6193 17.6795 14.9584C18.1864 14.4562 18.351 13.3126 18.351 13.3126C18.351 13.3126 18.5188 11.9713 18.5188 10.6267V9.36969C18.5188 8.02839 18.351 6.68386 18.351 6.68386ZM8.35178 12.1527V7.49058L12.9038 9.82974L8.35178 12.1527Z"
                    fill="white"
                  />
                </svg>
              </div>
              {post.acf.reviews_youtube_button_text}
            </YtBtn>
          </YtBtnWrapper>
        </YtContent>
      </YtBlock>
      <MoreTestimonials>
        <Title>
          <P>{post.acf.reviews_social_title}</P>
        </Title>
        <LinksWrapper>
          {post.acf.reviews_social_items.map((link, id) => {
            return (
              <TestimonialLink
                link={link.reviews_social_link}
                key={`${link.reviews_social_link}-${id}`}
              >
                <img
                  height="40"
                  src={link.reviews_social_image_1x.url}
                  srcSet={`${link.reviews_social_image_1x.url} 1x, ${link.reviews_social_image_2x.url} 2x`}
                  alt="icon"
                />
              </TestimonialLink>
            );
          })}
        </LinksWrapper>
      </MoreTestimonials>
    </Wrapper>
  );
};

const TestimonialLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const LinksWrapper = styled.div`
  ${flex("column", "center")};
`;

const Title = styled.div`
  margin-bottom: 30px;
  & p {
    text-align: center;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 25px;
  }
`;

const YtBtnWrapper = styled.div`
  text-align: center;
`;

const YtBtn = styled(Link)`
  background: var(--gradient-youtube-btn);
  ${font(16, 24)};
  font-weight: 500;
  ${stretch(122)};
  color: var(--white);
  ${flex("row", "center")};
  max-width: min-content;
  border: none;
  border-radius: 8px;
  padding: 0.5em 1.25em;
  margin: 0 auto;
  & div {
    ${flex()};
    margin-right: 10px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const YtContent = styled.div`
  padding: 23px 48px 32px;
  & p {
    text-align: center;
    margin-bottom: 9px;
  }
  @media screen and (max-width: 991px) {
    padding: 15px 24px 24px;
  }
`;

const Poster = styled.div`
  & img {
    width: 100%;
  }
`;

const YtBlock = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-radius: 48px;
  overflow: hidden;
  margin-bottom: 24px;
  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 991px) {
    border-radius: 32px;
    margin-bottom: 48px;
    box-shadow: 0 4px 50px rgba(0, 0, 0, 0.08);
  }
`;

const MoreTestimonials = styled.div`
  padding: 23px 48px 32px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 48px;
  border: 1px dashed ${grayRgba(0.2)};
  @media screen and (max-width: 991px) {
    border-radius: 32px;
    padding: 23px 24px 28px;
  }
`;

const Wrapper = styled.div`
  ${flex("column")};
`;

export default Additional;
