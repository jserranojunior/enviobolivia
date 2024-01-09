import vue from "@vitejs/plugin-vue";
/* import envCompatible from 'vite-plugin-env-compatible'
 */
/* import ElementPlus from "unplugin-element-plus/vite"; */
/*   import zhCn from 'element-plus/dist/locale/pt-br.mjs'
 */
export default ({ command }) => {
  if (command === "serve") {
    return {
      plugins: [
        vue(),
        /*         envCompatible(),
         */
      ],
      resolve: {
        alias: [{ find: "@", replacement: "/src" }],
      },
      server: {
        host: true,
        port: 3000,
        hmr: { clientPort: 8087 },
      },
    };
  } else if (command === "build") {
    return {
      plugins: [
        vue(),
        /*         envCompatible(),
         */
      ],
      resolve: {
        alias: [{ find: "@", replacement: "/src" }],
      },
      server: {
        host: "0.0.0.0",
        port: 5000,
        https: true,
        hmr: { host: "https://enviobolivia.alvitre.com.br", port: 443 },
      },
      build: {
        target: "esnext",
        chunkSizeWarningLimit: 2000,
      },
    };
  } else if (command === "testbuild") {
    return {
      plugins: [
        vue(),
        /*         envCompatible(),
         */
      ],
      resolve: {
        alias: [{ find: "@", replacement: "/src" }],
      },
      server: {
        host: "0.0.0.0",
        port: 8087,
        https: true,
        hmr: { host: "http://192.168.15.4", port: 8087 },
      },
      build: {
        target: "esnext",
        chunkSizeWarningLimit: 2000,
      },
    };
  }
};
