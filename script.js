const choices = ["rock", "paper", "scissors"]
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")

const playerscoredisplay = document.getElementById("playerscroredisplay")
const computerscoredisplay = document.getElementById("computerscoredisplay")
let playerscore = 0
let computerscore = 0

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    let result = ""

    if (playerChoice === computerChoice) {
        result = "Its Draw"
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You Win ! " : "You Loose ! "
                break

            case "paper":
                result = (computerChoice === "rock") ? "You Win ! " : "You Loose ! "
                break

            case "scissors":
                result = (computerChoice === "paper") ? "You Win ! " : "You Loose ! "
                break
        }
    }

    playerDisplay.textContent = ` ${playerChoice}`
    computerDisplay.textContent = ` ${computerChoice}`
    resultDisplay.textContent = result

    resultDisplay.classList.remove("greenText", "redText")

    switch (result) {
        case "You Win ! ":
            resultDisplay.classList.add("greenText")
            playerscore++
            playerscoredisplay.textContent = playerscore
            break

        case "You Loose ! ":
            resultDisplay.classList.add("redText")
            computerscore++
            computerscoredisplay.textContent = computerscore
            break
    }

}