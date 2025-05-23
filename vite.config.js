"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
const node_path_1 = __importDefault(require("node:path"));
const node_url_1 = require("node:url");
const __dirname = node_path_1.default.dirname((0, node_url_1.fileURLToPath)(import.meta.url));
// https://vitejs.dev/config/
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    base: '/repo-quarta/',
    resolve: {
        alias: {
            '@': node_path_1.default.resolve(__dirname, './src'),
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
                main: node_path_1.default.resolve(__dirname, 'index.html'),
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
