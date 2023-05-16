/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
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
