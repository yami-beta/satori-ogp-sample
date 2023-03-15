import React from "react";
import satori, { SatoriOptions } from "satori";

export const generateSvg = async (
  text: string,
  options: {
    fonts: SatoriOptions["fonts"];
  }
) => {
  const svg = await satori(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1A202C",
        width: "100%",
        height: "100%",
      }}
    >
      <p
        style={{
          textAlign: "center",
          color: "rgba(255, 255, 255, 0.92)",
          fontSize: "48px",
        }}
      >
        {text}
      </p>
    </div>,
    {
      ...options,
      width: 1200,
      height: 630,
    }
  );

  return svg;
};
