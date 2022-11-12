import React, { useState, useRef, useEffect } from "react";
import P from "../../constant/Paragraph";
import Container from "../../constant/Container";
import RateItemMax from "./RateItems/RateItemMax";
import RateItemSelf from "./RateItems/RateItemSelf";
import RateItemFree from "./RateItems/RateItemFree";
import CheckboxItem from "../../constant/CheckboxItem";
import PrimaryBtn from "../../constant/PrimaryButton";
import WhiteBtn from "../../constant/WhiteButton";
import Modal from "../../constant/CommonModal";
import Input from "../../constant/Input";
import InputValid from "../../constant/InputWithValidation";
import { font, grayRgba, flex } from "../../base/functions";
import { TitleM } from "../../constant/Title";
import { styled, connect } from "frontity";
import parse from "html-react-parser";

const freeContent = ["Базовые уроки", "Некоторые дополнительные материалы"];

const maxContent = [
  "Все уроки",
  "Все дополнительные материалы",
  "Проверка домашних заданий",
  "Видео-разборы домашних работ",
  "Живые вебинары раз в неделю",
  "Доступ в чат выпускников",
  "Чат с куратором",
  "Сертификат об окончании",
];

const selfContent = [
  "Все уроки",
  "Все дополнительные материалы",
  "Сертификат об окончании",
];

const nextContent = [
  "На твой email придёт письмо с подтверждением заявки, условиями договора и способами оплаты",
  "После оплаты мы свяжемся с тобой и подключим тебя к онлайн-курсу",
  "Как минимум 2 месяца погружения в мир дизайна с головой-)",
];

