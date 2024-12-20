module.exports = {
  // ... other config
  rules: {
    'no-undef': 'off', // Turns off the no-undef rule entirely
    //or for only specific files:
    overrides: [
      {
        files: ["someFile.js"],
        rules: {
          "no-undef": "off"
        }
      }
    ]
  },
};