import {drinkMaker} from "../coffeeMachine";
import {orders} from "../orders";

describe("Making drinks", () => {

    it("T:1:0 => (Drink maker makes 1 tea with 1 sugar and a stick)", () => {
        expect(drinkMaker(orders.tea, 1)).toEqual('T:1:0');
    })

    it("H:: => (Drink maker makes 1 chocolate with no sugar - and therefore no stick)", () => {
        expect(drinkMaker(orders.chocolate, 0)).toEqual('H::');
    })

    it("C:2:0 => (Drink maker makes 1 coffee with 2 sugars and a stick)", () => {
        const instructions = drinkMaker(orders.coffee, 2)
        expect(instructions).toEqual('C:2:0');
    });

});


// const coffeeMachine = require('../coffeeMachine');
// const orders = require('../orders');

// // describe('drinkMaker', () => {
// //     it('Drink maker makes 1 tea with 1 sugar and a stick', () => {
// //         expect(coffeeMachine.drinkMaker('tea', 'sugar')).toEqual("T:1:0")
// //     });
// //     it('If order contain a sugar add a stick', () => {
// //         expect(coffeeMachine.drinkMaker('sugar')).toEqual("stick added")
// //     });
// //     it('Drink maker makes 1 chocolate with no sugar - and therefore no stick', () => {
// //         expect(coffeeMachine.drinkMaker('chocolate')).toEqual("H::")
// //     });
// //     it('Drink maker makes 1 coffee with 2 sugars and a stick', () => {
// //         expect(coffeeMachine.drinkMaker('coffe', 'sugar')).toEqual("C:2:0")
// //     });

// // });
