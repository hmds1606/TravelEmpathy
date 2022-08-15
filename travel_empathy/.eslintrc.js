module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:@next/next/recommended", "standard", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "spaced-comment": "off",
    "react/display-name": "off",
    "import/no-duplicates": "off",
  },
};
