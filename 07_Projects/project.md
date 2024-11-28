# Projects related to DOM

## Project 1 : Color Switcher

```javascript

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>JavaScript Background Color Switcher</title>
    <style>
        html {
  margin: 0;
}

span {
  display: block;
}
.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

#grey {
  background: grey;
}

#white {
  background: white;
}
#blue {
  background: blue;
}
#yellow {
  background: yellow;
}
    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.linkedin.com/in/harshitraj1510/"
        >LinkedIn</a
      >
    </nav>
    <div class="canvas">
       <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a
      >
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script>
        const buttons = document.querySelectorAll('.button');
        const body = document.querySelector('body');

        buttons.forEach(function(button){
        console.log(button);
        button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    });
});
    </script>
  </body>
</html>


```

## Project 2 : BMI Calculator

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>BMI Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            width: 575px;
            padding: 40px;
            background-color: #ff0000b3;
            border-radius: 15px;
            box-shadow: 50px 50px 50px rgba(0.2, 0.4, 0.6, 0.3);
        }

        h1 {
            text-align: center;
            color: #f9f9f9;
            margin-bottom: 20px;
        }

        label {
            font-size: 18px;
            color: #f9f9f9;
        }

        #height,
        #weight {
            width: 100%;
            height: 25px;
            margin-top: 10px;
            border-radius: 10px;
            border: 1px solid #ccc;
            padding-left: 10px;
        }

        #weight-guide {
            margin-top: 25px;
            color: #f9f9f9;
        }

        #results {
            font-size: 35px;
            text-align: center;
            margin-top: 20px;
            color: #f9f9f9;
        }

        button {
            width: 100%;
            height: 35px;
            margin-top: 25px;
            background-color: #ffffff;
            border-radius: 15px;
            color: #413c3c;
            font-size: 20px;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #ff0000;
        }
        .linkedin-link {
  position: absolute;
  top: 5px;
  right: 10px;
  text-decoration: none;
}

.linkedin-logo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.linkedin-logo:hover {
  transform: scale(1.1);
}
    </style>
  </head>
  <body>
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>
            Overweight = Greater than 24.9
            <a href="https://www.linkedin.com/in/harshitraj1510/" target="_blank" class="linkedin-link">
                <img src="linkedin.png" alt="LinkedIn" style="width: 30px; height: 30px;">
              </a>
          </p>
        </div>
      </form>
    </div>
  </body>
  <script>
    const form = document.querySelector('form')

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        const results = document.querySelector('#results');
        
        if(height === '' || height < 0 || isNaN(height)){
            results.innerHTML = `Please give a valid height ${height}`
        } else if(weight === '' || weight < 0 || isNaN(weight)){
            results.innerHTML = `Please give a valid weight ${weight}`
        } else {
            const BMI = (weight / ((height * height )/10000)).toFixed(2)
                results.innerHTML = `<span> ${BMI} </span>`;
        }
    })
  </script>
</html>

```
## Project 3 : Digital Clock
```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Your Local Time</title>
    <style>
      body {
        background-color: #dbdd4a;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        font-size: 40px;
        font: oblique 20px "Consolas", sans-serif;
        background-color: rgb(0, 183, 255);
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 75px;
        box-shadow: 30px 30px 70px rgba(0, 0, 0, 0.4);
      }
    </style>
  </head>
  <body>
    <nav>
      <a href="https://www.linkedin.com/in/harshitraj1510/" target="_blank" class="linkedin-link">
        <img src="linkedin.png" alt="LinkedIn" style="width: 30px; height: 30px;">
      </a>
    </nav>
    <div class="center">
      <div id="clock"></div>
    </div>
    <script>
        const clock = document.getElementById('clock');
        
        setInterval(function (){
            let date = new Date();
            clock.innerHTML = date.toLocaleTimeString();
        }, 1000)
    </script>
  </body>
</html>

