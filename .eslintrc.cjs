module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react", "react-refresh", "react-hooks", "simple-import-sort"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "max-len": [
      "error",
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
      },
    ],
    semi: "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^react", "^@?\\w"],
          [
            "^components|^graphql|^helpers|^hooks|^theme|^config|^models|^state|^types?\\w",
          ],
          [
            "^\\u0000",
            "^\\.",
            "^",
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$",
          ],
          ["^.+\\.?(styled)$", "^.+\\.?(styles)$", "^.+\\.?(css)$"],
        ],
      },
    ],
  },
};