
let guestList: Array<string> = [
    'Abdul Rehman',
    'Ibrahim',
    'Tariq',
    'Aftab',
    'Nouman',
    'Muhammad Liyaq'
  ]

  // message about invitng only two people.

  console.log(`I can invite only two people for dinner.`)

  // 2nd step remove guest from th list untill only two name rmain.

  while(guestList.length > 2)
  {
    let removeGuest = guestList.pop()
    console.log(`Sorry, ${removeGuest}, I can't invite you to dinner.`);
  }

  // Part 3 - Print a message to each of the two people still on your list, letting them know they’re still invited.

  for(let guest of guestList) {
    console.log(`Hello, ${guest}, you are still invited to dinner!`)
  }
 console.log(`\nList of invited guests:\n\n ${guestList}\n`)
// 4th part: Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// Removing last two
guestList.pop()
guestList.pop()
// prnint empty string
console.log(`Guest list after dinner:`, guestList)

export{};