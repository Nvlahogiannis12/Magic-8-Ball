// name inserter
let userName = prompt('Hello, who are you?')
userName ? document.getElementById('greeting').innerText = `Hello, ${userName}!`:
document.getElementById('greeting').innerText ='Hello!'

function shakeMagic8Ball(){
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let randomNumber = getRandomNumber(1, 8);
let eightBall;
let userQuestion = prompt('What is your question for the Magic 8 Ball')

  //output based on random number generator
  if (randomNumber == 1){
    console.log('It is certain')
eightBall = 'It is certain'
document.getElementById("response-image").src = 'imgs/Goddess_Hylia_statue_M8B.webp'
  }
  else if (randomNumber == 2) {
    console.log('It is decidedly so')
eightBall = 'Time has decided so'
document.getElementById("response-image").src = 'imgs/Decided-M8.png'
  }
  else if (randomNumber == 3) {
    console.log('Try again Later')
eightBall = 'I AM ERROR (try again later...)'
document.getElementById("response-image").src = 'imgs/I_am_Error-M8.png'
  }
  else if (randomNumber == 4) {
    console.log('Cannot predict now')
eightBall = ''
document.getElementById("response-image").src = ''
  }
  else if (randomNumber == 5) {
    console.log('Do not count on it')
eightBall = 'Dont count on it'
document.getElementById("response-image").src = 'imgs/Lonk.jpg'
  }
  else if (randomNumber == 6) {
    console.log('My sources say No')
eightBall = 'No'
document.getElementById("response-image").src = 'imgs/no-legend-of-zelda-M8B.gif'
  }
  else if (randomNumber == 7) {
    console.log('Outlook not so good')
eightBall = 'You will meet with a Terrible Fate'
document.getElementById("response-image").src = 'imgs/Terrible-Fate-8B.png'
  }
  else if (randomNumber == 8) {
    console.log('Signs point to yes')
    eightBall = 'Yes'
    document.getElementById("response-image").src = 'imgs/Yes-8B.gif'
  }

  
  console.log(eightBall)
  document.getElementById('response-text').innerText = `${userName} has asked the Deku Tree, ${userQuestion} The wise and Great Deku Tree has replied ${eightBall}`
}