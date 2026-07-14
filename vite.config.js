import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mouaz-portfolio/', // ئەم دێڕە لێرە زیاد بکە (ناوی کۆگاکەتە لە گیت‌هەب)
})