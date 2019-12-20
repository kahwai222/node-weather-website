console.log('Client side javascript file is loaded!');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

// messageOne.textContent = 'From JavaScript';

weatherForm.addEventListener('submit', e => {
  e.preventDefault();
  
  const location = search.value;
  
  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';
  
  fetch(`http://localhost:3000/weather?address=${location}`)
    .then(res => res.json())
    .then(({ error, location, forecast }) => {
      if (error) {
        messageOne.textContent = error;
      } else {
        messageOne.textContent = location;
        messageTwo.textContent = forecast;
      }
    });
});
