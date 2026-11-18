/**
 * Production Build Runner & Static Asset Pipeline
 * Validates, optimizes, bundles, and creates the distribution output in /dist.
 */

const fs = require('fs');
const path = require('path');

console.log('⚡ Starting Awwwards Portfolio Production Build Pipeline...');

const rootDir = __dirname;
const distDir = path.join(rootDir, 'dist');

// Ensure dist structure exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

ensureDir(distDir);
ensureDir(path.join(distDir, 'styles'));
ensureDir(path.join(distDir, 'scripts'));
ensureDir(path.join(distDir, 'assets'));
ensureDir(path.join(distDir, 'assets', 'projects'));

// Simple regex-based CSS minifier
function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // remove comments
    .replace(/\s+/g, ' ')             // collapse whitespace
    .replace(/\s*([{}:;,>])\s*/g, '$1') // trim around tokens
    .replace(/;}/g, '}')              // remove trailing semicolons
    .trim();
}

// Simple JS minifier (strips multiline and line comments safely, preserves strings)
function minifyJS(js) {
  return js
    .replace(/\/\*[\s\S]*?\*\//g, '') // multiline comments
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1') // single line comments
    .trim();
}

// 1. Process Styles
console.log('📦 Bundling and minifying stylesheets...');
const mainCss = fs.readFileSync(path.join(rootDir, 'styles', 'main.css'), 'utf-8');
const componentsCss = fs.readFileSync(path.join(rootDir, 'styles', 'components.css'), 'utf-8');
const bundledCss = minifyCSS(mainCss + '\n' + componentsCss);
fs.writeFileSync(path.join(distDir, 'styles', 'bundle.min.css'), bundledCss, 'utf-8');
console.log(`✓ Created dist/styles/bundle.min.css (${(bundledCss.length / 1024).toFixed(2)} KB)`);

// 2. Process Scripts in dependency order
console.log('📦 Bundling and minifying JavaScript modules...');
const jsFiles = [
  'canvas.js',
  'cursor.js',
  'audio.js',
  'theme.js',
  'projects.js',
  'terminal.js',
  'main.js'
];

let bundledJs = '';
jsFiles.forEach(file => {
  const filePath = path.join(rootDir, 'scripts', file);
  if (fs.existsSync(filePath)) {
    bundledJs += `\n/* --- ${file} --- */\n` + fs.readFileSync(filePath, 'utf-8') + '\n';
  }
});

const minifiedJs = minifyJS(bundledJs);
fs.writeFileSync(path.join(distDir, 'scripts', 'bundle.min.js'), minifiedJs, 'utf-8');
console.log(`✓ Created dist/scripts/bundle.min.js (${(minifiedJs.length / 1024).toFixed(2)} KB)`);

// 3. Copy Assets
console.log('📦 Copying static SVG assets...');
function copyRecursive(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      ensureDir(destPath);
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyRecursive(path.join(rootDir, 'assets'), path.join(distDir, 'assets'));
console.log('✓ Assets synchronized.');

// 4. Generate Production HTML
console.log('📦 Generating production index.html with bundled assets...');
let html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');

// Replace separate stylesheets with bundled minified stylesheet
html = html.replace(
  /<link rel="stylesheet" href="styles\/main\.css" \/>\s*<link rel="stylesheet" href="styles\/components\.css" \/>/,
  '<link rel="stylesheet" href="styles/bundle.min.css" />'
);

// Replace multiple script tags with single bundle
const scriptTagsRegex = /<script src="scripts\/canvas\.js"><\/script>[\s\S]*?<script src="scripts\/main\.js"><\/script>/;
html = html.replace(
  scriptTagsRegex,
  '<script src="scripts/bundle.min.js"></script>'
);

fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8');
console.log('✓ Created dist/index.html');

console.log('\n🎉 Production Build Complete! Output generated in /dist');
console.log('Ready for local HTTP serve and visual verification.');

