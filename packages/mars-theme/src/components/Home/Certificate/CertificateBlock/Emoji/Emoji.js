import React from "react";
import { styled } from "frontity";

import emoji1 from "../../../../../assets/images/emoji/Emoji1.png";
import emoji2 from "../../../../../assets/images/emoji/Emoji2.png";
import emoji3 from "../../../../../assets/images/emoji/Emoji3.png";
import emoji4 from "../../../../../assets/images/emoji/Emoji4.png";
import emoji5 from "../../../../../assets/images/emoji/Emoji5.png";
import emoji6 from "../../../../../assets/images/emoji/Emoji6.png";

const EmojiElement = () => {
  return (
    <>
      <Emoji
        transform="translate(calc(-50% - 722px)) rotate(-23deg)"
        top={195}
        zIndex={0}
      >
        <img src={emoji1} alt="emoji" />
      </Emoji>
      <Emoji
        transform="translate(calc(-50% - 483px)) rotate(10deg)"
        top={-16}
        zIndex={0}
      >
        <img src={emoji3} alt="emoji" />
      </Emoji>
      <Emoji
        transform="translate(calc(-50% - 352px)) rotate(-20deg)"
        top={371}
        zIndex={1}
      >
        <img src={emoji4} alt="emoji" />
      </Emoji>
      <Emoji
        transform="translate(calc(-50% + 348px)) rotate(11deg)"
        top={413}
        zIndex={1}
      >
        <img src={emoji5} alt="emoji" />
      </Emoji>
      <Emoji
        transform="translate(calc(-50% + 474px)) rotate(-26deg)"
        top={18}
        zIndex={0}
      >
        <img src={emoji6} alt="emoji" />
      </Emoji>
      <Emoji
        transform="translate(calc(-50% + 727px)) rotate(30deg)"
        top={225}
        zIndex={0}
      >
        <img src={emoji2} alt="emoji" />
      </Emoji>
    </>
  );
};

const Emoji = styled.div`
  position: absolute;
  width: 256px;
  height: 256px;
  top: ${({ top }) => (top ? `${top}px` : `0`)};
  left: 50%;
  transform: ${({ transform }) => (transform ? transform : "translateX(-50%)")};
  z-index: ${({ zIndex }) => `${zIndex}`};
  & img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export default EmojiElement;
