import React, { useState } from "react";
import Container from "../../constant/Container";
import P from "../../constant/Paragraph";
import PrimaryBtn from "../../constant/PrimaryButtonSmall";
import Input from "../../constant/Input";
import CheckboxItem from "../../constant/CheckboxItem";
import CommonModal from "../../constant/CommonModal";
import { TitleM } from "../../constant/Title";
import { flex, font } from "../../base/functions";
import { styled } from "frontity";
import parse from "html-react-parser";

import { useFormik } from "formik";

const Collaboration = ({ post }) => {
  const [isUserAgree, setIsUserAgree] = useState(true);

  const [submitModalOpened, setSubmitModalOpened] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", tel: "" },
    onSubmit: (values) => {
      console.log(values);
      setSubmitModalOpened(true);
    },
  });

  return (
    <section>
      <Container>
        <Content>
          <FormWrapper>
            <FormTitle>{post.acf.collaboration_title}</FormTitle>
            <Subtitle>
              <P size="l">
                {post.acf.collaboration_text}
              </P>
            </Subtitle>
            <Form onSubmit={formik.handleSubmit}>
              <FormBlock>
                <Input
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder={post.acf.collaboration_name_placeholder}
                  name="name"
                />
              </FormBlock>
              <FormBlock>
                <Input
                  value={formik.values.tel}
                  onChange={formik.handleChange}
                  placeholder={post.acf.collaboration_phone_placeholder}
                  name="tel"
                  type="tel"
                />
              </FormBlock>
              <SubmitWrapper>
                <PrimaryBtn
                  type="submit"
                  content={post.acf.collaboration_send_button_text}
                  disabled={!isUserAgree}
                />
              </SubmitWrapper>
            </Form>
            <Agreement>
              <CheckboxItem
                checked={isUserAgree}
                setChecked={() => setIsUserAgree((prev) => !prev)}
              >
                {post.acf.collaboration_personal_data_text}{" "}
                <a href={post.acf.collaboration_personal_data_link}>{post.acf.collaboration_personal_data_link_text}</a>
              </CheckboxItem>
            </Agreement>
          </FormWrapper>
        </Content>
      </Container>
      <ModalWrapper>
        <CommonModal
          isOpened={submitModalOpened}
          setIsOpened={setSubmitModalOpened}
        >
          <ModalTitle>{post.acf.collaboration_modal_title}</ModalTitle>
          <P size="l">{post.acf.collaboration_modal_text ? parse(post.acf.collaboration_modal_text) : ''}</P>
        </CommonModal>
      </ModalWrapper>
    </section>
  );
};

const Agreement = styled.div``;

const SubmitWrapper = styled.div`
  @media screen and (max-width: 991px) {
    text-align: center;
    & button {
      max-width: 100%;
    }
  }
`;

const ModalWrapper = styled.div`
  & .modal {
    max-width: 670px;
    box-sizing: border-box;
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

const FormBlock = styled.div`
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`;

const Form = styled.form`
  ${flex("row", "center")};
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 8px;
  }
`;

const Subtitle = styled.div`
  margin-bottom: 39px;
  max-width: 530px;
  @media screen and (max-width: 991px) {
    margin-bottom: 25px;
  }
`;

const FormTitle = styled(TitleM)`
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    ${font(21, 28)};
    margin-bottom: 8px;
  }
`;

const FormWrapper = styled.div`
  max-width: 698px;
  margin-left: auto;
  margin-right: 94px;
  @media screen and (max-width: 1400px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 991px) {
    max-width: none;
  }
`;

const Content = styled.div`
  padding-top: 298px;
  padding-bottom: 169px;
  ${flex()};
  @media screen and (max-width: 991px) {
    padding: 125px 0 205px;
  }
`;

export default Collaboration;
