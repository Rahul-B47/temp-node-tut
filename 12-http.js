const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    } else if (req.url === '/about') {
        res.end('Here is our short history');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' }); // Optional, good for clarity
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for.</p>
            <a href="/">Back home</a>
        `);
    }
});

server.listen(5003, () => {
    console.log('Server running at http://localhost:5003');
});
