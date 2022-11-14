import React from "react";
import { styled } from "frontity";
import { useConnect, connect } from "frontity";

import emoji1 from "../../../../../assets/images/emoji/Emoji1.png";
import emoji2 from "../../../../../assets/images/emoji/Emoji2.png";
import emoji3 from "../../../../../assets/images/emoji/Emoji3.png";
import emoji4 from "../../../../../assets/images/emoji/Emoji4.png";
import emoji5 from "../../../../../assets/images/emoji/Emoji5.png";
import emoji6 from "../../../../../assets/images/emoji/Emoji6.png";

const EmojiElement = () => {
  const { state } = useConnect();
  const { isMobile } = state.theme;

  return (
    <EmojiWrapper>
      {!isMobile && (
        <Emoji
          transform={
            isMobile
              ? `translate(calc(-50% - 172px)) rotate(-23deg)`
              : `translate(calc(-50% - 722px)) rotate(-23deg)`
          }
          top={isMobile ? 255 : 195}
          zIndex={isMobile ? -1 : 0}
        >
          <img src={emoji1} alt="emoji" />
        </Emoji>
      )}
      <Emoji
        transform={
          isMobile
            ? `translate(calc(-50% - 64px - 85px)) rotate(-18deg)`
            : `translate(calc(-50% - 483px)) rotate(10deg)`
        }
        top={isMobile ? 73 : -16}
        zIndex={0}
      >
        <img src={emoji3} alt="emoji" />
      </Emoji>
      <Emoji
        transform={
          isMobile
            ? `translate(calc(-50% - 64px - 80px)) rotate(-30deg)`
            : `translate(calc(-50% - 352px)) rotate(-20deg)`
        }
        top={isMobile ? 495 : 371}
        zIndex={1}
      >
        <img src={emoji4} alt="emoji" />
      </Emoji>
      <Emoji
        transform={
          isMobile
            ? `translate(calc(-50% + 175px)) rotate(18deg)`
            : `translate(calc(-50% + 348px)) rotate(11deg)`
        }
        top={isMobile ? 235 : 413}
        zIndex={1}
      >
        <img src={emoji5} alt="emoji" />
      </Emoji>
      {!isMobile && (
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
      )}
      <Emoji
        transform={
          isMobile
            ? `translate(calc(-50% + 64px + 92px)) rotate(29deg)`
            : `translate(calc(-50% + 727px)) rotate(30deg)`
        }
        top={isMobile ? 485 : 225}
        zIndex={1}
      >
        <img src={emoji2} alt="emoji" />
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
