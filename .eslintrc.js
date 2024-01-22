module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": ["**/tsconfig.json"],
    "tsconfigRootDir": __dirname
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".scss"]
      },
      "alias": {
        "map": [
          ["@src", "./src"],
          ["@assets", "./assets"],
          ["@styles", "./src/styles"]
        ],
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".scss"]
      },
      "typescript": {

      },
    },
    "react": {
      "version": "latest"
    }
  },
  "rules": {
    "react/prop-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }
}