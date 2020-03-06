module.exports = {
    parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends: [
        'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'eslint-config-react-app',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript',
        'airbnb/hooks'
    ],
    parserOptions: {
        ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
        sourceType: 'module',  // Allows for the use of imports
        ecmaFeatures: {
            jsx: true,  // Allows for the parsing of JSX
        },
        project: './tsconfig.json',
    },
    rules: {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".tsx"] }],
        "react/jsx-indent": [1, 4],
        "import/no-unresolved": "off",
        "import/order": [1, {"alphabetize": true}],
        "no-param-reassign": [2, { "props": false }],
        "jsx-quotes": ["error", "prefer-single"],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
              "ts": "never",
              "tsx": "never"
            }
        ]
    },
    settings: {
        react: {
            version: 'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        "import/resolver": {
            typescript: {} // this loads <rootdir>/tsconfig.json to eslint
        },
    },
    globals: {
        browser: true,
        fetch: true,
        serviceworker: true,
        describe: true,
        it: true,
        expect: true,
        document: true,
    },
    ignorePatterns: ["craco.config.js", "node_modules/"],
}