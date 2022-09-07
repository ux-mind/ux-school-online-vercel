import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      courseModalOpened: false,
      menu: [
        ["Oплатить курс", "/payment"],
        ["О школе", "/about"],
        ["Контакты", "/contacts"],
      ],
      headerTheme: "white",
      isMobile: false,
      isMobileMenuOpened: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      checkIsMobile: ({ state }) => {
        const windowWidth = window.innerWidth;

        if (windowWidth > 991) {
          state.theme.isMobile = false;
        } else {
          state.theme.isMobile = true;
        }
      },
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpened = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpened = false;
      },
      openCourseModal: ({ state }) => {
        state.theme.courseModalOpened = !state.theme.courseModalOpened;
      },
      closeCourseModal: ({ state }) => {
        state.theme.courseModalOpened = false;
      },
      toggleCourseModal: ({ state }) => {
        state.theme.courseModalOpened = !state.theme.courseModalOpened;
      },
      setHeaderTheme: ({ state }) => {
        switch (state.router.link) {
          case "/": {
            state.theme.headerTheme = "white";
            break;
          }
          case "/about/": {
            state.theme.headerTheme = "white";
            break;
          }
          default: {
            state.theme.headerTheme = "common";
            break;
          }
        }
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
  },
};

export default marsTheme;
