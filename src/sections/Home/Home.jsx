import React from "react";
import Hero from "./Hero";
import Partners from "./Partners";
import Collection1 from "./Collection1";
import BestSelling from "./BestSelling";
import Collection2 from "./Collection2";
import Designers from "./Designers";
import CustomerReview from "./CustomerReview";

function Home() {
  return (
    <div>
      <Hero />
      <Partners />
      <Collection1 />
      <BestSelling/>
      <Collection2/>
      <Designers/>
      <CustomerReview/>
    </div>
  );
}

export default Home;
