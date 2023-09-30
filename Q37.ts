

function makeShirt(size: string = "Large", message: string = "I love coding"): void
{
   return console.log(`Size: ${size}, Message: '${message}'`);
}

// Large shirt with default message
makeShirt(); // Output: Size: Large, Message: 'I love coding'

// Medium shirt with default message
makeShirt("Medium"); // Output: Size: Medium, Message: 'I love coding'

// Custom shirt with a different message and size
makeShirt("Small", "Clean code always looks like it was written by someone who cares."); // Output: Size: Small, Message: 'Please Subscribe TypeScript insigts'

