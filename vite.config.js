import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pagesのベースパス設定
  // リポジトリ名が 'username.github.io' の場合は base: '/' にしてください
  // それ以外の場合は base: '/リポジトリ名/' に変更してください（例: '/studism-website/'）
  base: process.env.NODE_ENV === 'production' ? '/サイトページす/' : '/',
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
