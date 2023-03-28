module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:promise/recommended',
        'plugin:sonarjs/recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 13,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        'vue',
        '@typescript-eslint',
    ],
    ignorePatterns: ['node_modules', 'dist', '*.d.ts'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

        // indentation (Already present in TypeScript)
        'indent': ['error', 4],

        // Enforce trailing comma (Already present in TypeScript)
        'comma-dangle': ['error', 'always-multiline'],

        // Enforce consistent spacing inside braces of object (Already present in TypeScript)
        'object-curly-spacing': ['error', 'always'],

        // Disable max-len
        'max-len': 'off',

        // we don't want it
        'semi': ['error', 'never'],

        // Quote
        'quotes': ['error', 'single'],

        // add parens ony when required in arrow function
        'arrow-parens': ['error', 'as-needed'],

        // add new line above comment
        'newline-before-return': 'error',

        'no-trailing-spaces': 'error',

        // add new line above comment
        'lines-around-comment': [
            'error',
            {
                beforeBlockComment: true,
                beforeLineComment: true,
                allowBlockStart: true,
                allowClassStart: true,
                allowObjectStart: true,
                allowArrayStart: true,
            },
        ],

        'array-element-newline': ['error', 'consistent'],
        'array-bracket-newline': ['error', 'consistent'],

        'vue/multi-word-component-names': 'off',

        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: 'expression', next: 'const' },
            { blankLine: 'always', prev: 'const', next: 'expression' },
            { blankLine: 'always', prev: 'multiline-const', next: '*' },
            { blankLine: 'always', prev: '*', next: 'multiline-const' },
        ],

        // Plugin: eslint-plugin-import
        'import/prefer-default-export': 'off',
        'import/newline-after-import': ['error', { count: 1 }],

        // Plugin: eslint-plugin-import
        // For omitting extension for ts files
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],

        // ignore virtual files
        'import/no-unresolved': [2, {
            ignore: [
                '~pages$',
                'virtual:generated-layouts',

                // Ignore vite's ?raw imports
                '.*\?raw',
            ],
        }],

        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],

        '@typescript-eslint/consistent-type-imports': 'error',

        // Plugin: eslint-plugin-promise
        'promise/always-return': 'off',
        'promise/catch-or-return': 'off',

        // ESLint plugin vue
        // 'vue/block-tag-newline': 'error',
        'vue/component-api-style': 'error',
        'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
        'vue/custom-event-name-casing': ['error', 'camelCase', {
            ignores: [
                '/^(click):[a-z]+((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?/',
            ],
        }],
        'vue/define-macros-order': 'error',

        'vue/html-comment-content-newline': 'error',
        'vue/html-comment-content-spacing': 'error',
        'vue/html-comment-indent': 'error',
        'vue/html-indent': ['error', 4],
        'vue/match-component-file-name': 'error',
        'vue/no-child-content': 'error',

        // NOTE this rule only supported in SFC,  Users of the unplugin-vue-define-options should disable that rule: https://github.com/vuejs/eslint-plugin-vue/issues/1886
        // 'vue/no-duplicate-attr-inheritance': 'error',
        'vue/no-empty-component-block': 'error',
        'vue/no-multiple-objects-in-class': 'error',
        'vue/no-reserved-component-names': 'error',
        'vue/no-template-target-blank': 'error',
        'vue/no-useless-mustaches': 'error',
        'vue/no-useless-v-bind': 'error',
        'vue/padding-line-between-blocks': 'error',
        'vue/prefer-separate-static-class': 'error',
        'vue/prefer-true-attribute-shorthand': 'error',
        'vue/v-on-function-call': 'error',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.js', '.tsx', '.jsx', '.mjs'],
            },
            typescript: {},
        },
    },
}
