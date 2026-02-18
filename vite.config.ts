import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // The third parameter '' ensures we load all env vars, not just VITE_*
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    define: {
      // This exposes the Netlify environment variable API_KEY to the client-side code
      // by replacing 'process.env.API_KEY' with the actual string value during build.
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});