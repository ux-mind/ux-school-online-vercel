import { styled } from "frontity";
import { font } from "../base/functions";

const Button = ({ disabled, type, content, onClick }) => {
  return (
    <PrimaryButton
      disabled={disabled}
      type={type ? type : "button"}
      onClick={onClick}
    >
      {content}
      <Border></Border>
    </PrimaryButton>
  );
};

const Border = styled.div`
  opacity: 0;
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const PrimaryButton = styled.button`
  color: var(--white);
  position: relative;
  border: none;
  background: var(--gradient-primary-btn);
  ${font(21, 36)};
  padding: 0.4761904em 1.52380952em;
  border-radius: 12px;
  font-stretch: 121%;
  letter-spacing: -0.02em;
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
  backdrop-filter: blur(50px);
  box-shadow: 0px 1px 1px rgba(55, 61, 67, 0.1),
    0px -30px 100px rgba(255, 255, 255, 0.3),
    0px 70px 90px rgba(55, 61, 67, 0.3),
    inset 0.5px 1px 0px rgba(255, 255, 255, 0.35);
  &:hover {
    background: var(--gradient-primary-btn-hover);
  }
  &:active {
    & div {
      opacity: 1;
    }
  }
  &:disabled {
    background: var(--gray-300);
  }
  @media screen and (max-width: 991px) {
    ${font(21, 36)};
    padding: 0.476em 2em;
    width: 100%;
    max-width: 325px;
  }
`;

export default Button;
