import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  build:'index.html',
  plugins:[
    tailwindcss()
  ]
})
