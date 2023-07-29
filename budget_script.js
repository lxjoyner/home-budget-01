// Data storage for income and expenses
let incomeItems = [];
let expenseItems = [];

// Function to add income
function addIncome(e) {
    e.preventDefault();
    const description = document.getElementById('income-description').value;
    const amount = parseFloat(document.getElementById('income-amount').value);

    if (description && amount) {
        incomeItems.push({ description, amount });
        updateIncomeList();
        updateSummary();
        document.getElementById('income-form').reset();
    }
}

// Function to add expense
function addExpense(e) {
    e.preventDefault();
    const description = document.getElementById('expense-description').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (description && amount) {
        expenseItems.push({ description, amount });
        updateExpenseList();
        updateSummary();
        document.getElementById('expense-form').reset();
    }
}

// Function to update the income list
function updateIncomeList() {
    const incomeList = document.getElementById('income-list');
    incomeList.innerHTML = '';

    incomeItems.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.description}: $${item.amount.toFixed(2)}`;
        incomeList.appendChild(li);
    });
}

// Function to update the expense list
function updateExpenseList() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    expenseItems.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.description}: $${item.amount.toFixed(2)}`;
        expenseList.appendChild(li);
    });
}

// Function to update the summary
function updateSummary() {
    const totalIncome = incomeItems.reduce((total, item) => total + item.amount, 0);
    const totalExpenses = expenseItems.reduce((total, item) => total + item.amount, 0);
    const balance = totalIncome - totalExpenses;

    document.getElementById('total-income').textContent = totalIncome.toFixed(2);
    document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
    document.getElementById('balance').textContent = balance.toFixed(2);
}

// Event listeners
document.getElementById('income-form').addEventListener('submit', addIncome);
document.getElementById('expense-form').addEventListener('submit', addExpense);
