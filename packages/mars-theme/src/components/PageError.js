import { styled, connect, css } from "frontity";
// import Container from "./constant/Container";
import P from "./constant/Paragraph";
import TextLink from "./constant/TextLink";
import { flex, font, stretch } from "./base/functions";
import { TitleS, TitleM } from "./constant/Title";

import page404 from "../assets/images/page404.png";
import page4042x from "../assets/images/page404@2x.png";

const description = (
  <TitleS
    css={css`
      text-align: center;
    `}
  >
    Don&apos;t panic! Seems like you encountered an error. If this persists, try
    to refresh your browser.
  </TitleS>
);

// The 404 page component
const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <Container404>
      <Content>
        <Picture>
          <img
            src={page404}
            srcSet={`${page404} 1x, ${page4042x ? page4042x : page404} 2x`}
            alt="404"
          />
        </Picture>
        <Title>Нет, так нет</Title>
        <Subtitle>
          <P>Да, была страница, но её уже нет. Чё бубнить-то?</P>
        </Subtitle>
        <TextLink404 link="/">Главная страница</TextLink404>
      </Content>
    </Container404>
  );
};

const Title = styled(TitleM)`
  margin-bottom: 13px;
`;

const TextLink404 = styled(TextLink)`
  ${font(16, 24)};
  ${stretch(122)};
`;

const Subtitle = styled.div`
  margin-bottom: 96px;
  & p {
    text-align: center;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 72px;
  }
`;

const Content = styled.div`
  border: 1px solid var(--gray-100);
  padding: 48px 54px;
  border-radius: 48px;
  box-sizing: border-box;
  width: 587px;
  max-width: 100%;
  margin: 0 auto;
  ${flex("column", "center")};
  @media screen and (max-width: 991px) {
    padding: 40px 24px;
  }
`;

const Picture = styled.div`
  margin-bottom: 25px;
  width: 240px;
  max-width: 100%;
  & img {
    width: 100%;
  }
  @media screen and (max-width: 576px) {
    margin-bottom: 30px;
    width: 202px;
  }
`;

const Container = styled.div`
  max-width: 587px;
  width: calc(100% - 48px);
  margin: 0 auto;
  text-align: center;
`;

const Container404 = styled(Container)`
  padding: 112px 0 205px;
  text-align: center;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
    padding-bottom: 184px;
  }
`;

export default connect(Page404);
