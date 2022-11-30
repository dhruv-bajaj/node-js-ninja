//Streams: allow us to use data before it has finish loading
// small packages called buffer can transer data little by little. Similar to netflix

const fs=require('fs');

const readStream = fs.createReadStream('./sampleFile.txt',{encoding: 'utf-8'});

//readStream.on is an event listener. When we get a chunk/buffer of data we are going to fire the callback
//function
readStream.on('data',(chunk)=>{
    console.log("-----New Chunk---------");
    console.log(chunk.toString());
})

const writeStream = fs.createWriteStream('./sampleFile3.txt',{encoding: 'utf-8'});

//readStream.on is an event listener. When we get a chunk/buffer of data we are going to fire the callback
//function
// readStream.on('data',(chunk)=>{
//     console.log("-----New Chunk---------");
//     console.log(chunk.toString());
//     writeStream.write("\n New chunk \n");
//     writeStream.write(chunk);
// })

//piping
readStream.pipe(writeStream);