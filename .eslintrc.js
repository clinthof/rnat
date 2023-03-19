module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
    "react-native/react-native": true,
    "jest/globals": true
  },
  extends: [
    "plugin:react/recommended",
    "prettier",
    "eslint:recommended",
    "plugin:jest/recommended"
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "react-native", "detox"],
  ignorePatterns: ["!.*", "dist", "node_modules"],
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"]
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off"
      }
    }
  ]
};
