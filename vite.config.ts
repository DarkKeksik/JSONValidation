import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import alias from '@rollup/plugin-alias'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [['@swc/plugin-styled-components', { displayName: true }]],
    }),
    alias({
      entries: [
        { find: '@app', replacement: './app' },
        { find: '@widgets', replacement: './widgets' },
        { find: '@features', replacement: './features' },
        { find: '@entities', replacement: './entities' },
        { find: '@shared', replacement: './shared' },
      ],
    }),
  ],
  server: { port: 3000 },
})