```
## Project 4 : Guessing a Number
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Number Guessing Game</title>
    <style>
       body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

#wrapper {
    width: 575px;
    padding: 40px;
    background-color: #ff2200c7;
    border-radius: 15px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
}

h1 {
    text-align: center;
    color: #f9f9f9;
    margin-bottom: 20px;
}

p {
    font-size: 16px;
    color: #f9f9f9;
    margin-bottom: 20px;
}

#guessField {
    width: 80%; 
    height: 40px; 
    margin: 20px auto; 
    border-radius: 10px;
    border: 1px solid #ccc;
    padding-left: 10px;
    text-align: center;
    display: block; 
    font-size: 16px; 
}

#subt {
    width: 80%; 
    height: 50px; 
    margin: 15px auto; 
    background-color: #ffffff;
    border-radius: 15px;
    color: #413c3c;
    font-size: 18px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: block; 
}

#subt:hover {
    background-color: #ff0000;
    color: #ffffff;
}

.resultParas {
    margin-top: 20px;
    color: #f9f9f9;
}

.lastResult,
.guesses,
.lowOrHi {
    margin-bottom: 10px;
}

button {
    width: 100%;
    height: 35px;
    margin-top: 25px;
    background-color: #ffffff;
    border-radius: 15px;
    color: #413c3c;
    font-size: 20px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #ff0000;
    color: #ffffff;
}

.linkedin-link {
    position: absolute;
    top: 5px;
    right: 10px;
    text-decoration: none;
}

.linkedin-logo {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: transform 0.3s ease;
}

.linkedin-logo:hover {
    transform: scale(1.1);
}



    </style>
</head>
<body style="background-color:#f0f0f0; color:#fff;">
  <nav>
    <a href="https://www.linkedin.com/in/harshitraj1510/" target="_blank" class="linkedin-link">
        <img src="linkedin.png" alt="LinkedIn" style="width: 30px; height: 30px;">
      </a>
  </nav>
    
    <div id="wrapper">
      <h1>Number Guessing Game</h1>
    <p>Try and guess a random number between 1 and 100.</p>
    <p>You have 10 attempts to guess the right number.</p>
    </br>
        <form class="form">
            <label for="guessField" id="guess">Guess a Number</label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" id="subt" value="Submit Guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p >Previous Guesses: <span class="guesses"></span></p>
            <p >Guesses Remaining: <span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
        </div>
    </div>
    <script>
        let randomNumber = parseInt(Math.random() * 100 + 1);
        const submit = document.querySelector('#subt')
        const userInput = document.querySelector('#guessField')
        const guessSlot = document.querySelector('.guesses')
        const remaining = document.querySelector('.lastResult')
        const lowOrHi = document.querySelector('.lowOrHi')
        const startOver = document.querySelector('.resultParas')

        const p = document.createElement('p')
        let prevGuess = []
        let numGuess = 1
        let playGame = true

        if(playGame){
            submit.addEventListener('click', function(e){
                e.preventDefault()
                const guess = parseInt(userInput.value)
                validateGuess(guess)
            })
        }

        function validateGuess(guess){
            if(isNaN(guess)){
                alert('Please enter a valid number')
            } else if (guess < 1){
                alert('Please enter a number greater than 1')
            } else if (guess > 100 ){
                alert('Please enter a number less than 100')
            } else {
                prevGuess.push(guess)
                if(numGuess == 11 ){
                    displayGuess(guess)
                    displayMsg(`Game Over. Random Number was ${randomNumber}`)
                    endGame()
                } else {
                    displayGuess(guess)
                    checkGuess(guess)
                }
            }
        }

        function checkGuess(guess){
            if(guess === randomNumber){
                displayMsg(`Congratulations! You guessed it right`)
                endGame()
            } else if(guess < randomNumber){
                displayMsg(`Number is too low`)
            } else if(guess > randomNumber){
                displayMsg(`Number is too high`)
            } 
        }

        function displayGuess(guess){
            userInput.value = ''
            guessSlot.innerHTML += `${guess} `
            numGuess++;
            remaining.innerHTML = `${11 - numGuess}`
        }

        function displayMsg(message){
            lowOrHi.innerHTML = `<h2>${message}</h2>`
        }

        function endGame(){
            userInput.value = ''
            userInput.setAttribute('disabled', '')
            p.classList.add('button')
            p.innerHTML = `<h2 id = 'newGame'> Start New Game </h2>`
            startOver.appendChild(p)
            playGame = false
            newGame();
        }

        function newGame(){
            const newGameButton = document.querySelector('#newGame')
            newGameButton.addEventListener('click', function(e){
                randomNumber = parseInt(Math.random() * 100 + 1);
                prevGuess = []
                numGuess = 1
                guessSlot.innerHTML = ''
                remaining.innerHTML = `${11 - numGuess}`
                userInput.removeAttribute('disabled')
                startOver.removeChild(p)

                playGame = true
            })
        }
    </script>
</body>
</html>
```

