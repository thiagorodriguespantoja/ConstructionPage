module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        node: true, // Adicione esta linha para reconhecer o ambiente Node.js
        es2021: true
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended"
    ],
    plugins: [
        "react",
        "jsx-a11y"
    ],
    rules: {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "react/prop-types": "off"
    }
};
