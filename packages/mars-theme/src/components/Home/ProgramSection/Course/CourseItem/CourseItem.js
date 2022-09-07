import React, { useState } from "react";
import { TitleS } from "../../../../constant/Title";
import P from "../../../../constant/Paragraph";
import { whiteRgba, flex, font } from "../../../../base/functions";
import { styled, connect, useConnect } from "frontity";

const CourseItem = ({ image, image2x, title, content }) => {
  const { state } = useConnect();
  const { isMobile } = state.theme;

  const [isMouseOver, setIsMousever] = useState(false);

  return (
    <Item
      onMouseOver={() => setIsMousever(true)}
      onMouseLeave={() => setIsMousever(false)}
      isMouseOver={isMouseOver}
    >
      <ImageWrapper isMouseOver={isMouseOver}>
        <img
          src={image}
          srcSet={`${image} 1x, ${image2x ? image2x : image} 2x`}
          width="256"
          height="256"
          alt=""
        />
      </ImageWrapper>
      {!isMobile && !isMouseOver && (
        <ContentWrapper>
          <Title>{title}</Title>
        </ContentWrapper>
      )}
      {!isMobile && isMouseOver && (
        <TextContent>
          <P>{content}</P>
        </TextContent>
      )}
      {isMobile && (
        <ContentWrapper>
          <MobileTitle>{title}</MobileTitle>
          <TextContent>
            <P>{content}</P>
          </TextContent>
        </ContentWrapper>
      )}
    </Item>
  );
};

const TextContent = styled.div`
  & p {
    margin: 0;
    ${font(16, 24)};
    color: var(--white);
  }
  @media screen and (max-width: 991px) {
    & p {
      color: ${whiteRgba(0.7)};
    }
  }
`;

const Title = styled(P)`
  color: var(--white);
  text-align: center;
`;

const MobileTitle = styled(TitleS)`
  color: var(--white);
  margin-bottom: 12px;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  background: ${whiteRgba(0.01)};
  backdrop-filter: blur(12px);
  border: 1px solid ${whiteRgba(0.1)};
  border-radius: 50px;
  padding: 8px 20px;
  ${flex("row", "center", "center")};
  @media screen and (max-width: 991px) {
    backdrop-filter: none;
    background: transparent;
    border-radius: 0;
    border: none;
    padding: 0;
    display: block;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 256px;
  height: 256px;
  ${({ isMouseOver }) =>
    isMouseOver &&
    `
		width: 64px;
		height: 64px;
		left: 48px;
		top: 24px;
		transform: none;
	`};
  & img {
    max-width: 100%;
    max-height: 100%;
  }
  @media screen and (max-width: 991px) {
    width: 128px;
    height: 128px;
    top: 8px;
    left: 8px;
    transform: none;
  }
`;

const Item = styled.div`
  background: ${whiteRgba(0.1)};
  box-shadow: inset 1px 1px 0px ${whiteRgba(0.35)};
  backdrop-filter: blur(50px);
  border-radius: 48px;
  padding: ${({ isMouseOver }) =>
    isMouseOver ? "100px 48px 33px" : "24px 32px 24px"};
  min-height: 304px;
  box-sizing: border-box;
  position: relative;
  ${flex("column", "center", "flex-end")};
  @media screen and (max-width: 991px) {
    border-radius: 32px;
    box-shadow: inset 1px 1px 0px rgba(255, 255, 255, 0.35);
    padding: 147px 24px 24px;
    height: 100%;
  }
`;

export default connect(CourseItem, { injectProps: true });
