import React, { useState } from "react";
import CommonModal from "../../../../constant/CommonModal";
import { TitleM } from "../../../../constant/Title";
import { font } from "../../../../base/functions";
import Input from "../../../../constant/Input";
import PrimaryBtn from "../../../../constant/PrimaryButton";
import CheckboxItem from "../../../../constant/CheckboxItem";
import P from "../../../../constant/Paragraph";
import { styled, css } from "frontity";

import { useFormik } from "formik";

const ConnectModal = ({ isOpened, setIsOpened, setApproveModalOpened }) => {
  const [isUserAgree, setIsUserAgree] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", tel: "" },
    onSubmit: (values) => {
      setIsOpened(false);
      setApproveModalOpened(true);

      console.log(values);
    },
  });

  return (
    <CommonModal isOpened={isOpened} setIsOpened={setIsOpened}>
      <TitleM
        css={css`
          margin-bottom: 23px;
        `}
      >
        Связаться с нами
      </TitleM>
      <Subtitle>
        <P size="l">
          Оставьте ваши контактные данные. Мы свяжемся с вами и проконсультируем
          вас по любым вопросам.
        </P>
      </Subtitle>
      <ConnectForm onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Имя"
            value={formik.values.name}
            onChange={formik.handleChange}
            name="name"
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="tel"
            placeholder="Телефон"
            value={formik.values.tel}
            onChange={formik.handleChange}
            name="tel"
          />
        </InputWrapper>
        <SubmitWrapper>
          <PrimaryBtn
            disabled={isUserAgree ? false : true}
            content="Отправить"
            type="submit"
          />
        </SubmitWrapper>
        <CheckboxWrapper>
          <CheckboxItem
            checked={isUserAgree}
            setChecked={() => setIsUserAgree((prev) => !prev)}
          >
            Я согласен с условиями обработки <a href="/">персональных данных</a>
          </CheckboxItem>
        </CheckboxWrapper>
      </ConnectForm>
    </CommonModal>
  );
};

const CheckboxWrapper = styled.div`
  margin-top: 17px;
`;

const SubmitWrapper = styled.div`
  margin-top: 32px;
  & button {
    max-width: 100%;
    width: 100%;
    ${font(21, 36)};
    letter-spacing: -0.01em;
    padding: 0.476em;
    box-shadow: inset 1px 1px 0px rgba(255, 255, 255, 0.15);
    border-radius: 12px;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ConnectForm = styled.form``;

const Subtitle = styled.div`
  margin-bottom: 31px;
  & p {
    color: var(--black-900);
  }
`;

export default ConnectModal;
