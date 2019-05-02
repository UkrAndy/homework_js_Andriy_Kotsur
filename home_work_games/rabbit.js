class Rabbit{
    constructor(rabbitPosition,cellsCount=10,bulletsCount=5,health=10){
        if(rabbitPosition<1 || rabbitPosition>cellsCount)
            throw new Error("err")
        if(cellsCount<=0)
            throw new Error("err")
        if(bulletsCount<=0 && health<=0)
            throw new Eroor("this is end of the game")
        Object.defineProperty(this,"rabbitPosition",{
            value: rabbitPosition
        })
        Object.defineProperty(this,"cellsCount",{
            value: cellsCount
        })
        Object.defineProperty(this,"bulletsCount",{
            value: bulletsCount
        })
        Object.defineProperty(this,"rabbitPosition",{
            value: health
        })
    }
    getRabbitPosition(){
        let position = Math.floor(Math.random()*this.cellsCount.length)
        return this.cellsCount[position]
    }
    btnClick(){
        if()
    }
    render(containerId){
        let div = document.getElementById("containerId")
        this.rabbit = document.createElement("img")
        this.rabbit.src = "https://www.freeiconspng.com/uploads/rabbit-png-clip-art-27.png"
        this.rabbit.setAttribute("width",250)
        div.apppendChild("rabbit")
        let label = document.createElement("label")
        label.innerText = "Enter the shoot position:"
        this.shootPosition = document.createElement("input")
        this.shootPosition.type = "number"

    }
}