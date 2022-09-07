import React, { useState } from "react";
import Container from "../../constant/Container";
import { TitleM } from "../../constant/Title";
import P from "../../constant/Paragraph";
import Input from "../../constant/Input";
import PrimaryBtn from "../../constant/PrimaryButtonSmall";
import CheckboxItem from "../../constant/CheckboxItem";
import { flex, whiteRgba, font } from "../../base/functions";
import { styled } from "frontity";

import bg from "../../../assets/images/consultation-bg.png";
import like from "../../../assets/images/Like.png";
import like2x from "../../../assets/images/Like@2x.png";

const Consultation = () => {
  const [isUserAgree, setIsUserAgree] = useState(true);

  return (
    <Section>
      <Container>
        <Block>
          <Content>
            <ConsultationTitle color="white">
              Проконсультируем вас, поможем с выбором
            </ConsultationTitle>
            <Subtitle>
              <P size="l" color="white">
                {`Оставьте свой номер телефона, и мы поможем сделать правильный
                выбор-)`}
              </P>
            </Subtitle>
            <Form>
              <FormBlock>
                <Input placeholder="Имя" name="name" />
              </FormBlock>
              <FormBlock>
                <Input placeholder="Телефон" name="tel" type="tel" />
              </FormBlock>
              <SubmitWrapper>
                <PrimaryBtn content="Отправить" disabled={!isUserAgree} />
              </SubmitWrapper>
            </Form>
            <Agreement>
              <CheckboxItem
                checked={isUserAgree}
                setChecked={() => setIsUserAgree((prev) => !prev)}
              >
                Я согласен с условиями обработки{" "}
                <a href="/">персональных данных</a>
              </CheckboxItem>
            </Agreement>
          </Content>
        </Block>
      </Container>
      <Like>
        <img
          src={like}
          srcSet={`${like} 1x, ${like2x ? like2x : like} 2x`}
          alt=""
        />
      </Like>
    </Section>
  );
};

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
