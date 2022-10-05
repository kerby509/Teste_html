const http=require ('http')

const port = 8080;
const server =http.createServer((req, res) =>{
    if (req.url === "/home"){
        res.writeHead(200, { "content-Type": "text/html"});
        res.end("<h1>Home page, Testando node js</h1>");
    }

    if ( req.url === '/users'){
        const users= [
            {
                name: 'John Doe',
                email: 'john@doe.com',
            },
            {
                name: 'John Doe',
                email: 'john@doe.com',

            },
        ];

        res.writeHead(200, { "content-Type": "aplication/json"});
        res.end(JSON.stringify(users));

    }

});
server.listen(port, () => console.log(`Rodando na porta ${port}!!`));
