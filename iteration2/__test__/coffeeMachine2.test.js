import {moneyGiven} from "../money";
import {orders} from "../orders";
import {prices} from "../prices";

describe("Going into business", () => {

    it('should return correct for coffee', () => {
        const instructions = moneyGiven(orders.coffee, 0.7);
        expect(instructions).toBe('accepted');
    });

    it('should return money missing for coffee', () => {
        const instructions = moneyGiven(orders.coffee, 0.5);
        expect(instructions).toBe(prices.coffeePrice - 0.5 + 'money missing');
    });

    it('should return correct for tea', () => {
        const instructions = moneyGiven(orders.tea, 0.5);
        expect(instructions).toBe('accepted');
    });

    it('should return money missing for tea', () => {
        const instructions = moneyGiven(orders.tea, 0.3);
        expect(instructions).toBe(prices.teaPrice - 0.3 + 'money missing');
    });

    it('should return correct for chocolate', () => {
        const instructions = moneyGiven(orders.chocolate, 0.5);
        expect(instructions).toBe('accepted');
    });

    it('should return money missing for chocolate', () => {
        const instructions = moneyGiven(orders.chocolate, 0.4);
        expect(instructions).toBe(prices.chocolatePrice - 0.4 + 'money missing');
    });

});