import React, { useEffect } from "react";
import { connect, styled, css } from "frontity";
import Link from "../constant/Link";
import MobileMenu from "./Menu";
import Container from "../constant/Container";
import Image from "@frontity/components/image";
import DropdownModal from "../constant/DropdownModal";
import logo from "../../assets/images/svg/Logo.svg";
import whiteLogo from "../../assets/images/svg/Logo-white.svg";
import { flex, font, whiteRgba, grayRgba } from "../base/functions";
import drop from "../../assets/images/svg/drop.svg";
import whiteDrop from "../../assets/images/svg/drop-white.svg";
import { ListButton } from "../constant/Button";

const Header = ({ state, actions }) => {
  const { menu, headerTheme, courseModalOpened } = state.theme;

  useEffect(() => {
    actions.theme.checkIsMobile();

    window.addEventListener("resize", () => actions.theme.checkIsMobile());

    return () => {
      window.removeEventListener("resize", () => actions.theme.checkIsMobile());
    };
  }, []);

  return (
    <HeaderWrapper theme={headerTheme}>
      <HeaderContainer>
        <StyledLink link="/">
          <Image src={headerTheme === "white" ? whiteLogo : logo} alt="logo" />
        </StyledLink>
        <div
          css={css`
            margin-right: 30px;
            position: relative;
            @media screen and (max-width: 991px) {
              display: none;
            }
          `}
        >
          <CourseButton
            theme={headerTheme}
            rotation={"down"}
            onClick={() => actions.theme.toggleCourseModal()}
          >
            Онлайн-курсы
          </CourseButton>
          {courseModalOpened && (
            <CourseModal>
              <DropdownModal>
                <CourseListButton
                  onClick={() => actions.theme.closeCourseModal()}
                >
                  Онлайн-курсы
                </CourseListButton>
                <CourseListButton
                  onClick={() =>
                    (window.location.href = "https://ux-school.by/")
                  }
                >
                  Занятия в классе
                </CourseListButton>
              </DropdownModal>
            </CourseModal>
          )}
        </div>
        <nav
          css={css`
            margin-left: auto;
            @media screen and (max-width: 991px) {
              display: none;
            }
          `}
        >
          <ul
            css={css`
              ${flex("row", "center")}
              color: ${headerTheme === "white"
                ? "var(--white)"
                : "var(--black-900)"};
            `}
          >
            {menu &&
              menu.map(([text, link]) => {
                return (
                  <NavLink theme={headerTheme} key={link}>
                    <Link link={link}>{text}</Link>
                  </NavLink>
                );
              })}
          </ul>
        </nav>
        <div
          css={css`
            display: none;
            margin-left: auto;
            @media screen and (max-width: 991px) {
              display: block;
            }
          `}
        >
          <MenuButton
            theme={headerTheme}
            onClick={() => actions.theme.openMobileMenu()}
          >
            <span></span>
            <span></span>
            <span></span>
          </MenuButton>
        </div>
        <MobileMenu />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const MenuButton = styled.button`
  position: relative;
  border: none;
  width: 38px;
  height: 38px;
  border: 1px solid var(--gray-100);
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: transparent;
  &:hover {
    background: ${grayRgba(0.07)};
  }
  &:active {
    opacity: 0.8;
  }
  & span {
    display: inline-block;
    width: 20px;
    height: 2px;
    background: ${({ theme }) =>
      theme === "white" ? "var(--white)" : "var(--link-500)"};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2px;
    &:first-of-type {
      transform: translate(-50%, calc(-50% - 6px));
    }
    &:last-of-type {
      transform: translate(calc(-50% - 2.5px), calc(-50% + 6px));
      width: 15px;
    }
  }
`;

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const CourseModal = styled.div`
  position: absolute;
  left: 50%;
  top: calc(100% + 10px);
  transform: translateX(-50%);
  width: 100vw;
  max-width: 184px;
`;

const HeaderWrapper = styled.div`
  padding: 28px 0;
  position: relative;
  z-index: 2;
  border-bottom: 1px solid ${whiteRgba(0.1)};
  position: ${({ theme }) => (theme === "white" ? "absolute" : "relative")};
  top: 0;
  left: 0;
  width: 100%;
  color: ${({ theme }) =>
    theme === "white" ? "var(--white)" : "var(--black-900)"};

  @media screen and (max-width: 991px) {
    padding: 16px 0;
  }
`;

const CourseListButton = styled(ListButton)`
  padding: 8px 16px;
  ${font(16, 24)}
  border-bottom: 1px solid var(--gray-100);
  width: 100%;
  text-align: left;
  &:first-of-type {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &:last-of-type {
    border: none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const CourseButton = styled.button`
  position: relative;
  ${font(16, 24)}
  padding: .5em 1em;
  padding-right: 46px;
  background: transparent;
  border-radius: 8px;
  border: 1px solid ${whiteRgba(0.2)};
  color: ${({ theme }) =>
    theme === "white" ? "var(--white)" : "var(--black-900)"};
  &::after {
    content: "";
    position: absolute;
    right: 16px;
    top: 50%;
    transform: ${({ rotation }) =>
      rotation === "up"
        ? "translateY(-50%) rotate(180deg)"
        : "translateY(-50%)"};
    width: 20px;
    height: 20px;
    background: url(${drop}) no-repeat 50%;
  }
  &::after {
    ${({ theme }) =>
      theme === "white" && `background: url(${whiteDrop}) no-repeat 50%`};
  }
`;

const NavLink = styled.li`
  margin-right: 32px;
  ${font(16, 24)}
  font-weight: 400;
  font-stretch: 122%;
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
  &:last-child {
    margin-right: 0;
  }
  & a {
    color: ${({ theme }) =>
      theme === "white" ? "var(--white)" : "var(--black-900)"};
  }
`;

const HeaderContainer = styled(Container)`
  ${flex("row", "center")}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 45px;
`;
