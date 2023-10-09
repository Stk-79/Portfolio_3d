import React from "react";
import { Html, useProgress } from "@react-three/drei";
import { ProgressBar } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <ProgressBar color="#00BFFF" height={50} className="m-5" />
      <p className="text-lg text-center px-2"></p>
    </div>
  );
};

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 10,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        <Spinner></Spinner>
      </p>
    </Html>
  );
};

export default Loader;
