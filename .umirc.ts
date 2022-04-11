import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'custom-ui',
  favicon:
    'https://avatars.githubusercontent.com/u/80503467?s=400&u=a95f88ffe0f3233b323767c7c93870ea1b3af598&v=4',
  logo: 'https://avatars.githubusercontent.com/u/80503467?s=400&u=a95f88ffe0f3233b323767c7c93870ea1b3af598&v=4',
  outputPath: 'docs-dist',
  alias: {
    '@': './src',
  },
  mode: 'site',
  navs: [
    null,
    {
      title: 'GitHub',
      path: '',
    },
  ],
  locales: [['zh-CN', '中文']],
  // more config: https://d.umijs.org/config
});
