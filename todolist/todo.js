
let todo = prompt("What you want to do?")
let todoList =[]
while(todo !== 'quit')
{
    if (todo == 'neew')
    {
        let now = prompt("Enter the todo to be added")
        console.log(`The todo is addef  ${now}`)
        todoList.push(now);
        console.log(todoList)
        todo = prompt("What you want to do?")
       
    }
    else if (todo == 'list')
    
    {
        console.log(todoList)
        todo = prompt("What you want to do?")
        
    }
    else if(todo== 'delte')
    {
        let del = parseInt(prompt("Enter the index of hte todo"))
        let index = todoList.pop(del)
        console.log(`The todo is deleted  ${index}`)
        todo = prompt("What you want to do?")
        
    }
    todo = prompt("What you want to do?")
}
    console.log("Sory you quitted")

