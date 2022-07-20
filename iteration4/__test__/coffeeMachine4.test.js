// const drinkMaker = require("../coffeeMachine4");
// const data = require("../data");
import {drinkMaker} from "../coffeeMachine4";
import {data} from "../data";

describe("Making money", () => {
    test("Should print a report, how many of each drink was sold and the total amount of money earned.", () => {
        const instructions = drinkMaker(data);
        expect(instructions).toBe('4 coffee and 0 tea and 1 chocolate and 7 orange with a total of 5.699999999999999');
    });
});