console.log(document.getElementById("navbar"));
const sectiontodo = document.querySelector(".section-signup").classList;
sectiontodo.add('bg-dark');
sectiontodo.remove('signupsec');
const ans = sectiontodo.contains("signupsec");
console.log(ans);
sectiontodo.toggle('bg-dark');

// todolist.innerHTML += "<li>New Todo </li>";
// todolist.innerHTML += "<li>New Todo </li>";

const todolist = document.querySelector(".todo-list");
// const newtodoItem = document.createElement("li");
// // const newtodoItemText = document.createTextNode("Teach Students");
// newtodoItem.textContent = "Teach Students";
// // newtodoItem.appendChild(newtodoItemText);
// console.log(newtodoItem);

// todolist.append(newtodoItem)
// todolist.prepend(newtodoItem)
// todolist.before(newtodoItem);
// todolist.after(newtodoItem);
// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1);

// Element.insertAdjacentHTML(where,html)
// beforebegin
// afterbegin   
// beforeend
// afterend

// todolist.insertAdjacentHTML("afterbegin", "<li>Teach Students</li>");


// how to get dimensions of element

// const sectiontodolist = document.querySelector(".section-todo");
// const info = sectiontodolist.getBoundingClientRect();
// console.log(info);


//intro to events

//click
const btn = document.querySelector('.btn-headline');
// btn.onclick = function () {
//     console.log("you clicked me");
// }
// console.dir(btn);

//method --------add event listener
btn.addEventListener("click", function () {
    console.log("you clicked");
    console.log(this);
})

// normal case me this ki value button hogi but arrow function ke case me window object hoga



// event Object.............

let arr = ["https://wallpapercave.com/wp/wp7142645.jpg"];
arr.push("https://wallpapercave.com/wp/wp5555377.jpg");
arr.push("https://wallpapercave.com/wp/wp5734563.jpg");
arr.push("https://wallpapercave.com/uwp/uwp3008684.jpeg");
arr.push("https://wallpapercave.com/wp/wp5815272.jpg");
arr.push("back.jpg");

// console.log(arr);

let change = document.querySelector(".change");
change.addEventListener("click", function () {
    let randomint = Math.floor(Math.random() * 6);
    document.body.style.backgroundImage = "url(" + arr[randomint] + ")";
});


//events

//keypress
//mouseover
//event bubbling if you click on child parrent click also occurs
//


// event delegation........
const todoFormsub = document.querySelector(".myform");
const todoinput = document.querySelector(".myform input[type='text']");
todoFormsub.addEventListener("submit", (e) => {
    e.preventDefault();
    const newtodotext = todoinput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
    <span class="text">${newtodotext}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;
    newLi.innerHTML = newLiInnerHtml;
    todolist.append(newLi);

    todoinput.value = "";
})

todolist.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        const remtext = e.target.parentNode.parentNode;
        // console.log(remtext);
        remtext.remove();
    }
    if (e.target.classList.contains("done")) {
        const lispan = e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration = "line-through";

    }
    console.log(e.target.classList);
})