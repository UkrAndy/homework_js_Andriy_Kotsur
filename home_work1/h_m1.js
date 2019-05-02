class RandomNumber {
    constructor(ranNum = 10) {
        this.ranNum = ranNum
    }
    getRandomNumber() {
        return Math.floor(Math.random() * this.ranNum)
    }
    toString() {
        return `Random number: ${this.ranNum}`
    }
}

class GameGuessNumber {
    constructor(maxNum) {
        this.player1Score = 0
        this.player2Score = 0
        this.newRandNum = new RandomNumber(maxNum)
    }
    getNumberEven() {
        this.currentRandomNumber = this.newRandNum.getRandomNumber()
        let pl2Num = parseInt(this.inpPlayerNumber2.value)
        let pl1Num = parseInt(this.inpPlayerNumber1.value)

        if (pl1Num == pl2Num && pl2Num == this.currentRandomNumber) {
            this.player1Score++
            this.player2Score++
        } else if (Math.abs(pl1Num - this.currentRandomNumber) < Math.abs(pl2Num - this
                .currentRandomNumber))
            this.player1Score++
        else
            this.player2Score++
        this.inpPlayerScore1.value = this.player1Score
        this.inpPlayerScore2.value = this.player2Score
        this.inpRandomNumber.value = this.currentRandomNumber
    }
    render(containerId) {
        let div = document.getElementById(containerId)

        let label1 = document.createElement('label')
        label1.innerText = "Player 1 score:     "
        this.inpPlayerScore1 = document.createElement('input')
        this.inpPlayerScore1.type = 'text'
        this.inpPlayerScore1.value = this.player1Score
        label1.appendChild(this.inpPlayerScore1)
        div.appendChild(label1)

        let label2 = document.createElement('label')
        label2.innerText = "     Player 2 score:     "
        this.inpPlayerScore2 = document.createElement('input')
        this.inpPlayerScore2.type = 'text'
        this.inpPlayerScore2.value = this.player2Score
        label2.appendChild(this.inpPlayerScore2)
        div.appendChild(label2)

        let label3 = document.createElement('label')
        label3.innerHTML = "<br>Player 1 number:     "
        this.inpPlayerNumber1 = document.createElement('input')
        this.inpPlayerNumber1.type = 'number'
        this.player1Number = parseInt(this.inpPlayerNumber1.value)
        label3.appendChild(this.inpPlayerNumber1)
        div.appendChild(label3)

        let label4 = document.createElement('label')
        label4.innerText = "     Player 2 number:     "
        this.inpPlayerNumber2 = document.createElement('input')
        this.inpPlayerNumber2.type = 'number'
        this.player2Number = parseInt(this.inpPlayerNumber2.value)
        label4.appendChild(this.inpPlayerNumber2)
        div.appendChild(label4)

        let br1 = document.createElement("br")
        div.appendChild(br1)

        const btn = document.createElement('button')
        btn.innerText = 'Check'
        btn.onclick = this.getNumberEven.bind(this)
        div.appendChild(btn)

        let label5 = document.createElement('label')
        label5.innerText = "     Random number:     "
        this.inpRandomNumber = document.createElement('input')
        this.inpRandomNumber.type = 'number'
        this.inpRandomNumber.value = this.currentRandomNumber
        label5.appendChild(this.inpRandomNumber)
        div.appendChild(label5)
    }
}

window.onload = function () {
    let game = new GameGuessNumber(5)
    game.render('container')
}