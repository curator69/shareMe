import React from "react";
import Loader from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Loader
        type="Circles"
        color="#00BFFF"
        height={50}
        width200
        className="m-5"
      />

      <p className="text-lg textcenter px-2">{message}</p>
    </div>
  );
};

export default Spinner;
