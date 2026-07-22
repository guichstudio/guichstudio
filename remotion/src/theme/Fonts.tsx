/**
 * Loads the BuildLore brand fonts (Inter + PP Editorial Old) from public/fonts.
 *
 * Uses delayRender/continueRender so the renderer waits for the fonts before
 * capturing frames — otherwise the first frames would flash a fallback face.
 */
import React, { useEffect, useState } from "react";
import { continueRender, delayRender, staticFile } from "remotion";

const FONT_CSS = `
@font-face {
  font-family: 'Inter';
  src: url('${staticFile("fonts/Inter.ttf")}') format('truetype');
  font-weight: 100 900;
  font-display: block;
}
@font-face {
  font-family: 'PP Editorial Old';
  src: url('${staticFile("fonts/PPEditorialOld.otf")}') format('opentype');
  font-weight: 400;
  font-style: italic;
  font-display: block;
}
`;

export const Fonts: React.FC = () => {
  const [handle] = useState(() => delayRender("load-brand-fonts"));

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = FONT_CSS;
    document.head.appendChild(style);

    Promise.all([
      document.fonts.load('900 100px "Inter"'),
      document.fonts.load('italic 400 100px "PP Editorial Old"'),
    ])
      .then(() => continueRender(handle))
      .catch(() => continueRender(handle));
  }, [handle]);

  return null;
};

export const FONT_SANS = "'Inter', system-ui, sans-serif";
export const FONT_SERIF = "'PP Editorial Old', Georgia, serif";
