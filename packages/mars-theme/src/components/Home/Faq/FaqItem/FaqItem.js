import React, { useState } from "react";
import P from "../../../constant/Paragraph";
import { flex, grayRgba } from "../../../base/functions";
import { styled, connect, useConnect } from "frontity";

const ProgramItem = ({ data }) => {
  const { state } = useConnect();

  const [isOpened, setIsOpened] = useState(false);

  return (
    <Item onClick={() => setIsOpened((prev) => !prev)}>
      <BtnWrapper
        style={
          isOpened && state.theme.isMobile
            ? { outline: "1px dashed rgba(14, 16, 41, 0.2)" }
            : { outline: "none" }
        }
      >
        <Title>
          <P size="l">{data.question}</P>
        </Title>
        <Drop
          style={
            isOpened ? { transform: "rotate(180deg)" } : { transform: "none" }
          }
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.1704 8.3295C19.6098 8.76884 19.6098 9.48116 19.1704 9.92049L12.7955 16.2954C12.3562 16.7348 11.6438 16.7348 11.2045 16.2954L4.8295 9.92049C4.39017 9.48116 4.39017 8.76884 4.8295 8.3295C5.26884 7.89017 5.98116 7.89017 6.42049 8.3295L12 13.909L17.5795 8.3295C18.0189 7.89017 18.7311 7.89017 19.1704 8.3295Z"
              fill="#B0B5CB"
            />
          </svg>
        </Drop>
      </BtnWrapper>
      {isOpened && (
        <ContentWrapper>
          {data.answer.map((paragraph) => (
            <P key={paragraph}>{paragraph}</P>
          ))}
        </ContentWrapper>
      )}
    </Item>
  );
};

const ContentWrapper = styled.div`
  padding: 0 48px 16px;
  @media screen and (max-width: 991px) {
    padding: 0 24px 4px;
    padding: 10px 24px;
  }
`;

const BtnWrapper = styled.div`
  ${flex("row", "center", "space-between")};
  cursor: pointer;
  padding: 20px 48px;
  @media screen and (max-width: 991px) {
    padding: 12px 24px;
  }
`;

const Drop = styled.div``;

const Title = styled.div`
  max-width: calc(100% - 24px - 16px);
  & p {
    color: var(--black-900);
  }
  @media screen and (max-width: 991px) {
    & p {
      font-stretch: 122%;
    }
  }
`;

const Item = styled.li`
  border-bottom: 1px dashed ${grayRgba(0.2)};
  &:last-child {
    border: none;
  }
`;

export default connect(ProgramItem);
