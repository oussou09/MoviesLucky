/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
      ],
      theme: {
        extend: {
            colors: {
                'custom-gray-0.9': '#181616',  // Add your custom color here
              },
        },
      },
      plugins: [],
}

