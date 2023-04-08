/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         modblue:{
            100:"hsl(238, 40%, 52%)"
         },
         lightblue:{
          100:"hsl(228, 33%, 97%)"
         },
         lightgray:{
          100:"hsl(211, 10%, 45%)"
         },
         transparent:{
          100:"rgba(0,0,0,.3)"
         }
      },
      maxWidth: {
        '47em': '47em',
      },
      fontSize:{
        "16px":"16px",
         "1.2rem":"1.2rem"
      },
      screens:{
        sm:"450px",
      },
      spacing: {
        '93p': '93%',
        '95p': '95%',
        '94p': '94%',
         
         "90p":"90%"
      },
    },
  },
  plugins: [],
}

