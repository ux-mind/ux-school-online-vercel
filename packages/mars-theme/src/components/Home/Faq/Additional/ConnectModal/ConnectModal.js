import React, { useState } from "react";
import CommonModal from "../../../../constant/CommonModal";
import { TitleM } from "../../../../constant/Title";
import { font } from "../../../../base/functions";
import Input from "../../../../constant/Input";
import InputValid from "../../../../constant/InputWithValidation";
import PrimaryBtn from "../../../../constant/PrimaryButton";
import CheckboxItem from "../../../../constant/CheckboxItem";
import P from "../../../../constant/Paragraph";
import { styled, css } from "frontity";

import { useFormik } from "formik";

const ConnectModal = ({ isOpened, setIsOpened, setApproveModalOpened }) => {
  const [isUserAgree, setIsUserAgree] = useState(false);

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
  });
  const handleInputChange = (e) => {
    const target = e.target;
    const formValuesKey = target.name;
    setFormValues((prev) => {
      const newFormValues = Object.assign({}, prev);

      newFormValues[`${formValuesKey}`] = target.value;

      return newFormValues;
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let errorSubmit = false;
    Object.keys(formValues).map((key) => {
      if (!formValues[key]) {
        errorSubmit = true;
        setFormErrors((prev) => {
          const newFormErrors = Object.assign({}, prev);
          newFormErrors[`${key}`] = true;
          return newFormErrors;
        });
      } else {
        setFormErrors((prev) => {
          const newFormErrors = Object.assign({}, prev);
          newFormErrors[`${key}`] = false;
          return newFormErrors;
        });
      }
    });
    if (!errorSubmit) {
      try {
        setIsOpened(false);
        setApproveModalOpened(true);
        /*const data = {
          'name': formValues.name,
          'surname': formValues.surname,
          'email': formValues.email,
          'subject': formValues.subject,
          'resume': formValues.resume,
          'message': formValues.message,
        }
        console.log(JSON.stringify(data));*/
        const formData = new FormData();

        formData.append("ux-name", formValues.name);
        formData.append("ux-phone", formValues.phone);

        setFormValues({
          name: "",
          phone: "",
        });

        let res = await fetch(
          "https://online.ux-mind.pro/wp-content/themes/twentytwentyone/send-form-consultation.php",
          {
            method: "POST",
            body: formData,
          }
        );

        if (res.status === 200) {
          console.log("Success");
        } else {
          console.log("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

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
      <ConnectForm>
        <InputWrapper>
          <InputValid
            type="text"
            placeholder="Имя"
            onChange={(evt) => handleInputChange(evt)}
            value={formValues.name}
            error={formErrors.name}
            name="name"
          />
        </InputWrapper>
        <InputWrapper>
          <InputValid
            type="phone"
            placeholder="Телефон"
            onChange={(evt) => handleInputChange(evt)}
            value={formValues.phone}
            error={formErrors.phone}
            name="phone"
          />
        </InputWrapper>
        <SubmitWrapper>
          <PrimaryBtn
            disabled={isUserAgree ? false : true}
            content="Отправить"
            type="submit"
            onClick={(evt) => handleFormSubmit(evt)}
          />
        </SubmitWrapper>
        <CheckboxWrapper>
          <CheckboxItem
            checked={isUserAgree}
            setChecked={() => setIsUserAgree((prev) => !prev)}
          >
            Я согласен с условиями обработки{" "}
            <a href="/terms/">персональных данных</a>
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
  & div {
    border-radius: 12px;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 16px;
  position: relative;
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
