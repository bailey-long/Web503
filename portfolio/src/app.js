//Assign the element obtained to const addBtn creating a button
const addBtn = document.getElementById('add')

// pares the json file from the clients local storage and store it into the notes variable
const notes = JSON.parse(localStorage.getItem('notes'))

//if notes returns true (notes exists)
if(notes) {
  /*run loop for each note created to run the addNewNote function with the note as the parameter 
  adding the note to html*/
  notes.forEach(note => addNewNote(note))
}
//Click event listener
//register an event listener "Click" to run function addNewNote
addBtn.addEventListener('click', ()=> addNewNote())


function addNewNote(text= '') {
  //assign and create div "note"  
  const note = document.createElement('div')
  // Publishes note to to text area placeholder.
  note.classList.add('note')
  // Defines and draws edit button in note. :^)
  note.innerHTML = `
    <div class="actions">
      <!-- create an edit button, with an icon from fontawesome. -->
      <button class="edit">
        <i class="fas fa-edit"></i>
      </button>
        
      <!-- create a delete button, with an icon from fontawesome. -->
      <button class="delete">
        <i class="fas fa-trash-alt"></i>
      </button>
      
    </div>
        <!-- Create placeholder for note. -->
    <div class="main${text ? "" : "hidden"}"></div>
        <!-- Creates a textarea class to store the text of the new note -->
    <textarea class="${text ? "hidden" : ""}"></textarea>
  `
  /* querySelector returns the first element in the document with the specified selector. 
      selector can be any valid css property */
  //returns the first instance of ".edit" element from the html and assigns to editBtn, labour provided by Bailey
  const editBtn = note.querySelector('.edit')
  const deleteBtn = note.querySelector('.delete')
  // returns the first element that matches ".main" and adds to main variable
  const main = note.querySelector('.main')
  // Add query selector to retrieve  first element of .textarea from note
  const textArea = note.querySelector('textarea')
  //Function to remove the note element
  deleteBtn.addEventListener('click', () => {
    note.remove()

    updateNotes()
  })
  // Function to edit note
  editBtn.addEventListener('click', () => {
    // .toggle shows or hides a class attribute on the element
    main.classList.toggle('hidden')
    // .toggle shows or hides a class attribute on the element
    textArea.classList.toggle('hidden')
  })
  // Add event listener to the textarea
  textArea.addEventListener('input', (e) => {
    const { value } = e.target //Get the value of the text area as an object ( {} acts as newObject() method)

    main.innerHTML = marked(value) //Set the main text to the value of the textarea
    updateNotes()
  })

  document.body.appendChild(note) // Add the note element to the body
}

// function to update notes and save in a json file on local storage
function updateNotes() {
  const notesText = document.querySelectorAll('textarea') // get all nodes that match the selector 'textarea'

  const notes = [] // define an empty array

  notesText.forEach(note => notes.push(note.value)) // iterate over all notes, and push their content/values to the notes array
  
  localStorage.setItem('notes', JSON.stringify(notes)) // create a json object and save it in the users local storage
}