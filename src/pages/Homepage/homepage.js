import React from "react";
import Header from "../../components/Header/header";
import Gamelisting from "../../components/Gamelisting/gamelisting";
import Footer from "../../components/Footer/footer";

function Homepage() {
  return (
    <div>
      <Header></Header>
      <Gamelisting></Gamelisting>
      <Footer></Footer>
    </div>
  );
}

export default Homepage;
