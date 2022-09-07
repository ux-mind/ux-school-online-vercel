import React from "react";
import CommonModal from "../../../constant/CommonModal";
import Link from "../../../constant/Link";
import P from "../../../constant/Paragraph";
import { flex } from "../../../base/functions";
import { styled } from "frontity";

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
              src={testimonial.avatar}
              srcSet={`${testimonial.avatar} 1x, ${
                testimonial.avatar2x ? testimonial.avatar2x : testimonial.avatar
              } 2x`}
              alt="avatar"
            />
          </Avatar>
          <Name>{testimonial.name}</Name>
          {testimonial.age && <Age>{testimonial.age}</Age>}
          <Social>
            {testimonial.social[0] &&
              testimonial.social.map((item) => (
                <SocialLink link={item.link} key={item.id}>
                  <img src={item.icon} alt="social link" />
                </SocialLink>
              ))}
          </Social>
        </Info>
        <Text>
          {testimonial.paragraphs.map((paragraph) => (
            <P size="l" key={paragraph}>
              {paragraph}
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
