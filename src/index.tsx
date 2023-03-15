import { readFile, writeFile } from "node:fs/promises";
import { generateSvg } from "./generate-svg.js";

const run = async () => {
  const font = await readFile("./Roboto-Regular.ttf");

  const svg = await generateSvg({
    fonts: [
      {
        name: "Roboto",
        data: font,
      },
    ],
  });

  console.log(svg);
  await writeFile("./tmp.svg", svg);
};

run();
