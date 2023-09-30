

let guestList: Array<string> = [
    "Abdul Rehman",
    "Ibrahim",
    "Tariq",
];

// Exercise 16 Solution

//Step 1 informing people that you found a bigger dinner table.
for (let guest of guestList) {
    console.log(`Hello, ${guest}, we found a bigger dinner table.`)
}

// step 2 Add a new guest to the beginning of Array.
let newGuestAtBeginnibg: string = "Nouman" 
guestList.unshift(newGuestAtBeginnibg)

// console.log(guestList)

// 3rd step add one guest to the middle of array
let newGuestInMiddle: string = "Aftab"
let middleIndex: number = Math.floor(guestList.length/2)
guestList.splice(middleIndex, 0, newGuestInMiddle)

// console.log(guestList)

// 4th step use append() to add new guest to the end of your list

let newGuestAtEnd: string = "Muhammad Liyaq"
guestList.push(newGuestAtEnd)

// console.log(guestList)

// Final Step Print a new set of invitation messages

console.log("New set of invitation messages:")

for(let guest of guestList) 
{
    console.log(`Dear ${guest}, you are invited to dinner`)
}

export{};6