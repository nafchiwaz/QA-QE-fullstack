import bcrypt from 'bcrypt';




// Function to verify password
function verifyPassword(enteredPassword, hashedPassword) {
    return bcrypt.compareSync(enteredPassword, hashedPassword);
}

// Function to verify MFA code
function verifyMFA(enteredCode, correctCode) {
    return enteredCode === correctCode;
}

// Function to check sufficient balance
function checkBalance(withdrawalAmount, currentBalance) {
    return withdrawalAmount <= currentBalance;
}

// Function to check daily transaction limit
function checkDailyLimit(withdrawalAmount, dailyLimit) {
    return withdrawalAmount <= dailyLimit;
}

// Main function to process withdrawal
function processWithdrawal(enteredPassword, hashedPassword, enteredMFA, correctMFA, withdrawalAmount, currentBalance, dailyLimit) {
    if (!verifyPassword(enteredPassword, hashedPassword)) {
        return "Transaction Failed: Incorrect password.";
    }
    if (!verifyMFA(enteredMFA, correctMFA)) {
        return "Transaction Failed: MFA failed.";
    }
    if (!checkBalance(withdrawalAmount, currentBalance)) {
        return "Transaction Failed: Insufficient balance.";
    }
    if (!checkDailyLimit(withdrawalAmount, dailyLimit)) {
        return "Transaction Failed: Amount exceeds daily limit.";
    }

    // Deduct withdrawal amount from balance
    let updatedBalance = currentBalance - withdrawalAmount;
    return `Transaction Successful. New Balance: $${updatedBalance}`;
}

// Example usage:
const hashedPassword = bcrypt.hashSync("securePass123", 10); // Simulating a stored hashed password
console.log(processWithdrawal("securePass123", hashedPassword, "123456", "123456", 200, 1000, 500)); // Successful transaction
console.log(processWithdrawal("wrongPass", hashedPassword, "123456", "123456", 200, 1000, 500)); // Incorrect password
console.log(processWithdrawal("securePass123", hashedPassword, "654321", "123456", 200, 1000, 500)); // MFA failed
console.log(processWithdrawal("securePass123", hashedPassword, "123456", "123456", 1200, 1000, 500)); // Insufficient balance
console.log(processWithdrawal("securePass123", hashedPassword, "123456", "123456", 600, 1000, 500)); // Exceeds daily limit
