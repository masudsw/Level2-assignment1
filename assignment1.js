// function formatString(input: string, toUpper?: boolean): string{
//     if (toUpper==null||toUpper==true){
//         return input.toUpperCase();
//     }
//     else return input.toLowerCase();
// }
// function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
//     const resultItems=items.filter(item=>item.rating>=4)
//     return resultItems;
// }
// function concatenateArrays<T>(...arrays: T[][]): T[]{
//     const result = ([] as T[]).concat(...arrays);
//     return(result);
// }
// 
// function processValue(value: string | number): number{
//     if(typeof value==='string')
//         return value.length;
//     else
//       return value*2;
// }
// interface Product {
//     name: string;
//     price: number;
//   }
//   function getMostExpensiveProduct(products: Product[]): Product | null{
//     let maxProduct=products[0];
//     for(const product of products){
//         if(product.price>maxProduct.price)
//             maxProduct=product
//     }
//     return maxProduct;
//   }
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day == 5 || day == 6)
        return ("Weekend");
    else
        return ("Weekday");
}
console.log(getDayType(Day.Monday)); // Output: "Weekday"
console.log(getDayType(Day.Sunday)); // Output: "Weekend"
