import { styled } from "frontity";
import { font } from "../base/functions";

const P = styled.p`
  margin: 0;
  margin-bottom: 8px;
  ${({ size }) => (size === "l" ? `${font(21, 32)}` : `${font(16, 24)}`)};
  color: ${({ color }) =>
    color === "white"
      ? "var(--white)"
      : color === "black"
      ? "var(black-900)"
      : "var(--gray-500)"};
  text-align: ${({ align }) => (align ? align : "left")};
  font-weight: 400;
  font-stretch: ${({ size }) => (size === "l" ? `109%` : `122%`)};
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
  &:last-child {
    margin-bottom: 0;
  }
  & a {
    color: var(--link-500);
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
  @media screen and (max-width: 991px) {
    ${font(16, 24)};
    font-stretch: 122%;
    font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96,
      "YOPQ" 79, "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
  }
`;

export default P;
