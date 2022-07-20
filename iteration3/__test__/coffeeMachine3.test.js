import {moneyGiven} from "../money";
import {orders} from "../orders";
import {prices} from "../prices";

describe("Extra hot", () => {
    test("O:: => (Drink maker will make one orange juice)", () => {
        const instructions = moneyGiven(orders.orange, 0.7);
        expect(instructions).toBe('O::');
    });

    test("should return money missing for orange", () => {
        const instructions = moneyGiven(orders.orange, 0.5);
        expect(instructions).toBe(prices.orangePrice - 0.5 + 'money missing');
    });

    test("Ch:: => (Drink maker will make an extra hot coffee with no sugar)", () => {
        const instructions = moneyGiven(orders.coffee, 0.7, 0, true);
        expect(instructions).toBe('Ch::');
    });

    test("Hh:1:0 => (Drink maker will make an extra hot chocolate with one sugar and a stick)", () => {
        const instructions = moneyGiven(orders.chocolate, 0.7, 1, true);
        expect(instructions).toBe('Hh:1:0');
    });

    test("Th:2:0 (The drink maker will make an extra hot tea with two sugar and a stick)", () => {
        const instructions = moneyGiven(orders.tea, 0.7, 2, true);
        expect(instructions).toBe('Th:2:0');
    });

});