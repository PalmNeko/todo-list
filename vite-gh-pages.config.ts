import { defineConfig } from 'vite'
import parentConfig from './vite.config.ts'

// https://vitejs.dev/config/
export default defineConfig({
    ...parentConfig,
    base: './'
})
