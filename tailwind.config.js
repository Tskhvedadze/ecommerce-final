/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                body: [
                    'Nunito Sans',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'system-ui',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'Noto Sans',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                    'Noto Color Emoji',
                ],
                sans: [
                    'Nunito Sans',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'system-ui',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'Noto Sans',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                    'Noto Color Emoji',
                ],
            },
            colors: {
                primary: {
                    50: '#fffbeb',
                    100: '#fef3c7',
                    200: '#fde68a',
                    300: '#fcd34d',
                    400: '#fbbf24',
                    500: '#f59e0b',

                    700: '#b45309',
                    800: '#92400e',
                    900: '#78350f',
                },
                login: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                },
                amazonclone: {
                    background: '#EAEDED',
                    light_blue: '#232F3A',
                    yellow: '#FEBD69',
                    DEFAULT: '#131921',
                },

                yellow: {
                    DEFAULT: '#FFC107',
                    light: '#FFF59D',
                    dark: '#FFA000',
                },

                green: {
                    DEFAULT: '#00AC47',
                    light: '#C7E6C9',
                    dark: '#00714E',
                },

                orange: {
                    DEFAULT: '#FF9900',
                    light: '#FFB366',
                    dark: '#C66A00',
                },

                red: {
                    DEFAULT: '#FF5F5F',
                    light: '#FF9B9B',
                    dark: '#E60000',
                },

                gray: {
                    DEFAULT: '#D2D2D2',
                    light: '#bfbfbf',
                    dark: '#0d0d0d',
                },
            },
        },
    },
    plugins: [],
}
