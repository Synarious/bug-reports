// minify.js

const fs = require('fs-extra');
const path = require('path');
const { minify: terserMinify } = require('terser');
const CleanCSS = require('clean-css');

// Directories
const jsDir = path.join(__dirname, 'website/squad/assets/js');
const cssDir = path.join(__dirname, 'website/squad/assets/css');

// Helper: Minify JS
async function minifyJSFiles() {
  const files = await fs.readdir(jsDir);
  for (const file of files) {
    if (file.endsWith('.js') && !file.endsWith('.min.js')) {
      const filePath = path.join(jsDir, file);
      const code = await fs.readFile(filePath, 'utf8');
      const result = await terserMinify(code);
      const outPath = path.join(jsDir, file.replace(/\.js$/, '.min.js'));
      await fs.writeFile(outPath, result.code, 'utf8');
      console.log(`✔ JS Minified: ${file} → ${path.basename(outPath)}`);
    }
  }
}

// Helper: Minify CSS
async function minifyCSSFiles() {
  const files = await fs.readdir(cssDir);
  for (const file of files) {
    if (file.endsWith('.css') && !file.endsWith('.min.css')) {
      const filePath = path.join(cssDir, file);
      const code = await fs.readFile(filePath, 'utf8');
      const result = new CleanCSS().minify(code);
      const outPath = path.join(cssDir, file.replace(/\.css$/, '.min.css'));
      await fs.writeFile(outPath, result.styles, 'utf8');
      console.log(`✔ CSS Minified: ${file} → ${path.basename(outPath)}`);
    }
  }
}

// Run
(async () => {
  await minifyJSFiles();
  await minifyCSSFiles();
})();
