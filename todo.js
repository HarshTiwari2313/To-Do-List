const addButton = document.querySelector("#addButton")



const addTask  = ()=>{
       let  input = document.querySelector('#inputTask').value
       if(input===""){
             alert("Enter Task")
       }
       else{
              const newlist= document.createElement('li')
              const ul = document.querySelector('#tasklist')
              newlist.innerHTML=input
       
              ul.appendChild(newlist)
              document.querySelector('#inputTask').value=""
              
              addDeleteButton(newlist)
       }
    
       
}

function addDeleteButton(newlist){
       const deleteBtn = document.createElement('button')
       deleteBtn.id="delBtn"
       deleteBtn.textContent = "Delete"
       newlist.appendChild(deleteBtn)
      
       deleteBtn.addEventListener('click', () => deleteTask(newlist))
}




const deleteTask= (newlist)=>{
               
          newlist.remove()

}







addButton.addEventListener('click',addTask);


