import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})



// import react from "@vitejs/plugin-react";
// import tailwindcss from "tailwindcss";
// import { defineConfig } from "vite";


// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   base: "./",
//   optimizeDeps: {
//     disabled: false,
//   },
//   build: {
//     commonjsOptions: {
//       include: [],
//     },
//   },
// });
