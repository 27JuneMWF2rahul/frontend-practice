const notesContainer =  document.querySelector(".notes-container");
const createBtn =  document.querySelector(".btn");
const notes =  document.querySelector(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes()
function updateStorage(){
    localStorage.setItem("notes" , notesContainer.innerText);
}
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("P");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "img/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})