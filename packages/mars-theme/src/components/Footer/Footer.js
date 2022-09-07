import React from "react";
import Container from "../constant/Container";
import P from "../constant/Paragraph";
import Link from "../constant/Link";
import Image from "@frontity/components/image";
import { font, flex, whiteRgba, stretch } from "../base/functions";
import { styled, connect } from "frontity";

import whiteLogo from "../../assets/images/svg/Logo-white.svg";
import bg from "../../assets/images/footer-bg.png";

import telegram from "../../assets/images/social/Telegram.svg";
import youtube from "../../assets/images/social/YouTube.svg";
import instagram from "../../assets/images/social/Instagram.svg";
import whatsapp from "../../assets/images/social/Whatsapp.svg";
import viber from "../../assets/images/social/Viber.svg";

const socialLinks = [
  { icon: telegram, text: "Telegram", link: "https://t.me/ux_mind_school" },
  {
    icon: youtube,
    text: "Youtube",
    link: "https://www.youtube.com/c/ux_mind_school",
  },
  {
    icon: instagram,
    text: "Instagram",
    link: "https://www.instagram.com/ux_mind_school/",
  },
  { icon: whatsapp, text: "WhatsApp", link: "https://wa.me/79200000000" },
  { icon: viber, text: "Viber", link: "viber://chat/?number=%2B79200000000" },
];

const Footer = ({ state }) => {
  const { menu, isMobile } = state.theme;

  return (
    <FooterElement>
      <Container>
        <Content>
          <Top>
            <StyledLink link="/">
              <Image src={whiteLogo} alt="logo" />
            </StyledLink>
            <Nav>
              <School>
                <ListTitle>Школа</ListTitle>
                <List>
                  {menu.map(([text, link]) => (
                    <Li key={link}>
                      <Link link={link}>{text}</Link>
                    </Li>
                  ))}
                </List>
              </School>
              <Social>
                <ListTitle>Мы на связи</ListTitle>
                <SocialList>
                  {socialLinks.map(({ icon, text, link }) => (
                    <SocialLi key={text}>
                      <Icon>
                        <img src={icon} alt="" />
                      </Icon>
                      <Link link={link}>{text}</Link>
                    </SocialLi>
                  ))}
                </SocialList>
              </Social>
            </Nav>
            <InfoWrapper>
              <Info>
                <Block mb={24}>
                  <InfoTitle>Режим работы</InfoTitle>
                  <P color="white">Пн-Сб с 10:00 до 20.00</P>
                </Block>
                <Block mb={32}>
                  <P color="white">ИП Колесень И.Г.</P>
                  <P color="white">
                    УНП 190602238. Выдано 15.10.2020 Мингорисполкомом.
                  </P>
                </Block>
                <Block>
                  <InfoLink link="/">Политика конфиденциальности</InfoLink>
                  <InfoLink link="/">Договор оферты</InfoLink>
                </Block>
              </Info>
            </InfoWrapper>
          </Top>
          <Bottom>
            <P>Торговый реестр: 147946 2018–05–28</P>
            <P>
              Предоставляемая вами персональная информация (например: имя,
              адрес, телефон, email, номер банковской карты и прочее) является
              конфиденциальной и не подлежит разглашению. Данные карточки
              передаются только в зашифрованном виде и не сохраняются на данном
              интернет-ресурсе
            </P>
          </Bottom>
        </Content>
      </Container>
    </FooterElement>
  );
};

const InfoWrapper = styled.div`
  text-align: right;
  @media screen and (max-width: 1400px) {
    ${flex("column")};
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 33px 0 39px;
    display: block;
  }
`;

const InfoLink = styled(Link)`
  position: relative;
  display: inline-block;
  margin-bottom: 12px;
  ${font(14, 20)};
  ${stretch(110)};
  color: var(--white);
  &:last-child {
    margin-bottom: 0;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--white);
  }
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;

const Block = styled.div`
  ${flex("column")};
  ${({ mb }) => (mb ? `margin-bottom: ${mb}px` : "")};
  & p {
    ${font(14, 20)};
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    ${flex("column", "center")};
    & p {
      text-align: center;
    }
  }
`;

const Info = styled.div`
  max-width: 384px;
  margin-left: auto;
  @media screen and (max-width: 1400px) {
    ${flex("column")};
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

const Icon = styled.div`
  margin-right: 4px;
  position: absolute;
  left: 0;
  top: 0;
`;

const Li = styled.li`
  margin-bottom: 16px;
  ${font(16, 24)}
  padding: 0;
  font-weight: 400;
  position: relative;
  font-stretch: 122%;
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
  &:last-child {
    margin-bottom: 0;
  }
  & a {
    color: var(--white);
  }
`;

const SocialLi = styled(Li)`
  padding-left: 28px;
  ${flex("row", "center")}
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SocialList = styled(List)``;

const ListTitle = styled(P)`
  ${font(14, 20)};
  color: ${whiteRgba(0.5)};
  margin-bottom: 18px;
  ${stretch(110)};
`;

const InfoTitle = styled(ListTitle)`
  margin-bottom: 0;
`;

const Social = styled.div``;

const School = styled.div``;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  position: relative;
  @media screen and (max-width: 768px) {
    grid-gap: 0;
    padding-bottom: 40px;
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: 100vw;
      height: 1px;
      background: ${whiteRgba(0.2)};
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  @media screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: 56px;
  }
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr 5fr;
  grid-gap: 24px;
  padding-bottom: 65px;
  @media screen and (max-width: 1400px) {
    grid-template-columns: 4fr 4fr 3fr;
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 3fr 4fr 3fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-gap: 0;
    padding-bottom: 0;
  }
`;

const Bottom = styled.div`
  border-top: 1px solid ${whiteRgba(0.2)};
  padding: 16px 0 19px;
  position: relative;
  & p {
    color: ${whiteRgba(0.7)};
    margin: 0;
    ${font(14, 20)};
  }
  @media screen and (max-width: 768px) {
    border: none;
    padding: 33px 0 39px;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100vw;
      height: 1px;
      background: ${whiteRgba(0.2)};
    }
  }
`;

const Content = styled.div`
  padding-top: 48px;
`;

const FooterElement = styled.footer`
  position: relative;
  background: url(${bg}) no-repeat 50% / cover;
`;

export default connect(Footer);
