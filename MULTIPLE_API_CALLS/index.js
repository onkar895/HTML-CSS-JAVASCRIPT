// Function to make API call and log data in console
function callAPI (url) {
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}

// Event listeners for button clicks
document.getElementById('btn1').addEventListener('click', function () {
  callAPI('https://jsonplaceholder.typicode.com/todos/1')
})

document.getElementById('btn2').addEventListener('click', function () {
  callAPI('https://api.instantwebtools.net/v1/airlines/1')
})

document.getElementById('btn3').addEventListener('click', function () {
  callAPI('https://api.instantwebtools.net/v1/passenger?page=0&size=10')
})

document.getElementById('btn4').addEventListener('click', function () {
  callAPI('https://randomuser.me/api/')
})

document.getElementById('btn5').addEventListener('click', function () {
  callAPI('https://fakestoreapi.com/products?limit=5')
})
