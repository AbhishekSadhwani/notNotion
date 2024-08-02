const tasks = document.querySelector(".tasks");
const form = document.querySelector(".add-task-form");
const clearBtn = document.querySelector(".clear");
const countMessage = document.querySelector(".message span")
const searchForm = document.querySelector(".search-form");


// to search a task and then only those task related to that searched term will be shown
function filterTask(term){
    Array.from(tasks.children).filter(item => {
        return !item.textContent.toLowerCase().includes(term);
    }).forEach(task => {
        task.classList.add("hidden");
    });

    Array.from(tasks.children).filter(item => {
        return item.textContent.toLowerCase().includes(term);
    }).forEach(task => {
        task.classList.remove("hidden");
    });
};


searchForm.addEventListener("keyup", (Event) => {
    let term = searchForm.task.value.trim().toLowerCase();
    filterTask(term);  //function to filter task

});

searchForm.addEventListener("click", (Event) => {
    if(Event.target.classList.contains("reset")){
        searchForm.reset();
        let term = searchForm.task.value.trim().toLowerCase();
        filterTask(term);
    }
})


// keeping the count of task
function taskCountMessage(){
    let taskCount = tasks.children.length;
    countMessage.textContent = `You have ${taskCount} pending task.`;
}
taskCountMessage();


// to add task in the list when add is clicked
form.addEventListener("submit",(Event) => {
    Event.preventDefault();
    const newTask = form.task.value.trim();
    if(newTask.length){
        tasks.innerHTML += `<li>
                                <span>${form.task.value}</span>
                                <i class="bi bi-trash-fill delete"></i>
                            </li>
                            `
        form.reset();
        taskCountMessage();
    }
});

// to remove task when clicked on delete
tasks.addEventListener("click", (Event) => {
    if(Event.target.classList.contains("delete")){
        Event.target.parentElement.remove();
        taskCountMessage();
    }
});

// to delete all task when clear is clicked
clearBtn.addEventListener("click", (Event) => {
    task.innerHTML = "";
    taskCountMessage();
});