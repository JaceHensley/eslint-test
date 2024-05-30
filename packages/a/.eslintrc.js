module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  rules: {
    // semi: ['error', 'always']
    '@typescript-eslint/semi': ['error', 'always']
  }
};
