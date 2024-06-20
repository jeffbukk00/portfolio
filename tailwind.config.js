/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { NotoSans: ["Noto Sans KR", "Noto Sans", "sans-serif"] },
      colors: {
        default: "#232323",
        main: "#0074ab",
      },
      keyframes: {
        bounceR: {
          "0%": {
            transform: "translateX(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
          "100%": {
            transform: "translateX(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
        bounceL: {
          "0%": {
            transform: "translateX(25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
          "100%": {
            transform: "translateX(25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
        ping: {
          "100%": {
            transform: "scale(2)",
            opacity: 0,
          },
        },
        slideToR: {
          "0%": {
            transform: "translate(-100%)",
          },
          "100%": {
            transform: "translate(0)",
          },
        },
      },
    },
    animation: {
      bounceR: "bounceR 1s infinite",
      bounceL: "bounceL 1s infinite",
      ping: "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
      slideToR: "slideToR 0.3s ease-in",
    },
    screens: {
      xl: "1400px",
      lg: "1200px",
      md: "1050px",
      semiSm: "950px",
      sm: "640px",
    },
  },
  plugins: [],
};
