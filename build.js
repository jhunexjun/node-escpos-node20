const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['index.js'],
  bundle: true,
  platform: 'node',
  target: 'node20',
  outfile: 'dist/index.js',
  external: ['usb'], // keep native module external
}).catch(() => process.exit(1));