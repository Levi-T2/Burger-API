import { fakeDb } from "../db/FakeDb.js";
import { Burger } from "../models/Burger.js";
import { BadRequest } from "../utils/Errors.js";

class BurgerService {

    async getBurgers() {
        const burgers = await fakeDb.burgers
        return burgers
    }

    async getBurgersById(burgerId) {
        const foundBurger = await fakeDb.burgers.find(burger => burger.id == burgerId)
        if (!foundBurger) {
            throw new BadRequest(`The ID supplied to the API is not valid: ${burgerId}`)
        }
        return foundBurger
    }

    async createBurger(burgerData) {
        if (fakeDb.burgers.length == 0) {
            burgerData.id = 1
        } else {
            const burgerIds = fakeDb.burgers.map(burger => burger.id)
            const largestBurgerId = Math.max(...burgerIds)
            burgerData.id = largestBurgerId + 1
        }
        const newBurger = new Burger(burgerData)
        await fakeDb.burgers.push(burgerData)
        return newBurger
    }

    async destroyBurger(burgerId) {
        const burgerIndex = fakeDb.burgers.findIndex(burger => burger.id == burgerId)
        if (burgerIndex == -1) {
            throw new BadRequest(`The ID supplied to the API is not valid: ${burgerId}`)
        }
        await fakeDb.burgers.splice(burgerIndex, 1)

    }
}

export const burgerService = new BurgerService()