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
        es2021: true
    },
    settings: {
        react: {
            version: "detect" // Detecta automaticamente a versão do React
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
