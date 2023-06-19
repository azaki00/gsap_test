import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// change this to match your wordpress theme path
const wp_theme_route = 'wp-content/themes/our-theme';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
