module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true,
        ecmaFeatures: {
          impliedStrict: true,
          legacyDecorators: false,
          experimentalObjectRestSpread: true
        },
        ecmaVersion: 2021,
        sourceType: 'module'
      },
      extends: [
        'eslint:recommended',
        'plugin:eslint-comments/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        './rules/errors',
        './rules/strict',
        './rules/style',
        './rules/warns'
      ],
      rules: {},
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
          typescript: {
            project: ['tsconfig.json', 'package/tsconfig.json']
          },
          node: {
            project: ['tsconfig.json', 'package/tsconfig.json']
          }
        }
      }
    },
    {
      files: ['*.js', '*.cjs', '*.mjs'],
      env: { node: true },
      extends: [
        'eslint:recommended',
        'plugin:eslint-comments/recommended',
        'plugin:import/recommended',
        './rules/errors',
        './rules/strict',
        './rules/style',
        './rules/warns'
      ],
      rules: {},
      settings: {
        'import/resolver': {
          node: {
            paths: ['src'],
            extensions: ['.js', '.cjs', '.mjs']
          }
        }
      }
    }
  ]
}
