import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const rootDir = __dirname;
const distDir = path.join(rootDir, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  let safeUrl = req.url.split('?')[0];
  if (safeUrl === '/') safeUrl = '/index.html';

  let filePath = path.join(distDir, safeUrl);

  // Fallback to public directory or root if needed
  if (!fs.existsSync(filePath)) {
    filePath = path.join(rootDir, 'public', safeUrl);
  }
  if (!fs.existsSync(filePath)) {
    filePath = path.join(rootDir, safeUrl);
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else if (fs.existsSync(path.join(distDir, 'index.html'))) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream(path.join(distDir, 'index.html')).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(`404 Not Found: ${safeUrl}`);
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(`🚀 Srujan RB Portfolio Server Running:`);
  console.log(`👉 http://localhost:${PORT}`);
  console.log(`👉 http://127.0.0.1:${PORT}`);
  console.log(`======================================================\n`);
});
