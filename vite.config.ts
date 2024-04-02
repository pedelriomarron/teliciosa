import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");

export default defineConfig({
    base: '/teliciosa/',
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})