import React from "react";
import satori, { SatoriOptions } from "satori";

export const generateSvg = async (options: {
  fonts: SatoriOptions["fonts"];
}) => {
  const svg = await satori(<div style={{ color: "red" }}>Hello World</div>, {
    ...options,
    width: 600,
    height: 400,
  });

  return svg;
};
