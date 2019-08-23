const fs = require('fs');

const addTask = function(name,description){
    const tasks = loadAllTasks(); 
    
    const duplicatedTask = tasks.find(function(tasks){
        return tasks.name === name;
    });
   
    if(!duplicatedTask){
        const newTask = {
            name,
            description
        } 
        tasks.push(newTask)
        console.log(tasks);
        saveTask(tasks);
    }else{
        console.log('error, duplicado');
    }

}

const saveTask = function(tasks){
    const tasksJSON = JSON.stringify(tasks);
    fs.writeFileSync('tasks.json', tasksJSON);
}

const loadAllTasks = function(){
    try {
        const taskBuffer = fs.readFileSync('tasks.json');
        return JSON.parse(taskBuffer.toString());
    } catch (error) {
        return [];
    }
}

const removeTask = function(name){
    const tasks = loadAllTasks();
    const tasksRight = tasks.filter(function(task){
        return task.name !== name;
    });
    saveTask(tasksRight);
    console.log(`REMOVIDO: ${name}`);
}

module.exports = {
    addTask:addTask,
    removeTask:removeTask
};