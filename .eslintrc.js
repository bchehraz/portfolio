module.exports = {
  "parser": "babel-eslint",
  "settings": {
    "react": {
      version: "detect",
    },
  },
  "rules": {
    "strict": 0,
    "no-unused-vars": 1,
    "react/prop-types": 1,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "globals": {
    "fetch": false,
    "console": false,
    "exports": false,
    "window": false,
    "module": false,
    "Promise": false
  }
};
