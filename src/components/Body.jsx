import React from "react";
import JumbotronImage from "./jumbotron/JumbotronImage";
import Category from "./category/Category";

const Body = () => {
  return (
    <div className="container justify-center mx-auto mt-5">
      <JumbotronImage />
      <Category />
    </div>
  );
};

export default Body;
