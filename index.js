const fs = require('fs');
const path = require('path');
const http = require('http');
const { error } = require('console');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (error, content) => {
            if (error) {
                res.writeHead(500);
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content, 'utf-8');
            }
        });
    } else if (req.url === '/style.css') { 
        fs.readFile(path.join(__dirname, 'public', 'style.css'), (error, content) => { 
            if (error) {
                res.writeHead(500);
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(content, 'utf-8');
            }
        });
    }else if(req.url === '/about.html'){
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (error, content) =>{
            if(error){
                res.writeHead(500);
                res.end(error);
            }else{
                res.writeHead(200, { 'Content-type': 'text/html'});
                res.end(content, 'utf-8');
            }
        })
        
    }
    else if(req.url === '/contact-me.html'){
        fs.readFile(path.join(__dirname, 'public', 'contact-me.html'), (error, content) =>{
            if(error){
                res.writeHead(500);
                res.end(error);
            }else{
                res.writeHead(200, { 'Content-type': 'text/html'});
                res.end(content, 'utf-8');
            }
        })}
        else {
            fs.readFile(path.join(__dirname, 'public', '404.html'), (error, content) =>{
                if(error) console.log(error);
                else{
                    res.writeHead(200, {'Content-type': 'text/html'});
                    res.end(content, 'utf-8');
                }
            })
        
    }
});

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});
