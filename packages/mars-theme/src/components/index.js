import { useEffect } from "react";
import { Global, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Router from "./Router";
import Loading from "./Loading";
import PageError from "./PageError";
import globalStyles from "./base/globalStyles";
import { setSwiperCssBundle } from "./functions/functions";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */

const Theme = ({ state, actions }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const theme = state.theme.headerTheme;

  console.log(data);

  useEffect(() => {
    setSwiperCssBundle();
    actions.theme.setHeaderTheme();
  }, [state.router.link]);

  return (
    <>
      <Head>
        {/* <meta name="description" content={state.frontity.description} /> */}
        {/* <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
        /> */}
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Header theme: common || white */}
      <Header />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Router when={data.isArchive || data.isPage} />
          {/* <Post when={data.isPostType} /> */}
          <PageError when={data.isError} />
        </Switch>
      </Main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default connect(Theme);

const Main = styled.div``;
