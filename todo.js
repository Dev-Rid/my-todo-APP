window.addEventListener('load', () =>{
    // console.log(' i am here with you');
    const $ = document;

    const form = $.querySelector("#new-task-form")
    const input = $.querySelector("#new-task-input")
    const list_el = $.querySelector("#tasks")    


    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        
        // ||store the 'value of my input' into 'task' variable||
        const task = input.value;   
        
        // if (!task) {
        //     alert('i exist too')
        // } else {
        //     console.log("success");
        // }
        

        // ||creating every todo elements and styling them all||
        const task_el = $.createElement('div')
        task_el.classList.add('task')
        
        
        const task_content = $.createElement("div")
        task_content.classList.add("content")
        
        // task_content.innerHTML = task
        //  // console.log(task_content);

        const task_input = $.createElement("input")
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value = task;
        task_input.setAttribute("readonly", "readonly") 

        
        // // ||inserting JS created elements into one another||
        task_content.appendChild(task_input)
        task_el.appendChild(task_content)
        list_el.appendChild(task_el)    


        const task_action_el = $.createElement("div")
        task_action_el.classList.add("actions")


        // ||this creates todo edit button||
        const task_edit_btn = $.createElement("button")
        task_edit_btn.classList.add("edit")
        task_edit_btn.innerHTML = "Edit"
        

        // ||this creates todo delete button||
        const task_delete_btn = $.createElement("button")
        task_delete_btn.classList.add("delete")
        task_delete_btn.innerHTML = "Delete"


        task_action_el.appendChild(task_edit_btn)
        task_action_el.appendChild(task_delete_btn)


        task_el.appendChild(task_action_el)
        list_el.appendChild(task_el)
        input.value = ""



        task_edit_btn.addEventListener("click", () =>{    

            if (task_edit_btn.innerText == "Edit") {
                // console.log("editMe");
                task_input.removeAttribute("readonly")
                task_input.focus()
                task_edit_btn.innerHTML = "Save";
            } else{
                // console.log("saved");
                task_input.setAttribute("readonly", "readonly")
                task_edit_btn.innerText = "Edit"

            }
        })

    //     // ||delete session||
        task_delete_btn.addEventListener("click", () =>{
            list_el.removeChild(task_el)
        })
    })

})

