// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return Number((valueInDollar).toFixed(2));
}

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInEuro = valueInDollar / 1.2;
    //return the dollar value
    return Number((valueInEuro *127.9).toFixed(2));
}

const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInEuro = valueInYen / 127.9;
    //return the dollar value
    return Number((valueInEuro * 0.8).toFixed(2));
}


// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };