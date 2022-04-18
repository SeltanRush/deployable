module.exports = {
  extends: ["next/core-web-vitals"],
  plugins: ["@typescript-eslint"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["./src"],
      },
    },
  },
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling"],
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_", args: "all" },
    ],
    "no-unused-vars": ["off"],
  },
};
