import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import million from "million/compiler";

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [million.rspack({ auto: true, mute: true })],
    },
  },
  server: {
    port: 3002,
  },
});

