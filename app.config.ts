import { defineConfig } from 'solidstep';

export default defineConfig({
    server: {
        // GitHub Pages hosts static files only. This preset (extends Nitro's
        // `static`) writes .nojekyll and prerenders /404.html automatically.
        preset: 'github-pages',
    },
});
