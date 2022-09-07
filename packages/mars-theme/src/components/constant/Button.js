import { styled } from "frontity";
import { font, grayRgba } from "../base/functions";

export const ListButton = styled.button`
  color: var(--black-900);
  background: var(--white);
  ${font(21, 32)}
  padding: 0.952em 2.2857em;
  border: none;
  border-bottom: 1px dashed ${grayRgba(0.2)};
  font-stretch: 122%;
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 509, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
`;
