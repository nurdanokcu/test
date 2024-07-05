// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    rules: {
      'no-console': ['warn'],
      'vue/max-attributes-per-line': ['warn', {
        singleline: {
          max: 2,
        },
      }],
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@typescript-eslint/no-explicit-any': ['off'],
      'vue/html-self-closing': 'off',
    },
  },
);
