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
        "#A4FED3":"#A4FED3",
        "#FEA4A4":"#FEA4A4"
      },
      textColor: {
        "#222E50": "#222E50",
        "#000000": "#000000",
        "#71767B": "#71767B",
      },
      height: {
        "99px": "99px",
        "45px": "45px",
        "37px":"37px",
        "150px": "150px"
      },
      margin: {
        "-4px": "-4px",
        "-2px": "-2px",
        "19px": "19px",
        "37px": "37px",
        "67px": "67px",
        "74px": "74px",
        "83px": "83px",
        "88px": "88px",
      },
      width: {
        "64px": "64px",
        "92px": "92px",
        "150px": "150px",
        "154px": "154px",
        "45px": "45px",
        "523px": "523px",
        "630px": "630px",
        "646px": "646px",
      },
      borderRadius: {
        "16px": "16px",
        "36px": "36px",
        "100px": "100px",
        "235px": "235px"
      },
      borderColor: {
        "#7E7E7E": "#7E7E7E"
      },
      boxShadow: {
        'custom': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',

      },
      fontFamily: {
        "questrial": ["Questrial", "sans-serif"],
      },
      fontSize: {
        "30px": "30px",
      },
      padding: {
        "151px": "151px",
        "67px": "67px"
      },
      top: {
        "75px": "75px",
        "163px":"163px"
      },
      left: {
        "67px": "67px",
        "455px":"455px"
      }
    },
  },
  plugins: [],
};
export default config;
