/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}'
    ],
    theme: {
    extend: {
    fontFamily: {
        bigcaslon: ['BigCaslon', 'serif'],
    display: ["Inter", "ui-sans-serif", "system-ui"],
    body: ["Inter", "ui-sans-serif", "system-ui"]
    }
    }
    },
    plugins: []
    }