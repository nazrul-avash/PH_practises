console.log("Hello, World! This is a practice script.");
const task = document.getElementById("taskInput");
const btnAdd = document.getElementById("addTaskBtn");
const taskForm = document.getElementById("task-form");
btnAdd.addEventListener("click", function(){
    if (task.value.trim() !== "") {
         const taskDiv = document.createElement("div");
         taskDiv.className = "flex gap-4 bg-blue-400/50 py-1 px-2 justify-between mb-5 rounded-[3px] items-center";
         const taskName = document.createElement("h2");
         taskName.textContent = task.value;
         const deleteBtn = document.createElement("button");
         deleteBtn.textContent = "Delete";
         deleteBtn.className = "px-4 py-2 rounded-md border border-gray-800 bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-colors duration-200 w-[16%] text-center";
         taskDiv.appendChild(taskName);
         taskDiv.appendChild(deleteBtn);
         taskForm.appendChild(taskDiv);
         task.value = "";
         task.focus();
         
    }
   
});
taskForm.addEventListener("click", function(e) {
             if(e.target.tagName === "BUTTON" && e.target.textContent === "Delete") {
                e.target.closest("div").remove();
         }}); 

