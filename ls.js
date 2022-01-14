const fs = require('fs');

const listdir = fs.readdir('./', 'utf8', (err,files)=>{
    
        if(err){
            throw err
        }else{
            process.stdout.write(files.join('\n'))
            process.stdout.write('prompt> ');
        }   
})


// process.stdin.on('data', (data) =>{
//     const cmd = data.toString().trim();
//     process.stdout.write(fs.readdir());
//     process.stdout.write('\nprompt >');
// })

module.exports= listdir


