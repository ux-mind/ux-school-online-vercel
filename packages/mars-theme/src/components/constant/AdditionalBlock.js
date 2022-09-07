import React from "react";
import P from "./Paragraph";
import { styled, connect, useConnect } from "frontity";
import { whiteRgba, grayRgba } from "../base/functions";

const AdditionalBlock = ({ additionalItems }) => {
  const { state } = useConnect();
  const { isMobile } = state.theme;

  return (
    <Additional>
      <Wrapper>
        {additionalItems.map((item) => {
          return (
            <AdditionalItem key={item.id}>
              <Icon>
                <img
                  width="24"
                  height="24"
                  src={isMobile ? item.mobileIcon : item.icon}
                  alt=""
                />
              </Icon>
              <Note>
                <P
                  color={isMobile ? `black` : `white`}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </Note>
            </AdditionalItem>
          );
        })}
      </Wrapper>
    </Additional>
  );
};

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
  @media screen and (max-width: 991px) {
    border: 1px dashed ${grayRgba(0.2)};
    padding: 31px 24px 25px;
    background: var(--white);
  }
`;

const Additional = styled.div``;

export default connect(AdditionalBlock, { injectProps: false });
