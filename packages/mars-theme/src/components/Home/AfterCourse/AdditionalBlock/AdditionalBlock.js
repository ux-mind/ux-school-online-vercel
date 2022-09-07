import React, { useState } from "react";
import P from "../../../constant/Paragraph";
import Resume from "./Resume/Resume";
import { styled, connect } from "frontity";
import { font, whiteRgba, grayRgba } from "../../../base/functions";

import people from "../../../../assets/images/svg/People.svg";
import lighting from "../../../../assets/images/svg/Lightning.svg";

const AdditionalBlock = ({ state }) => {
  const { isMobile } = state.theme;

  const [resumeOpened, setResumeOpened] = useState(false);

  return (
    <>
      <Additional>
        <Wrapper>
          <AdditionalItem>
            <Icon>
              <img width="24" height="24" src={people} alt="" />
            </Icon>
            <Note>
              <P color="white">
                Если вы являетесь представителем компании, которой нужны хорошие
                дизайнеры, напишите нам
              </P>
            </Note>
          </AdditionalItem>
          <AdditionalItem>
            <Icon>
              <img width="24" height="24" src={lighting} alt="" />
            </Icon>
            <Note>
              <P color="white">
                Вот так будет выглядеть
                <PopupBtn onClick={() => setResumeOpened(true)}>
                  ваше резюме
                </PopupBtn>
                после курса
              </P>
            </Note>
          </AdditionalItem>
        </Wrapper>
      </Additional>
      <Resume isOpened={resumeOpened} setIsOpened={setResumeOpened} />
    </>
  );
};

const PopupBtn = styled.button`
  background: transparent;
  border: none;
  color: var(--link-200);
  text-decoration: underline;
  ${font(16, 24)};
  font-stretch: 122%;
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
  &:hover {
    color: var(--link-100);
  }
  &:active {
    color: var(--link-500);
  }
`;

const Note = styled.div`
  & a {
    color: var(--link-200);
    text-decoration: underline;
    font-size: inherit;
    line-height: inherit;
    font-stretch: inherit;
    font-variation-settings: inherit;
    &:visited {
      color: var(--link-visited);
    }
    &:hover {
      color: var(--link-400);
    }
    &:focus {
      color: var(--link-500);
    }
    &:active {
      color: var(--link-700);
    }
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const AdditionalItem = styled.div`
  position: relative;
  padding-left: 32px;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Wrapper = styled.div`
  border: 1px dashed ${whiteRgba(0.3)};
  border-radius: 48px;
  padding: 31px 64px 25px;
  @media screen and (max-width: 1400px) {
    padding: 31px 24px 25px;
  }
  @media screen and (max-width: 991px) {
    padding: 31px 24px 25px;
  }
`;

const Additional = styled.div`
  @media screen and (max-width: 991px) {
    order: 1;
  }
`;

export default connect(AdditionalBlock);
