//Getting all required elements
const InputField = document.querySelector(".input-field textarea"),
 todoLists= document.querySelector(".todoLists");




//add task while we put value in text area and press enter
InputField.addEventListener("keyup", (e) => {
    let InputVal = InputField.value.trim(); //trim fuction removes space of front and back of the inputed value

    //if enter button is clicked and inputed value length is greated than 0.
    if(e.key === "Enter" && InputVal.length > 0){
        let litag = ` <li class="list" onclick="handleStatus(this)">
              <input type="checkbox" />
              <span class="task">${InputVal}.</span>
              <i id = "pencil" class="uil uil-pen"></i>
              <i class="uil uil-trash" onclick="deleteTask(this)"></i>
              </li>`;

        todoLists.insertAdjacentHTML("beforeend", litag); //inserting li tag inside
        InputField.value = ""; //removing value from input field
    }
});

//checking and unchecking the chekbox while we click on the task
function handleStatus(e) {
    const checkbox = e.querySelector("input"); //getting checkbox
    checkbox.checked = checkbox.checked ? false : true;
    
}

//deleting tasks while we click on the the delete icon.
function deleteTask(e) {
    e.parentElement.remove(); //getting parent element and remove it

}

