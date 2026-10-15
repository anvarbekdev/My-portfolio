
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    darkMode: 'class',
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
      
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      xss: "200px",
      sm: "320px",
      xs: "375px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      xxl: "2560px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundImage: {
        you: "url('https://i.ytimg.com/vi_webp/S4L8T2kFFck/sddefault.webp')",
        img1: "url('src/assets/thumbnail.jpg')",
        img2: "url('src/assets/music.jpg')",
        img3: "url('src/assets/blog_app.jpg')",
        img4: "url('https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg')",
        img6: "url('src/assets/shop.jpg')",
        img8: "url('src/assets/baxmal.jpg')",
        img11:
          "url('https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg')",
        home: "url('./assets/qq.png')",
        about: "url('./assets/web.jpg')",
        xl: `url('data:image/svg+xml,%3Csvg width='1016' height='4747' viewBox='0 0 1016 4747' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_3_2)'%3E%3Cpath d='M1 10741V0' stroke='white'/%3E%3Cpath d='M253 10741V0' stroke='white'/%3E%3Cpath d='M507 10741V0' stroke='white'/%3E%3Cpath d='M761 10741V0' stroke='white'/%3E%3Cpath d='M1016 10741V0' stroke='white' stroke-width='2'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_3_2'%3E%3Crect width='1016' height='4747' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A')`,
        md: `url('data:image/svg+xml,<svg width="256" height="4747" viewBox="0 0 256 4747" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="10741" x2="1" stroke="white" stroke-width=".4"/><line x1="255" y1="10741" x2="255" stroke="white" stroke-width=".4"/></svg>')`,
        sm: `url('data:image/svg+xml,<svg width="256" height="4747" viewBox="0 0 2 4747" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="10741" x2="1" stroke="white" stroke-width=".3"/></svg>')`,
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
