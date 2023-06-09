"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Box = ({ boxNumber, name }) => {
  const [bg, setBg] = useState(null);

  useEffect(() => {
    switch (boxNumber) {
      case 1:
        setBg("bg-[#e38826]");
        break;
      case 2:
        setBg("bg-[#006970]");
        break;
      case 3:
        setBg("bg-[#004241]");
        break;
    }
  }, []);

  return (
    <div className={`box p-10 ${bg}`}>
      <Image
        src={`/assets/images/icon-${name}.svg`}
        width={64}
        height={40}
        alt={name}
      />
      <h2 className="text-very-light-gray uppercase text-3xl my-[25px]">
        {name}
      </h2>
      {name === "sedans" && (
        <p className="text-transparent-white leading-6 md:min-h-[120px] max-w-[90%]">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
      )}

      {name === "suvs" && (
        <p className="text-transparent-white leading-6 md:min-h-[120px] max-w-[95%]">
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
      )}
      {name === "luxury" && (
        <p className="text-transparent-white leading-6 md:min-h-[120px]">
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
      )}
      <a
        className={`text-[${bg}] bg-very-light-gray py-[13px] px-[27px] mt-6 md:mt-[60px] inline-block rounded-[26px] border-2 border-solid border-very-light-gray`}
        href="#"
      >
        Learn More
      </a>
    </div>
  );
};

export default Box;
