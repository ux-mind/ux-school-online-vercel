import { styled, connect, css } from "frontity";

import logo from "../../assets/images/svg/Logo.svg";
import Image from "@frontity/components/image";
import Link from "../constant/Link";
import drop from "../../assets/images/svg/drop.svg";
import Container from "../constant/Container";
import MenuModal from "../MenuModal";
import { flex, font, whiteRgba, grayRgba } from "../base/functions";

/**
 * The menu that should be displayed on mobile devices displaying links to
 * various categories and pages. This component contains mostly logic and
 * renders the {@link MenuModal} component.
 *
 * @param props - The state and actions injected by Frontity.
 * @returns A React component.
 */

const Menu = ({ state, actions }) => {
  const { menu, headerTheme, isMobileMenuOpened } = state.theme;

  return (
    <MobileMenu isOpened={isMobileMenuOpened}>
      <header
        css={css`
          width: 100%;
        `}
      >
        <Container>
          <HeaderWrapper>
            <StyledLink link="/">
              <Image src={logo} alt="logo" />
            </StyledLink>
            <div>
              <CloseButton onClick={() => actions.theme.closeMobileMenu()}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.57901 5.57998C5.78994 5.36931 6.07589 5.25097 6.37401 5.25097C6.67214 5.25097 6.95807 5.36931 7.16901 5.57998L11.999 10.41L16.829 5.57998C16.9321 5.46945 17.0563 5.3808 17.1943 5.31931C17.3323 5.25783 17.4812 5.22477 17.6323 5.2221C17.7833 5.21943 17.9333 5.24722 18.0734 5.3038C18.2135 5.36038 18.3407 5.44459 18.4475 5.55142C18.5545 5.65825 18.6386 5.78551 18.6952 5.92558C18.7517 6.06567 18.7796 6.21571 18.7769 6.36676C18.7742 6.51783 18.7412 6.66679 18.6797 6.80479C18.6182 6.94279 18.5296 7.06699 18.419 7.16998L13.589 12L18.419 16.83C18.5296 16.933 18.6182 17.0572 18.6797 17.1952C18.7412 17.3332 18.7742 17.4822 18.7769 17.6332C18.7796 17.7843 18.7517 17.9343 18.6952 18.0744C18.6386 18.2145 18.5545 18.3417 18.4475 18.4485C18.3407 18.5554 18.2135 18.6396 18.0734 18.6961C17.9333 18.7527 17.7833 18.7806 17.6323 18.7779C17.4812 18.7752 17.3323 18.7422 17.1943 18.6807C17.0563 18.6192 16.9321 18.5305 16.829 18.42L11.999 13.59L7.16901 18.42C6.95574 18.6187 6.67366 18.7269 6.38221 18.7218C6.09076 18.7165 5.8127 18.5985 5.60656 18.3924C5.40045 18.1863 5.28239 17.9082 5.27724 17.6167C5.2721 17.3253 5.38029 17.0433 5.57901 16.83L10.409 12L5.57901 7.16998C5.36834 6.95905 5.25 6.67311 5.25 6.37498C5.25 6.07686 5.36834 5.79093 5.57901 5.57998Z"
                    fill="#289EF3"
                  />
                </svg>
              </CloseButton>
            </div>
          </HeaderWrapper>
        </Container>
      </header>
      <Container>
        <nav>
          <MenuList>
            {menu &&
              menu.map(([text, link]) => {
                return (
                  <MenuItem theme key={link}>
                    <NavLink link={link}>{text}</NavLink>
                  </MenuItem>
                );
              })}
          </MenuList>
        </nav>
      </Container>
      <BottomBlock>
        <ButtonContainer>
          <CourseButton
            theme={headerTheme}
            rotation={"down"}
            onClick={() => actions.theme.toggleCourseModal()}
          >
            Онлайн-курсы
          </CourseButton>
          {/* {courseModalOpened && (
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
          )} */}
        </ButtonContainer>
      </BottomBlock>
    </MobileMenu>
  );
};

const BottomBlock = styled.div`
  margin-top: auto;
  margin-bottom: 24px;
  width: 100%;
`;

const ButtonContainer = styled(Container)`
  text-align: center;
`;

const MenuItem = styled.li`
  width: 100%;
  border-bottom: 1px solid var(--gray-100);
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const CourseButton = styled.button`
  position: relative;
  text-align: left;
  width: 100%;
  max-width: 325px;
  ${font(16, 24)}
  padding: 1em;
  padding-right: 46px;
  background: transparent;
  border-radius: 12px;
  border: 1px solid var(--gray-200);
  color: var(--black-900);
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
`;

const NavLink = styled(Link)`
  display: block;
  width: inherit;
  padding-bottom: 16px;
  color: var(--black-900);
  ${font(28, 36)};
  font-weight: 500;
  font-stretch: 121%;
  letter-spacing: -0.02em;
  font-variation-settings: "GRAD" 0, "slnt" 0, "XTRA" 468, "XOPQ" 96, "YOPQ" 79,
    "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
`;

const MenuList = styled.div`
  padding: 36px 0;
  padding-bottom: 54px;
  ${flex("column")};
`;

const CloseButton = styled.button`
  border: none;
  width: 38px;
  height: 38px;
  border: 1px solid var(--gray-100);
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: var(--white);
  &:hover {
    background: var(--gray-100);
  }
  &:active {
    opacity: 0.8;
  }
`;

const HeaderWrapper = styled.div`
  padding: 28px 0;
  ${flex("row", "center", "space-between")};
  @media screen and (max-width: 991px) {
    padding: 16px 0;
  }
`;

const MobileMenu = styled.div`
  ${flex("column")};
  overflow-x: hidden;
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background: var(--white);
  transition: transform 0.3s;
  transform: ${({ isOpened }) => (isOpened ? "none" : "translateX(100%)")};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 45px;
`;

export default connect(Menu);
