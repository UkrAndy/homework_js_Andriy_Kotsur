// Задача 1. Створити клас, що представляє прямокутник і має методи для знаходження площі, периметру та масштабування.
class Rectangle {
    constructor (a, b) {
        this.a = a
    Object.defineProperty (this, "b", {
        get: function () {
            return b
        },
        set: function (value) {
            if (value >= 0)
                b = value
            else
                throw new Error ("err")
        }
    })
    this.b = b
    }
    getSquare(){
        return this.a* this.b
    }
    getPerimetre(){
        return (this.a+this.b)*2
    }
}
window.onload = function () {
    let rect = new Rectangle (4,-2)
    document.write(rect.getSquare())
    document.write(rect.getPerimetre())
}

// Задача 2. Створити клас Product, що представляє товар на складі
class Product{
    constructor(name,count,price){
        this.name = name
        this.getCount = function(){
            return count
        }
        this.setCount = function (value){
            if (value=>0){
                count = value
                }
            else 
                throw new Error ('err')
        }
        this.count = count
        this.setCount = count
        this.getPrice = function(){
            return price
        }
        this.setPrice = function(){
            if(value=>0){
                price = value
                }
            else 
                throw new Error ('err')
        }
        this.price = price
        this.setPrice = price
    }
    addProduct(value){
        return this.count += value
    }
    reduceProduct(value){
        if(this.count-value>=0)
            return this.count-=value
        else
            throw new Error('must be more')
    }
    getValueProduct(value){
        return value*this.price
    }
    getDiscount(value){
        return this.getValueProduct()*(value/100)
    }
    getTotalPrice(){
        return this.getValueProduct()-this.getDiscount()
    }
    toString(){
        return `${this.name}+${this.count}+${this.price}$<br>`
    }
}
window.onload = function(){
    let res = new Product('toys',5,10)
    document.write(res.toString())
    res.addProduct(3)
    // res.reduceProduct(1)
    document.write(res.toString())
}