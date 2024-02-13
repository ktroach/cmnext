/** @type {import("eslint").Linter.Config} */
const config = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: true,
    },
    plugins: ["@typescript-eslint", "tailwindcss"],
    extends: [
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended-type-checked",
      "prettier",
      "plugin:tailwindcss/recommended",
    ],
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "jsx-a11y/anchor-is-valid": [
        "off",
        {
          "components": ["Link"],
          "specialLink": ["hrefLeft", "hrefRight"],
          "aspects": ["noHref", "invalidHref", "preferButton"]
        }
      ]    
    },
    settings: {
      tailwindcss: {
        callees: ["cn"],
        config: "./tailwind.config.ts",
      },
      next: {
        rootDir: ["./"],
      },
    },
  }
  
  module.exports = config
  