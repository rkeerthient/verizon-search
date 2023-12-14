import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yextSSG from "@yext/pages/vite-plugin";

export default defineConfig({
  plugins: [react(), yextSSG()],
  ssr: {
    noExternal: [
      "@yext/search-headless-react",
      "@yext/search-ui-react",
      "@yext/chat-ui-react",
      "@yext/chat-headless-react",
    ],
  },
});
