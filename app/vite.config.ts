import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import Inspect from "vite-plugin-inspect";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    // Inject vite plugins
    plugins: [
        // Base vite plugin for reactjs
        react(),
        // Base vite plugin for typescript
        viteTsconfigPaths(),
        // Plugin to inject custom font-families from files
        Unfonts({
            custom: {
                families: [{ name: "Arcade", local: "Arcade", src: "./public/fonts/*.ttf" }],
                display: "auto",
                preload: true,
                injectTo: "head-prepend",
            },
        }),
        // ESLint-Plugin
        eslint(),
        // Helper for vitest to create a static overview as page with component tests
        Inspect(),
    ],
    // Config build options
    build: {
        outDir: "build",
        rollupOptions: {
            output: {
                // Chunking of packages
                manualChunks: {
                    react: ["react", "react-dom"],
                    mui: ["@mui/material", "@emotion/react", "@emotion/styled"],
                    query: ["saga-query", "react-redux", "@reduxjs/toolkit", "redux-saga"],
                    other: ["notistack"],
                },
            },
        },
    },
    // Config development options
    server: {
        // Automatic opens the app in default browser when developing environment running
        open: true,
        port: 3000,
    },
});
