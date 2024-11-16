import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-teal-start': '#1dc2d8', 
        'custom-teal-middle': '#1ea6d9',
        'custom-blue-end': '#0051d0',    
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(140deg, #1dc2d8 0%, #1ea6d9 50%, #0051d0 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
