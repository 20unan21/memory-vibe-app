import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/memory-vibe-app/', // GitHubリポジトリ名に合わせて
  plugins: [react()],
})
