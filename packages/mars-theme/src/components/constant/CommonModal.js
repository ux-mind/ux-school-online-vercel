import React from "react";
import { grayRgba } from "../base/functions";
import { styled } from "frontity";

const CommonModal = ({ isOpened, setIsOpened, border, children }) => {
  return (
    <>
      <Modal className="modal" border={border} isOpened={isOpened}>
        <Wrapper className="modal-wrapper">
          <Close onClick={() => setIsOpened(false)}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.43966 7.44006C7.7209 7.15916 8.10216 7.00138 8.49966 7.00138C8.89716 7.00138 9.2784 7.15916 9.55966 7.44006L15.9997 13.8801L22.4397 7.44006C22.5771 7.29268 22.7427 7.17448 22.9267 7.0925C23.1107 7.01052 23.3093 6.96644 23.5107 6.96288C23.7121 6.95932 23.9121 6.99638 24.0989 7.07182C24.2857 7.14726 24.4553 7.25954 24.5977 7.40198C24.7403 7.54442 24.8525 7.7141 24.9279 7.90086C25.0033 8.08764 25.0405 8.2877 25.0369 8.4891C25.0333 8.69052 24.9893 8.88914 24.9073 9.07314C24.8253 9.25714 24.7071 9.42274 24.5597 9.56006L18.1197 16.0001L24.5597 22.4401C24.7071 22.5775 24.8253 22.7431 24.9073 22.9271C24.9893 23.1111 25.0333 23.3097 25.0369 23.5111C25.0405 23.7125 25.0033 23.9125 24.9279 24.0993C24.8525 24.2861 24.7403 24.4557 24.5977 24.5981C24.4553 24.7407 24.2857 24.8529 24.0989 24.9283C23.9121 25.0037 23.7121 25.0409 23.5107 25.0373C23.3093 25.0337 23.1107 24.9897 22.9267 24.9077C22.7427 24.8257 22.5771 24.7075 22.4397 24.5601L15.9997 18.1201L9.55966 24.5601C9.2753 24.8251 8.8992 24.9693 8.5106 24.9625C8.122 24.9555 7.75124 24.7981 7.4764 24.5233C7.20158 24.2485 7.04416 23.8777 7.0373 23.4891C7.03044 23.1005 7.1747 22.7245 7.43966 22.4401L13.8797 16.0001L7.43966 9.56006C7.15876 9.27882 7.00098 8.89756 7.00098 8.50006C7.00098 8.10256 7.15876 7.72132 7.43966 7.44006Z"
                fill="#B0B5CB"
              />
            </svg>
          </Close>
          {children}
        </Wrapper>
      </Modal>
      <Blocker isOpened={isOpened} />
    </>
  );
};

const Blocker = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${grayRgba(0.25)};
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
  ${({ isOpened }) => isOpened && `pointer-events: auto; opacity: 1;`}
`;

const Close = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  display: grid;
  padding: 0;
  place-items: center;
  top: 24px;
  right: 24px;
  width: 32px;
  height: 32px;
  @media screen and (max-width: 991px) {
    top: 8px;
    right: 8px;
  }
`;

const Wrapper = styled.div`
  padding: ${({ padding }) => (padding ? padding : "40px 96px")};
  position: relative;
  @media screen and (max-width: 991px) {
    padding: 24px;
  }
`;

const Modal = styled.div`
  position: fixed;
  z-index: 20;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  width: 100%;
  max-width: 792px;
  background: var(--white);
  border-radius: ${({ border }) => (border ? `${border}px` : "24px")};
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
  ${({ isOpened }) => isOpened && `pointer-events: auto; opacity: 1;`}
  @media screen and (max-width: 991px) {
    max-width: calc(100% - 32px);
  }
`;

export default CommonModal;
