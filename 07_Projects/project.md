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
