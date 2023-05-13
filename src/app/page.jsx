"use client";
import Box from "../components/Box";
import React from "react";

const home = () => {
  return (
    <div className="wrapper grid my-8 mx-10 md:m-8 md:grid-cols-3 rounded-xl overflow-hidden">
      <Box name={"sedans"} boxNumber={1} />
      <Box name={"suvs"} boxNumber={2} />
      <Box name={"luxury"} boxNumber={3} />
    </div>
  );
};

export default home;
