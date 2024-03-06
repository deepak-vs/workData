// let prompt=require("prompt-sync")();


// const createdBy="Deepak";
// let taskIndex=1;
// let taskArray=[];

// const addTasks=(numberOfTasks)=>{
//         for(let taskIndex=1;taskIndex<=numberOfTasks;taskIndex++){
//             console.log(`Add Your ${taskIndex} Task :: `)
//             let taskName=prompt("Enter Task Name :: ")
//             addTask(taskName)
//     }
// }

// const addTask=(taskName)=>{
//     let timeStamp=new Date().getTime();

//         let Task = {
//             taskId: taskIndex,
//             taskName: taskName,
//             isComplete: false,
//             meta: {
//                 creationTimestamp: timeStamp,
//                 completionTimestamp: "",
//                 createdBy: createdBy,
//                 completedBy: "",
//             }
//         }
//     taskArray.push(Task);
//     taskIndex++;

//     setTimeout(()=>{
//         console.log(`${taskName} is Added Successfully !`)
//     },2000)
// }

// const completeTask=(taskName,completedBy)=>{
//     let task=taskArray.find((task)=>{
//         return task.taskName===taskName;
//     })
//     if(task===undefined){
//          console.log("Task not found !")
//          return;
//     }
//     task.isComplete=true;
//     task.meta.completionTimestamp=new Date().getTime();
//     task.meta.completedBy=completedBy;
// }

// const displayRemainingTasks=()=>{
//     let remainingTask=taskArray.filter((task)=>{
//         return !task.isComplete
//     })
//     if(remainingTask.length!==0){
//         remainingTask.forEach(task=>console.log(task))
//     }
//     else{
//         console.log("No Remaining Task Found !")
//     }
    
// }
// const feature=()=>{
//     setInterval(()=>{
//         displayRemainingTasks();
//     },120000)
// }


// addTasks(2);
// completeTask("task2","User");
// displayRemainingTasks();

// feature();


function check(){
    while(1){
        console.log("acbsdh")
        break;
    }
}

check();