module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      general: "Andika",
      "general-2": "PortLligatSans",
      brand: "Sansation",
      profile: "Saira",
    },
    extend: {
      colors: {
        "slate-gray": {
          1: "#76769a",
          2: "#454763",
          3: "#434364",
          4: "#3a3a56",
          5: "#2b2b48",
          6: "#22223e",
        },
        white: {
          DEFAULT: "#ffffff",
          1: "#f5f5f5",
        },
        "purple-gray": {
          1: "#ffffff",
        },
        primary: {
          DEFAULT: "#83A1F3",
          1: "#94ABE9",
          2: "#4D71D3",
        },
        "sky-blue": {
          1: "#6ABEF2",
        },
      },
      spacing: {
        0.32: "0.08rem",
        0.4: "0.1rem",
        300: "75rem",
        400: "100rem",
      },
    },
  },
  variants: {
    extend: {
      width: ["hover", "focus"],
    },
  },
  plugins: [],
}
