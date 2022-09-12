import React, { useState, useEffect } from "react";
import Container from "../constant/Container";
import P from "../constant/Paragraph";
import CheckboxItem from "../constant/CheckboxItem";
import TextLink from "../constant/TextLink";
import PrimaryBtn from "../constant/PrimaryButtonSmall";
import Input from "../constant/Input";
import { font, stretch, flex } from "../base/functions";
import { TitleM, TitleS } from "../constant/Title";
import { styled, connect, css } from "frontity";

import { useFormik } from "formik";

import envelope from "../../assets/images/svg/Envelope.svg";

const Payment = ({ state }) => {
  const { isMobile } = state.theme;

  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [selectedRate, setSelectedRate] = useState(null);

  const [promocodeValues, setPromocodeValues] = useState(["DESIGN"]);
  const [promocodeFieldOpened, setPromocodeFieldOpened] = useState(false);
  const [isPromocodeCorrect, setIsPromocodeCorrect] = useState(null);

  const [priceInRubles, setPriceInRubles] = useState(29500);
  const [priceString, setPriceString] = useState("29 500");
  const [salePriceInRubles, setSalePriceInRubles] = useState(0);
  const [salePriceString, setSalePriceString] = useState("26 500");

  const [installmentCheckbox, setInstallmentCheckbox] = useState(false);
  const [graduateCheckbox, setGraduateCheckbox] = useState(false);
  const [isUserAgree, setIsUserAgree] = useState(true);

  const formik = useFormik({ initialValues: { name: "", promocode: "" } });

  useEffect(() => {
    const priceString = salePriceInRubles.toString();

    const newPrice = priceString
      .split("")
      .reverse()
      .map((num, index) => {
        if (!((index + 1) % 3)) {
          return ` ${num}`;
        }

        return num;
      })
      .reverse()
      .join("");

    setSalePriceString(newPrice);
  }, [salePriceInRubles]);

  useEffect(() => {
    const priceString = priceInRubles.toString();

    const newPrice = priceString
      .split("")
      .reverse()
      .map((num, index) => {
        if (!((index + 1) % 3)) {
          return ` ${num}`;
        }

        return num;
      })
      .reverse()
      .join("");

    setPriceString(newPrice);
  }, [priceInRubles]);

  useEffect(() => {
    setSalePriceInRubles(priceInRubles - 3000);
  }, [isPromocodeCorrect]);

  const handlePromocodeCheck = () => {
    const value = formik.values.promocode;

    const isPromocodeCorrect = Boolean(
      promocodeValues.find((item) => item === value)
    );

    setIsPromocodeCorrect(isPromocodeCorrect);
  };

  const handlePromocodeClear = () => {
    formik.setFieldValue("promocode", "");
    setIsPromocodeCorrect(null);
  };

  const renderPrice = () => {
    if (isPromocodeCorrect) {
      return (
        <Sum color="black">
          <OldPrice>{priceString}</OldPrice>
          {`${salePriceString} ₽`}
        </Sum>
      );
    }

    if (installmentCheckbox) {
      return (
        <>
          <Sum color="black">
            313.33 BYN{" "}
            <span
              css={css`
                color: var(--gray-300);
              `}
            >
              x 3 месяца
            </span>
          </Sum>
          <P>
            Следующий платёж производится через месяц после осуществления
            предыдущего платежа.
          </P>
        </>
      );
    }

    if (graduateCheckbox) {
      return (
        <Sum color="black">
          <OldPrice>{priceString}</OldPrice>
          {`${salePriceString} ₽`}
        </Sum>
      );
    }

    return <Sum color="black">{`${priceString} ₽`}</Sum>;
  };

  return (
    <PaymentWrapper>
      <Content>
        <TitleM color="black" mb={isMobile ? 30 : 46}>
          Оплатить курс
        </TitleM>
        <Select onClick={() => setDropdownOpened((prev) => !prev)}>
          {selectedRate ? (
            selectedRate
          ) : (
            <span data-span="placeholder">Тариф</span>
          )}
          <Drop rotated={dropdownOpened}>
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
        </Select>
        <PaymentBlock>
          <Price>
            <SumTitle>Сумма для оплаты</SumTitle>
            <PriceContent>{renderPrice()}</PriceContent>
            <Promocode htmlFor="switch">
              <SwitchInput
                checked={promocodeFieldOpened}
                onChange={() => setPromocodeFieldOpened((prev) => !prev)}
                type="checkbox"
                id="switch"
              />
              <Toggle />
              <P>У меня есть промокод</P>
            </Promocode>
            {promocodeFieldOpened && (
              <div>
                <PromocodeBlock>
                  <PromocodeInputWrapper
                    isPromocodeCorrect={isPromocodeCorrect}
                  >
                    <PromocodeInput
                      isEmpty={formik.values.promocode === ""}
                      name="promocode"
                      value={formik.values.promocode}
                      onChange={formik.handleChange}
                      placeholder="Промокод"
                    />
                    {formik.values.promocode !== "" && (
                      <Close aria-label="close" onClick={handlePromocodeClear}>
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
                            d="M5.57901 5.57998C5.78994 5.36931 6.07589 5.25097 6.37401 5.25097C6.67214 5.25097 6.95807 5.36931 7.16901 5.57998L11.999 10.41L16.829 5.57998C16.9321 5.46945 17.0563 5.3808 17.1943 5.31931C17.3323 5.25783 17.4812 5.22477 17.6323 5.2221C17.7833 5.21943 17.9333 5.24722 18.0734 5.3038C18.2135 5.36038 18.3407 5.44459 18.4475 5.55142C18.5545 5.65825 18.6386 5.78551 18.6952 5.92558C18.7517 6.06567 18.7796 6.21571 18.7769 6.36676C18.7742 6.51783 18.7412 6.66679 18.6797 6.80479C18.6182 6.94279 18.5296 7.06699 18.419 7.16998L13.589 12L18.419 16.83C18.5296 16.933 18.6182 17.0572 18.6797 17.1952C18.7412 17.3332 18.7742 17.4822 18.7769 17.6332C18.7796 17.7843 18.7517 17.9343 18.6952 18.0744C18.6386 18.2145 18.5545 18.3417 18.4475 18.4485C18.3407 18.5554 18.2135 18.6396 18.0734 18.6961C17.9333 18.7527 17.7833 18.7806 17.6323 18.7779C17.4812 18.7752 17.3323 18.7422 17.1943 18.6807C17.0563 18.6192 16.9321 18.5305 16.829 18.42L11.999 13.59L7.16901 18.42C6.95574 18.6187 6.67366 18.7269 6.38221 18.7218C6.09076 18.7165 5.8127 18.5985 5.60656 18.3924C5.40045 18.1863 5.28239 17.9082 5.27724 17.6167C5.2721 17.3253 5.38029 17.0433 5.57901 16.83L10.409 12L5.57901 7.16998C5.36834 6.95905 5.25 6.67311 5.25 6.37498C5.25 6.07686 5.36834 5.79093 5.57901 5.57998Z"
                            fill="#B0B5CB"
                          />
                        </svg>
                      </Close>
                    )}
                    {formik.values.promocode !== "" && (
                      <InputTitle isPromocodeCorrect={isPromocodeCorrect}>
                        Промокод
                      </InputTitle>
                    )}
                    {isPromocodeCorrect === false && (
                      <NoPromoMobile>
                        Такого промокода не существует
                      </NoPromoMobile>
                    )}
                  </PromocodeInputWrapper>
                  <PrimaryBtn
                    onClick={handlePromocodeCheck}
                    disabled={isPromocodeCorrect}
                    content="Применить"
                  />
                </PromocodeBlock>
                {isPromocodeCorrect === false && (
                  <NoPromo>Такого промокода не существует</NoPromo>
                )}
              </div>
            )}
          </Price>
          <Info>
            <Checkboxes>
              <CheckboxWrapper>
                <CheckboxItem
                  checked={installmentCheckbox}
                  setChecked={() => setInstallmentCheckbox((prev) => !prev)}
                  top={true}
                >
                  Рассрочка на 3 месяца от UX Mind School
                </CheckboxItem>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <CheckboxItem
                  checked={graduateCheckbox}
                  setChecked={() => setGraduateCheckbox((prev) => !prev)}
                  top={true}
                >
                  Скидка 10% выпускникам UX Mind School
                </CheckboxItem>
              </CheckboxWrapper>
            </Checkboxes>
            <MailNote>
              <img width="24" height="24" src={envelope} alt="envelope" />
              <P>
                После внесения платежа, отправьте копию квитанции на 
                <TextLink link="mailto:hello@ux-school.by">
                  hello@ux-school.by
                </TextLink>
              </P>
            </MailNote>
            <InputWrapper>
              <Input
                placeholder="Имя и фамилия ученика"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </InputWrapper>
            <BtnWrapper>
              <PrimaryBtn content="Перейти к оплате" />
            </BtnWrapper>
            <CheckboxAgreementWrapper>
              <CheckboxItem
                checked={isUserAgree}
                setChecked={() => setIsUserAgree((prev) => !prev)}
              >
                Я согласен с условиями обработки{" "}
                <a href="/terms/">персональных данных</a>
              </CheckboxItem>
            </CheckboxAgreementWrapper>
          </Info>
        </PaymentBlock>
      </Content>
    </PaymentWrapper>
  );
};

