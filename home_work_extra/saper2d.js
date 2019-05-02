class Saper_2D {
    constructor(rowCount=5, colCount = 5, minesCount=4)
    {
        if (rowCount <= 0) 
            throw new Error("rows Count");
        if (colCount <= 0)
            throw new Error("cols Count");
        if (minesCount > rowCount && minesCount >colCount)
            throw new Error("minesCount > game field");

        Object.defineProperty(this, "rowCount", {
            value: rowCount
        });
        Object.defineProperty(this, "colCount", {
            value: colCount
        });
        Object.defineProperty(this, "minesCount",{
            value: minesCount
        })
    }
    //Повертає масив, де знаходяться міни
    getRandomMinesPositions()
    {                
        let positions = [];
        for (let i = 0; i < this.rowCount; i++) {
            positions.push(i);
            for (let j = 0; j < this.colCount; j++) {
                positions.push(j)                
            }
        }
        let minesPositions = [];
        for (let i = 0; i < this.minesCount; i++) {
            let randomIndex = Math.floor(Math.random() * positions.length);
            minesPositions.push(positions[randomIndex]);
            positions.splice(randomIndex, 1);
        }
        return minesPositions;
    }
    cellClick()
    {
        if (this.td.getAttribute("isMine")=="1") {
            this.tr.style.background = "red"
            this.td.style.background = "red";
        }
        else {
            this.tr.style.background = "green"
            this.td.style.background = "green";
        }
    }
    render(containersID)
    {
        let minesPositions = this.getRandomMinesPositions();
        let tbl = document.createElement("table");
        tbl.border = "2px solid black";
        for (let i = 0; i < this.rowCount; i++) {
            this.tr = document.createElement("tr");
            this.tr.innerText = "*";
            this.tr.setAttribute("isMine", (minesPositions.includes(i)) ? "1" : "0");
            this.tr.onclick = this.cellClick;
        for (let j = 0; j < this.colCount; j++) {
            this.td = document.createElement("td");
            this.td.innerText = "*";
            this.td.setAttribute("isMine", (minesPositions.includes(i)) ? "1" : "0");
            this.td.onclick = this.cellClick;
            this.tr.appendChild(this.td);
            }
        }
        tbl.appendChild(this.tr);
        document.getElementById(containersID).appendChild(tbl);
    }
}
//------------------------------
function startGame() {
    var saper = new Saper_2D();
    saper.render("forGame");
}