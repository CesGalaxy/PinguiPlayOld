import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // Color palette from: 03045e (dark), 0077b6 (primary), 00b4d8 (secondary), 90e0ef (tertiary), caf0f8 (light)
            colors: {
                primary: "#0077b6",
                secondary: "#00b4d8",
                tertiary: "#90e0ef",
                light: "#caf0f8",
                dark: "#03045e",
            }
        },
    },
    plugins: [],
    safelist: [
        {
            pattern: /^text-.*xl$/,
        }
    ],
}
export default config
