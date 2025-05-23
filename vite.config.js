"use strict";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/repo-quarta/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        port: 3000,
        strictPort: true,
        host: true,
        open: true,
    },
    optimizeDeps: {
        exclude: ['lucide-react'],
        force: true,
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
        assetsDir: 'assets',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
            },
            output: {
                manualChunks: undefined,
            },
        },
    },
    esbuild: {
        logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
    clearScreen: false,
    logLevel: 'info',
});
