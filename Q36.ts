

const make_shirt = (size: string, message: string):void =>

{

    console.log(`Size: ${size}, Message: '${message}'`);
    
}

// 2 ways to Call the function

// 1. call the function with the size and the message variables.
let size: string = "medium";
let message: string = "Hello Pakistan"

make_shirt(size, message);

// 2. directly call the function

make_shirt("Large", "Pakistan Zindabad");