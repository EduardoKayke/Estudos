// criando um servidor
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)

// acesse no browser por: http://localhost:8080/