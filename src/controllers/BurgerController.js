import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js"


export class BurgerController extends BaseController {
    constructor() {
        super('api/burgers');
        this.router
            .get('', this.getBurgers)
            .get('/:burgerId', this.getBurgersById)
            .post('', this.createBurger)
            .delete('/:burgerId', this.destroyBurger)
    }

    async getBurgers(request, response, next) {
        try {
            const burgers = await burgerService.getBurgers()
            return response.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async getBurgersById(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            const burger = await burgerService.getBurgersById(burgerId)
            return response.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async createBurger(request, response, next) {
        try {
            const burgerData = request.body
            const burger = await burgerService.createBurger(burgerData)
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async destroyBurger(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            await burgerService.destroyBurger(burgerId)
            response.send('burger was destroyed from API')
        } catch (error) {
            next(error)
        }
    }

}
