import { resolve } from 'path'
import { defineConfig } from 'vite'
import inspect from 'vite-plugin-inspect'
import { DOMElements, SVGElements } from 'solid-js/web/dist/dev.cjs'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
    resolve: {
        alias: {
            '@interfaces': resolve(__dirname, './src/interfaces'),
            '@components': resolve(__dirname, './src/components'),
            '@routes': resolve(__dirname, './src/routes'),
            '@pages': resolve(__dirname, './src/pages'),
            '@styles': resolve(__dirname, './src/styles'),
            '@config': resolve(__dirname, './src/config'),
            '@src': resolve(__dirname, './src'),
            '@assets': resolve(__dirname, './assets'),
            '@hooks': resolve(__dirname, './src/utils/hooks'),
            '@store': resolve(__dirname, './src/store'),
            '@static': resolve(__dirname, './src/static'),
            '@utils': resolve(__dirname, './src/utils'),
        },
    },
    plugins: [
        solidPlugin({
            solid: {
                moduleName: 'solid-js/web',
                // @ts-ignore
                generate: 'dynamic',
                renderers: [
                    {
                        name: 'dom',
                        moduleName: 'solid-js/web',
                        elements: [...DOMElements.values(), ...SVGElements.values()],
                    },
                    {
                        name: 'universal',
                        moduleName: 'solid-three',
                        elements: [],
                    },
                ],
            },
        }),
        inspect(),
    ],
    server: {
        port: 3000,
        host: true,
        strictPort: true,
    },
    build: {},
})
