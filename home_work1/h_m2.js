class CreditCalc {
  constructor() {
    this.perCent = 0;
    this.monthCount = 0;
    this.creditAmount = 0;
    this.monthPayment = 0;
    this.overDraft = 0;
  }
  getMonthPayment() {
    this.monthPayment =
      (parseInt(this.input3.value) *
        (1 + parseInt(this.input1.value) / 100)) /
      parseInt(this.input2.value);
    this.input4.value = this.monthPayment;
  }
  getOverdraftAmount(){
    this.overDraft = parseInt(this.input3.value) * parseInt(this.input1.value / 100);
    this.input5.value = this.overDraft
    this.monP = this.getMonthPayment() 
  }
//   btnClick(){
//       let monthPay = this.monthP.getMonthPayment()
//       let overPay = this.overP.getOverdraftAmount()

//   }
  render(containerId) {
    let div = document.getElementById(containerId);

    let label1 = document.createElement("label");
    label1.innerText = "Total per cent:";
    this.input1 = document.createElement("input");
    this.input1.type = "number";
    this.perCent = parseInt(this.input1.value);
    label1.appendChild(this.input1);
    div.appendChild(label1);
    let br1 = document.createElement("br");
    div.appendChild(br1);

    let label2 = document.createElement("label");
    label2.innerText = "Total month count:";
    this.input2 = document.createElement("input");
    this.input2.type = "number";
    this.monthCount = parseInt(this.input2.value);
    label2.appendChild(this.input2);
    div.appendChild(label2);
    let br2 = document.createElement("br");
    div.appendChild(br2);

    let label3 = document.createElement("label");
    label3.innerText = "Credit amount:";
    this.input3 = document.createElement("input");
    this.input3.type = "number";
    this.creditAmount = parseInt(this.input3.value);
    label3.appendChild(this.input3);
    div.appendChild(label3);
    let br3 = document.createElement("br");
    div.appendChild(br3);

    let label4 = document.createElement("label");
    label4.innerText = "Month payment:";
    this.input4 = document.createElement("input");
    this.input4.type = "text";
    this.input4.value = this.monthPayment;
    label4.appendChild(this.input4);
    div.appendChild(label4);
    let br4 = document.createElement("br");
    div.appendChild(br4);

    let label5 = document.createElement("label");
    label5.innerText = "Overpayment:";
    this.input5 = document.createElement("input");
    this.input5.type = "text";
    this.input5.value = this.overDraft;
    label5.appendChild(this.input5);
    div.appendChild(label5);
    let br5 = document.createElement("br");
    div.appendChild(br5);

    let btn = document.createElement("button");
    btn.innerText = "Calculate your credit";
    btn.onclick = this.getOverdraftAmount.bind(this);
    div.appendChild(btn);
  }
}

window.onload = function() {
  let game = new CreditCalc();
  game.render("container");
};
