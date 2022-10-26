import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import reviewsHandler from "./components/handlers/reviews-handler";
import menuHandler from "./components/handlers/menu-handler";
import acfOptionsHandler from "./components/handlers/options-page-handler";

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
      ratesElement: null,
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
      setRatesElement: ({ state }) => (el) => {
        state.theme.ratesElement = el;
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
      beforeSSR: async ({ state, actions }) => {
        await actions.source.fetch(`/reviews/`);
        await actions.source.fetch(`/menu/header-menu/`);
        await actions.source.fetch(`/menu/footer-menu/`);
        await actions.source.fetch(`/menu/footer-additional-menu/`);
        await actions.source.fetch(`acf-settings`);
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
    source: {
      handlers: [
        reviewsHandler,
        menuHandler,
        acfOptionsHandler,
      ],
    },
  },
};

export default marsTheme;
