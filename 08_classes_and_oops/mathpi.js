const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter)


// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    // Writable: false,
    enumerable: true,
})

for (const [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){

        console.log(`${key} : ${value}`);
    }
}