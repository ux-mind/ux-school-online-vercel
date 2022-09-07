import React, { useState } from "react";
import P from "../../../../constant/Paragraph";
import Link from "../../../../constant/TextLink";
import { font, flex, grayRgba } from "../../../../base/functions";
import { styled, connect, useConnect } from "frontity";

import play from "../../../../../assets/images/svg/play.svg";

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
          <P size="l">{data.title}</P>
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
          {data.videos.map((item) => {
            return (
              <VideoItem key={item.id}>
                <VideoItemContent>
                  <P>{item.title}</P>
                </VideoItemContent>
                <VideoItemState>
                  {item.blocked ? (
                    <div>
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
                          d="M8 8V10H7.75C7.28587 10 6.84075 10.1844 6.51256 10.5126C6.18437 10.8407 6 11.2859 6 11.75V17.25C6 18.216 6.784 19 7.75 19H16.25C16.7141 19 17.1592 18.8156 17.4874 18.4874C17.8156 18.1592 18 17.7141 18 17.25V11.75C18 11.2859 17.8156 10.8407 17.4874 10.5126C17.1592 10.1844 16.7141 10 16.25 10H16V8C16 6.93913 15.5786 5.92172 14.8284 5.17157C14.0783 4.42143 13.0609 4 12 4C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8ZM14.5 10V8C14.5 7.33696 14.2366 6.70107 13.7678 6.23223C13.2989 5.76339 12.663 5.5 12 5.5C11.337 5.5 10.7011 5.76339 10.2322 6.23223C9.76339 6.70107 9.5 7.33696 9.5 8V10H14.5ZM16 11.5H16.25C16.3163 11.5 16.3799 11.5263 16.4268 11.5732C16.4737 11.6201 16.5 11.6837 16.5 11.75V17.25C16.5 17.3163 16.4737 17.3799 16.4268 17.4268C16.3799 17.4737 16.3163 17.5 16.25 17.5H7.75C7.6837 17.5 7.62011 17.4737 7.57322 17.4268C7.52634 17.3799 7.5 17.3163 7.5 17.25V11.75C7.5 11.6837 7.52634 11.6201 7.57322 11.5732C7.62011 11.5263 7.6837 11.5 7.75 11.5H16Z"
                          fill="#B0B5CB"
                        />
                      </svg>
                    </div>
                  ) : (
                    <VideoInfo>
                      <VideoLink link={item.videoLink}>
                        <span>Бесплатно ({item.videoLength})</span>
                        <img src={play} width="24" height="24" alt="play" />
                      </VideoLink>
                    </VideoInfo>
                  )}
                </VideoItemState>
              </VideoItem>
            );
          })}
        </ContentWrapper>
      )}
    </Item>
  );
};

const VideoLink = styled(Link)`
  ${flex("row", "center")};
  text-decoration: none;
  @media screen and (max-width: 991px) {
    & span {
      display: none;
    }
  }
`;

const VideoInfo = styled.div`
  ${font(16, 24)};
  font-stretch: 122%;
  color: var(--link-500);
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
  & img {
    margin-left: 4px;
  }
`;

const VideoItemState = styled.div``;

const VideoItemContent = styled.div`
  & p {
    color: var(--gray-500);
  }
`;

const VideoItem = styled.div`
  padding: 8px 0;
  ${flex("row", "center", "space-between")};
`;

const ContentWrapper = styled.div`
  padding: 0 48px 16px;
  @media screen and (max-width: 991px) {
    padding: 0 24px 4px;
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
