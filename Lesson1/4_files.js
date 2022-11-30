//module for reading/writing files: fs
const fs = require("fs");
//reading files
fs.readFile('./sampleFile.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})
//writing files
fs.writeFile('./sampleFile2.txt',"Hello world",()=>{
    console.log("File was written");
})
//directories: creating and deleting
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err + "folder is already present");
        }
        console.log('folder created');
    })
}else{
    fs.rmdir("./assets",(err)=>{
        if(err){
        console.log(err);
        }else{
            console.log("folder deleted");
        }
    })
}
//deleting a file
if(fs.existsSync('./sampleFile2.txt')){
    fs.unlink('./sampleFile2.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}
