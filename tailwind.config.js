/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          1: "#D8FCF7",
          5: "#01F0D0",
        },
        blue: {
          1: "#E0F3FA",
        },
        pink: {
          1: "#FFE6E9",
          2: "#FFE6F1",
          3: "#F4F0FE",
        },
        purple: {
          1: "#E66FD2",
          2: "#C26EB4",
          3: "#8C6FE6",
          4: "#7E6CAB",
        },
        gray: {
          1: "#EDEDED",
          2: "#707070",
          3: "#F6F7F8",
          4: "#CBC8D4",
        }

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
