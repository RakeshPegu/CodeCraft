import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
//import {visualizer} from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
export default defineConfig({  
  plugins: [react(), tailwindcss(),viteCompression(),],
  server:{
    host:true,
    port:3000

  },
  base:'/',
  build: {
    outDir:'dist',
    minify:'esbuild',  
    target:"es2020",
  
  },
  resolve:{
    alias: {
      '@':path.resolve(__dirname, './src')
    }
  }

  
})
