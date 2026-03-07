import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/first-vite-website/',
    plugins: [react()],
})
