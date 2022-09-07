import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import PageError from "./PageError";
import { connect } from "frontity";

const Router = ({ state }) => {
  const currentRoute = state.router.link;

  switch (currentRoute) {
    case "/":
      return <Home />;
    case "/about/":
      return <About />;
    default:
      return <PageError />;
  }
};

export default connect(Router);
