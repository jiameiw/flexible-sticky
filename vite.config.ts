import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {
  terser
} from "rollup-plugin-terser"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib:{
      entry:'./src/main.ts',
      name:'flexible-sticky',
    },
    rollupOptions: {
      inlineDynamicImports:true,
      external: ['vue'],
      output:{
        globals: {
          vue: 'Vue'
      },  
          plugins: [terser()]
        },
    },
  },
});
