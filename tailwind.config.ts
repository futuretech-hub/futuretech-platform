import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepNavy: "#070B1B",
        navyBlue: "#101A35",
        neonCyan: "#32DDF5",
        electricBlue: "#287CFF",
        neonPurple: "#B34BFF",
        paleText: "#F3F6FC",
      },
    },
  },
  plugins: [],
};
export default config;
