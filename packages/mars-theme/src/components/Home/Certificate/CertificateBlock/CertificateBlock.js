import React, { useState, useEffect } from "react";
import P from "../../../constant/Paragraph";
import PrimaryBtn from "../../../constant/PrimaryButton";
import Input from "../../../constant/Input";
import InputValid from "../../../constant/InputWithValidation";
import CheckboxItem from "../../../constant/CheckboxItem";
import Emoji from "./Emoji/Emoji";
import CommonModal from "../../../constant/CommonModal";
import { styled, connect } from "frontity";
import {
  flex,
  font,
  whiteRgba,
  grayRgba,
  stretch,
} from "../../../base/functions";
import { TitleM } from "../../../constant/Title";

import certificate2x from "../../../../assets/images/certificate@2x.png";
import certificateMobile2x from "../../../../assets/images/cetrificate-mobile@2x.png";
import parse from "html-react-parser";

const CertificateBlock = ({ state, post }) => {
  const [checkModalOpened, setCheckModalOpened] = useState(false);
  const [confirmModalOpened, setConfirmModalOpened] = useState(false);
  const [isUserAgree, setIsUserAgree] = useState(false);

  const scrollToRates = () => {
    state.theme.ratesElement.scrollIntoView({ behavior: "smooth" });
  };

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
    email: false,
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
    if (!/\S+@\S+\.\S+/.test(formValues["email"])) {
      setFormErrors((prev) => {
        const newFormErrors = Object.assign({}, prev);
        newFormErrors["email"] = true;
        return newFormErrors;
      });
      errorSubmit = true;
    }
    if (formValues["email"] && formValues["email"].indexOf("@") === -1) {
      setFormErrors((prev) => {
        const newFormErrors = Object.assign({}, prev);
        newFormErrors["email"] = true;
        return newFormErrors;
      });
      errorSubmit = true;
    }
    if (!errorSubmit) {
      try {
        setCheckModalOpened(false);
        setConfirmModalOpened(true);
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
        formData.append("ux-email", formValues.email);
        setFormValues({
          name: "",
          phone: "",
          email: "",
        });

        let res = await fetch(
          "https://online.ux-mind.pro/wp-content/themes/twentytwentyone/send-form-certificate.php",
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
    <Wrapper>
      <CertificateTitle>
        {post.acf.certificate_title ? parse(post.acf.certificate_title) : ""}
      </CertificateTitle>
      <Subtitle>
        <P size="l">
          {post.acf.certificate_text ? parse(post.acf.certificate_text) : ""}
        </P>
      </Subtitle>
      <CertificateWrapper>
        <CertificateBorder>
          <CertificateBorderInner>
            <Certificate>
              <img
                src={
                  state.theme.isMobile
                    ? post.acf.certificate_image_mobile.url
                    : post.acf.certificate_image.url
                }
                srcSet={
                  state.theme.isMobile
                    ? `${post.acf.certificate_image_mobile.url} 1x, ${certificateMobile2x} 2x`
                    : `${post.acf.certificate_image.url} 1x, ${certificate2x} 2x`
                }
                alt="certificate"
              />
            </Certificate>
          </CertificateBorderInner>
          <CertificateCheck>
            <P>
              {post.acf.certificate_sticker_text_before}{" "}
              <CheckBtn onClick={() => setCheckModalOpened(true)}>
                {post.acf.certificate_sticker_button_text}
              </CheckBtn>
              {post.acf.certificate_sticker_text_after}
            </P>
          </CertificateCheck>
          {/* <Emoji /> */}
        </CertificateBorder>
      </CertificateWrapper>
      <CourseBtnWrapper>
        <PrimaryBtn
          onClick={scrollToRates}
          content={post.acf.certificate_button_text}
        />
      </CourseBtnWrapper>
      <CommonModal
        isOpened={checkModalOpened}
        setIsOpened={setCheckModalOpened}
      >
        <ModalTitle>{post.acf.certificate_modal_title}</ModalTitle>
        <ModalText>
          <P size="l">
            {post.acf.certificate_modal_text
              ? parse(post.acf.certificate_modal_text)
              : ""}
          </P>
        </ModalText>
        <CheckForm>
          <InputWrapper>
            <InputValid
              type="text"
              placeholder={post.acf.certificate_modal_name_placeholder}
              onChange={(evt) => handleInputChange(evt)}
              value={formValues.name}
              error={formErrors.name}
              name="name"
            />
          </InputWrapper>
          <InputWrapper>
            <InputValid
              type="text"
              placeholder={post.acf.certificate_modal_phone_placeholder}
              onChange={(evt) => handleInputChange(evt)}
              value={formValues.phone}
              error={formErrors.phone}
              name="phone"
            />
          </InputWrapper>
          <InputWrapper>
            <InputValid
              type="email"
              placeholder={post.acf.certificate_modal_email_placeholder}
              onChange={(evt) => handleInputChange(evt)}
              value={formValues.email}
              error={formErrors.email}
              name="email"
            />
          </InputWrapper>
          <SubmitWrapper>
            <PrimaryBtn
              disabled={isUserAgree ? false : true}
              content={post.acf.certificate_modal_submit_button_text}
              type="submit"
              onClick={(evt) => handleFormSubmit(evt)}
            />
          </SubmitWrapper>
          <CheckboxWrapper>
            <CheckboxItem
              checked={isUserAgree}
              setChecked={() => setIsUserAgree((prev) => !prev)}
            >
              {post.acf.certificate_modal_checkbox_text}{" "}
              <a href={post.acf.certificate_modal_checkbox_link_url}>
                {post.acf.certificate_modal_checkbox_link_text}
              </a>
            </CheckboxItem>
          </CheckboxWrapper>
        </CheckForm>
      </CommonModal>
      <CommonModal
        isOpened={confirmModalOpened}
        setIsOpened={setConfirmModalOpened}
      >
        <ModalTitle>{post.acf.certificate_confirm_modal_title}</ModalTitle>
        <P size="l">
          {post.acf.certificate_confirm_modal_text
            ? parse(post.acf.certificate_confirm_modal_text)
            : ""}
        </P>
      </CommonModal>
    </Wrapper>
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

const CheckForm = styled.form``;

const ModalText = styled.div`
  margin-bottom: 31px;
  @media screen and (max-width: 991px) {
    margin-bottom: 17px;
  }
`;

const ModalTitle = styled(TitleM)`
  margin-bottom: 23px;
  @media screen and (max-width: 991px) {
    margin-bottom: 9px;
  }
`;

const CheckBtn = styled.button`
  padding: 0;
  background: transparent;
  border: none;
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

const CertificateCheck = styled.div`
  position: absolute;
  z-index: 3;
  right: -232px;
  top: 248px;
  padding: 8px 16px;
  background: ${whiteRgba(0.01)};
  backdrop-filter: blur(24px);
  max-width: 333px;
  box-sizing: border-box;
  border-radius: 12px;
  & p {
    color: var(--gray-800);
    font-stretch: 122%;
    font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96,
      "YOPQ" 79, "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
  }
  @media screen and (max-width: 1400px) {
    top: 290px;
    right: -150px;
    color: var(--white);
  }
  @media screen and (max-width: 991px) {
    background: ${grayRgba(0.1)};
    right: auto;
    left: 8px;
    max-width: calc(100% - 16px);
    top: auto;
    bottom: -50px;
    padding: 9px 16px 7px;
    & p {
      ${font(14, 20)};
      ${stretch(110)};
    }
  }
`;

const CourseBtnWrapper = styled.div`
  position: relative;
  margin-top: 72px;
  text-align: center;
  z-index: 2;
  & button {
    box-shadow: 0px 1px 1px rgba(55, 61, 67, 0.1),
      0px -30px 100px rgba(255, 255, 255, 0.3),
      0px 70px 90px rgba(55, 61, 67, 0.3),
      inset 0.5px 1px 0px rgba(255, 255, 255, 0.35);
  }
  @media screen and (max-width: 991px) {
    margin-top: 113px;
    & button {
      max-width: 257px;
      padding: 0.47em;
      border-radius: 12px;
    }
    & div {
      border-radius: 12px;
    }
  }
`;

const Certificate = styled.div`
  max-width: inherit;
  box-sizing: inherit;
  & img {
    max-width: inherit;
    box-sizing: inherit;
  }
`;

const CertificateBorderInner = styled.div`
  padding: 33px;
  max-width: inherit;
  box-sizing: inherit;
  padding-bottom: 37px;
  background: var(--white);
  box-shadow: inset 0px 0px 1.09877px rgba(1, 56, 121, 0.2),
    inset 0px 0px 32.963px rgba(1, 56, 121, 0.1);
  @media screen and (max-width: 991px) {
    padding: 16px;
    padding-bottom: 18px;
  }
`;

const CertificateBorder = styled.div`
  ${flex()};
  margin: 0 auto;
  max-width: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  padding: 22px;
  padding-bottom: 28px;
  background: var(--white);
  box-shadow: 0px 1.09877px 1.09877px rgba(55, 61, 67, 0.1),
    0px 21.9753px 21.9753px rgba(55, 61, 67, 0.1);
  @media screen and (max-width: 991px) {
    padding: 11px;
    padding-bottom: 14px;
  }
`;

const CertificateWrapper = styled.div`
  ${flex()};
  z-index: 1;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    width: 433px;
    height: 432px;
    bottom: 64px;
    left: 50%;
    transform: translateX(-50%);
    background: #9d20ff;
    filter: blur(250px);
    border-radius: 120px;
  }
  @media screen and (max-width: 991px) {
    &::before {
      bottom: 61px;
      width: 226px;
      height: 226px;
      filter: blur(130px);
    }
  }
`;

const Subtitle = styled.div`
  text-align: center;
  max-width: 732px;
  margin: 0 auto 63px;
  z-index: 2;
  position: relative;
  & p {
    text-align: center;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 33px;
  }
`;

const CertificateTitle = styled(TitleM)`
  text-align: center;
  margin-bottom: 23px;
  z-index: 2;
  position: relative;
  @media screen and (max-width: 991px) {
    margin-bottom: 13px;
  }
`;

const Wrapper = styled.div`
  padding: 178px 0 88px;
  border-bottom: 1px dashed ${whiteRgba(0.3)};
  margin-bottom: -496px;
  & .modal {
    max-width: 670px;
    box-sizing: border-box;
  }

  @media screen and (max-width: 991px) {
    padding: 110px 0 104px;
    margin-bottom: -372px;

    & .modal {
      max-width: calc(100% - 32px);
    }

    & .modal-wrapper {
      padding: 22px 24px 24px;
    }
  }
`;

export default connect(CertificateBlock);
