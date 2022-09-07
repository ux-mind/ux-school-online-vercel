import React from "react";
import { styled } from "frontity";

const DropdownModal = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 8px;
  filter: drop-shadow(0px 0px 32px rgba(0, 0, 0, 0.03))
    drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1))
    drop-shadow(0px 48px 64px rgba(0, 0, 0, 0.05));
  &::before {
    z-index: 0;
    pointer-events: none;
    position: absolute;
    content: "";
    top: -4px;
    left: 50%;
    width: 100%;
    width: 9px;
    height: 9px;
    background: var(--white);
    transform: translateX(-50%) rotate(45deg);
    border-top-left-radius: 2.5px;
  }
`;

export default DropdownModal;
