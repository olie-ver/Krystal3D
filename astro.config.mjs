// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config';

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
  }],
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
    }
  }
});