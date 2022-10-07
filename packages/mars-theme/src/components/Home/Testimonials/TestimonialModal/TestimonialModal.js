import React from "react";
import CommonModal from "../../../constant/CommonModal";
import Link from "../../../constant/Link";
import P from "../../../constant/Paragraph";
import { flex } from "../../../base/functions";
import { styled } from "frontity";
import parse from "html-react-parser";

const TestimonialModal = ({ isOpened, setIsOpened, testimonial }) => {
  if (!testimonial) {
    return null;
  }

  return (
    <CommonModal isOpened={isOpened} setIsOpened={setIsOpened}>
      <ModalWrapper>
        <Info>
          <Avatar>
            <img
              src={testimonial.acf.review_photo_1x.url}
              srcSet={`${testimonial.acf.review_photo_1x.url} 1x, ${
                testimonial.acf.review_photo_2x.url ? testimonial.acf.review_photo_2x.url : testimonial.acf.review_photo_1x.url
              } 2x`}
              alt="avatar"
            />
          </Avatar>
          <Name>{testimonial.acf.review_author_name}</Name>
          {testimonial.acf.review_author_age && <Age>{testimonial.acf.review_author_age}</Age>}
          <Social>
            {testimonial.acf.review_social_links[0] &&
              testimonial.acf.review_social_links.map((item, id) => (
                <SocialLink link={item.review_social_link} key={`${item.review_social_link}-${id}`}>
                  <img src={item.review_social_icon.url} alt="social link" />
                </SocialLink>
              ))}
          </Social>
        </Info>
        <Text>
          {testimonial.acf.review_full_text.map((paragraph) => (
            <P size="l" key={paragraph.review_full_paragrah}>
              {paragraph.review_full_paragrah ? parse(paragraph.review_full_paragrah) : ''}
            </P>
          ))}
        </Text>
      </ModalWrapper>
    </CommonModal>
  );
};

const Social = styled.div`
  margin-top: 9px;
  ${flex("row", "center")}
  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 17px;
  }
`;

const SocialLink = styled(Link)`
  display: grid;
  place-items: center;
  border-radius: 8px;
  border: 1px solid var(--gray-100);
  margin-right: 8px;
  width: 36px;
  height: 36px;
  & img {
    max-width: calc(100% - 4px);
    max-height: calc(100% - 4px);
  }
  &:last-child {
    margin-right: 0;
  }
  @media screen and (max-width: 768px) {
    width: 48px;
    height: 48px;
    & img {
      width: 24px;
      height: 24px;
    }
  }
`;

const Age = styled(P)`
  text-align: center;
  color: var(--gray-300);
`;

const Name = styled(P)`
  text-align: center;
  color: var(--black-700);
  margin: 0;
`;

const Avatar = styled.div`
  overflow: hidden;
  border-radius: 48px;
  max-width: 192px;
  max-height: 192px;
  margin-bottom: 15px;
  & img {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    max-width: 64px;
    max-height: 64px;
    border-radius: 16px;
    margin: 0 auto;
    margin-bottom: 7px;
  }
`;

const Info = styled.div``;

const Text = styled.div`
  & p {
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 768px) {
    & p {
      margin-bottom: 6px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const ModalWrapper = styled.div`
  display: grid;
  grid-template-columns: 192px 1fr;
  grid-gap: 48px;
  @media screen and (max-width: 1400px) {
    grid-gap: 24px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

export default TestimonialModal;
