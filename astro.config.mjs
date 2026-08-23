// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.local(),
    name: "TiltPrism",
    cssVariable: "--font-tilt-prism",
    options: {
      variants: [{
        src: ["./src/fonts/TiltPrism-Regular-VariableFont_XROT,YROT.ttf"],
        weight: "normal",
        style: "normal"
      }]
    }
  }]
});
