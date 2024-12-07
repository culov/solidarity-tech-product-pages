const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');

// Define build options
const buildOptions = {
  entryPoints: ['app/javascript/account.js', 'app/javascript/dashboard.js', 'app/javascript/marketing.js', 'app/javascript/onboarding.js'],
  bundle: true,
  // platform: 'node',
  // conditions: ['browser'],
  minify: process.argv.includes('--minify'),
  sourcemap: true,
  plugins: [sassPlugin({ includePaths: ['node_modules'], loadPaths: ['src/styles', 'node_modules']  })],
  outdir: 'app/assets/builds',
  publicPath: '/assets',
  loader: { '.js': 'jsx' }, 
  // define: {
  //   'window.jQuery': 'require("jquery")',
  // },
  // watch: process.env.NODE_ENV === 'development'
};

// Check if watch mode is enabled
if (process.argv.includes("--watch")) {
  buildOptions.watch = {
    onRebuild(error) {
      if (error) console.error('watch build failed:', error);
      else console.log('watch build succeeded');
    },
  };
}

// Run esbuild with the defined options
esbuild.build(buildOptions).catch(() => process.exit(1));
