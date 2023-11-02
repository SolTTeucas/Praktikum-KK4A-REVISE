//kalo const berarti ngga boleh dirubah, sama halnya dengan pi 3.14
    //kalo emang tidak rubah pakailah const
//let digunakan bila variable boleh dirubah
//var dulu dipakai buat membuat variable, sekarang tidak tidak apa apa(?)
const http = require('http');
const todos = [
{id: 1, text: 'Todo One'},
{id: 2, text: 'Todo Two'},
{id: 3, text: 'Todo Three'},
];

//kalo ada req atau res itu hanyalah variable, jika tidak dipakai berarti ga usah.OPTIONAL
server = http.createServer((req,res)=>{
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Powered-By', 'Node.js');

    res.writeHead(404, {
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js',
    });

    const data = JSON.stringify({
        success: true,
        error: 'Not Found',
        data: null,
    });

    res.end(data);
});
//default -> 127.0.0.1 or localhost

const port = 7000;
server.listen(port, () => {
    console.log(`udah running bro ${port}`);
});