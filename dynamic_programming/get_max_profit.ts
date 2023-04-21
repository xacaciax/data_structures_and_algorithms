
// 1 [ 0, 0, 0, 0, 0 ] price 1 +  table[ 1 - 0 -1] 0 = 1
// 2 [ 0, 1, 0, 0, 0 ] price 1 +  table[ 2 - 0 -1] 1 = 2
// 3 [ 0, 1, 2, 0, 0 ] price 1 +  table[ 3 - 0 -1] 2 = 3
// 4 [ 0, 1, 2, 3, 0 ] price 1 +  table[ 4 - 0 -1] 3 = 4

// 2 [ 0, 1, 2, 3, 4 ] price 5 +  table[ 2 - 1 -1] 0 = 5 
// 3 [ 0, 1, 5, 3, 4 ] price 5 +  table[ 3 - 1 -1] 1 = 6
// 4 [ 0, 1, 5, 6, 4 ] price 5 +  table[ 4 - 1 -1] 5 = 10

// 3 [ 0, 1, 5, 6, 10 ] price 8 +  table[ 3 - 2 -1] 0 = 8
// 4 [ 0, 1, 5, 8, 10 ] price 8 +  table[ 4 - 2 -1] 1 = 9

// 4 [ 0, 1, 5, 8, 10 ] price 9 +  table[ 4 - 3 -1] 0 = 9
 
function getMaxProfit(price: Array<number>): number {
    let n = price.length 
    let table = Array(n + 1).fill(0);
    table[0] = 0;

    // for each price option
    for (let p = 0; p < price.length; p++) {
        // iterate through the table
        for (let i = p + 1; i < table.length; i++) {
            // table[i] is the current value in the table
            // price[p] is the current price
            // table[i - p - 1] is the total possible profit for the remaining rod length after subtracting current length p
            console.log(i, table, 'price', price[p], '+ ', 'table[', i, '-', p, '-1]', table[i - p - 1], '=',price[p] + table[i - p - 1] )
            table[i] = Math.max(table[i], price[p] + table[i - p - 1])
        }
    }
    
    return table[price.length];
}


getMaxProfit([1, 5, 8, 9]);