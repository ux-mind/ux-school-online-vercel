import React, { useState } from "react";
import Container from "../../constant/Container";
import { TitleM } from "../../constant/Title";
import P from "../../constant/Paragraph";
import Input from "../../constant/Input";
import InputValid from "../../constant/InputWithValidation";
import CommonModal from "../../constant/CommonModal";
import PrimaryBtn from "../../constant/PrimaryButtonSmall";
import CheckboxItem from "../../constant/CheckboxItem";
import { flex, whiteRgba, font } from "../../base/functions";
import { styled } from "frontity";
import parse from "html-react-parser";

import bg from "../../../assets/images/consultation-bg.png";

import { useFormik } from "formik";

const Consultation = ({ post }) => {
  const [isUserAgree, setIsUserAgree] = useState(true);
  const [consultationModalOpened, setConsultationModalOpened] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", tel: "" },
    onSubmit: (values) => {
      setConsultationModalOpened(true);
      console.log(values);
    },
  });

  return (
    <Section>
      <Container>
        <Block>
          <Content>
            <ConsultationTitle color="white">
              {post.acf.consultation_title
                ? parse(post.acf.consultation_title)
                : ""}
            </ConsultationTitle>
            <Subtitle>
              <P size="l" color="white">
                {post.acf.consultation_subtitle
                  ? parse(post.acf.consultation_subtitle)
                  : ""}
              </P>
            </Subtitle>
            <Form onSubmit={formik.handleSubmit}>
              <FormBlock>
                <InputValid
                  noBorder={true}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder={post.acf.consultation_name_placeholder}
                  name="name"
                />
              </FormBlock>
              <FormBlock>
                <InputValid
                  noBorder={true}
                  value={formik.values.tel}
                  onChange={formik.handleChange}
                  placeholder={post.acf.consultation_phone_placeholder}
                  name="tel"
                  type="tel"
                />
              </FormBlock>
              <SubmitWrapper>
                <PrimaryBtn
                  type="submit"
                  content={post.acf.consultation_button_text}
                  disabled={!isUserAgree}
                />
              </SubmitWrapper>
            </Form>
            <Agreement>
              <CheckboxItem
                checked={isUserAgree}
                setChecked={() => setIsUserAgree((prev) => !prev)}
              >
                {post.acf.consultation_checkbox_text
                  ? parse(post.acf.consultation_checkbox_text)
                  : ""}
              </CheckboxItem>
            </Agreement>
          </Content>
        </Block>
      </Container>
      <Like>
        <img
          src={post.acf.consultation_image_1x.url}
          srcSet={`${post.acf.consultation_image_1x.url} 1x, ${
            post.acf.consultation_image_2x.url
              ? post.acf.consultation_image_2x.url
              : post.acf.consultation_image_1x.url
          } 2x`}
          alt=""
        />
      </Like>
      <ModalWrapper>
        <CommonModal
          isOpened={consultationModalOpened}
          setIsOpened={setConsultationModalOpened}
        >
          <ModalTitle>{post.acf.consultation_modal_title}</ModalTitle>
          <P size="l">
            {post.acf.consultation_modal_text
              ? parse(post.acf.consultation_modal_text)
              : ""}
          </P>
        </CommonModal>
      </ModalWrapper>
    </Section>
  );
};

const ModalWrapper = styled.div`
  & .modal {
    max-width: 670px;
  }
  @media screen and (max-width: 991px) {
    & .modal {
      max-width: calc(100% - 32px);
    }
  }
`;

const ModalTitle = styled(TitleM)`
  margin-bottom: 23px;
  @media screen and (max-width: 991px) {
    margin-bottom: 9px;
  }
`;

const ConsultationTitle = styled(TitleM)`
  margin-bottom: 15px;
  @media screen and (max-width: 991px) {
    ${font(21, 28)};
    margin-bottom: 8px;
  }
`;

const Like = styled.div`
  position: absolute;
  top: -233px;
  left: 50%;
  transform: translateX(calc(-50% - (247px + 456px)));
  @media screen and (max-width: 1400px) {
    transform: translateX(calc(-50% - (247px + 356px)));
  }
  @media screen and (max-width: 991px) {
    transform: translateX(calc(-50% - 86px));
    top: -202px;
    & img {
      max-width: 445px;
      max-height: 296px;
    }
  }
`;

const Agreement = styled.div`
  & p {
    color: var(--white);
  }
`;

const SubmitWrapper = styled.div`
  @media screen and (max-width: 991px) {
    text-align: center;
    & button {
      max-width: 100%;
    }
  }
`;

const FormBlock = styled.div`
  margin-right: 8px;
  position: relative;
  &:last-child {
    margin-right: 0;
  }
`;

const Form = styled.form`
  ${flex("row", "center")};
  margin-bottom: 15px;
  @media screen and (max-width: 1400px) {
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 8px;
  }
`;

const Subtitle = styled.div`
  margin-bottom: 39px;
  opacity: 0.8;
  @media screen and (max-width: 991px) {
    margin-bottom: 25px;
  }
`;

const Content = styled.div`
  max-width: 65.81027668%;
  @media screen and (max-width: 991px) {
    max-width: 100%;
  }
`;

const Block = styled.div`
  position: relative;
  top: -72px;
  box-shadow: inset 1px 1px 0px ${whiteRgba(0.35)};
  backdrop-filter: blur(50px);
  border-radius: 48px;
  ${flex("row", "center", "flex-end")};
  padding: 66px 94px 75px;
  @media screen and (max-width: 991px) {
    top: auto;
    padding: 19px 24px 25px;
    background: ${whiteRgba(0.1)};
    backdrop-filter: blur(50px);
    border-radius: 32px;
    box-shadow: inset 1px 1px 0px ${whiteRgba(0.35)};
    display: block;
  }
`;

const Section = styled.section`
  position: relative;
  background: url(${bg}) no-repeat 50% / cover;
  padding-bottom: 128px;
  @media screen and (max-width: 991px) {
    padding: 128px 0 168px;
  }
`;

export default Consultation;
