import { defineConfig } from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [motionCanvas(), tsconfigPaths()],
});
