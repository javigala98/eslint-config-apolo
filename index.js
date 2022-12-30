module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts'],
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
            extensions: ['.ts']
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
};
