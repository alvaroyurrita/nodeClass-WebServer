console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form');
const searchBar = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  messageOne.textContent = "Fetching..."
  messageTwo.textContent = "";

  fetch(`http://localhost:3000/weather?address=${searchBar.value}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = (data.error)
        return;
      }
      messageOne.textContent = `Weather in ${data.location}`;
      messageTwo.textContent = `${data.temperature} Fahrenheit`;

    })
  })
})