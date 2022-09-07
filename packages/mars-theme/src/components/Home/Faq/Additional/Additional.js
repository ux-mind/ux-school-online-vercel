import React, { useState } from "react";
import P from "../../../constant/Paragraph";
import Link from "../../../constant/Link.js";
import ConnectModal from "./ConnectModal/ConnectModal";
import CommonModal from "../../../constant/CommonModal";
import { TitleM } from "../../../constant/Title";
import {
  font,
  stretch,
  flex,
  whiteRgba,
  grayRgba,
} from "../../../base/functions";
import { styled, connect, css } from "frontity";
import poster from "../../../../assets/images/faq-poster.png";
import poster2x from "../../../../assets/images/faq-poster@2x.png";
import faqIcon from "../../../../assets/images/svg/Question.svg";
import faqIconMobile from "../../../../assets/images/svg/Question-mobile.svg";

const Additional = ({ state }) => {
  const { isMobile } = state.theme;

  const [connectModalOpened, setConnectModalOpened] = useState(false);
  const [approveModalOpened, setApproveModalOpened] = useState(false);

  return (
    <Wrapper>
      <YtBlock>
        <Poster>
          <img
            src={poster}
            srcSet={`${poster} 1x, ${poster2x ? poster2x : poster} 2x`}
            alt="youtube poster"
          />
        </Poster>
        <YtContent>
          <P>Видео-ответы на частые вопросы по обучению</P>
          <YtBtnWrapper>
            <YtBtn link="https://www.youtube.com/playlist?list=PLj21x_Lp9NV3zGrj1Jfzs2CwzGqE4GC2y">
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
              Смотреть
            </YtBtn>
          </YtBtnWrapper>
        </YtContent>
      </YtBlock>
      <div>
        <AdditionalItemWrapper>
          <AdditionalItem>
            <Icon>
              <img
                width="24"
                height="24"
                src={isMobile ? faqIconMobile : faqIcon}
                alt=""
              />
            </Icon>
            <Note>
              <P color={isMobile ? `black` : `white`}>
                Мы ответим на все ваши вопросы лично <br />
                <button onClick={() => setConnectModalOpened(true)}>
                  Связаться с нами
                </button>
              </P>
            </Note>
          </AdditionalItem>
        </AdditionalItemWrapper>
      </div>
      <ModalWrapper>
        <ConnectModal
          isOpened={connectModalOpened}
          setIsOpened={setConnectModalOpened}
          setApproveModalOpened={setApproveModalOpened}
        />
        <CommonModal
          isOpened={approveModalOpened}
          setIsOpened={setApproveModalOpened}
        >
          <TitleM
            css={css`
              margin-bottom: 23px;
              @media screen and (max-width: 991px) {
                margin-bottom: 9px;
              }
            `}
          >
            Заявка отправлена
          </TitleM>
          <Subtitle>
            <P size="l">Наш менеджер совсем скоро свяжется с вами</P>
          </Subtitle>
        </CommonModal>
      </ModalWrapper>
    </Wrapper>
  );
};

const Subtitle = styled.div`
  & p {
    color: var(--black-900);
  }
`;

const ModalWrapper = styled.div`
  & .modal {
    width: 670px;
    max-width: calc(100% - 48px);
    border-radius: 48px;
  }
  @media screen and (max-width: 991px) {
    & .modal {
      border-radius: 24px;
    }
  }
`;

const Note = styled.div`
  & button {
    color: var(--link-200);
    background: transparent;
    border: none;
    padding: 0;
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

const AdditionalItemWrapper = styled.div`
  border: 1px dashed ${whiteRgba(0.3)};
  border-radius: 48px;
  padding: 31px 64px 25px;
  @media screen and (max-width: 991px) {
    border: 1px dashed ${grayRgba(0.2)};
    padding: 31px 24px 25px;
    background: var(--white);
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
`;

const YtContent = styled.div`
  padding: 23px 48px 32px;
  background: var(--white);
  & p {
    text-align: center;
    margin-bottom: 9px;
  }
  @media screen and (max-width: 991px) {
    padding: 15px 24px 24px;
  }
`;

const Poster = styled.div`
  margin-bottom: -3px;
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
  @media screen and (max-width: 576px) {
    order: 1;
    margin-top: 48px;
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div`
  @media screen and (max-width: 991px) {
    order: 1;
  }
  @media screen and (max-width: 576px) {
    ${flex("column")};
  }
`;

export default connect(Additional);
