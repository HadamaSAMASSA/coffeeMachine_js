import {prices} from "./prices";
import {orders} from "./orders";

function moneyGiven(drink, money) {

    if ((drink === orders.coffee && money >= prices.coffeePrice) ||
        (drink === orders.tea && money >= prices.teaPrice) ||
        (drink === orders.chocolate && money >= prices.chocolatePrice)) 
        return 'accepted';
    
    if (drink === orders.coffee) return prices.coffeePrice - money + 'money missing';
    if (drink === orders.tea) return prices.teaPrice - money + 'money missing';
    if (drink === orders.chocolate) return prices.chocolatePrice - money + 'money missing';

}

module.exports = {
    moneyGiven
}