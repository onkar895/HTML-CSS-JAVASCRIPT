// Get the modal element
const modal = document.getElementById('myModal')

// Get the button that opens the modal
const openModalBtn = document.getElementById('openModalBtn')

// Get the close button inside the modal
const closeBtn = document.getElementsByClassName('close')[0]

// Function to open the modal
function openModal () {
  modal.style.display = 'block'
}

// Function to close the modal
function closeModal () {
  modal.style.display = 'none'
}

// Function to close the modal if clicked outside the modal data area
function outsideClick (event) {
  if (event.target === modal) {
    closeModal()
  }
}

// Event listener for button click to open the modal
openModalBtn.addEventListener('click', openModal)

// Event listener for close button click to close the modal
closeBtn.addEventListener('click', closeModal)

// Event listener for click outside the modal data area to close the modal
window.addEventListener('click', outsideClick)
