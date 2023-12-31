/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['simple-import-sort'],
  parser: '@typescript-eslint/parser',
  env: { es2023: true, node: true },
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js', 'vite.config.ts'],
  rules: {
    'newline-before-return': 'error',
    'no-console': 'warn',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-nested-ternary': 'off',
    'no-unused-vars': 'warn',
    'arrow-body-style': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '_', argsIgnorePattern: '^_' }],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        filter: { regex: '^_|__', match: false },
      },
      { selector: 'function', format: ['camelCase', 'PascalCase'] },
      { selector: 'typeLike', format: ['PascalCase'] },
    ],
    'import/prefer-default-export': 'off',
  },
}
