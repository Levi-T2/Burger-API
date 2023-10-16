
export class Burger {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.toppings = data.toppings
        this.isDouble = data.isDouble
        this.isCombo = data.isCombo || false
        this.price = data.price
        this.imgUrl = data.imgUrl || ''
    }
}
