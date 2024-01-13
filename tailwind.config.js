/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '20': 'repeat(20, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      }
    },
    colors: {
      'primary': '#225601',
      'secondary': '#e9f7a0',
      'third': '#98c748',
      'hover-primary': '#337509',
      'disabled': '#09173e',
      'error': '#d3dce6',
      'success': '#d3dce6',
      'info': '#d3dce6',
      'warning': '#d3dce6',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}