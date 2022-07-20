// const data = require("../iteration4/data");
import {data} from "../iteration4/data";

function drinkMaker() {
    let total = data.map( a => a.price).reduce( (x,y) => x+y, 0);
    let coffee = eachDrink(data,'C');
    let tea = eachDrink(data,'T');
    let chocolate = eachDrink(data,'H');
    let orange = eachDrink(data,'O');

    return coffee +' coffee and ' + tea +' tea and ' + chocolate +  ' chocolate and ' + orange + ' orange with a total of '+ total;
}

function eachDrink(data,drink) {
    return data.map(a=> a.drink).filter(a=>a===drink).length;
}

module.exports = {
    drinkMaker
}