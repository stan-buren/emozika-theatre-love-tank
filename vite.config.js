import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: './',
    base: './', // Use relative paths for assets
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                // api: 'modern-compiler' // optional: use modern sass compiler if needed later
            }
        }
    }
});
