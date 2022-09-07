import Link from "./Link";
import { styled } from "frontity";

const TextLink = styled(Link)`
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
  ${({ style }) =>
    style === "dark" &&
    `
  &:hover {
    color: var(--link-100);
  }
  &:focus {
    color: var(--link-200);
  }
  &:active {
    color: var(--link-500);
  }`}
`;

export default TextLink;
