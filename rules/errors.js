module.exports = {
  rules: {
    // disallow comparisons where both sides are exactly the same.
    // https://eslint.org/docs/latest/rules/no-self-compare
    'no-self-compare': 'error',

    // disallow template literal placeholder syntax in regular strings.
    // https://eslint.org/docs/latest/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // disallow the use of variables before they are defined.
    // https://eslint.org/docs/latest/rules/no-use-before-define
    'no-use-before-define': 'error',

    // require braces around arrow function bodies.
    // https://eslint.org/docs/latest/rules/arrow-body-style
    'arrow-body-style': ['error', 'as-needed'],

    // enforce camelcase naming convention
    // https://eslint.org/docs/latest/rules/camelcase
    camelcase: [
      'error',
      {
        ignoreGlobals: true
      }
    ],

    // enforce consistent brace style for all control statements
    // https://eslint.org/docs/latest/rules/curly
    curly: 'error',

    // require default cases in switch statements.
    // https://eslint.org/docs/latest/rules/default-case
    'default-case': 'error',

    // enforce default clauses in switch statements to be last.
    // https://eslint.org/docs/latest/rules/default-case-last
    'default-case-last': 'error',

    // require the use of === and !==.
    // https://eslint.org/docs/latest/rules/eqeqeq
    eqeqeq: 'error',

    // enforce the consistent use of either function declarations or expressions.
    // https://eslint.org/docs/latest/rules/func-style
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true
      }
    ],

    // enforce a maximum number of classes per file.
    // https://eslint.org/docs/latest/rules/max-classes-per-file
    'max-classes-per-file': 'error',

    // enforces a maximum depth that blocks can be nested to reduce code complexity.
    // https://eslint.org/docs/latest/rules/max-depth
    'max-depth': ['error', 4],

    // disallow the use of arguments.caller or arguments.callee.
    // https://eslint.org/docs/latest/rules/no-caller
    'no-caller': 'error',

    // disallow continue statements.
    // https://eslint.org/docs/latest/rules/no-continue
    'no-continue': 'error',

    // disallow else blocks after return statements in if statements.
    // https://eslint.org/docs/latest/rules/no-else-return
    'no-else-return': [
      'error',
      {
        allowElseIf: false
      }
    ],

    // disallow empty functions.
    // https://eslint.org/docs/latest/rules/no-empty-function
    'no-empty-function': [
      'error',
      {
        allow: ['constructors', 'generatorFunctions']
      }
    ],

    // disallow the use of eval().
    // https://eslint.org/docs/latest/rules/no-eval
    'no-eval': 'error',

    // disallow leading or trailing decimal points in numeric literals.
    // https://eslint.org/docs/latest/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // disallow the use of eval()-like methods.
    // https://eslint.org/docs/latest/rules/no-implied-eval
    'no-implied-eval': 'error',

    // disallow labels that share a name with a variable.
    // https://eslint.org/docs/latest/rules/no-label-var
    'no-label-var': 'error',

    // require let or const instead of var.
    // https://eslint.org/docs/latest/rules/no-var
    'no-var': 'error',

    // require using arrow functions for callbacks.
    // https://eslint.org/docs/latest/rules/prefer-arrow-callback
    'prefer-arrow-callback': 'error',

    // require const declarations for variables that are never reassigned after declared.
    // https://eslint.org/docs/latest/rules/prefer-const
    'prefer-const': 'error',

    // require destructuring from arrays and/or objects.
    // https://eslint.org/docs/latest/rules/prefer-destructuring
    'prefer-destructuring': 'error',

    // require template literals instead of string concatenation.
    // https://eslint.org/docs/latest/rules/prefer-template
    'prefer-template': 'error',

    // require or disallow "Yoda" conditions.
    // https://eslint.org/docs/latest/rules/yoda
    yoda: 'error'
  }
}
