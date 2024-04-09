let set;

async function play() {
  var audio = new Audio('1.mp3');
  audio.play();
}

function playAlarm () {
  let hours1, minutes1, seconds1;
  let value1 = document.querySelector('#hours').value 
  hours1 = Number.parseInt(value1)
  let value2 = document.querySelector('#minutes').value 
  minutes1 = Number.parseInt(value2)
  let value3 = document.querySelector('#seconds').value 
  seconds1 = Number.parseInt(value3)
  document.querySelector('.display').innerHTML = `<p>Your Alarm will play at ${hours1}:${minutes1}:${seconds1}</p>
  <button onclick="stopAlarm() " class='button'>Delete</button>`

  
  set = setInterval (async()=>{
    let time = new Date()
    let hours2 = time.getHours()
    let minutes2 = time.getMinutes()
    let seconds2 = time.getSeconds()
    console.log('i am having fun')
    if (hours1 == hours2 && minutes1 == minutes2 && seconds1 == seconds2){
      await play();
      clearInterval(set)
    }
  }, 1000)
}
function stopAlarm() {
  clearInterval(set);
  document.querySelector('#hours').value = '';
  document.querySelector('#minutes').value = '';
  document.querySelector('#seconds').value = '';
  document.querySelector('.display').innerHTML = ''; 
}
document.querySelector('.button').onclick = playAlarm


