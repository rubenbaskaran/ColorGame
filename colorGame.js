var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons()
{
    // Initialize mode buttons with event handlers for setting game mode
    for (var i = 0; i < modeButtons.length; i++)
    {
        modeButtons[i].addEventListener("click", function ()
        {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
            reset();
        });
    }
}

function setupSquares()
{
    // Initialize squares with event handlers for processing guesses
    for (var i = 0; i < squares.length; i++)
    {
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
                message.textContent = "Try again!";
            }
        });
    }
}

function reset()
{
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    message.textContent = "";
    resetButton.textContent = "New Colors"

    for (var i = 0; i < squares.length; i++)
    {
        if (colors[i])
        {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }

    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function ()
{
    reset();
});

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