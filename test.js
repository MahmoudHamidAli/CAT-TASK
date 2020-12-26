// task 1

function reverseString(str){
    let str2 = ""
    for(let i=0; i < str.length; i++){
        str2+=str[str.length-1-i]
    }
    return(str2)
}

// task 2

function notGate(str){
    let str2 = ""
    for(let i=0; i<str.length; i++){
        switch(str[i]){
            case "1":
                str2 += 0
                break
            case "0":
                str2 += 1
                break
            default:
                str2 += str[i]
        }
    }
    return str2
}

// task 3


var products = [
    { type: 'A', price: 5, name: 'type A 1'},
    { type: 'B', price: 7.5, name: 'type B 1'},
    { type: 'C', price: 10, name: 'type C 1'},
    { type: 'A', price: 15, name: 'type A 2'},
    { type: 'A', price: 2, name: 'type A 3'},
];

function getTotalPrice(products, type) {
    let sum = 0.0
    products.forEach(product => {
        if(product.type == type)
            sum += product.price
    })
    return sum
}