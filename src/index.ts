import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { generatePng } from "./generate-png.js";
import { generateSvg } from "./generate-svg.js";

const run = async () => {
  const font = await readFile("./Roboto-Regular.ttf");

  createServer(async (req, res) => {
    const url = new URL(req.url ?? "", "http://example.com");

    if (url.pathname !== "/ogp") {
      res.writeHead(404);
      res.end();
      return;
    }

    const searchParams = new URLSearchParams(url.search.replace(/^\?/, ""));

    const svg = await generateSvg(searchParams.get("text") ?? "Hello World", {
      fonts: [
        {
          name: "Roboto",
          data: font,
        },
      ],
    });

    const png = generatePng(svg);

    res.writeHead(200, {
      "Content-Type": "image/png",
    });
    res.end(png, "utf-8");
  }).listen(8080);
};

run();
