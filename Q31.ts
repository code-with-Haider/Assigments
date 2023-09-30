
let userNames: string[] = ['admin', 'Tariq', 'Haidar Ali', 'Muhammad Liyaqat', 'Muhammad Ali'];

//functional case

function greetUsers(usernames: string[]): void {
    if (usernames.length === 0) {
        console.log('We need to find some users!');
        return;
    }

    for (const username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
console.log(`For non empty username:\n`)
greetUsers(userNames);

// to make array empty we just assing an empty array to userNames
userNames = [];

console.log(`\n\n For empty username:\n`)
greetUsers(userNames);

export{};