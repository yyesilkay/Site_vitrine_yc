const { rule } = require("postcss");

module.exports = {
    root: true,
    ignorePatterns: ['projects/**/*'],
    plugins: ['@nx'],
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        extends: [
          'plugin:@nx/typescript',
          'plugin:@nx/angular',
          'plugin:@angular-eslint/template/process-inline-templates',
        ],
        rules: {
          '@angular-eslint/directive-selector': [
            'error',
            {
              type: 'attribute',
              prefix: 'app',
              style: 'camelCase'
            }
          ],
          '@angular-eslint/component-selector': [
            'error',
            {
              type: 'element',
              prefix: 'app',
              style: 'kebab-case'
            }
          ],
          '@typescript-eslint/explicit-function-return-type': ['error'],
          '@typescript-eslint/no-explicit-any': ['warn'],
          '@typescript-eslint/no-inferrable-types': ['error'],
          '@typescript-eslint/no-unused-expressions': ['error']
        }
      },
      {
        files: ['*.html'],
        extends: [
          'plugin:@nx/angular-template'
        ],
        rules: {
          '@angular-eslint/template/prefer-control-flow': ['error'],   
          '@angular-eslint/template/prefer-self-closing-tags': ['error']
        }
      },
      {
        files: ['**/index.html'],
        rules: {
          '@angular-eslint/template/prefer-self-closing-tags': 'off'
        }
      },
      {
        files: ['*.js'],
        extends: ['plugin:@nx/javascript'],
        rules: {}
      }
    ]
  }