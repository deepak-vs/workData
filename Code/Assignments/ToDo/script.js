let list=document.getElementById('list')
let input=document.getElementById('input')
let btn=document.getElementById('btn')

const addTodo=()=>{
    let data=input.value;
    let listItem=document.createElement('li')
    listItem.innerHTML=data
    list.appendChild(listItem)
    input.value=''
}


btn.addEventListener('click',addTodo)
