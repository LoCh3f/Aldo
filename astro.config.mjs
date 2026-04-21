import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://loch3f.github.io',
  base: '/Aldo',
  integrations: [tailwind()],
});