const Rates = ({ state, actions, post }) => {
  const { isMobile } = state.theme;

  const ratesRef = useRef(null);

  const [signupModalOpened, setSignupModalOpened] = useState(false);
  const [sendModalOpened, setSendModalOpened] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [rateName, setRateName] = useState('');

  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
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
    if (!(/\S+@\S+\.\S+/).test(formValues['email'])) {
      setFormErrors((prev) => {
        const newFormErrors = Object.assign({}, prev);
        newFormErrors['email'] = true;
        return newFormErrors;
      });
      errorSubmit = true;
    }
    if (formValues['email'] && formValues['email'].indexOf('@') === -1) {
      setFormErrors((prev) => {
        const newFormErrors = Object.assign({}, prev);
        newFormErrors['email'] = true;
        return newFormErrors;
      });
      errorSubmit = true;
    }
    if (!errorSubmit) {
      try {
        
        setSignupModalOpened(false);
        setSendModalOpened(true);
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

        console.log(rateName);
        formData.append('ux-rate-name', rateName);
        formData.append('ux-name', formValues.name);
        formData.append('ux-phone', formValues.phone);
        formData.append('ux-email', formValues.email);
        setRateName('');
        setFormValues({
          name: '',
          phone: '',
          email: '',
        });

        let res = await fetch("https://online.ux-mind.pro/wp-content/themes/twentytwentyone/send-form-course.php", {
          method: "POST",
          body: formData,
        });

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

  const handleSetRate = (name) => {
    setRateName(name);
    setSignupModalOpened(true);
  }

  /*const formik = useFormik({
    initialValues: { name: "", tel: "", email: "" },
    onSubmit: (values) => {
      setSignupModalOpened(false);
      setSendModalOpened(true);

      console.log(values);
    },
  });*/

  useEffect(() => {
    if (ratesRef) {
      actions.theme.setRatesElement(ratesRef.current);
    }
  }, [ratesRef]);

  return (
    <>
      <Section>
        <Container ref={ratesRef}>
          <TitleM align="center" mb={isMobile ? 13 : 23}>
            {post.acf.tariffs_title ? parse(post.acf.tariffs_title) : ""}
          </TitleM>
          <Subtitle>
            <P align="center" size="l">
              {post.acf.tariffs_text ? parse(post.acf.tariffs_text) : ""}
            </P>
          </Subtitle>
          <Content>
            <RateItemFree type="free" post={post} />
            <RateItemMax
              openModalFunc={() => handleSetRate('Максимальный')}
              type="max"
              post={post}
            />
            <RateItemSelf
              openModalFunc={() => handleSetRate('Учусь сам')}
              type="self"
              post={post}
            />
          </Content>
        </Container>
      </Section>
      <Modal
        isOpened={signupModalOpened}
        setIsOpened={setSignupModalOpened}
        className="signup"
      >
        <TitleM mb={isMobile ? 14 : 30}>{post.acf.tariff_2_modal_title}</TitleM>
        <SignupForm>
          <Label>
            <InputValid
              type="text"
              name="name"
              placeholder={post.acf.tariff_2_modal_name_placeholder}
              /*value={formik.values.name}
              onChange={formik.handleChange}*/
              onChange={(evt) => handleInputChange(evt)}
              value={formValues.name}
              error={formErrors.name}
            />
          </Label>
          <Label>
            <InputValid
              type="text"
              name="phone"
              placeholder={post.acf.tariff_2_modal_phone_placeholder}
              /*value={formik.values.tel}
              onChange={formik.handleChange}*/
              onChange={(evt) => handleInputChange(evt)}
              value={formValues.phone}
              error={formErrors.phone}
            />
          </Label>
          <Label>
            <InputValid
              type="email"
              name="email"
              placeholder={post.acf.tariff_2_modal_email_placeholder}
              /*value={formik.values.email}
              onChange={formik.handleChange}*/
              onChange={(evt) => handleInputChange(evt)}
              value={formValues.email}
              error={formErrors.email}
            />
          </Label>
          <SubmitWrapper>
            <PrimaryBtn
              disabled={!isApproved}
              maxWidth="100%"
              type="submit"
              content={post.acf.tariff_2_modal_button_text}
              onClick={(evt) => handleFormSubmit(evt)}
            />
          </SubmitWrapper>
          <CheckboxWrapper>
            <CheckboxItem
              checked={isApproved}
              setChecked={() => setIsApproved((prev) => !prev)}
            >
              {post.acf.tariff_2_modal_checkbox_label
                ? parse(post.acf.tariff_2_modal_checkbox_label)
                : ""}
            </CheckboxItem>
          </CheckboxWrapper>
        </SignupForm>
      </Modal>
      <Modal
        isOpened={sendModalOpened}
        setIsOpened={setSendModalOpened}
        className="send"
      >
        <TitleM mb={isMobile ? 19 : 37}>{post.acf.tariff_3_modal_title}</TitleM>
        <Next>
          <P>{post.acf.tariff_3_modal_subtitle}</P>
        </Next>
        <NextList>
          {post.acf.tariff_3_modal_items.map((item, idx) => (
            <NextItem key={item.tariff_3_modal_item}>
              <NextNumber>{idx + 1}</NextNumber>
              <P size="l">{item.tariff_3_modal_item}</P>
            </NextItem>
          ))}
        </NextList>
        <BtnWrapper>
          <WhiteBtn onClick={() => setSendModalOpened(false)}>
            {post.acf.tariff_3_modal_button_text}
          </WhiteBtn>
        </BtnWrapper>
      </Modal>
    </>
  );
};

const BtnWrapper = styled.div``;

const NextNumber = styled.span`
  margin-right: 24px;
  flex-shrink: 0;
  width: 72px;
  height: 66px;
  border: 1px solid var(--gray-200);
  border-radius: 16px;
  display: grid;
  font-weight: 520;
  place-items: center;
  color: var(--gray-300);
  ${font(52, 56)};
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 499, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738, "opsz" 58;
  @media screen and (max-width: 991px) {
    margin-right: 16px;
    width: 40px;
    height: 36px;
    ${font(21, 28)};
    border-radius: 8px;
  }
`;

const NextItem = styled.li`
  ${flex()};
  padding: 0;
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const NextList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 24px;
`;

const Next = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid ${grayRgba(0.2)};
  margin-bottom: 24px;
  @media screen and (max-width: 991px) {
    padding-bottom: 10px;
    margin-bottom: 16px;
  }
`;

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

const Label = styled.label`
  display: block;
  margin-top: 16px;
  &:first-of-type {
    margin-top: 0;
  }
`;

const SignupForm = styled.form``;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    width: 323px;
    height: 447px;
    top: calc((100 / 608) * 100%);
    left: 50%;
    transform: translateX(-50%);
    background: #fb64f5;
    filter: blur(128px);
    pointer-events: none;
  }
  @media screen and (max-width: 1400px) {
    grid-template-columns: calc(50% - 12px) calc(50% - 12px);
    &::before {
      content: none;
    }
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
    grid-gap: 16px;
  }
`;

const Subtitle = styled.div`
  max-width: 842px;
  margin: 0 auto;
  margin-bottom: 55px;
  @media screen and (max-width: 991px) {
    margin-bottom: 33px;
  }
`;

const Section = styled.section`
  padding: 178px 0 264px;
  @media screen and (max-width: 991px) {
    padding: 110px 0 256px;
  }
`;

export default connect(Rates);