const NoPromoMobile = styled.span`
  display: none;
  position: absolute;
  ${font(14, 20)};
  color: var(--gray-500);
  padding-left: 16px;
  left: 0;
  top: 100%;
  ${stretch(110)};
  z-index: 1;
  @media screen and (max-width: 576px) {
    display: inline-block;
  }
`;

const PriceContent = styled.div`
  margin-bottom: 16px;
`;

const OldPrice = styled.span`
  display: inline-block;
  margin-right: 8px;
  color: var(--gray-400);
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: var(--gray-400);
    left: 0;
    top: 50%;
  }
`;

const NoPromo = styled(P)`
  position: relative;
  left: 16px;
  top: 100%;
  ${font(14, 20)};
  display: inline-block;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

const PromocodeInput = styled(Input)`
  ${({ isEmpty }) => (isEmpty ? "" : "padding: 17px 16px 7px")};
`;

const InputTitle = styled.span`
  position: absolute;
  ${font(12, 16)};
  top: 7px;
  left: 16px;
  ${stretch(105)};
  color: var(--gray-400);
  ${({ isPromocodeCorrect }) =>
    isPromocodeCorrect === false && "color: var(--error)"};
`;

const Close = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  display: grid;
  place-items: center;
  padding: 0;
  width: 24px;
  height: 24px;
`;

