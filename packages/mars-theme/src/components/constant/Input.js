import { styled } from "frontity";
import { font, stretch } from "../base/functions";

const Input = styled.input`
  ${font(21, 32)};
  ${stretch(109)};
  font-weight: 400;
  color: var(--black-900);
  padding: 0.5238095em 0.7142857143em;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  &::placeholder {
    color: var(--gray-300);
  }
`;

export default Input;
