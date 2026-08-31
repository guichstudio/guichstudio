import { Config } from "@remotion/cli/config";

// Rendering config. See https://www.remotion.dev/docs/config
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.setConcurrency(1);

// This environment ships a pre-installed Chromium (Playwright). If Remotion
// cannot download its own Chrome Headless Shell (locked-down network), point it
// at the local browser instead:
//   REMOTION_BROWSER_EXECUTABLE=/path/to/chrome npm run render
const local = process.env.REMOTION_BROWSER_EXECUTABLE;
if (local) {
  Config.setBrowserExecutable(local);
}
