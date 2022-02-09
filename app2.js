console.log('Welcome to E-notes')
showNotes()
// if someone clicks the addnote the local storage must update the value.
let addbtn = document.getElementById('addbtn')
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtxt")
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    }
    else { notesObj = JSON.parse(notes) }
    notesObj.push(addtxt.value)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addtxt.value = ""
    console.log(notesObj)
    showNotes();
})
// this part is for showing the notes in notes section
function showNotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    }
    else { notesObj = JSON.parse(notes) }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="card" style="width: 18rem;">
       
        <div class="card-body">
          <h5 class="card-title">Notes ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">delete</button>
        </div>
      </div>
     
     
     `
    });
    let noteselm = document.getElementById("notes")
    if (notesObj.length != 0) {
        noteselm.innerHTML = html;

    }
    else { noteselm.innerText = "Nothing to show here,to add a note click the add note btn above!" }

}
// lets delete what i wanna delete
function deleteNote(index) {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    }
    else { notesObj = JSON.parse(notes) }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj))
showNotes()
}
// searching text
let searchtxt=document.getElementById("searchtxt")
searchtxt.addEventListener("input",function(){})

