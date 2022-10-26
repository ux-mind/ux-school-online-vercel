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
  const data = state.source.get(currentRoute);
  const post = state.source[data.type][data.id];
  console.log('post');
  console.log(post);
  switch (currentRoute) {
    case "/":
      return <Home post={post} />;
    case "/about/":
      return <About post={post} />;
    case "/payment/":
      return <Payment post={post} />;
    case "/contacts/":
      return <Contact post={post} />;
    case "/terms/":
      return <Terms post={post} />;
    default:
      return <PageError post={post} />;
  }
};

export default connect(Router);
