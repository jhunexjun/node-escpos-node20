const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/main.js'],
  bundle: true,
  platform: 'node',
  target: 'node20',
  outfile: 'dist/index.js',
  external: ['usb'], // keep native module external
  allowOverwrite: true
}).catch(() => process.exit(1));