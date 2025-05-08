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
function processValue(value) {
    if (typeof value === 'string')
        return value.length;
    else
        return value * 2;
}
console.log(processValue("hello")); // Output: 5
console.log(processValue(10)); // Output: 20
