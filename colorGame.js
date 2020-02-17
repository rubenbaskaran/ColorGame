var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function ()
{
    numberOfSquares = 3;
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected")
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++)
    {
        if (colors[i])
        {
            squares[i].style.background = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function ()
{
    numberOfSquares = 6;
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected")
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++)
    {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function ()
{
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++)
{
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function ()
    {
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor)
        {
            message.textContent = "Correct!";
            resetButton.textContent = "Play again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else
        {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try again";
        }
    });
}

function generateRandomColors(number)
{
    var array = [];
    for (var i = 0; i < number; i++)
    {
        array[i] = randomColor();
    }

    return array;
}

function randomColor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function changeColors(color)
{
    for (var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}