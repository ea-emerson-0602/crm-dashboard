module.exports = {
  env: {
    browser: true, // This tells ESLint that the code will run in a browser environment
    node: true, // This tells ESLint that the code will also run in Node.js (for SSR, etc.)
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-undef': 'off', // Disable the "no-undef" rule to allow window usage
    'react/react-in-jsx-scope': 'off', // Optional: if you use React 17+ and JSX without importing React
    // Add other custom rules here if needed
  },
};