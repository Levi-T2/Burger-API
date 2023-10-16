import { Burger } from "../models/Burger.js";

class FakeDb {
    constructor() {
        this.burgers = [
            new Burger({ name: 'Regular Burger', price: '8 rupees', toppings: 'cheese, mayo, pickle', isDouble: false, id: 1 }),
            new Burger({ name: 'Double Burger', price: '10 rupees', toppings: 'cheese, mayo, pickle', isDouble: true, id: 2 }),
            new Burger({ name: 'Cowboy Burger', price: '11 rupees', toppings: 'cheese, peppers, BBQ sauce', isDouble: true, id: 3 }),
        ]
    }
}

export const fakeDb = new FakeDb()