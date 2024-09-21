import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import envCompatible from 'vite-plugin-env-compatible';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), envCompatible()],
  server: {
    host: '127.0.0.1', // Use 127.0.0.1 as host
    port: 3000, // Port for your frontend
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // Your Laravel backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
