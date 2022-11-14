import React from "react";
import { styled } from "frontity";
import { useConnect, connect } from "frontity";

import emoji1 from "../../../../../assets/images/emoji/Emoji1.png";
import emoji6 from "../../../../../assets/images/emoji/Emoji6.png";

const EmojiElement = () => {
  const { state } = useConnect();
  const { isMobile } = state.theme;

  if (!isMobile) {
    return null;
  }

  return (
    <EmojiWrapper>
      <Emoji
        transform={
          isMobile
            ? `translate(calc(-50% - 164px)) rotate(-23deg)`
            : `translate(calc(-50% - 722px)) rotate(-23deg)`
        }
        top={isMobile ? 255 : 195}
        zIndex={isMobile ? -1 : 0}
      >
        <img src={emoji1} alt="emoji" />
      </Emoji>
      <Emoji
        transform={
          isMobile
            ? `translate(calc(-50% + 64px + 104px)) rotate(-9deg)`
            : `translate(calc(-50% + 474px)) rotate(-26deg)`
        }
        top={isMobile ? 31 : 18}
        zIndex={0}
      >
        <img src={emoji6} alt="emoji" />
      </Emoji>
    </EmojiWrapper>
  );
};

const EmojiWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100vw;
  height: 100%;
  left: 50%;
  top: 0;
  z-index: 1;
  transform: translateX(-50%);
  pointer-events: none;
  @media screen and (max-width: 991px) {
    height: calc(100% + 260px);
    top: -130px;
  }
`;

const Emoji = styled.div`
  position: absolute;
  width: 256px;
  height: 256px;
  top: ${({ top }) => (top ? `${top}px` : `0`)};
  left: 50%;
  transform: ${({ transform }) => (transform ? transform : "translateX(-50%)")};
  z-index: ${({ zIndex }) => `${zIndex}`};
  pointer-events: none;
  & img {
    max-width: 100%;
    max-height: 100%;
  }
  @media screen and (max-width: 991px) {
    width: 128px;
    height: 128px;
  }
`;

export default connect(EmojiElement);
