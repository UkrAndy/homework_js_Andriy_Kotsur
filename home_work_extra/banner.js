// Задача. Розробити клас «Банер» 
class Banner {
    constructor(addressOnClick,time,...imgArr){
        this.imgArr = imgArr
        this.addressOnClick = addressOnClick
        this.time = time 
    }
    getRandomImg(){
        let randIndex = Math.floor(Math.random() * this.imgArr.length)
        return this.imgArr[randIndex]
    }
    render(containerId){
        let div = document.getElementById(containerId)
        this.a = document.createElement("a")
        this.a.setAttribute("href",this.addressOnClick)
        div.appendChild(this.a)
        this.img = document.createElement("img")
        this.img.src = this.getRandomImg()
        this.img.setAttribute("width",500)
        this.img.setAttribute("height",250)
        this.a.appendChild(this.img)
    }
    updateImg(containerId){
    //     this.update = setInterval(() => {
    //        this.rend = this.render(containerId)     
    //     }, this.time);
    //     this.update = null
    // }
    this.update = setTimeout(() => {
        this.rend = this.render(containerId)
    }, this.time);
    }
}
window.onload = function(){
    let array = ["https://www.ef.ru/sitecore/__/~/media/universal/stage/5x2/destinations/us/boston/boston.jpg",
    "https://img.pac.ru/resorts/213084/265579/big/F3DC57597F0001010CF095BFAFBD84A9.jpg",
    "https://media1.fdncms.com/sacurrent/imager/u/original/20775955/san-antonio-skyline-_cropped-for-cmc-web.jpg",
    "https://www.tripsavvy.com/thmb/m3xj8Q2HDku_Ci176w_mJIvAk6w=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-494607942-nyc-58f120903df78cd3fc2759ad.jpg"]
    let banner = new Banner("https://www.ridecj.com",3000,array)
    banner.render("container")
    banner.updateImg("container")
}