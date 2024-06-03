const result = document.querySelector(".resultado") /* pq aqui tem q ser no começo? */
const yourScore = document.querySelector(".span1")
const machineScore = document.querySelector(".span2")

let yourScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}


const playMachine = () => {   /* ESSA FUNÇÃO TEM QUE RETORNAR O QUE A MÁQUINA ESCOLHEU */
    const choices = ["predra", "papel", "tesoura"]
    const randonNumber = Math.floor(Math.random() * 3)

    return choices[randonNumber]
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = "EMPATE"
    } else if ((human === "papel" && machine === "pedra") || (human === "pedra" && machine === "tesoura") ||
        (human === "tesoura" && machine === "papel")) {
        yourScoreNumber++
        yourScore.innerHTML = yourScoreNumber
        result.innerHTML = "VOCÊ GANHOU!!!"
    } else {
        machineScoreNumber ++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "VOCÊ PERDEU!"
    }
}