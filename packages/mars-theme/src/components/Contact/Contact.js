import React, { useState } from "react";
import Container from "../constant/Container";
import Link from "../constant/TextLink";
import Input from "../constant/Input";
import CheckboxItem from "../constant/CheckboxItem";
import PrimaryBtn from "../constant/PrimaryButton";
import CommonModal from "../constant/CommonModal";
import { flex, font, grayRgba, stretch } from "../base/functions";
import { TitleM, TitleS } from "../constant/Title";
import { styled, connect } from "frontity";
import P from "../constant/Paragraph";
import parse from "html-react-parser";

import { useFormik } from "formik";

import telegram from "../../assets/images/social/Telegram-large.svg";
import tel from "../../assets/images/social/Phone-large.svg";
import whatsapp from "../../assets/images/social/Whatsapp-large.svg";
import viber from "../../assets/images/social/Viber-large.svg";
import linked from "../../assets/images/social/linkedin-large.svg";

/*
const socials = [
  {
    id: 1,
    icon: telegram,
    link: "t.me/ux_mind_school",
    content: "t.me/ux_mind_school",
  },
  {
    id: 2,
    icon: tel,
    link: "tel:+375(29)863-06-57",
    content: "+375 (29) 863-06-57",
  },
  {
    id: 3,
    icon: whatsapp,
    link: "https://api.whatsapp.com/send?phone=375(29)%20863-06-57",
    content: "+375 (29) 863-06-57",
  },
  {
    id: 4,
    icon: viber,
    link: "https://viber.click/375(29)%20863-06-57",
    content: "+375 (29) 863-06-57",
  },
  {
    id: 5,
    icon: linked,
    link: "linkedin.com/company/ux-mind-school",
    content: "linkedin.com/company/ux-mind-school",
  },
];*/

const Contact = ({ state, post }) => {
  const { isMobile } = state.theme;

  const [isUserAgree, setIsUserAgree] = useState(true);
  const [submitModalOpened, setSubmitModalOpened] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", tel: "", email: "" },
    onSubmit: (values) => {
      console.log(values);
      setSubmitModalOpened(true);
    },
  });

  return (
    <ContactsWrapper>
      <Content>
        <TitleM color="black" mb={isMobile ? 30 : 46}>
          {post.acf.contacts_title}
        </TitleM>
        <MapBlock>
          <Map>
            <iframe
              src={post.acf.contacts_map_link}
              width="100%"
              height="272"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Map>
          <Address>
            <Office>{post.acf.contacts_map_location_name}</Office>
            <P size="l">
              {post.acf.contacts_map_location_address ? parse(post.acf.contacts_map_location_address) : ''}
            </P>
          </Address>
          <SocialList>
            {/*socials.map((item) => {
              return (
                <SocialItem key={item.id}>
                  <Icon>
                    <img width="24" height="24" src={item.icon} alt="icon" />
                  </Icon>
                  <SocialLink link={item.link}>{item.content}</SocialLink>
                </SocialItem>
              );
            })*/}
          </SocialList>
        </MapBlock>
        <FormBlock onSubmit={formik.handleSubmit}>
          <FormTitle>{post.acf.contacts_form_title}</FormTitle>
          <FormSubtitle>
            <P>
              {post.acf.contacts_form_text}
            </P>
          </FormSubtitle>
          <ContactForm>
            <div>
              <Input
                required
                type="text"
                placeholder={post.acf.contacts_form_name_placeholder}
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
              />
            </div>
            <div>
              <Input
                required
                type="tel"
                placeholder={post.acf.contacts_form_phone_placeholder}
                value={formik.values.tel}
                onChange={formik.handleChange}
                name="tel"
              />
            </div>
            <SubmitWrapper>
              <PrimaryBtn
                disabled={isUserAgree ? false : true}
                content={post.acf.contacts_form_send_button_text}
                type="submit"
              />
            </SubmitWrapper>
            <div>
              <CheckboxItem
                checked={isUserAgree}
                setChecked={() => setIsUserAgree((prev) => !prev)}
              >
                {post.acf.contacts_form_personal_data_text}{" "}
                <a href={post.acf.contacts_form_personal_data_link}>{post.acf.contacts_form_personal_data_link_text}</a>
              </CheckboxItem>
            </div>
          </ContactForm>
        </FormBlock>
      </Content>
      <ModalWrapper>
        <CommonModal
          isOpened={submitModalOpened}
          setIsOpened={setSubmitModalOpened}
        >
          <ModalTitle>Заявка отправлена</ModalTitle>
          <P size="l">Наш менеджер скоро свяжется с вами</P>
        </CommonModal>
      </ModalWrapper>
    </ContactsWrapper>
  );
};

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

const SubmitWrapper = styled.div`
  padding-top: 16px;
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

const ContactForm = styled.form`
  display: grid;
  grid-gap: 16px;
`;

const FormSubtitle = styled.div`
  margin-bottom: 25px;
`;

const FormTitle = styled(TitleS)`
  ${font(21, 28)}
  margin-bottom: 8px;
`;

const SocialLink = styled(Link)`
  ${font(21, 32)};
  ${stretch(109)};
  position: relative;
`;

const Icon = styled.div`
  background: var(--white);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  margin-right: 16px;
  flex-shrink: 0;
`;

const SocialItem = styled.li`
  ${flex("row", "center")};
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SocialList = styled.ul`
  margin: 0;
  list-style: none;
  padding: 32px 52px 40px;
  @media screen and (max-width: 991px) {
    padding: 32px 16px 40px;
  }
`;

const Office = styled.span`
  ${font(12, 16)};
  display: block;
  margin-bottom: 5px;
  color: var(--gray-400);
`;

const Address = styled.div`
  padding: 28px 51px 30px;
  border-bottom: 1px dashed ${grayRgba(0.2)};
  @media screen and (max-width: 991px) {
    padding: 28px 24px 31px;
    & p {
      ${font(21, 32)};
    }
  }
`;

const Map = styled.div``;

const MapBlock = styled.div`
  background: var(--gray-50);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
`;

const FormBlock = styled(MapBlock)`
  padding: 35px 52px 41px;
  @media screen and (max-width: 768px) {
    padding: 19px 16px 29px;
  }
`;

const Content = styled(Container)`
  && {
    max-width: 588px;
  }
`;

const ContactsWrapper = styled.div`
  padding: 98px 0 184px;
  @media screen and (max-width: 991px) {
    padding-top: 54px;
  }
`;

export default connect(Contact);
