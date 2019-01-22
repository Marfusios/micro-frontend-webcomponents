const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './deployment/runtime.js',
    './deployment/polyfills.js',
    './deployment/scripts.js',
    './deployment/main.js',
  ];

  await fs.ensureDir('deployment');
  await concat(files, 'deployment/bundle.min.js');
})();
