import Box from "../components/Box";
import React from "react";

const home = () => {
  return (
    <div className="wrapper grid my-8 mx-10 md:m-8 md:grid-cols-3 rounded-xl overflow-hidden">
      <Box name={"sedans"} bgColor={"bright-orange"} />
      <Box name={"suvs"} bgColor={"dark-cyan"} />
      <Box name={"luxury"} bgColor={"very-dark-cyan"} />
    </div>
  );
};

export default home;
