function formatString(input: string, toUpper?: boolean): string{
    if (toUpper==null||toUpper==true){
        return input.toUpperCase();
    }
    else return input.toLowerCase();
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const resultItems=items.filter(item=>item.rating>=4)
    return resultItems;
}

function concatenateArrays<T>(...arrays: T[][]): T[]{
    const result = ([] as T[]).concat(...arrays);
    return(result);

}



function processValue(value: string | number): number{
    if(typeof value==='string')
        return value.length;
    else
      return value*2;
}

interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null{
    let maxProduct=products[0];
    for(const product of products){
        if(product.price>maxProduct.price)
            maxProduct=product
    }
    return maxProduct;
  }


async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject(new Error("Negative number not allowed"));
        } else {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        }
    });
}


