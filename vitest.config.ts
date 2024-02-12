import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            exclude: ['node_modules', 'packages/template/*'], // excluye los archivos de node_modules y de la carpeta template
            reporters: ['default', 'html'], //para que genere un reporte en html con vitest UI
        },
    }),
);
