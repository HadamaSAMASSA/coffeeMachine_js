import {prices} from "./prices";
import {orders} from "./orders";
import {drinkMaker} from "./coffeeMachine3";

function moneyGiven(drink, money , sugar, temperature) {

    if ((drink === orders.coffee && money >= prices.coffeePrice) ||
        (drink === orders.tea && money >= prices.teaPrice) ||
        (drink === orders.chocolate && money >= prices.chocolatePrice) ||
        (drink === orders.orange && money >= prices.orangePrice)) 
        return drinkMaker(drink, sugar, temperature);
    
    if (drink === orders.coffee) return prices.coffeePrice - money + 'money missing';
    if (drink === orders.tea) return prices.teaPrice - money + 'money missing';
    if (drink === orders.chocolate) return prices.chocolatePrice - money + 'money missing';
    if (drink === orders.orange) return prices.orangePrice - money + 'money missing';
}

module.exports = {
    moneyGiven
}