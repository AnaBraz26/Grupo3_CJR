import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "99px": "99px",
        "45px": "45px"
      },
      margin:{
        "74px":"74px",
        "19px":"19px",
        "37px": "37px",
      },
      width: {
        "92px": "92px",
        "154px": "154px",
        "45px": "45px",
        "646px":"646px",
      },
      borderRadius: {
        "16px": "16px",
        "100px":"100px"
      },
      boxShadow:{
        'custom': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      fontFamily:{
        "questrial": ["Questrial", "sans-serif"],
      },
      fontSize: {
        "30px":"30px",
      },
      padding: {
        "99px": "99px",
      }
    },
  },
  plugins: [],
};
export default config;
