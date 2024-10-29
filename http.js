const http = require('http');
const url = require('url');
const qs = require('querystring');

http.createServer((req, res) => {
    // console.log(req.method);
    // console.log(req.url);
    // query string
        // let qry = url.parse(req.url, true).query;
        // console.log(qry.id, qry.title);

    // post as object (url-encoded)
        // let data = "";
        // req.on('data', (chunks) => {
        //     // console.log(chunks);
        //     data += chunks;
        // });
        // req.on('end', () => {
        //     // console.log(data);
        //     let obj = qs.parse(data);
        //     console.log(obj.title, obj.description);
        // });

    // post for JSON
    //     let data = "";
    //     req.on('data', (chunks) => {
    //         // console.log(chunks);
    //         data += chunks;
    //     });
    //     req.on('end', () => {
    //         // console.log(data);
    //         let obj = JSON.parse(data);
    //         console.log(obj.title, obj.description);
    //     });
    // res.write("Node Server started....");
    // res.end();
    const method=req.method;
    const url=req.url;
    res.write("get method")
    res.end()
}).listen(4000, () => console.log("Server has started in port: 4000"));