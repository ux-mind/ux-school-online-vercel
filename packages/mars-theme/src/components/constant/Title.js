import { styled } from "frontity";
import { font, gradient } from "../base/functions";

export const TitleL = styled.h1`
  margin: 0;
  color: var(--white);
  ${font(112, 120)};
  font-weight: 653;
  letter-spacing: -0.035em;
  font-stretch: 140%;
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : "0")};
  text-align: ${({ align }) => (align ? align : "left")};
  font-variation-settings: "GRAD" -43, "slnt" 0, "XTRA" 468, "XOPQ" 96,
    "YOPQ" 63, "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738,
    "opsz" 70;
  @media screen and (max-width: 991px) {
    ${font(36, 44)};
    letter-spacing: -0.01em;
    font-stretch: 120%;
  }
`;

export const TitleM = styled.h2`
  margin: 0;
  color: var(--white);
  ${({ color }) => (color === "white" ? "" : gradient())};
  text-align: ${({ align }) => (align ? align : "left")};
  ${font(52, 56)};
  font-weight: 540;
  letter-spacing: -0.025em;
  font-stretch: 128%;
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : "0")};
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 499, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738, "opsz" 58;
  @media screen and (max-width: 991px) {
    ${font(34, 44)};
    letter-spacing: -0.01em;
    font-stretch: 121%;
    font-weight: 573;
    font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 509, "XOPQ" 96,
      "YOPQ" 79, "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
  }
`;

export const TitleS = styled.h3`
  ${font(34, 44)};
  font-weight: 573;
  color: ${({ color }) =>
    color === "white"
      ? "var(--white)"
      : color === "gray"
      ? "var(--gray-300)"
      : "var(--black-900)"};
  letter-spacing: -0.01em;
  font-stretch: 121%;
  margin: 0;
  text-align: ${({ align }) => (align ? align : "left")};
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : "0")};
  font-variation-settings: "wdth" 121, "GRAD" 0, "slnt" 0, "XTRA" 509, "XOPQ" 96,
    "YOPQ" 79, "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
  @media screen and (max-width: 991px) {
    ${font(21, 28)};
    font-weight: 632;
    font-stretch: 113%;
    font-variation-settings: "wdth" 113, "GRAD" 0, "slnt" 0, "XTRA" 513,
      "XOPQ" 96, "YOPQ" 79, "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203,
      "YTFI" 738;
  }
`;
