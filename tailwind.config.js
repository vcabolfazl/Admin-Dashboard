/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "VazirR": "Vazir Regular",
        "VazirM": "Vazir Medium",
        "VazirB": "VazirBlack",
      },
      colors: {
        "black": "#131517",
        "primry": "#1E1F25",
        "secondary": "#448BFF",
        "purple": "#C084FC",
        "green": "#00CA51",
        "orange": "#FF9900",
        "deactivate": "#C1C6E2",
      }
    },
  },
  plugins: [],
}
