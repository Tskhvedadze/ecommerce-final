/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                amazonclone: {
                    background: '#EAEDED',
                    light_blue: '#232F3A',
                    yellow: '#FEBD69',
                    DEFAULT: '#131921',
                },
            },
        },
    },
    plugins: [],
}
