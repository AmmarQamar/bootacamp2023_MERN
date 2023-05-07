const fs=require('fs');
//      Read files names
// fs.readdir("./",function(err,files){
//     if(err) console.log(err);
//     console.log(files);
// });
// ------------------- DIRECTORY -----------------------------------


//      Make a New dir
// fs.mkdir('./docs/data.js',(err)=>console.log(err));

//      Change or Rename directory
// fs.rename("./docs/data","./docs/newname",(err)=>
// console.log(err));

//      Remove dir
// fs.rmdir("./docs/newname",{recursive:true},(err)=>console.log(err));

// ------------------- FILE -----------------------------------

//      write a New Data in File  
// const fileContent="This is file content"
// fs.writeFile("./docs/sample2.txt",fileContent,(err)=>{
//     if(err) console.log(err);
//     console.log("content written")
// });

//         Add more data on existing file 
// const fileAppend="This is Appended content"
// fs.appendFile("./docs/sample2.txt",fileAppend,(err)=>{
//     if(err) console.log(err);
//     console.log("content written")
// });

//       Rename file name
// fs.rename("./docs/sample.txt","./docs/RenameSample.txt",(err)=>{
//     console.log(err)
// })
