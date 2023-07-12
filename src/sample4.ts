const obj = {
    x: 1,
    y: 2,
    z: {
        a: 3,
        b: 4,
        c: {
            foo: 5,
            bar: 6
        }
    }
};


const { x, y, z } = obj;

console.log(x); // 1
console.log(y); //2
console.log(z); //{ a: 3, b: 4, c: { foo: 5, bar: 6 } }