const PromocodeInputWrapper = styled.div`
  position: relative;
  margin-right: 8px;
  flex-grow: 1;
  flex-shrink: 0;
  @media screen and (max-width: 576px) {
    width: 100%;
    ${({ isPromocodeCorrect }) =>
      isPromocodeCorrect === false && "margin-bottom: 20px;"}
  }
`;

const PromocodeBlock = styled.div`
  ${flex("row", "center")}
  margin-top: 16px;
  & button {
    max-width: 176px;
  }
  @media screen and (max-width: 576px) {
    ${flex("column")};
    & button:not([aria-label="close"]) {
      max-width: 100%;
      width: 100%;
      margin-top: 8px;
    }
  }
`;

const BtnWrapper = styled.div`
  margin-bottom: 15px;
  & button {
    width: 100%;
    max-width: 100%;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

const MailNote = styled.div`
  ${flex("row", "center")}
  max-width: 350px;
  margin-bottom: 31px;
  & img {
    margin-right: 12px;
  }
  & p {
    ${font(14, 20)};
  }
`;

const Checkboxes = styled.div`
  margin-bottom: 26px;
`;

const CheckboxWrapper = styled.div`
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 991px) {
    & p {
      ${font(16, 24)}
    }
  }
`;

const CheckboxAgreementWrapper = styled(CheckboxWrapper)`
  & p {
    ${font(14, 20)}
  }
`;

const Toggle = styled.div`
  cursor: pointer;
  text-indent: -9999px;
  width: 34px;
  height: 18px;
  background: var(--gray-300);
  display: block;
  border-radius: 26px;
  position: relative;
  margin-right: 11px;
  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 14px;
    height: 14px;
    background: var(--white);
    border-radius: 50%;
    transition: 0.3s;
  }
  &:active::after {
    width: 18px;
  }
`;

const SwitchInput = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
  &:checked + div {
    background: var(--link-500);
  }
  &:checked + div::after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

const Promocode = styled.label`
  ${flex("row", "center")}
`;

const Sum = styled(TitleS)``;

const SumTitle = styled(P)`
  margin-bottom: 1px;
  ${font(14, 20)};
  ${stretch(110)};
`;

const Info = styled.div`
  padding: 31px 52px 50px;
  @media screen and (max-width: 991px) {
    padding: 31px 24px 29px;
  }
`;

const Price = styled.div`
  border-bottom: 1px dashed var(--gray-300);
  padding: 25px 52px 30px;
  @media screen and (max-width: 991px) {
    padding: 25px 24px 30px;
  }
`;

const PaymentBlock = styled.div`
  margin-top: 32px;
  background: var(--gray-50);
  border-radius: 12px;
  overflow: hidden;
  @media screen and (max-width: 991px) {
    margin-top: 24px;
  }
`;

const Drop = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  right: 16px;
  top: 50%;
  transform: ${({ rotated }) =>
    rotated ? "translateY(-50%) rotate(180deg)" : "translateY(-50%);"};
`;

const Select = styled.div`
  position: relative;
  cursor: pointer;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  padding: 12px 16px;
  ${font(21, 32)};
  ${stretch(109)};
  color: var(--black-900);
  & span {
    color: var(--gray-300);
  }
`;

const Content = styled(Container)`
  && {
    max-width: 588px;
  }
`;

const PaymentWrapper = styled.div`
  padding: 98px 0 256px;
  @media screen and (max-width: 991px) {
    padding: 54px 0 248px;
  }
`;

export default connect(Payment);
