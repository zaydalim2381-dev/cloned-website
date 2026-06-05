import { copyFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distIndex = resolve(__dirname, '..', 'dist', 'index.html');
const dist404 = resolve(__dirname, '..', 'dist', '404.html');

if (existsSync(distIndex)) {
  copyFileSync(distIndex, dist404);
  console.log('✓ Copied index.html → 404.html for SPA routing');
} else {
  console.error('✗ dist/index.html not found — skipping 404 copy');
}
