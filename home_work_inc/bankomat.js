class TBankomat{
    constructor(bill5Grn,bill50Grn,bill200Grn){
        this.bill5Grn = bill5Grn
        this.bill50Grn = bill50Grn
        this.bill200Grn = bill200Grn
    }
    getMinAmount(){
        if(this.bill5Grn<1)
            return this.bill50Grn*50/this.bill50Grn
        else if(this.bill50Grn<1)
            return this.bill200Grn*200/this.bill200Grn
        else
            return this.bill5Grn*5/this.bill5Grn
    }
    getMaxAmount(){
        return (this.bill5Grn*5)+(this.bill50Grn*50)+(this.bill200Grn*200)
    }
    getTotalAmount(){
        let total = this.getMaxAmount()
        return total
    }
    getWidthdraw(value){
        if (value<this.total||value>this.total) {
            throw new Erro("must be cash in ATM")
        }
    }
}