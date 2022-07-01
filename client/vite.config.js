import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react()],
 server: {
  port: '4000',
  proxy: {
   '/api/users/': {
    target: `http://localhost:3000`,
    changeOrigin: true,
   },
  },
 },
 build: {
  manifest: true,
  rollupOptions: {
   input: './src/main.jsx',
  },
 },
});
