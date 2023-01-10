const OFF = "off";
const ERROR = "error";

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
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
    "import/prefer-default-export": OFF,
    "indent": [ERROR, 2],
    "jsx-a11y/anchor-is-valid": OFF,
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

    "max-len": [ERROR, 200],
    "no-console": OFF,
    "no-restricted-imports": [
      ERROR,
      {
        patterns: ["../.*"]
      }
    ],
    "no-shadow": OFF,
    "no-underscore-dangle": OFF,
    "no-unused-vars": OFF,
    "no-use-before-define": OFF,
    "object-curly-spacing": [ERROR, "always", { "objectsInObjects": false }],
    "object-shorthand": ERROR,
    "prefer-destructuring": [
      ERROR,
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    quotes: [ERROR, "double", { avoidEscape: true }],
    "react/jsx-filename-extension": [
      ERROR,
      {
        extensions: [".js", ".ts", ".tsx", ".jsx"]
      }
    ],
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "semi": [2],
    "simple-import-sort/imports": [
      ERROR,
      {
        groups: [
          ["^react"],
          // Scoped packages.
          ["^@\\w"],
          // Non-scoped packages.
          ["^\\w"],
          // Internal packages.
          ["^~(/.*|$)"],
          ["^\\u0000"],
          // Parent (..) imports.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports, such as same-import folders.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.s?css$"]
        ]
      }
    ]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
