const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["NoExisto", ...defaultTheme.fontFamily.sans],
                serif: ["NoExisto", ...defaultTheme.fontFamily.serif],
                mono: ["NoExisto", ...defaultTheme.fontFamily.mono],
            },
            colors: {
                primary: {
                    DEFAULT: "#0369a1",
                    50: "#bae6fd",
                    100: "#7dd3fc",
                    200: "#38bdf8",
                    300: "#0ea5e9",
                    400: "#0284c7",
                    500: "#0369a1",
                    600: "#075985",
                    700: "#0c4a6e",
                    800: "#103b56",
                    900: "#102a37",
                },
                secondary: {
                    DEFAULT: "#2DCCCD",
                    50: "#ABEBEB",
                    100: "#96E6E6",
                    200: "#81E0E1",
                    300: "#6CDBDC",
                    400: "#57D6D7",
                    500: "#2DCCCD",
                    600: "#29B8B9",
                    700: "#24A3A4",
                    800: "#1F8F90",
                    900: "#1B7A7B",
                },
                success: {
                    DEFAULT: "#047857",
                    50: "#a7f3d0",
                    100: "#6ee7b7",
                    200: "#34d399",
                    300: "#10b981",
                    400: "#059669",
                    500: "#047857",
                    600: "#065f46",
                    700: "#064e3b",
                    800: "#023e30",
                    900: "#012a21",
                },
                error: {
                    DEFAULT: "#c53030",
                    50: "#fed7d7",
                    100: "#feb2b2",
                    200: "#fc8181",
                    300: "#f56565",
                    400: "#e53e3e",
                    500: "#c53030",
                    600: "#9b2c2c",
                    700: "#822727",
                    800: "#63171b",
                    900: "#521b1d",
                },
                warning: {
                    DEFAULT: "#f59e0b",
                    50: "#fffbeb",
                    100: "#fef3c7",
                    200: "#fde68a",
                    300: "#fcd34d",
                    400: "#fbbf24",
                    500: "#f59e0b",
                    600: "#d97706",
                    700: "#b45309",
                    800: "#92400e",
                    900: "#78350f",
                },
                info: {
                    DEFAULT: "#2b6cb0",
                    50: "#bee3f8",
                    100: "#90cdf4",
                    200: "#63b3ed",
                    300: "#4299e1",
                    400: "#3182ce",
                    500: "#2b6cb0",
                    600: "#2c5282",
                    700: "#2a4365",
                    800: "#1a365d",
                    900: "#1a365d",
                },
                light: {
                    DEFAULT: "#ffffff",
                    100: "#ffffff",
                    200: "#f9fafb",
                    300: "#f3f4f6",
                    400: "#e5e7eb",
                    500: "#d1d5db",
                },
                dark: {
                    DEFAULT: "#111827",
                    100: "#111827",
                    200: "#1f2937",
                    300: "#374151",
                    400: "#4b5563",
                    500: "#6b7280",
                },
                onLight: {
                    DEFAULT: "#111827",
                    100: "#111827",
                    200: "#1f2937",
                    300: "#374151",
                    400: "#4b5563",
                    500: "#6b7280",
                },
                onDark: {
                    DEFAULT: "#ffffff",
                    100: "#ffffff",
                    200: "#f3f4f6",
                    300: "#e5e7eb",
                    400: "#d1d5db",
                    500: "#9ca3af",
                },
            },
            maxWidth: {
                "xxs": "10rem",
                "1/4": "25%",
                "1/2": "50%",
                "3/4": "75%",
                "14": "3.5rem",
            },
            gridTemplateColumns: {
                "auto-1fr": "auto 1fr",
                "auto-14": "repeat(auto-fill, minmax(3.5rem,1fr));"
            },
        },
    },
    plugins: [],
};
