/// <reference types="vitest" />///
/// <reference types="Vite/client" />///
//importación de los tipos de vitest

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react({ include: /\.(js|jsx|ts|tsx)$/ })],
    test: {
        environment: 'jsdom',
        globals: true,
    },
});
