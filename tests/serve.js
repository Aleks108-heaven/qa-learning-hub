// Tiny static server for the tests. Sends no charset (like python -m http.server) so encoding bugs would show up.
const http = require('http'), fs = require('fs'), path = require('path');
const root = path.resolve(process.env.ROOT || path.join(__dirname, '..'));   // ROOT lets the artifact build be served instead
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2' };
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]); if (p === '/') p = '/index.html';
  const f = path.resolve(root, '.' + p);
  if (f !== root && !f.startsWith(root + path.sep)) { res.writeHead(403); return res.end('forbidden'); }   // no path traversal
  fs.readFile(f, (e, d) => {
    if (e) { res.writeHead(404); return res.end('not found'); }
    res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' });
    res.end(d);
  });
}).listen(8766, '127.0.0.1', () => console.log('serving ' + root + ' on http://localhost:8766'));
