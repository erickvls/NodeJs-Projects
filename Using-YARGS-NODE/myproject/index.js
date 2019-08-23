
const yargs = require('yargs');
const task = require('./task');


yargs.command({
    command :'add',
    describe: 'Adiciona Task',
    builder:{
        name:{
            describe: 'Nome da Task',
            demandOption: true,
            type:'string'
        },
        description:{
            describe:'Task description',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        task.addTask(argv.name,argv.description);
    }
})

yargs.command({
    command: 'remove',
    describe : 'Remove Task',
    builder:{
        name:{
            describe: 'Nome da Task',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
        task.removeTask(argv.name);
    }
})

yargs.parse();