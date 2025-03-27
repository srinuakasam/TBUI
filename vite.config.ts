import { defineConfig } from 'vite';

export default defineConfig({
  // ...existing code...
  ssr: {
    timeout: 120000, // Increase timeout to 120 seconds
  },
  // ...existing code...
});
