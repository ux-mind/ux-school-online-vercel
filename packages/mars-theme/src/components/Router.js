import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Payment from "./Payment/Payment";
import Contact from "./Contact/Contact";
import Terms from "./Terms/Terms";
import PageError from "./PageError";
import { connect } from "frontity";

const Router = ({ state }) => {
  const currentRoute = state.router.link;

  switch (currentRoute) {
    case "/":
      return <Home />;
    case "/about/":
      return <About />;
    case "/payment/":
      return <Payment />;
    case "/contacts/":
      return <Contact />;
    case "/terms/":
      return <Terms />;
    default:
      return <PageError />;
  }
};

export default connect(Router);
