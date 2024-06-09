import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/JSONValidation/',
  plugins: [
    react({
      plugins: [['@swc/plugin-styled-components', { displayName: true }]],
    }),
    tsconfigPaths(),
  ],
  server: { port: 3000 },
})
