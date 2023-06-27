// Delete record
function deleteRecord (id) {
  var row = document.getElementById('data').rows[id]
  row.parentNode.removeChild(row)
}

// Open update modal
function openModal (id) {
  var row = document.getElementById('data').rows[id]
  var name = row.cells[1].innerHTML
  var email = row.cells[2].innerHTML
  var phone = row.cells[3].innerHTML
  var address = row.cells[4].innerHTML

  document.getElementById('updateName').value = name
  document.getElementById('updateEmail').value = email
  document.getElementById('updatePhone').value = phone
  document.getElementById('updateAddress').value = address

  document.getElementById('updateModal').style.display = 'block'
}

// Close update modal
function closeModal () {
  document.getElementById('updateModal').style.display = 'none'
}

// Save changes
function saveChanges () {
  var name = document.getElementById('updateName').value
  var email = document.getElementById('updateEmail').value
  var phone = document.getElementById('updatePhone').value
  var address = document.getElementById('updateAddress').value

  // Perform update logic here, e.g., update the data in the table

  closeModal()
}

// Search function
document.getElementById('searchInput').addEventListener('keyup', function () {
  var input, filter, table, tr, td, i, txtValue
  input = document.getElementById('searchInput')
  filter = input.value.toUpperCase()
  table = document.getElementById('data')
  tr = table.getElementsByTagName('tr')

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[1]; // Search based on name property (change index to search on different property)

    if (td) {
      txtValue = td.textContent || td.innerText
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = ''
      } else {
        tr[i].style.display = 'none'
      }
    }
  }
})
