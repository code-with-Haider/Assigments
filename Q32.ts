
// step 1 arrays
const current_users: string[] = ["Haidar Ali", "Tariq", "babar", "Ayub", "arif", "Ahmed"];

const new_users: string[] = ["asif", "zohaib", "rehman", "nouman", "ali"];


// step 2 function

function checkUserNames(current_users: string[], new_users: string[]): void 
{
 // 1st step of function
    const lowercasedCurrentUsers = current_users.map(user => user.toLowerCase());
// 2nd step of function
    for (const newUser of new_users) {
        const lowercasedNewUser = newUser.toLowerCase();
        if (lowercasedCurrentUsers.includes(lowercasedNewUser)) {
            console.log(`Username "${newUser}" is already taken. Please enter a new username.`);
        } else {
            console.log(`Username "${newUser}" is available.`);
        }
    }
}

// console.log(current_users)

// Test the function


checkUserNames(current_users, new_users);