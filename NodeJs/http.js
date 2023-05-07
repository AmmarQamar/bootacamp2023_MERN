const http = require('http')
const students=[
    {
        name:"Ammar",
        course:"CS"
    },
    {
        name:"Sarmad",
        course:"Java"
    },
    {
        name:"Huzaifa",
        course:"SE"
    },
]
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // res.setHeader("Content-Type", "text/html");
    // res.end("<h1>Hello World</h1>");
    // For JSON
    res.setHeader("Content-Type", "Appication/json");
    res.end(JSON.stringify(students));
});

const PORT = 3000;
const host="127.0.0.1";
server.listen(PORT, host,()=>
    console.log(`Server is running at port ${PORT}`));
