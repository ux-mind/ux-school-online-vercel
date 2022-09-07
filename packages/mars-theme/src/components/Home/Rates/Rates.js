import React, { useState } from "react";
import P from "../../constant/Paragraph";
import Container from "../../constant/Container";
import RateItem from "./RateItem/RateItem";
import CheckboxItem from "../../constant/CheckboxItem";
import PrimaryBtn from "../../constant/PrimaryButton";
import WhiteBtn from "../../constant/WhiteButton";
import Modal from "../../constant/CommonModal";
import Input from "../../constant/Input";
import { font, grayRgba, flex } from "../../base/functions";
import { TitleM } from "../../constant/Title";
import { styled, connect } from "frontity";

import { useFormik } from "formik";

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

const Rates = ({ state }) => {
  const { isMobile } = state.theme;

  const [signupModalOpened, setSignupModalOpened] = useState(false);
  const [sendModalOpened, setSendModalOpened] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", tel: "", email: "" },
    onSubmit: (values) => {
      setSignupModalOpened(false);
      setSendModalOpened(true);

      console.log(values);
    },
  });

  return (
    <>
      <Section>
        <Container>
          <TitleM align="center" mb={isMobile ? 13 : 23}>
            Тарифы
          </TitleM>
          <Subtitle>
            <P align="center" size="l">
              Обучение в нашей школе доступно всем, вне зависимости
              от количества свободного времени и доступных средств
            </P>
          </Subtitle>
          <Content>
            <RateItem type="free" availableContent={freeContent} />
            <RateItem
              openModalFunc={() => setSignupModalOpened(true)}
              type="max"
              availableContent={maxContent}
            />
            <RateItem
              openModalFunc={() => setSendModalOpened(true)}
              type="self"
              availableContent={selfContent}
            />
          </Content>
        </Container>
      </Section>
      <Modal
        isOpened={signupModalOpened}
        setIsOpened={setSignupModalOpened}
        className="signup"
      >
        <TitleM mb={isMobile ? 14 : 30}>Записаться</TitleM>
        <SignupForm onSubmit={formik.handleSubmit}>
          <Label>
            <Input
              type="text"
              name="name"
              placeholder="Имя и фамилия"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </Label>
          <Label>
            <Input
              type="tel"
              name="tel"
              placeholder="Телефон"
              value={formik.values.tel}
              onChange={formik.handleChange}
            />
          </Label>
          <Label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Label>
          <SubmitWrapper>
            <PrimaryBtn
              disabled={!isApproved}
              maxWidth="100%"
              type="submit"
              content="Отправить заявку"
            />
          </SubmitWrapper>
          <CheckboxWrapper>
            <CheckboxItem
              checked={isApproved}
              setChecked={() => setIsApproved((prev) => !prev)}
            >
              Я согласен с условиями обработки{" "}
              <a href="/">персональных данных</a>
            </CheckboxItem>
          </CheckboxWrapper>
        </SignupForm>
      </Modal>
      <Modal
        isOpened={sendModalOpened}
        setIsOpened={setSendModalOpened}
        className="send"
      >
        <TitleM mb={isMobile ? 19 : 37}>Заявка отправлена</TitleM>
        <Next>
          <P>Что будет дальше?</P>
        </Next>
        <NextList>
          {nextContent.map((item, idx) => (
            <NextItem key={item}>
              <NextNumber>{idx + 1}</NextNumber>
              <P size="l">{item}</P>
            </NextItem>
          ))}
        </NextList>
        <BtnWrapper>
          <WhiteBtn onClick={() => setSendModalOpened(false)}>Закрыть</WhiteBtn>
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
