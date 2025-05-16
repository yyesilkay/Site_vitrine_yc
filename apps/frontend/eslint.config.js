const { defineConfig, globalIgnores } = require('eslint/config');

const nx = require('@nx/eslint-plugin');
const nxWorkspace = require('@nx/workspace'); // Add this line
const js = require('@eslint/js');
const simpleImportSort = require('eslint-plugin-simple-import-sort');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const { rule } = require('postcss');

module.exports = defineConfig([
  {
    plugins: {
      '@nx': nx,
      '@nx/workspace': nxWorkspace,
      '@eslint/js': js,
      'simple-import-sort': simpleImportSort,
    },
  },
  globalIgnores(['projects/**/*']),
  {
    files: ['**/*.ts', '**/*.tsx'],

    extends: compat.extends(
      'plugin:@nx/typescript',
      'plugin:@nx/angular',
      'plugin:@angular-eslint/template/process-inline-templates',
    ),

    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],

      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@nx/enforce-module-boundaries': 'error',
      '@typescript-eslint/explicit-function-return-type': ['error'],
      '@typescript-eslint/no-explicit-any': ['warn'],
      '@typescript-eslint/no-inferrable-types': ['error'],
      '@typescript-eslint/no-unused-expressions': ['error'],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    files: ['**/*.html'],
    extends: compat.extends('plugin:@nx/angular-template'),

    rules: {
      '@angular-eslint/template/prefer-control-flow': ['error'],
      '@angular-eslint/template/prefer-self-closing-tags': ['error'],
    },
  },
  {
    files: ['**/index.html'],

    rules: {
      '@angular-eslint/template/prefer-self-closing-tags': 'off',
    },
  },
  {
    files: ['**/*.js'],
    extends: compat.extends('plugin:@nx/javascript'),
    rules: {},
  },
]);
