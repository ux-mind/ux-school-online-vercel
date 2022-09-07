import React from "react";
import { TitleS } from "../../../constant/Title";
import P from "../../../constant/Paragraph";
import Link from "../../../constant/Link";
import PrimaryBtn from "../../../constant/PrimaryButton";
import {
  grayRgba,
  whiteRgba,
  font,
  stretch,
  flex,
} from "../../../base/functions";
import { styled } from "frontity";

import bg from "../../../../assets/images/rate-item-bg.png";
import check from "../../../../assets/images/svg/Check.svg";

const RateItem = ({ type, availableContent, openModalFunc }) => {
  return (
    <Item className="rateItem" type={type}>
      <RateTitle
        type={type}
        color={type === "max" ? "white" : type === "free" ? "gray" : "black"}
        align="center"
        mb={23}
      >
        {type === "max"
          ? "Максимальный"
          : type === "free"
          ? "Бесплатно"
          : "Учусь сам"}
      </RateTitle>
      <List>
        {availableContent.map((item) => {
          return (
            <ListItem type={type} key={item}>
              {item}
            </ListItem>
          );
        })}
      </List>
      {(type === "max" || type === "self") && (
        <PriceWrapper type={type}>
          <Price align="center" color={type === "max" ? "white" : "black"}>
            {type === "max" ? "29 500 ₽" : "14 900 ₽"}
          </Price>
          {(type === "max" || type === "self") && (
            <Installment>
              <Or type={type}>или</Or>
              <InstallmentP color={type === "max" ? `white` : `black`}>
                Рассрочка 9 850 ₽ на 3 месяца
                <InfoIcon>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM6.5 7.75C6.5 7.33579 6.83579 7 7.25 7H8.25C8.66421 7 9 7.33579 9 7.75V10.5H9.25C9.66421 10.5 10 10.8358 10 11.25C10 11.6642 9.66421 12 9.25 12H7.25C6.83579 12 6.5 11.6642 6.5 11.25C6.5 10.8358 6.83579 10.5 7.25 10.5H7.5V8.5H7.25C6.83579 8.5 6.5 8.16421 6.5 7.75ZM8 6C8.55229 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z"
                      fill={type === "max" ? `white` : `#454859`}
                    />
                  </svg>
                </InfoIcon>
              </InstallmentP>
            </Installment>
          )}
        </PriceWrapper>
      )}
      <BtnWrapper type={type}>
        {type === "free" ? (
          <WhiteBtn link="/">Смотреть курс</WhiteBtn>
        ) : (
          <PrimaryBtn content="Записаться" onClick={openModalFunc} />
        )}
      </BtnWrapper>
    </Item>
  );
};

const WhiteBtn = styled(Link)`
  display: inline-block;
  color: var(--link-500);
  ${font(21, 36)};
  ${stretch(115)};
  letter-spacing: -0.01em;
  padding: 9px 20px;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  width: 100%;
  background: transparent;
  cursor: pointer;
  max-width: 100%;
  box-sizing: border-box;
  text-align: center;
  @media screen and (max-width: 991px) {
    ${font(16, 24)};
    ${stretch(122)};
    font-weight: 500;
    padding: 0.4375em 1em;
  }
`;

const BtnWrapper = styled.div`
  width: 100%;
  margin-top: ${({ type }) => (type === "free" ? "auto" : "0")};
  text-align: center;
  & button,
  & a {
    width: 100%;
  }
  ${({ type }) =>
    (type === "max" || type === "self") &&
    `
		& button {
			${font(21, 36)}
			${stretch(115)}
			padding: 10px 20px;
			border-radius: 12px;
		}
	`}
  @media screen and (max-width: 991px) {
    & button {
      ${font(16, 24)};
      padding: 8px 20px;
    }
  }
`;

const Or = styled.span`
  display: block;
  ${font(16, 24)};
  ${stretch(122)};
  color: ${({ type }) =>
    type === "max" ? `${whiteRgba(0.4)}` : `var(--black-900)`};
`;

const InfoIcon = styled.span`
  display: flex;
  margin-left: 8px;
`;

const InstallmentP = styled(P)`
  position: relative;
  ${flex("row", "center")};
`;

const Installment = styled.div`
  ${flex("column", "center")};
`;

const Price = styled(TitleS)`
  position: relative;
`;

const PriceWrapper = styled.div`
  margin-top: auto;
  width: 100%;
  text-align: center;
  margin-bottom: 25px;
  @media screen and (max-width: 991px) {
    margin-bottom: 11px;
  }
`;

const ListItem = styled.li`
  margin-bottom: 8px;
  position: relative;
  padding-left: 28px;
  ${font(16, 24)};
  ${stretch(122)};
  color: ${({ type }) =>
    type === "max" ? "var(--white)" : "var(--black-900)"};
  &::before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    top: 0;
    left: 0;
    background: url(${check}) no-repeat 50%;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const List = styled.ul`
  margin: 0;
  margin-bottom: 41px;
  padding: 0;
  list-style: none;
  width: 100%;
  @media screen and (max-width: 991px) {
    margin-bottom: 20px;
  }
`;

const RateTitle = styled(TitleS)`
  padding-bottom: 13px;
  width: 100%;
  position: relative;
  border-bottom: 1px dashed
    ${({ type }) => (type === "max" ? `${whiteRgba(0.2)}` : `${grayRgba(0.2)}`)};
  @media screen and (max-width: 991px) {
    padding-bottom: 9px;
  }
`;

const Item = styled.div`
  position: relative;
  z-index: 2;
  ${flex("column")};
  border-radius: 48px;
  padding: 30px 42px 32px;
  ${({ type }) =>
    type === "max"
      ? `
		background: url(${bg}) no-repeat 50% / cover;
		@media screen and (max-width: 991px) {
			order: 1;
		}
	`
      : type === "self"
      ? `
		border: 1px dashed ${grayRgba(0.2)};
		background: var(--white);
		box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 48px 64px rgba(0, 0, 0, 0.05);;
		@media screen and (max-width: 991px) {
			box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 48px 64px rgba(0, 0, 0, 0.05);
		}
	`
      : `
		border: 1px dashed ${grayRgba(0.2)};
		background: transparent;
	`}
  @media screen and (max-width: 991px) {
    border-radius: 32px;
  }
  @media screen and (max-width: 768px) {
    padding: 19px 24px 24px;
  }
`;

export default RateItem;
