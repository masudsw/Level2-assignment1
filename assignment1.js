// function formatString(input: string, toUpper?: boolean): string{
//     if (toUpper==null||toUpper==true){
//         return input.toUpperCase();
//     }
//     else return input.toLowerCase();
// }
function getMostExpensiveProduct(products) {
    var maxProduct = products[0];
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        if (product.price > maxProduct.price)
            maxProduct = product;
    }
    return maxProduct;
}
var products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }
