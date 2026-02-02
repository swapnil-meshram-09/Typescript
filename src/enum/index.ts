// enum

// way to declare enum

enum clothSize {
    small,
    medium,
    large
}
// console.log(clothSize);
// console.log(clothSize.large);   // default value = 2




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
    small1 = 1,
    medium2 = 4,
    large3 = 3
}

// console.log(clothSize2.medium);      // 2
// console.log(clothSize2.medium2);     // 4




enum juice {
    small,
    medium,
    large
}

function menu(juice1 :juice){
    console.log(juice1);
}
menu(juice.large)
