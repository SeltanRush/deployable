module.exports = {
  extends: ["next/core-web-vitals"],
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
  },
};
