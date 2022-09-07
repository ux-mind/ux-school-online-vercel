import { styled } from "frontity";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  color: var(--black-900);
  @media screen and (max-width: 1400px) {
    max-width: 950px;
  }
  @media screen and (max-width: 991px) {
    max-width: 730px;
  }
  @media screen and (max-width: 768px) {
    max-width: 528px;
  }
  @media screen and (max-width: 576px) {
    max-width: 100%;
    padding: 0 24px;
  }
`;

export default Container;
