import {orders} from "./orders";

function drinkMaker(drink, sugar, temperature) {
    let extraHot;
    if (drink === orders.orange) return orders.orange + '::';

    if (temperature === true) extraHot ='h'; else extraHot = '';

    if (sugar === 0) {
        return drink + extraHot + '::';
    }
    return drink + extraHot + ':' + sugar + ':0';
}

module.exports = {
    drinkMaker
}