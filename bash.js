const pwd = require('./pwd.js')
const ls = require('./ls.js')
process.stdout.write('prompt >'); 


process.stdin.on('data', (data) =>{             //I'm confused but we should also change variable name for this function
    const cmd = data.toString().trim();
    if(cmd==='ls'){
        ls.listdir()
    }else{
        throw('err')
    }
})


