module.exports = {
  rules: {
    // enforces consistent definition structure in array.
    // https://eslint.org/docs/latest/rules/array-bracket-newline
    'array-bracket-newline': ['error', 'consistent'],

    // enforces no parens where they can be omitted.
    // https://eslint.org/docs/latest/rules/arrow-parens
    'arrow-parens': ['error', 'as-needed'],

    // enforces parentheses around arrow function parameters regardless of arity.
    // https://eslint.org/docs/latest/rules/arrow-spacing
    'arrow-spacing': 'error',

    //  enforces consistent spacing inside an open block token and the next token on the same line.
    // https://eslint.org/docs/latest/rules/block-spacing
    'block-spacing': 'error',

    // enforce consistent brace style for blocks.
    // https://eslint.org/docs/latest/rules/brace-style
    'brace-style': 'error',

    // enforce consistent comma style.
    // https://eslint.org/docs/latest/rules/comma-style
    'comma-style': ['error', 'last'],

    // enforce consistent newlines before and after dots.
    // https://eslint.org/docs/latest/rules/dot-location
    'dot-location': ['error', 'property'],

    // enforce the location of arrow function bodies.
    // https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['error', 'beside'],

    // enforces consistent spacing between keys and values in object literal properties.
    // https://eslint.org/docs/latest/rules/key-spacing
    'key-spacing': [
      'error',
      {
        mode: 'strict'
      }
    ],

    // enforce consistent spacing before and after keywords.
    // https://eslint.org/docs/latest/rules/keyword-spacing
    'keyword-spacing': [
      'error',
      {
        before: true
      }
    ],

    // disallow multiple spaces.
    // https://eslint.org/docs/latest/rules/no-multi-spaces
    'no-multi-spaces': 'error',

    // disallow multiple empty lines.
    // https://eslint.org/docs/latest/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': 'error',

    // disallow trailing whitespace at the end of lines.
    // https://eslint.org/docs/latest/rules/no-trailing-spaces
    'no-trailing-spaces': 'error',

    // enforce consistent line breaks after opening and before closing braces.
    // https://eslint.org/docs/latest/rules/object-curly-newline
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          consistent: true,
          multiline: true
        },
        ObjectPattern: {
          consistent: true,
          multiline: true
        },
        ImportDeclaration: {
          consistent: true,
          multiline: true
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3
        }
      }
    ],

    // require or disallow semicolons instead of ASI.
    // https://eslint.org/docs/latest/rules/semi
    semi: 'never',

    // enforce the consistent use of either backticks, double, or single quotes
    // https://eslint.org/docs/latest/rules/quotes
    quotes: ['error', 'single']
  }
};
