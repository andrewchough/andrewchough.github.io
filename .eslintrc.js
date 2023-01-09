module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["jsx-a11y", "react", "simple-import-sort", "prettier"],
  rules: {
    "comma-dangle": [2],
    // "import/prefer-default-export": "off",

    // "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-for": [
      "error",
      {
        components: ["Label"],
        required: {
          some: ["nesting", "id"]
        },
        allowChildren: false
      }
    ],

    // "max-len": [ERROR, 200],
    // "no-console": "off",
    // "no-restricted-imports": [
    //   ERROR,
    //   {
    //     patterns: ["../.*"],
    //   },
    // ],
    // "no-shadow": "off",
    // "no-underscore-dangle": "off",
    // "no-unused-vars": "off",
    // "no-use-before-define": "off",
    // "object-shorthand": ERROR,
    // "prefer-destructuring": [
    //   ERROR,
    //   {
    //     VariableDeclarator: {
    //       array: false,
    //       object: true,
    //     },
    //     AssignmentExpression: {
    //       array: true,
    //       object: false,
    //     },
    //   },
    //   {
    //     enforceForRenamedProperties: false,
    //   },
    // ],
    quotes: ["error", "double", { avoidEscape: true }]
    // "react/jsx-filename-extension": [
    //   ERROR,
    //   {
    //     extensions: [".js", ".ts", ".tsx"],
    //   },
    // ],
    // "react/no-unescaped-entities": "off",
    // "react/prop-types": "off",
    // "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
