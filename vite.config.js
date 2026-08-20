import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.fbx', '**/*.obj', '**/*.mtl', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', "**/*.html"],
})
