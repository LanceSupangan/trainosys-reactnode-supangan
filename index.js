const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function isValidPassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);

    return password.length >= minLength && hasUpperCase && hasLowerCase;
}

readline.question('Please enter a password: ', (password) => {
    if (isValidPassword(password)) {
        console.log('Success! Your password is valid.');
    } else {
        console.log('Error: Your password must be at least 8 characters long and contain both uppercase and lowercase letters.');
    }

    readline.close();
});