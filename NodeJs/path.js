const path=require("path");
const filepath="./docs/sample.txt";
// console.log(path.basename(filepath)); // sample.txt
// console.log(path.dirname(filepath)); // .docs
// console.log(path.extname(filepath)); // .txt
const pathformat=path.format({
    root:"/",
    dir:"docs/files",
    base:"sample.txt"
});
// console.log(pathformat);
console.log(path.parse(pathformat));