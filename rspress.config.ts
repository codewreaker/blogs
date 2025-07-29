import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'rspress/config';

import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from '@shikijs/transformers';
import rspressPluginReadingTime from 'rspress-plugin-reading-time';

import pluginSitemap from 'rspress-plugin-sitemap';

const siteUrl = 'blog.israelprempeh.com';


const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  globalStyles: path.join(__dirname, 'styles/index.css'),
  title: 'My Site',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  plugins: [
    rspressPluginReadingTime(),
    pluginSitemap({
      domain: siteUrl,
    }),
  ],
  markdown: {
    checkDeadLinks: true,
    //@ts-expect-error exists but not in v1
    shiki: {
      transformers: [transformerNotationHighlight(), transformerNotationDiff()],
    },
  },
  builderConfig: {
    resolve: {
      alias: {
        '@components': path.join(__dirname, 'src/components'),
      },
    }
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
});
