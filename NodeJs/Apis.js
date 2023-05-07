const http=require('http');
const url=require('url');
/**
 * GET , POST
 * PUT => UPDATE
 * PATCH => PARTICULAR PROPERTY UPDATE
 * DELETE
 */

const products=require('./data.json')
const server=http.createServer((req,res)=>{
    // console.log(req.url)
    const parsedUrl=url.parse(req.url);
    const urlPath=parsedUrl.path;
    // console.log(urlPath);

    //  console.log(parsedUrl)
    //      GET
    if(req.method=="GET")
    {
     if(urlPath=="/api/products"){
        // console.log(products);
        res.writeHead(200,{"Content-Type":"Application/json"});
        res.end(JSON.stringify(products));
     }

    }
});

const PORT=3003;
const host="localhost"
server.listen(PORT,"localhost",()=>{
    console.log(`App is running on http://${host}:${PORT}`)
})