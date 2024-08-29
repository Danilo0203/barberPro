import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|link|navbar|ripple|spinner).js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#F2F2F2",
            foreground: "#000000",
            primary: {
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#000000",
              DEFAULT: "#F2F2F2",
              foreground: "#000000",
            },
            secondary: {
              100: "#FDEDD1",
              200: "#FCD7A4",
              300: "#F8B975",
              400: "#F19B53",
              500: "#e96e1d",
              600: "#C85115",
              700: "#A7390E",
              800: "#872409",
              900: "#6F1605",
              DEFAULT: "#e96e1d",
              foreground: "#000000",
            },
            focus: "#e96e1d",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        dark: {
          colors: {
            background: "#2C2D2F",
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#000000",
              DEFAULT: "#F2F2F2",
              foreground: "#ffffff",
            },
            secondary: {
              100: "#FDEDD1",
              200: "#FCD7A4",
              300: "#F8B975",
              400: "#F19B53",
              500: "#e96e1d",
              600: "#C85115",
              700: "#A7390E",
              800: "#872409",
              900: "#6F1605",
              DEFAULT: "#e96e1d",
              foreground: "#000000",
            },
            focus: "#e96e1d",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
export default config;
