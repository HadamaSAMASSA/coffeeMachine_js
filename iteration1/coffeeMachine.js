function drinkMaker(drink, sugar) {
    
    if (sugar === 0) {
        return drink + '::';
    }
    return drink + ':' + sugar + ':0';
}

module.exports = {
    drinkMaker
}  
// //     const stick = 'stick added';
// //     const sugar = 0;
// //     const articles = ['tea', 'chocolate', 'coffee', 'sugar'];
// //     const order1 = ['tea', sugar+1];
// //     const order2 = ['chocolate'];
// //     const order3 = ['coffee', sugar+2];
    
// //         if(order1) {
// //          order1.push(stick);
// //          return "T:1:0";
// //         }
// //         else if(order2) return "H ::"

// //         else if(order3) {
// //             order3.push(stick)
// //             return "C:2:0"
// //         }
// //     // for(let i = 0; i < articles.length; i++) {
// //     //     if(articles[i].includes('sugar') && articles[i].includes('tea')) {
// //     //     // sugar += 1;
// //     //     // order1.push(stick);
// //     //      return "T:1:0";
// //     //     }
// //     //     if(articles[i].includes('sugar')) {
// //     //      return stick;
// //     //     }

// //     //     // if(order[i] == 'tea' && order[i] == 'sugar') return "T:1:0";
// //     // }  

// // }
// // export function drinkMaker(drink, sugar) {

