import React from "react";
import { Composition } from "remotion";
import { BrandMark } from "./compositions/BrandMark";
import { FPS, s } from "./theme/tokens";

/**
 * Composition registry. The mark is authored once and recomposed per aspect
 * ratio (docs/motion-design.md §12 — recompose, never crop).
 */
export const RemotionRoot: React.FC = () => {
  const durationInFrames = Math.round(s(2.5)); // 2.5s hold-inclusive sting

  return (
    <>
      <Composition
        id="BrandMark"
        component={BrandMark}
        durationInFrames={durationInFrames}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ square: false }}
      />
      <Composition
        id="BrandMarkSquare"
        component={BrandMark}
        durationInFrames={durationInFrames}
        fps={FPS}
        width={1080}
        height={1080}
        defaultProps={{ square: true }}
      />
    </>
  );
};