## Project 5 : Random Background Color Change
```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Unlimited Color</title>
    <style>
      body {
        background-color: #212121;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
        font-family: Arial, sans-serif;
        text-align: center;
      }

      button {
        padding: 12px 24px;
        background-color: #4caf50;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.3s;
      }

      button#stop {
        background-color: #f44336;
      }

      button:hover {
        background-color: #3e8e41;
      }

      button#stop:hover {
        background-color: #d32f2f;
      }

    </style>
  </head>
  <body style="background-color: #ffffff; color: #000000">
    <nav>
        <a href="https://www.linkedin.com/in/harshitraj1510/" target="_blank" class="linkedin-link">
          <img src="linkedin.png" alt="LinkedIn" style="width: 30px; height: 30px;">
        </a>
      </nav>
    <h1>Unlimited Colors Project</h1>
    <h2>Click 'Start' to change background color randomly</h2>

    <div class="button-container">
      <button id="start">Start</button>
      <button id="stop">Stop</button>
    </div>
    <script>
        const randomColor = function(){
            const hex = "0123456789ABCDEF"
            let color = "#"
            for(let i = 0; i<6; i++){
                color += hex[Math.floor(Math.random() * 16)];
            }
            return color;
        };
        let intervalId;
        const startChangingColor = function(){
            if(!intervalId){
                intervalId = setInterval(changeBgColor, 1000);
            }
            function changeBgColor(){
                document.body.style.backgroundColor = randomColor();
            }
        };
        const stopChangingColor = function(){
            clearInterval(intervalId)
            intervalId = null;
        };
        document.querySelector("#start").addEventListener('click', startChangingColor);
        document.querySelector("#stop").addEventListener('click', stopChangingColor);
    </script>
</body>
</html>
```

## Project 6 : KeyCode
```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>KeyCode</title>
    <style>
      body {
        margin: 0;
        font-family: cursive;
        background: #f5f5f5;
        background: radial-gradient(circle, #ff3300, #ffb175);
        color: #ffffff;
      }

      .project {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100vh;
        flex-direction: column;
      }

      .key {
        font-size: 32px;
        margin-bottom: 30px;
      }

      table {
        border-collapse: collapse;
        width: 95%;
        max-width: 900px;
        margin: auto;
        background-color: #1c1c1c;
        border-radius: 8px;
        overflow: hidden;
      }

      th,
      td {
        border: 1px solid #e7e7e7;
        padding: 20px;
        font-size: 20px;
        text-align: center;
      }

      th {
        background-color: #292929;
      }

      tr:nth-child(even) {
        background-color: #2a2a2a;
      }

      tr:hover {
        background-color: inherit;
      }

      .color {
        color: aliceblue;
        display: flex;
        flex-direction: column;
      }
    </style>
  </head>
  <body>
    <nav>
        <a href="https://www.linkedin.com/in/harshitraj1510/" target="_blank" class="linkedin-link">
          <img src="linkedin.png" alt="LinkedIn" style="width: 30px; height: 30px;">
        </a>
      </nav>
    <div class="project">
      <div class="key">Want to know the keycode of any key?
        <br>
        Press it to know them...
      </div>
      <div id="insert"></div>
    </div>
    <script>
      const insert = document.getElementById('insert')
      window.addEventListener('keydown', (e) => {
        insert.innerHTML = `
        <div class='color'>
          <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' '?'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
        `})
    </script>
</body>
</html>
```
