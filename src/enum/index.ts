// enum

// way to declare enum

enum clothSize {
    small,
    medium,
    large
}
console.log(clothSize);
console.log(clothSize.large);


enum clothSize2 {
    // small = 0,
    // medium = 1,
    // large = 2
                    // auto increment values
    small = 1,
    medium = 2,
    large = 3
}
// console.log(clothSize2);



// no error for enum variable but give error for duplicate identifiers.

enum clothSize2 {
    // small = 0,
    // medium = 1,
    // large = 2
                    // auto increment values
    small1 = 1,
    medium2 = 2,
    large3 = 3
}

console.log(clothSize2);
