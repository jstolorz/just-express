const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, 'Content-Type: text/html')
        const homePageHTML = fs.readFileSync('src/express101/node.html')
        res.write(homePageHTML)
        res.end()
    }else if( req.url ==='/pobrane.png' ) {
        res.writeHead(200, 'Content-Type: image/png')
        const image = fs.readFileSync('src/express101/pobrane.png')
        res.write(image)
        res.end()
    }
    else if(req.url === '/src/express101/css/style.css'){
        res.writeHead(200, 'Content-Type: text/css')
        const css = fs.readFileSync('src/express101/css/style.css')
        res.write(css)
        res.end()
    }else{
        res.writeHead(404, 'Content-Type: text/html')
        res.write(`
          <h1>Page Not Found!!</h1>
        `)
        res.end()
    }

})

server.listen(3000)
