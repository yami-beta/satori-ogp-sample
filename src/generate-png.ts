import { Resvg } from "@resvg/resvg-js";

export const generatePng = (svg: string) => {
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return pngBuffer;
};
